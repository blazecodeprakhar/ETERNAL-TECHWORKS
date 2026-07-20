$parentPath = "c:\Users\prakh\OneDrive\Desktop\WEB"
if (Test-Path $parentPath) {
    Write-Output "Searching fast in $parentPath (excluding node_modules and .git)..."
    $files = Get-ChildItem -Path $parentPath -Recurse -Force -ErrorAction SilentlyContinue | Where-Object {
        $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.git*"
    }
    foreach ($f in $files) {
        if ($f.Name -like "*logo*" -or $f.Name -like "*eternal*" -or $f.Name -like "*brochure*" -or $f.Name -like "*WhatsApp*") {
            Write-Output ($f.FullName + " | " + $f.Length + " bytes")
        }
    }
} else {
    Write-Output "Parent path not found."
}
