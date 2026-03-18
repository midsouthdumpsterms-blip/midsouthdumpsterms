'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';
import { FaRobot, FaPaperPlane, FaTimes, FaCommentAlt } from 'react-icons/fa';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

/* ─────────────────────────────────────────────
   KNOWLEDGE BASE — expanded from 23 → 40+ entries
   Each entry has:
     keywords  – single words OR multi-word phrases
     priority  – higher = matched first on tie-break
     answer    – markdown-friendly response text
   ───────────────────────────────────────────── */

interface KBEntry {
    keywords: string[];
    priority: number;
    answer: string;
    followUp?: string[];
}

const BOOKING_CTA = "\n\nReady to book? Call us at **601-316-7891** or [book online here](https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF).";

const KNOWLEDGE_BASE: KBEntry[] = [
    // ══════════════════════════════════════════
    // GREETINGS & CASUAL
    // ══════════════════════════════════════════
    {
        keywords: ['hello', 'hey', 'hi', 'good morning', 'good afternoon', 'good evening', 'howdy', 'sup', 'whats up', 'yo'],
        priority: 1,
        answer: "Hey there! 👋 Welcome to Mid South Dumpster Rentals. I can help with pricing, sizing, scheduling, and more. What can I help you with today?",
        followUp: ["What sizes do you offer?", "How much does it cost?", "Book Now"]
    },
    {
        keywords: ['thank', 'thanks', 'appreciate', 'awesome', 'perfect', 'great', 'cool'],
        priority: 1,
        answer: "You're welcome! 😊 Is there anything else I can help you with? If you're ready to book, just call us at **601-316-7891** or hit the Book Now button below!",
        followUp: ["Book Now", "What sizes do you offer?", "What items are prohibited?"]
    },
    {
        keywords: ['bye', 'goodbye', 'see ya', 'later', 'thats all', 'no thanks', 'im good', 'all set', 'nothing else'],
        priority: 1,
        answer: "Thanks for chatting with us! If you need anything in the future, we're here 7 days a week from 7 AM – 7 PM. Have a great day! 🙌"
    },

    // ══════════════════════════════════════════
    // PROJECT-TO-SIZE RECOMMENDER (biggest gap fixed)
    // ══════════════════════════════════════════
    {
        keywords: ['kitchen remodel', 'bathroom remodel', 'remodel', 'remodeling', 'renovation', 'renovating', 'rehab', 'flip', 'flipping'],
        priority: 8,
        answer: "For a typical kitchen or bathroom remodel, we recommend our **15-yard dumpster** (fits ~6 pickup truck loads). It handles drywall, cabinets, flooring, fixtures, and general debris with room to spare. If it's a full gut-job or multi-room renovation, step up to the **20-yard**." + BOOKING_CTA,
        followUp: ["How much is a 15-yard?", "What about weight limits?", "Book Now"]
    },
    {
        keywords: ['shed', 'deck', 'fence', 'teardown', 'tear down', 'demo', 'demolition', 'demolish', 'knock down', 'rip out', 'tearing down'],
        priority: 8,
        answer: "For a shed, deck, or fence teardown, we recommend our **20-yard dumpster** (fits ~8 pickup truck loads). Demo debris adds up fast — wood framing runs 300–700 lbs per cubic yard, so the extra volume and 3-ton weight allowance gives you plenty of room." + BOOKING_CTA,
        followUp: ["How much is a 20-yard?", "What's the weight limit?", "Book Now"]
    },
    {
        keywords: ['estate cleanout', 'whole house', 'hoarder', 'foreclosure', 'eviction', 'move out', 'full house', 'entire house'],
        priority: 8,
        answer: "For an estate or whole-house cleanout, we recommend our **20-yard dumpster** — it fits about 8 pickup truck loads of furniture, clothing, appliances, and general household items. For very large homes, you may need a second load." + BOOKING_CTA,
        followUp: ["How much is a 20-yard?", "Can I put a mattress in?", "Book Now"]
    },
    {
        keywords: ['garage cleanout', 'attic cleanout', 'closet', 'storage unit', 'small cleanout', 'spring clean', 'declutter', 'junk removal', 'clean out', 'cleaning out'],
        priority: 7,
        answer: "For a garage, attic, or storage unit cleanout, our **10-yard dumpster** (fits ~4 pickup truck loads) is usually perfect. If you've got decades of accumulated stuff, the **15-yard** gives you extra breathing room." + BOOKING_CTA,
        followUp: ["How much is a 10-yard?", "What can go in?", "Book Now"]
    },
    {
        keywords: ['roofing', 'roof', 'shingle', 'shingles', 'reroof', 're-roof'],
        priority: 9,
        answer: "For a roofing project, we recommend our **15-yard dumpster**. ⚠️ **Weight Warning:** Asphalt shingles weigh ~2,400–3,000 lbs per cubic yard when broken up. A single roofing square (3 bundles) weighs 180–240 lbs. You can fill the volume fast, but **watch the weight** — our 15-yard includes 2 tons (4,000 lbs). If you're doing a large roof, call us at **601-316-7891** so we can help estimate the load and avoid overage fees." + BOOKING_CTA,
        followUp: ["What are the overage fees?", "How much is a 15-yard?", "Book Now"]
    },
    {
        keywords: ['moving', 'downsizing', 'relocating', 'packing'],
        priority: 7,
        answer: "Moving or downsizing? Our **10-yard** handles smaller moves (4 pickup truck loads), or go with the **15-yard** if you're clearing out a lot. General household junk runs 150–800 lbs per cubic yard, so weight is rarely an issue for this type of project." + BOOKING_CTA,
        followUp: ["How much is a 10-yard?", "How much is a 15-yard?", "Book Now"]
    },
    {
        keywords: ['new construction', 'construction', 'building', 'contractor', 'commercial', 'job site', 'jobsite'],
        priority: 7,
        answer: "For new construction or commercial job sites, our **20-yard dumpster** is the go-to. It fits 8 pickup truck loads and includes 3 tons. Mixed construction debris averages 400–600 lbs per cubic yard. We also offer multi-load and recurring contractor scheduling — call **601-316-7891** to set up a project plan." + BOOKING_CTA,
        followUp: ["How much is a 20-yard?", "What's the weight limit?", "Book Now"]
    },
    {
        keywords: ['landscaping', 'yard work', 'yard project', 'sod', 'mulch'],
        priority: 7,
        answer: "For landscaping and yard work (old sod, mulch, plant material), our **10-yard dumpster** works well. Yard clippings and natural vegetation are permitted. ⚠️ If you're digging up dirt or removing stone/pavers, be aware that dirt weighs 2,000–3,000 lbs per cubic yard — call us at **601-316-7891** for a weight estimate first." + BOOKING_CTA,
        followUp: ["Can I put dirt in?", "How much is a 10-yard?", "Book Now"]
    },

    // ══════════════════════════════════════════
    // MATERIAL WEIGHT GUIDE (user-provided real data)
    // ══════════════════════════════════════════
    {
        keywords: ['concrete', 'brick', 'stone', 'asphalt', 'aggregate', 'cement', 'pavers', 'cinder block', 'block'],
        priority: 10,
        answer: "⚠️ **Heavy Material Alert!** These materials are extremely dense:\n\n• **Concrete:** 2,000–4,000+ lbs/yd³\n• **Asphalt:** 2,000–4,000+ lbs/yd³\n• **Brick:** 2,500–3,500 lbs/yd³\n\n**Pro Tip:** For heavy materials like concrete, brick, or dirt, use a **10-yard dumpster** to avoid exceeding weight limits. Even a partially filled 10-yard of solid concrete can hit 6,000 lbs. These materials **require prior approval** — call us at **601-316-7891** so we can plan your load safely."
    },
    {
        keywords: ['dirt', 'earth', 'sand', 'gravel', 'soil', 'clay', 'fill', 'topsoil'],
        priority: 10,
        answer: "⚠️ **Heavy Material Alert!** Dirt and soil are heavier than most people expect:\n\n• **Dirt/Soil:** 2,000–3,000 lbs/yd³\n• **Sand:** ~2,700 lbs/yd³\n• **Gravel:** ~2,800 lbs/yd³\n\nFilling even a 10-yard dumpster halfway with dirt could exceed 6,000 lbs! These materials **require prior approval**. Call us at **601-316-7891** and we'll help you figure out the right approach."
    },
    {
        keywords: ['how heavy', 'how much does', 'weight of', 'weigh', 'material weight', 'debris weight', 'how much weigh'],
        priority: 6,
        answer: "Here's a quick weight reference (per cubic yard):\n\n• **Concrete/Asphalt:** 2,000–4,000+ lbs\n• **Brick:** 2,500–3,500 lbs\n• **Dirt/Soil:** 2,000–3,000 lbs\n• **Roofing Shingles:** 2,400–3,000 lbs\n• **Tile (Ceramic/Stone):** 1,200–2,400 lbs\n• **Drywall:** 340–750 lbs\n• **Wood/Lumber:** ~300 lbs\n• **Mixed C&D Debris:** 400–600 lbs\n• **Household Junk:** 150–800 lbs\n• **Cardboard:** 16–50 lbs\n\n**Pro Tip:** Dense materials (concrete, brick, dirt) should go in a **smaller dumpster** to stay under weight limits. Call **601-316-7891** if you need help estimating."
    },
    {
        keywords: ['weight', 'ton', 'overage', 'limit', 'pounds', 'overweight', 'tonnage', 'weight limit'],
        priority: 6,
        answer: "**Weight limits by size:**\n\n• **10-yard:** 1 ton (2,000 lbs) included — overage at $55/ton\n• **15-yard:** 2 tons (4,000 lbs) included — overage at $55/ton\n• **20-yard:** 3 tons (6,000 lbs) included — **hard cap, no overage allowed**\n\n⚠️ **No container may exceed 6,000 lbs total.** Containers are weighed at the disposal facility and any overweight charges are automatically invoiced. Heavy materials like concrete, brick, or dirt fill up fast — call us at **601-316-7891** if you're unsure!"
    },

    // ══════════════════════════════════════════
    // PERMITTED & PROHIBITED ITEMS (from rental agreement)
    // ══════════════════════════════════════════
    {
        keywords: ['what can i put', 'what goes in', 'allowed', 'accepted', 'can i throw', 'permitted', 'what can go'],
        priority: 7,
        answer: "Here's what you **CAN** put in our dumpsters:\n\n✅ Household trash (furniture, clothing, toys, bedding)\n✅ Construction debris (lumber, drywall, PVC, shingles, insulation)\n✅ Mattresses (no extra fee!)\n✅ Stoves, ovens, washers, dryers (non-refrigerant appliances)\n✅ Carpet, hardwood/vinyl flooring\n✅ Porcelain, tile\n✅ Yard clippings & natural vegetation\n✅ Limbs & branches\n✅ Plastics, paper, cardboard\n\n⚠️ Stone, brick, or concrete require **prior approval** due to weight. Call **601-316-7891** with any questions!"
    },
    {
        keywords: ['prohibited', 'not allowed', 'cannot put', 'toxic', 'hazardous', 'paint', 'chemicals', 'oil', 'battery', 'hazardous waste', 'medical waste', 'biohazard', 'blood', 'needle', 'infection'],
        priority: 9,
        answer: "**Prohibited items include:**\n\n🚫 Hazardous waste (paint, stain, solvents, chemicals, oil, fuels, epoxy, asbestos, pesticides)\n🚫 Food waste & liquids of any kind\n🚫 Freezers, refrigerators, HVAC units (Freon appliances)\n🚫 Pressurized vessels & 5-gallon buckets\n🚫 Tires, electronics, TVs, computers\n🚫 Medical waste & biohazards\n🚫 Motor oil, gas/diesel, oil filters\n🚫 Fluorescent bulbs, railroad ties, radioactive materials\n🚫 Hot ashes, explosives, fireworks, ammunition\n\nViolation may result in a **$500 refusal fee** plus disposal/cleanup costs."
    },
    {
        keywords: ['fridge', 'refrigerator', 'freezer', 'freon', 'refrigerant', 'ac unit', 'hvac', 'air conditioner'],
        priority: 10,
        answer: "🚫 **No.** Refrigerators, freezers, HVAC units, and any appliance containing **Freon/refrigerant** are prohibited. This is an EPA regulation.\n\n✅ However, **non-refrigerant appliances** like stoves, ovens, washers, and dryers ARE accepted! If you're unsure about a specific appliance, just call us at **601-316-7891**."
    },
    {
        keywords: ['washer', 'dryer', 'stove', 'oven', 'dishwasher', 'appliance', 'appliances'],
        priority: 8,
        answer: "✅ **Yes!** Stoves, ovens, washers, dryers, and dishwashers are all accepted — basically any appliance that does **not** contain Freon/refrigerant. The only appliances we can't take are refrigerators, freezers, and HVAC units."
    },
    {
        keywords: ['tire', 'tires'],
        priority: 9,
        answer: "🚫 **No, tires are not permitted** in our dumpsters. This includes car tires, truck tires, and equipment tires. Contact your local tire shop or recycling center for proper disposal."
    },
    {
        keywords: ['mattress', 'mattresses', 'box spring'],
        priority: 8,
        answer: "✅ **Yes! We accept mattresses and box springs with ZERO additional fees.** Many other companies charge extra for mattress disposal, but with us it's included in your flat rate — no surprises."
    },
    {
        keywords: ['5 gallon', 'five gallon', 'bucket', 'buckets', '5gal', '5 gal'],
        priority: 10,
        answer: "🚫 **No, 5-gallon buckets are not permitted** in our dumpsters, even if they appear empty. They may contain residual chemicals, paints, or hazardous materials. If you have questions about a specific item, call us at **601-316-7891**."
    },
    {
        keywords: ['limb', 'limbs', 'branch', 'branches', 'brush', 'yard waste', 'vegetation', 'clipping', 'clippings', 'leaves', 'grass'],
        priority: 8,
        answer: "✅ **Yes!** Tree limbs, branches, brush, yard clippings, leaves, and natural vegetation are all accepted. Just make sure branches are cut to fit inside the container and nothing sticks above the rim."
    },
    {
        keywords: ['tree', 'pine', 'log', 'stump', 'wood', 'lumber'],
        priority: 8,
        answer: "Trees and large logs can go in our dumpsters but there are some important rules:\n\n• Logs **must be cut into 4-foot sections or smaller**\n• A large tree (100ft pine) can weigh **over 5 tons** and take up 15–20 cubic yards\n• Wood/lumber runs about **300–700 lbs per cubic yard**\n• For a large tree project, a **20-yard** is required and you may need multiple loads\n\nCall us at **601-316-7891** so we can help you estimate the load and avoid overage fees."
    },
    {
        keywords: ['drywall', 'sheetrock', 'plaster'],
        priority: 7,
        answer: "✅ **Yes, drywall and sheetrock are accepted!** Drywall weighs about 340–750 lbs per cubic yard. A typical remodel's worth of drywall fits easily in a 15-yard without coming close to weight limits."
    },
    {
        keywords: ['carpet', 'flooring', 'vinyl', 'hardwood', 'tile', 'laminate', 'underlayment'],
        priority: 7,
        answer: "✅ **Yes!** Carpet, hardwood flooring, vinyl, tile, laminate, and underlayment are all accepted. Ceramic/stone tile is heavier (1,200–2,400 lbs/yd³), so for large tile removal jobs, keep an eye on weight."
    },
    {
        keywords: ['food', 'expired', 'spoiled', 'pantry', 'grocery', 'liquid', 'liquids'],
        priority: 9,
        answer: "🚫 **No.** Food waste (expired food, spoiled items, pantry contents) and **liquids of any kind** are prohibited. These can contaminate other materials and create hazardous conditions at the disposal facility."
    },
    {
        keywords: ['tv', 'television', 'computer', 'monitor', 'electronic', 'electronics', 'e-waste'],
        priority: 9,
        answer: "🚫 **No, electronics are not permitted.** This includes TVs, computers, monitors, and other e-waste. These contain hazardous materials that require specialized recycling. Check with your local electronics recycling center or Best Buy for free drop-off options."
    },
    {
        keywords: ['explosive', 'firework', 'fireworks', 'ammunition', 'ammo', 'propane', 'gas tank', 'fuel', 'flammable'],
        priority: 10,
        answer: "🚫 **Absolutely not.** Explosives, fireworks, ammunition, propane tanks, fuel, and any flammable materials are **strictly prohibited**. These pose serious safety risks during transport and disposal. Contact your local fire department for safe disposal options."
    },
    {
        keywords: ['dead', 'deer', 'animal', 'carcass', 'manure', 'poop', 'feces'],
        priority: 10,
        answer: "🚫 **No.** Animal carcasses, manure, and animal waste are not accepted. These are classified as biohazards. Contact your local animal control or county sanitation department for proper disposal."
    },
    {
        keywords: ['hot ash', 'ash', 'burning', 'warm', 'fire', 'coals', 'embers'],
        priority: 10,
        answer: "🚫 **Never put hot ashes, coals, or embers in a dumpster.** This is a serious fire hazard. Ashes must be completely cold (at least 72 hours after last fire) and sealed in a metal container before disposal. When in doubt, do not put it in the dumpster."
    },

    // ══════════════════════════════════════════
    // PRICING
    // ══════════════════════════════════════════
    {
        keywords: ['price', 'cost', 'how much', 'rate', 'pricing', 'quote', 'estimate', 'cheap', 'affordable', 'deal'],
        priority: 6,
        answer: "**Our flat-rate pricing (delivery + pickup + disposal included):**\n\n| Size | 1-Day | 3-Day | 7-Day |\n|------|-------|-------|-------|\n| **10-yard** (4 truck loads) | $349 | $379 | $399 |\n| **15-yard** (6 truck loads) | $399 | $429 | $449 |\n| **20-yard** (8 truck loads) | $449 | $479 | $499 |\n\n**No hidden fees!** Weight overage is $55/ton for 10 & 15-yard. 20-yard has a hard 3-ton cap." + BOOKING_CTA,
        followUp: ["What size do I need?", "What's the weight limit?", "Book Now"]
    },
    {
        keywords: ['10 yard', '10-yard', '10yd', 'ten yard', 'smallest', 'small dumpster'],
        priority: 7,
        answer: "**10-Yard Dumpster** — fits about 4 pickup truck loads.\n\n• 1-Day: **$349** | 3-Day: **$379** | 7-Day: **$399**\n• Includes 1 ton (2,000 lbs) — overage at $55/ton\n• Best for: garage cleanouts, small renovations, yard debris, decluttering" + BOOKING_CTA
    },
    {
        keywords: ['15 yard', '15-yard', '15yd', 'fifteen yard', 'medium', 'most popular', 'popular'],
        priority: 7,
        answer: "**15-Yard Dumpster** ⭐ Most Popular — fits about 6 pickup truck loads.\n\n• 1-Day: **$399** | 3-Day: **$429** | 7-Day: **$449**\n• Includes 2 tons (4,000 lbs) — overage at $55/ton\n• Best for: home remodels, roofing, estate cleanouts, medium construction" + BOOKING_CTA
    },
    {
        keywords: ['20 yard', '20-yard', '20yd', 'twenty yard', 'biggest', 'big dumpster', 'largest', 'large dumpster'],
        priority: 7,
        answer: "**20-Yard Dumpster** — fits about 8 pickup truck loads.\n\n• 1-Day: **$449** | 3-Day: **$479** | 7-Day: **$499**\n• Includes 3 tons (6,000 lbs) — **hard cap, no overage allowed**\n• Best for: shed/deck teardowns, full house cleanouts, new construction, major demolition" + BOOKING_CTA
    },
    {
        keywords: ['size', 'sizes', 'dimensions', 'big', 'which size', 'what size', 'recommend', 'suggestion', 'need a dumpster'],
        priority: 5,
        answer: "We offer **three sizes:**\n\n• **10-yard** — 4 pickup truck loads (garage cleanout, small reno)\n• **15-yard** — 6 pickup truck loads ⭐ Most Popular (remodels, roofing, estate cleanouts)\n• **20-yard** — 8 pickup truck loads (demo, full house, construction)\n\nNot sure which one you need? Tell me about your project and I'll recommend the right size!",
        followUp: ["How much does it cost?", "What's the weight limit?", "Book Now"]
    },

    // ══════════════════════════════════════════
    // SERVICE AREA & OUT-OF-AREA
    // ══════════════════════════════════════════
    {
        keywords: ['jackson', 'brandon', 'clinton', 'flowood', 'pearl', 'ridgeland', 'madison', 'flora', 'florence', 'canton', 'terry', 'byram', 'richland', 'gluckstadt'],
        priority: 7,
        answer: "✅ **Yes, we serve that area!** We cover the entire tri-county region — Hinds, Madison, and Rankin counties. This includes Jackson, Brandon, Clinton, Flowood, Pearl, Ridgeland, Madison, Flora, Florence, Canton, Terry, Byram, Richland, and Gluckstadt." + BOOKING_CTA
    },
    {
        keywords: ['newton', 'vicksburg', 'meridian', 'hattiesburg', 'brookhaven', 'yazoo', 'kosciusko', 'philadelphia', 'mccomb', 'carthage', 'forest', 'crystal springs', 'hazlehurst', 'natchez', 'laurel', 'starkville', 'columbus', 'tupelo', 'oxford', 'greenville', 'greenwood', 'grenada', 'corinth', 'biloxi', 'gulfport'],
        priority: 9,
        answer: "That location is **outside our standard tri-county service area** (Hinds, Madison, and Rankin counties). However, we can deliver outside our zone for a **mileage overage fee** based on distance. Call us at **601-316-7891** and we'll give you an exact quote for delivery to your location!",
        followUp: ["What areas do you serve?", "How much does it cost?", "Call 601-316-7891"]
    },
    {
        keywords: ['area', 'where', 'serve', 'service area', 'deliver to', 'location', 'coverage', 'mississippi', 'do you come to', 'do you service'],
        priority: 5,
        answer: "We serve the **entire tri-county area** — Hinds, Madison, and Rankin counties. This includes Jackson, Brandon, Clinton, Flowood, Pearl, Ridgeland, Madison, Flora, Florence, Canton, Terry, Byram, Richland, Gluckstadt, and surrounding communities.\n\n📍 **Outside our area?** We can still deliver for a mileage overage fee. Call **601-316-7891** for a custom quote!"
    },

    // ══════════════════════════════════════════
    // OPERATIONS & SCHEDULING
    // ══════════════════════════════════════════
    {
        keywords: ['same day', 'same-day', 'today', 'asap', 'right now', 'urgent', 'emergency', 'fast', 'quick', 'rush'],
        priority: 8,
        answer: "✅ We offer **same-day delivery** 7 days a week! Just reserve before **12:00 PM (noon)** to secure your same-day spot. Call us at **601-316-7891** to check today's availability."
    },
    {
        keywords: ['delivery', 'deliver', 'drop off', 'drop-off', 'when', 'schedule', 'how long', 'turnaround'],
        priority: 5,
        answer: "We deliver 7 days a week, 7 AM – 7 PM. **Same-day delivery** is available if you book before noon! We'll work with you to find the best delivery window for your schedule. Call **601-316-7891** to set up your delivery."
    },
    {
        keywords: ['hours', 'time', 'open', 'weekend', 'sunday', 'saturday', 'closed', 'business hours'],
        priority: 6,
        answer: "We're open **7:00 AM – 7:00 PM, 7 days a week** — yes, that includes Saturdays and Sundays! Call us anytime during business hours at **601-316-7891**."
    },
    {
        keywords: ['book', 'reserve', 'rent', 'order', 'schedule', 'hire', 'booking', 'reservation', 'get started', 'sign up'],
        priority: 6,
        answer: "Ready to go? You can book online instantly [right here](https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF) or call us directly at **601-316-7891**. We offer same-day delivery if you book before noon!",
        followUp: ["What sizes do you offer?", "How much does it cost?"]
    },
    {
        keywords: ['how does it work', 'process', 'how do i', 'steps', 'what happens', 'rental period', 'how long can i keep'],
        priority: 5,
        answer: "**Here's how it works:**\n\n1️⃣ **Book** — Call us or book online. Pick your size and rental period (1, 3, or 7 days).\n2️⃣ **We Deliver** — We drop the dumpster at your location (same-day available before noon!).\n3️⃣ **You Fill It** — Load it up at your own pace. Keep debris below the rim.\n4️⃣ **We Pick Up** — We haul it away and handle disposal.\n\nNeed more time? Extensions are just $50/day." + BOOKING_CTA
    },

    // ══════════════════════════════════════════
    // FEES & POLICIES
    // ══════════════════════════════════════════
    {
        keywords: ['extension', 'extra day', 'additional day', 'keep longer', 'more time', 'extend'],
        priority: 6,
        answer: "Need the dumpster longer? No problem! Extensions are **$50 per additional day**, subject to availability. Just call us before your scheduled pickup to let us know."
    },
    {
        keywords: ['missed pickup', 'blocked', 'access', 'cannot get to', 'inaccessible', 'cant get', 'truck cant'],
        priority: 7,
        answer: "If access is blocked on pickup day, a **Missed Pickup Fee of $150/day** may apply, plus additional rental day charges. Please make sure there's clear, unobstructed access to the dumpster on your scheduled pickup day!"
    },
    {
        keywords: ['overload', 'above the rim', 'overfill', 'overfilled', 'rim', 'tarp', 'too full', 'overflowing'],
        priority: 7,
        answer: "**Safety first!** No debris is allowed above the rim. The container must be tarp-ready with end doors closed and secured for safe transport. Overfilled containers may be **refused** — and a $500 refusal fee plus handling costs may apply. Distribute the load evenly to prevent tipping!"
    },
    {
        keywords: ['refund', 'cancel', 'cancellation', 'money back'],
        priority: 6,
        answer: "**Refund policy:**\n\n• Refunds must be requested **before the dumpster is delivered**\n• Once the container is dropped on-site, **no refunds** will be issued\n• Card payments: refund minus a **$40 processing fee** (takes 3–10 business days)\n• Cancellations within **24 hours of delivery** may incur dispatch/scheduling fees"
    },
    {
        keywords: ['wait time', 'delay', 'drop time', 'on-site'],
        priority: 5,
        answer: "We include a **30-minute drop time** with each delivery. If on-site delays exceed 30 minutes, wait time is billed at **$50/hour**."
    },
    {
        keywords: ['refuse', 'refusal', 'unsafe load', 'refusal fee', 'violation'],
        priority: 7,
        answer: "If a load is deemed unsafe, hazardous, or contains prohibited materials, it may be refused. The customer is responsible for correcting the load. A **Refused/Overweight Refusal Fee of $500** applies, plus any equipment, labor, handling, environmental, and disposal costs. We will never unload material onto the ground — the customer must remove unacceptable items."
    },
    {
        keywords: ['interest', 'past due', 'late', 'collection', 'overdue', 'unpaid'],
        priority: 5,
        answer: "All fees are due upon pickup, completion of service, or invoicing. Past-due balances may incur **10% interest per month**, plus any collection costs and attorney fees."
    },

    // ══════════════════════════════════════════
    // PAYMENT & BUSINESS INFO
    // ══════════════════════════════════════════
    {
        keywords: ['pay', 'payment', 'how do i pay', 'payment method', 'credit card', 'debit', 'cash', 'venmo', 'cashapp', 'cash app', 'apple pay', 'bitcoin', 'ach', 'check', 'zelle', 'visa', 'mastercard', 'amex', 'discover'],
        priority: 7,
        answer: "We accept a wide range of payment methods:\n\n💳 **Cards:** Visa, Mastercard, AMEX, Discover\n📱 **Digital:** Apple Pay, Cash App, Venmo\n🏦 **Bank:** ACH transfer, Check\n₿ **Crypto:** Bitcoin\n💵 **Cash**\n\nPayment is due upon pickup or invoicing. A valid form of payment must be provided before service begins."
    },
    {
        keywords: ['who', 'founder', 'owner', 'about', 'experience', 'company', 'family'],
        priority: 5,
        answer: "**Mid South Dumpster Rentals, LLC** is locally owned and operated by Andrew Tyre, right here in Jackson, Mississippi. With over **7 years of local real estate and development experience**, we know exactly what builders and homeowners need. We're a family business — not a franchise or a lead-gen company."
    },
    {
        keywords: ['review', 'reviews', 'rating', 'stars', 'google', 'reputation', 'trusted'],
        priority: 5,
        answer: "We're proud to have **5-star reviews on Google** from real local customers! Our reputation is built on fast delivery, transparent pricing, and treating every customer like a neighbor. Check out our reviews on [Google Maps](https://g.co/kgs/yourlink) or just ask around in the Jackson area! 😊"
    },
    {
        keywords: ['why', 'different', 'better', 'advantage', 'vs', 'versus', 'compared', 'competition', 'competitor', 'choose'],
        priority: 5,
        answer: "**Why Mid South Dumpster Rentals?**\n\n🏠 **Locally owned** — not a franchise or lead-gen middleman\n⚡ **Same-day delivery** — book before noon, get it today\n💰 **Transparent pricing** — flat-rate, no hidden fees\n📅 **7 days a week** — including weekends\n🛏️ **Free mattress disposal** — most competitors charge extra\n📱 **Flexible payments** — cards, Apple Pay, Venmo, Cash App, Bitcoin, and more\n⭐ **5-star Google reviews** — trusted by your neighbors"
    },
    {
        keywords: ['bagster', 'wm', 'bag', 'waste management'],
        priority: 7,
        answer: "A Bagster only holds **3 cubic yards** and can cost $200+ after pickup fees. Our **10-yard dumpster** holds **over 3x the waste** for a similar total price, plus: easier loading (no lifting over the sides), we handle delivery AND pickup, and you get a real container that can handle heavy materials."
    },

    // ══════════════════════════════════════════
    // PLACEMENT, PERMITS, LIABILITY
    // ══════════════════════════════════════════
    {
        keywords: ['driveway', 'surface', 'protect', 'crack', 'damage', 'scratch', 'yard', 'lawn'],
        priority: 6,
        answer: "We place **protective wooden boards** under the dumpster wheels to protect your driveway or surface. However, per our rental agreement, the customer assumes liability for any surface, lawn, utility, or structural damage unless caused by Company negligence. Please ensure the placement area is stable and level!"
    },
    {
        keywords: ['placement', 'where to put', 'power line', 'overhead', 'wire', 'clearance', 'height', 'low branch', 'obstructed'],
        priority: 7,
        answer: "**Placement requirements:**\n\n• Must be on a **legal, stable surface** with clear access\n• Need at least **22 feet of overhead clearance** — free of power lines, low branches, or structures\n• Customer is responsible for ensuring the area is clear of all obstructions\n\n⚠️ If placement is blocked or unsafe, we may need to reschedule, which could incur additional fees."
    },
    {
        keywords: ['permit', 'street', 'public', 'municipal', 'right of way', 'road', 'sidewalk', 'curb'],
        priority: 6,
        answer: "If the dumpster needs to be placed in a **public area** (street, right-of-way, or sidewalk), you're responsible for obtaining and paying for any required municipal permits. Most residential driveways don't require a permit. If you're unsure, check with your city or county office."
    },
    {
        keywords: ['liability', 'damage', 'pipe', 'structure', 'utility', 'indemnify', 'insurance', 'liable'],
        priority: 5,
        answer: "Per our rental agreement, the customer assumes all liability for damage to surfaces, lawns, utilities, or structures unless caused by Company negligence. Our liability is limited to the rental fees paid. We take precautions (like protective boards), but we recommend checking for underground utilities before placement."
    },
    {
        keywords: ['agreement', 'contract', 'terms', 'conditions', 'legal', 'law', 'dispute', 'governing', 'sign'],
        priority: 4,
        answer: "Our rental agreement is governed by the laws of the **State of Mississippi**, and disputes are resolved in Mississippi courts. A signed agreement and valid ID are required before service. Want to review the full terms? Give us a call at **601-316-7891** and we'll walk you through everything."
    },

    // ══════════════════════════════════════════
    // MISC
    // ══════════════════════════════════════════
    {
        keywords: ['phone', 'call', 'contact', 'reach', 'number', 'talk to someone', 'speak', 'human'],
        priority: 6,
        answer: "You can reach us at **601-316-7891** — we're available 7 AM – 7 PM, 7 days a week. We're real people, not a call center! 📞"
    },
    {
        keywords: ['address', 'office', 'physical', 'visit'],
        priority: 5,
        answer: "Our business address is **3080 B John R Lynch St, Jackson, MS 39209**. Give us a call at **601-316-7891** before stopping by!"
    },
    {
        keywords: ['manual handling', 'unloading', 'labor'],
        priority: 5,
        answer: "If we're required to manually empty or handle material — due to overfill, compacted debris, prohibited items, or unsafe dumping conditions — the customer is responsible for all associated labor, equipment, and handling costs."
    }
];

/* ─────────────────────────────────────────────
   MATCHING ENGINE — upgraded with stemming,
   phrase matching, and synonym expansion
   ───────────────────────────────────────────── */

const STEM_MAP: Record<string, string> = {
    'remodeling': 'remodel', 'remodels': 'remodel', 'renovating': 'renovation', 'renovations': 'renovation',
    'tearing': 'tear', 'tears': 'tear', 'demolishing': 'demolish', 'demolished': 'demolish',
    'cleaning': 'clean', 'cleaned': 'clean', 'cleans': 'clean',
    'paying': 'pay', 'pays': 'pay', 'paid': 'pay', 'payments': 'payment',
    'booking': 'book', 'booked': 'book', 'books': 'book',
    'delivering': 'deliver', 'delivered': 'deliver', 'delivers': 'deliver', 'deliveries': 'delivery',
    'renting': 'rent', 'rented': 'rent', 'rents': 'rent', 'rentals': 'rental',
    'pricing': 'price', 'prices': 'price', 'priced': 'price',
    'serving': 'serve', 'served': 'serve', 'serves': 'serve', 'services': 'service',
    'scheduling': 'schedule', 'scheduled': 'schedule', 'schedules': 'schedule',
    'extending': 'extend', 'extended': 'extend', 'extends': 'extend', 'extensions': 'extension',
    'cancelling': 'cancel', 'cancelled': 'cancel', 'cancels': 'cancel',
    'dumspter': 'dumpster', 'dumpsters': 'dumpster',
    'putting': 'put', 'puts': 'put',
    'throwing': 'throw', 'threw': 'throw', 'throws': 'throw',
};

const normalize = (input: string): string => {
    let text = input.toLowerCase().trim();
    // Fix common typos
    text = text.replace(/dumspter/g, 'dumpster');
    // Apply stemming
    const words = text.split(/\s+/);
    const stemmed = words.map(w => STEM_MAP[w] || w);
    return stemmed.join(' ');
};

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 0, text: "Hi! 👋 I'm your Mid South Assistant. I can help with pricing, sizing, scheduling, and more. What can I help you with today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [dynamicSuggestions, setDynamicSuggestions] = useState<string[]>([
        "What sizes do you offer?",
        "How much does it cost?",
        "What items are prohibited?",
        "Book Now"
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (text: string = inputValue) => {
        if (!text.trim()) return;

        const userMessage: Message = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Bot Logic with typing delay
        setTimeout(() => {
            const { response, followUp } = getBotResponse(text);
            const botMessage: Message = { id: Date.now() + 1, text: response, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
            if (followUp && followUp.length > 0) {
                setDynamicSuggestions(followUp);
            }
        }, 600);
    };

    const getBotResponse = (rawInput: string): { response: string; followUp?: string[] } => {
        const input = normalize(rawInput);

        let bestMatch: KBEntry | null = null;
        let highestScore = 0;

        for (const item of KNOWLEDGE_BASE) {
            let score = 0;

            for (const kw of item.keywords) {
                // Multi-word phrase matching (higher value)
                if (kw.includes(' ')) {
                    if (input.includes(kw)) {
                        score += kw.split(' ').length * 4;
                    }
                }
                // Single word matching
                else if (input.includes(kw)) {
                    score += kw.length > 5 ? 3 : 1;
                }
            }

            // Apply priority multiplier
            if (score > 0) {
                score += item.priority;
            }

            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        }

        // Return best match if score is high enough
        if (bestMatch && highestScore >= 3) {
            return { response: bestMatch.answer, followUp: bestMatch.followUp };
        }

        // Fallback: booking intent
        if (/\b(book|reserve|rent|order|schedule)\b/.test(input)) {
            return {
                response: "I can definitely help with that! You can book online instantly [right here](https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF) or call us at **601-316-7891**.",
                followUp: ["What sizes do you offer?", "How much does it cost?"]
            };
        }

        // Smart fallback with helpful suggestions
        return {
            response: "I'm not 100% sure about that one — but I can help with pricing, sizing, scheduling, what goes in the dumpster, and more! Try one of the options below, or call us directly at **601-316-7891** and we'll get you sorted out! 😊",
            followUp: ["What sizes do you offer?", "How much does it cost?", "What can go in?", "Book Now"]
        };
    };

    return (
        <div className={styles.chatContainer}>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <div className={styles.headerTitle}>
                            <h3>Mid South Assistant</h3>
                            <p>AI Powered • Online Now</p>
                        </div>
                        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                className={`${styles.message} ${msg.sender === 'bot' ? styles.botMessage : styles.userMessage}`}
                                dangerouslySetInnerHTML={{
                                    __html: msg.text
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="text-decoration: underline; color: inherit;">$1</a>')
                                        .replace(/\n/g, '<br/>')
                                }}
                            />
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.suggestions}>
                        {dynamicSuggestions.map((s, i) => (
                            <button key={i} className={styles.suggestionButton} onClick={() => handleSend(s)}>
                                {s}
                            </button>
                        ))}
                    </div>

                    <form className={styles.inputArea} onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                        <input
                            type="text"
                            placeholder="Ask a question..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className={styles.sendButton}>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}

            <button className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={24} /> : <FaCommentAlt size={24} />}
            </button>
        </div>
    );
};

export default ChatBot;
