# Google Analytics Quick Start

## ✅ Analytics is Already Integrated!

I've added Google Analytics 4 to your website with **full button click tracking** for all SurvCart booking links. You just need to get your tracking ID.

---

## 🚀 Quick Setup (5 minutes)

### 1. Get Your Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for "Mid South Dumpster Rentals"
3. Set up a Web data stream for `midsouthdumpsterms.com`
4. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### 2. Add to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `midsouthdumpsterms` project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your ID)
5. Click **Save**
6. Redeploy your site

### 3. Verify It's Working

1. Open Google Analytics → **Reports** → **Realtime**
2. Visit your website
3. You should see yourself as an active user!

---

## 📊 What Gets Tracked

### Automatic Tracking
✅ Page views  
✅ User sessions  
✅ Traffic sources  
✅ Device types  
✅ Location data  

### Custom Event Tracking (NEW!)

All booking buttons now send detailed tracking events to Google Analytics:

#### **Booking Button Clicks** 
Every "Book Now" button that links to SurvCart is tracked with:
- **Event Name**: `booking_click`
- **Event Category**: `Booking`
- **Event Label**: Specific button text (e.g., "Book 15 Yard Dumpster", "Book Now Online")
- **Page Location**: Where the button was clicked (e.g., "Homepage Hero", "Jackson Service Area CTA")

#### **Tracked Buttons Include**:
- ✅ Homepage hero "Book Now Online" button
- ✅ Homepage CTA "Book Online Now" button
- ✅ All dumpster size card buttons (10, 15, 20 yard)
- ✅ Service area page hero buttons (all 12 cities)
- ✅ Service area page CTA buttons (all 12 cities)
- ✅ Footer "Book Online" button
- ✅ About page booking button
- ✅ Contact page booking button
- ✅ Services page booking button
- ✅ FAQ page booking button
- ✅ Blog post booking buttons

---

## 📈 How to View Click Tracking Data

### Option 1: Real-Time Events
1. Go to **Reports** → **Realtime** → **Event count by Event name**
2. Click any booking button on your site
3. You'll see `booking_click` appear immediately

### Option 2: Events Report
1. Go to **Reports** → **Engagement** → **Events**
2. Look for the `booking_click` event
3. Click on it to see detailed breakdown

### Option 3: Custom Exploration (Most Detailed)
1. Go to **Explore** → Create a new exploration
2. Add dimensions:
   - **Event name**
   - **Event label** (shows which specific button)
   - **Page location** (shows where on site)
3. Add metrics:
   - **Event count**
4. This shows you exactly which buttons get clicked most!

### Example Questions You Can Answer:
- Which dumpster size gets the most booking clicks? (10, 15, or 20 yard)
- Do people book more from the homepage or service area pages?
- Which service area page drives the most bookings?
- Is the hero button or CTA button more effective?

---

## 🔧 Technical Implementation

The tracking system uses:
- **`lib/analytics.ts`**: Core tracking utility functions
- **`components/BookingButton.tsx`**: Reusable tracked button component
- **`components/DumpsterSizeCard.tsx`**: Tracks individual dumpster size selections

All tracking happens **before** the user is redirected to SurvCart, so you capture 100% of clicks even though SurvCart is a third-party platform.

---

## 📖 Full Guide

For detailed instructions, see: [google_analytics_setup.md](file:///C:/Users/atyre/.gemini/antigravity/brain/cc3bdcae-943a-45d7-b5ff-2e0522009c8a/google_analytics_setup.md)

---

**That's it!** Your analytics will start tracking as soon as you add the Measurement ID. 🎉

