Write-Output "Searching for logo-icon-wihtout-bg.png..."
$f = Get-ChildItem -Path C:\Users\prakh\ -Filter "logo-icon-wihtout-bg.png" -Recurse -ErrorAction SilentlyContinue
if ($f) {
    foreach ($item in $f) {
        Write-Output "Found: $($item.FullName)"
    }
} else {
    Write-Output "Not found."
}
