$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$updated = 0
Get-ChildItem -Path $root -Recurse -File -Filter *.html | ForEach-Object {
    $content = Get-Content -LiteralPath $_.FullName -Raw -Encoding UTF8
    $original = $content
    $content = [regex]::Replace($content, '"img"\s*:\s*NaN', '"img":""')
    $content = [regex]::Replace($content, ':\s*NaN([,\}])', ':null$1')
    if ($content -ne $original) {
        Set-Content -LiteralPath $_.FullName -Value $content -Encoding UTF8
        $updated++
    }
}
Write-Host "HTML corregidos: $updated"
Pause
