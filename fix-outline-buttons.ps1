$base = 'C:\Users\atyre\.gemini\antigravity\scratch\midsouthdumpsterms\app'
$files = Get-ChildItem -Path $base -Filter 'page.tsx' -Recurse

$skip = @('service-areas', 'blog', 'faq', 'about', 'contact', 'gallery', 'book-online')
$count = 0

foreach ($file in $files) {
    $shouldSkip = $false
    foreach ($s in $skip) {
        if ($file.FullName -like "*\$s\*") {
            $shouldSkip = $true
            break
        }
    }
    if ($shouldSkip) { continue }

    $content = Get-Content -Path $file.FullName -Raw
    $updated = $content -replace 'className="btn btn-outline btn-lg"', 'className="btn btn-outline-white btn-lg"'

    if ($content -ne $updated) {
        Set-Content -Path $file.FullName -Value $updated -NoNewline
        $count++
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host ""
Write-Host "Done. Total files updated: $count"
