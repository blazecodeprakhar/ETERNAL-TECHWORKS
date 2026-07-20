$sh = New-Object -ComObject Shell.Application
$bin = $sh.Namespace(0xa)
Write-Output "Recycle Bin Items:"
foreach ($item in $bin.Items()) {
    # Get original path (usually col index 1 or 2 or 3 depending on OS locale, we'll check multiple columns)
    $origPath = ""
    for ($i = 0; $i -lt 10; $i++) {
        $val = $bin.GetDetailsOf($item, $i)
        if ($val -like "*eternal*" -or $val -like "*techworks*") {
            $origPath = $val
            break
        }
    }
    # If the name or path contains logo, eternal, puf, or brochure
    if ($item.Name -like "*logo*" -or $item.Name -like "*eternal*" -or $item.Name -like "*brochure*" -or $item.Name -like "*puf*" -or $origPath -ne "") {
        Write-Output "Found: Name=$($item.Name) | TempPath=$($item.Path) | MatchInfo=$origPath"
    }
}
