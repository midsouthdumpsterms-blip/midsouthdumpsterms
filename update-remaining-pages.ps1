# Script to update remaining pages with BookingButton component

$files = @(
    @{Path="app\about\page.tsx"; Label="Book Now"; Location="About Page CTA"},
    @{Path="app\contact\page.tsx"; Label="Book Online"; Location="Contact Page"},
    @{Path="app\services\page.tsx"; Label="Book Now"; Location="Services Page CTA"},
    @{Path="app\faq\page.tsx"; Label="Book Now"; Location="FAQ Page CTA"}
)

foreach ($file in $files) {
    $filePath = "c:\Users\atyre\.gemini\antigravity\scratch\midsouthdumpsterms\$($file.Path)"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Add import if not already present
        if ($content -notmatch 'import BookingButton') {
            # Find the last import statement and add after it
            $content = $content -replace "(import .+ from ['\`"][^'\`"]+['\`"])", "`$1`r`nimport BookingButton from '@/components/BookingButton'"
            # Remove duplicate imports if any
            $lines = $content -split "`r`n"
            $seen = @{}
            $newLines = @()
            foreach ($line in $lines) {
                if ($line -match "^import BookingButton") {
                    if (-not $seen.ContainsKey("BookingButton")) {
                        $newLines += $line
                        $seen["BookingButton"] = $true
                    }
                } else {
                    $newLines += $line
                }
            }
            $content = $newLines -join "`r`n"
        }
        
        # Replace booking links - handle multiple patterns
        $content = $content -replace '<a\s+href="https://embed\.survcart\.com/[^"]+"\s+target="_blank"\s+rel="noopener noreferrer"\s+className="btn [^"]+"\s*>\s*[^<]+\s*</a>', "<BookingButton label=`"$($file.Label)`" location=`"$($file.Location)`" />"
        $content = $content -replace '<a\s+className="btn [^"]+"\s+href="https://embed\.survcart\.com/[^"]+"\s*>\s*[^<]+\s*</a>', "<BookingButton label=`"$($file.Label)`" location=`"$($file.Location)`" />"
        
        Set-Content $filePath -Value $content -NoNewline
        Write-Host "Updated $($file.Path)" -ForegroundColor Green
    } else {
        Write-Host "File not found: $($file.Path)" -ForegroundColor Yellow
    }
}

Write-Host "`nAll remaining pages updated!" -ForegroundColor Cyan
