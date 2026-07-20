$binPath = "C:\`$Recycle.Bin\S-1-5-21-3524163170-4235118673-3530268807-1001"
if (Test-Path $binPath) {
    Write-Output "Listing contents of $binPath..."
    $files = Get-ChildItem -Path $binPath -Recurse -Force -ErrorAction SilentlyContinue
    foreach ($f in $files) {
        Write-Output ($f.FullName + " | " + $f.Length + " bytes")
    }
} else {
    Write-Output "Bin path not found."
}
