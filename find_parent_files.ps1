$parentPath = "c:\Users\prakh\OneDrive\Desktop\WEB"
if (Test-Path $parentPath) {
    Write-Output "Searching in $parentPath..."
    $files = Get-ChildItem -Path $parentPath -Filter "*logo*" -Recurse -ErrorAction SilentlyContinue
    $files += Get-ChildItem -Path $parentPath -Filter "*eternal*" -Recurse -ErrorAction SilentlyContinue
    $files += Get-ChildItem -Path $parentPath -Filter "*brochure*" -Recurse -ErrorAction SilentlyContinue
    $files += Get-ChildItem -Path $parentPath -Filter "*WhatsApp*" -Recurse -ErrorAction SilentlyContinue
    
    foreach ($f in $files) {
        Write-Output ($f.FullName + " | " + $f.Length + " bytes")
    }
} else {
    Write-Output "Parent path not found."
}
