$source = "C:\Users\atyre\.gemini\antigravity\scratch\midsouthdumpsterms"
$dest = "C:\Users\atyre\Downloads\midsouthdumpsterms-backup.zip"
$excludeDirs = @(".next", "node_modules", ".git")

if (Test-Path $dest) { Remove-Item $dest }

$files = Get-ChildItem -Path $source -Recurse -File | Where-Object {
    $fullPath = $_.FullName
    $skip = $false
    foreach ($dir in $excludeDirs) {
        if ($fullPath -like "*\$dir\*" -or $fullPath -like "*\$dir") {
            $skip = $true
            break
        }
    }
    -not $skip
}

$files | Compress-Archive -DestinationPath $dest -Update

$sizeMB = [math]::Round((Get-Item $dest).Length / 1MB, 2)
Write-Host "Done! Backup saved to: $dest"
Write-Host "File size: $sizeMB MB"
Write-Host "Files included: $($files.Count)"
