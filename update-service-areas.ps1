# Script to update all service area pages with BookingButton component
# This adds tracking to all booking links

$cities = @('brandon', 'byram', 'canton', 'clinton', 'flora', 'flowood', 'gluckstadt', 'madison', 'pearl', 'ridgeland', 'terry')

foreach ($city in $cities) {
    $cityCapitalized = (Get-Culture).TextInfo.ToTitleCase($city)
    $filePath = "c:\Users\atyre\.gemini\antigravity\scratch\midsouthdumpsterms\app\service-areas\$city\page.tsx"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Add import if not already present
        if ($content -notmatch 'import BookingButton') {
            $content = $content -replace "(import DumpsterSizeCard from '@/components/DumpsterSizeCard')", "`$1`r`nimport BookingButton from '@/components/BookingButton'"
        }
        
        # Replace hero booking link
        $content = $content -replace '<a href="https://embed\.survcart\.com/\?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">\s*Book .+ Dumpster\s*</a>', "<BookingButton label=`"Book $cityCapitalized Dumpster`" location=`"$cityCapitalized Service Area Hero`" />"
        
        # Replace CTA booking link
        $content = $content -replace '<a href="https://embed\.survcart\.com/\?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">\s*Book Now\s*</a>', "<BookingButton label=`"Book Now`" location=`"$cityCapitalized Service Area CTA`" />"
        
        Set-Content $filePath -Value $content -NoNewline
        Write-Host "Updated $city page" -ForegroundColor Green
    }
}

Write-Host "`nAll service area pages updated!" -ForegroundColor Cyan
