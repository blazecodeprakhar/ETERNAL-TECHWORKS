$binPath = "C:\`$Recycle.Bin\S-1-5-21-3524163170-4235118673-3530268807-1001"
if (Test-Path $binPath) {
    Write-Output "Searching for matching files by size in $binPath..."
    $files = Get-ChildItem -Path $binPath -Recurse -Force -ErrorAction SilentlyContinue
    foreach ($f in $files) {
        $len = $f.Length
        # Match sizes with +/- 1000 bytes tolerance
        if ($len -gt 3760000 -and $len -lt 3770000) {
            Write-Output "Found PDF brochure match: $($f.FullName) | $($len) bytes"
        }
        if ($len -gt 780000 -and $len -lt 790000) {
            Write-Output "Found logo-without-bg match: $($f.FullName) | $($len) bytes"
        }
        if ($len -gt 740000 -and $len -lt 750000) {
            Write-Output "Found logo-icon match: $($f.FullName) | $($len) bytes"
        }
        if ($len -gt 320000 -and $len -lt 325000) {
            Write-Output "Found WhatsApp image match: $($f.FullName) | $($len) bytes"
        }
        if ($len -gt 11500 -and $len -lt 12500) {
            Write-Output "Found Details markdown match: $($f.FullName) | $($len) bytes"
        }
    }
} else {
    Write-Output "Bin path not found."
}
