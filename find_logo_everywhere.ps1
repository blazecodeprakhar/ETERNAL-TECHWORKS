$searchPaths = @("C:\Users\prakh\OneDrive", "C:\Users\prakh\Desktop")
Write-Output "Searching everywhere for eternal techworks assets..."
foreach ($p in $searchPaths) {
    if (Test-Path $p) {
        Write-Output "Searching in $p..."
        $files = Get-ChildItem -Path $p -Recurse -Force -ErrorAction SilentlyContinue | Where-Object {
            $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.git*"
        }
        foreach ($f in $files) {
            if ($f.Name -like "*logo-icon*" -or $f.Name -like "*WhatsApp Image 2026-07-20*" -or $f.Name -like "*Eternal techworks brochure*") {
                Write-Output "$($f.FullName) | $($f.Length) bytes"
            }
        }
    }
}
