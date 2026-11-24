# ==============================================================================
# 🎨 ArtCraft Suite — One-Liner Installer for Windows PowerShell
# Usage:
#   irm https://raw.githubusercontent.com/ipan140/Artcraft-skill-app/master/install.ps1 | iex
# ==============================================================================

$Host.UI.RawUI.ForegroundColor = "Cyan"
Write-Host @"
   ___          _     ____                __  _   
  / _ \  _ __  | |_  / ___|_ __  __ _    / _| | |_ 
 / /_\ \| '__| | __| | |   | '__|/ _` |  | |_  | __|
/ / _ \ \ |    | |_  | |___| |  | (_| |  |  _| | |_ 
\_/   \_/_|     \__|  \____|_|   \__,_|  |_|    \__|

"@
$Host.UI.RawUI.ForegroundColor = "White"
Write-Host "🎨 ArtCraft Suite — AI Skills & Design Hub (Windows Installer)`n"

# Cek npx / npm
if (Get-Command npx.cmd -ErrorAction SilentlyContinue) {
    Write-Host "✔ Ditemukan npx. Menjalankan CLI interaktif resmi..." -ForegroundColor Green
    & npx.cmd artcraft-skill init $args
    exit $LASTEXITCODE
}

# Fallback Git
Write-Host "ℹ npx tidak ditemukan. Mengunduh skill langsung menggunakan Git..." -ForegroundColor Yellow
$TargetDir = if ($args[0]) { $args[0] } else { "./.agents/skills" }
$RepoUrl = "https://github.com/ipan140/Artcraft-skill-app.git"
$TempDir = Join-Path ([System.IO.Path]::GetTempPath()) "artcraft_install_temp"

if (Test-Path $TempDir) { Remove-Item -Recurse -Force $TempDir }
git clone --depth 1 $RepoUrl $TempDir | Out-Null

if (-not (Test-Path $TargetDir)) { New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null }

$Skills = @(
    "FigCraft", "AniCraft", "CADCraft", "CraftAnything", "DeckCraft",
    "DesignCraft", "EffectCraft", "FilmCraft", "GridCraft", "LightCraft",
    "MailCraft", "MaterialCraft", "PdfCraft", "PhotoCraft", "SolidCraft",
    "SoundCraft", "TextureCraft", "VectorCraft", "WordCraft"
)

foreach ($skill in $Skills) {
    $src = Join-Path $TempDir (Join-Path "skills" $skill)
    if (-not (Test-Path $src)) {
        $src = Join-Path $TempDir $skill
    }
    if (Test-Path $src) {
        Copy-Item -Recurse -Force $src $TargetDir
        Write-Host "  ✔ Terpasang: $skill" -ForegroundColor Green
    }
}

Remove-Item -Recurse -Force $TempDir
Write-Host "`n🎉 Seluruh 19 skill ArtCraft berhasil dipasang di: $TargetDir`n" -ForegroundColor Green
