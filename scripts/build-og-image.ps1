# Builds public/images/og-image.jpg as a real 1200x630 JPEG.
#
# The old file was a 640x640 PNG carrying a .jpg extension. The server declared
# it Content-Type: image/jpeg and sent X-Content-Type-Options: nosniff, so
# strict scrapers refused it outright, and the ones that did render it cropped
# the square into a small thumbnail instead of the large link card. Every share
# of every page on the site was affected by that one file.
#
# The square brand card cannot simply be resized -- the phone number and URL
# sit at the bottom and get cropped by a 1.91:1 frame. This re-lays the same
# elements horizontally instead: artwork right, wordmark and contact left.

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$srcPath = Join-Path $root "public\images\brand-card-square.png"
$outPath = Join-Path $root "public\images\og-image.jpg"

$src = [System.Drawing.Image]::FromFile($srcPath)
$srcBmp = New-Object System.Drawing.Bitmap $src

$W = 1200
$H = 630
$canvas = New-Object System.Drawing.Bitmap $W, $H
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Brand palette sampled from the source card.
$cyan   = [System.Drawing.Color]::FromArgb(15, 172, 206)
$yellow = [System.Drawing.Color]::FromArgb(226, 189, 63)
$ink    = [System.Drawing.Color]::FromArgb(17, 17, 17)

$g.FillRectangle((New-Object System.Drawing.SolidBrush $cyan), 0, 0, $W, $H)

# --- artwork: the dumpster illustration, cropped out of the square card ---
$dumpRect = New-Object System.Drawing.Rectangle 145, 275, 620, 370
$dumpDest = New-Object System.Drawing.Rectangle 612, 214, 548, 327
$g.DrawImage($srcBmp, $dumpDest, $dumpRect, [System.Drawing.GraphicsUnit]::Pixel)

# --- the roundel, top right ---
# Crop generously around the roundel: clipping it tight leaves a white sliver
# of the outer ring against the cyan.
$logoRect = New-Object System.Drawing.Rectangle 620, 22, 268, 268
$logoDest = New-Object System.Drawing.Rectangle 998, 30, 168, 168
$g.DrawImage($srcBmp, $logoDest, $logoRect, [System.Drawing.GraphicsUnit]::Pixel)

# --- text block, left ---
$inkBrush = New-Object System.Drawing.SolidBrush $ink
$fMain  = New-Object System.Drawing.Font "Arial", 60, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$fSub   = New-Object System.Drawing.Font "Arial", 40, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$fPhone = New-Object System.Drawing.Font "Arial", 52, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$fCity  = New-Object System.Drawing.Font "Arial", 30, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$fUrl   = New-Object System.Drawing.Font "Arial", 27, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)

$g.DrawString("Mid South",              $fMain,  $inkBrush, 58, 92)
$g.DrawString("Dumpster Rentals",       $fSub,   $inkBrush, 61, 166)
$g.DrawString("601-316-7891",           $fPhone, $inkBrush, 58, 292)
$g.DrawString("Jackson, MS",            $fCity,  $inkBrush, 61, 366)
$g.DrawString("midsouthdumpsterms.com", $fUrl,   $inkBrush, 61, 494)

# --- yellow band along the bottom, echoing the swoosh on the square card ---
$g.FillRectangle((New-Object System.Drawing.SolidBrush $yellow), 0, 596, $W, 34)

# --- encode as a genuine JPEG ---
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 88
if (Test-Path $outPath) { Remove-Item $outPath -Force }
$canvas.Save($outPath, $codec, $params)

$g.Dispose(); $canvas.Dispose(); $srcBmp.Dispose(); $src.Dispose()

$info = Get-Item $outPath
Write-Output ("wrote {0} ({1:N0} bytes)" -f $info.Name, $info.Length)
