Remove-Item -Path "c:\Users\caioh\Desktop\Projetos vscode\MotomaniacgSITE\motomaniacg\detalhes-jet-150.html" -Force -ErrorAction SilentlyContinue

function Update-Image {
    param($File, $NewImage)
    $path = "c:\Users\caioh\Desktop\Projetos vscode\MotomaniacgSITE\motomaniacg\$File"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        $content = $content -replace 'src="assets/.*?(\.jpeg|\.png|\.webp|)"', "src=`"assets/$NewImage`""
        $content = $content -replace 'src=""', "src=`"assets/$NewImage`""
        Set-Content -Path $path -Value $content -Encoding UTF8
    }
}

Update-Image "detalhes-duact-maxus.html" "Manux Duact.webp"
Update-Image "detalhes-sudu-a3t.html" "Sudu A3T.webp"
Update-Image "detalhes-duos-rider.html" "Duos Rider.webp"
Update-Image "detalhes-duos-eko10.html" "Duos Eko-10.webp"
Update-Image "detalhes-duos-fenix.html" "Duos Fenix.png"
Update-Image "detalhes-sudu-a2plus.html" "Sudu A2+.webp"
