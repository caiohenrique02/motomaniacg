$files = Get-ChildItem -Path "c:\Users\caioh\Desktop\Projetos vscode\MotomaniacgSITE\motomaniacg\detalhes-*.html"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # CSS
    $content = $content -replace "rgba\(13, 43, 110, 0.92\)", "rgba(255, 255, 255, 0.92)"
    $content = $content -replace "linear-gradient\(135deg, #0d2b6e 0%, #102d80 40%, #0a1e55 100%\)", "linear-gradient(135deg, #ffffff 0%, #f4f6fb 100%)"
    $content = $content -replace "rgba\(255,255,255,0.8\)", "#475569"
    $content = $content -replace "\.nav-link:hover \{ color: #fff; \}", ".nav-link:hover { color: #0d2b6e; }"
    
    # HTML Header
    $content = $content -replace 'border-white/10"', 'border-slate-200"'
    $content = $content -replace 'text-white text-lg font-black', 'text-brand-blue text-lg font-black'
    
    # Hero/Finance section
    $content = $content -replace 'hero-bg rounded-3xl p-8 md:p-12 text-white', 'hero-bg rounded-3xl p-8 md:p-12 text-slate-600'
    $content = $content -replace 'text-3xl font-black mb-4 leading-tight', 'text-3xl font-black mb-4 leading-tight text-brand-blue'
    $content = $content -replace 'text-blue-200 mb-6 text-lg', 'text-slate-600 mb-6 text-lg'
    $content = $content -replace 'bg-white/5 border border-white/10 p-8', 'bg-white border border-slate-200 p-8 shadow-xl'
    $content = $content -replace 'text-blue-300 uppercase text-xs', 'text-slate-400 uppercase text-xs'
    $content = $content -replace 'text-sm text-blue-300 mb-6', 'text-sm text-slate-400 mb-6'

    # CTA Final
    $content = $content -replace 'bg-brand-blue py-16', 'bg-brand-light border-y border-slate-100 py-16'
    $content = $content -replace '<h2 class="text-3xl font-black text-white mb-4">', '<h2 class="text-3xl font-black text-brand-blue mb-4">'
    $content = $content -replace '<p class="text-blue-200 mb-8 text-lg">', '<p class="text-slate-600 mb-8 text-lg">'
    $content = $content -replace 'border-2 border-white/20 hover:border-brand-orange text-white', 'border-2 border-brand-blue/20 hover:border-brand-orange text-brand-blue'

    # Footer
    $content = $content -replace 'bg-slate-950 text-slate-400 py-10', 'bg-white border-t border-slate-100 text-slate-600 py-10'
    $content = $content -replace 'border-b border-slate-800', 'border-b border-slate-200'
    $content = $content -replace 'text-white font-black text-lg uppercase', 'text-brand-blue font-black text-lg uppercase'
    $content = $content -replace 'text-xs text-slate-600', 'text-xs text-slate-500'

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
