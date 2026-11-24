#!/usr/bin/env bash
# ==============================================================================
# 🎨 ArtCraft Suite — One-Liner Installer for Linux & macOS
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/ipan140/Artcraft-skill-app/master/install.sh | bash
# ==============================================================================

set -euo pipefail

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo -e "${CYAN}${BOLD}"
echo "   ___          _     ____                __  _   "
echo "  / _ \  _ __  | |_  / ___|_ __  __ _    / _| | |_ "
echo " / /_\\ \| '__| | __| | |   | '__|/ _\` |  | |_  | __|"
echo "/ / _ \ \ |    | |_  | |___| |  | (_| |  |  _| | |_ "
echo "\_/   \_/_|     \__|  \____|_|   \__,_|  |_|    \__|"
echo -e "${NC}"
echo -e "${BOLD}🎨 ArtCraft Suite — AI Skills & Design Hub (One-Liner Installer)${NC}\n"

# Cek Node.js
if command -v npx >/dev/null 2>&1; then
    echo -e "${GREEN}✔ Ditemukan npx (Node.js). Menjalankan CLI interaktif resmi...${NC}\n"
    exec npx artcraft-skill init "$@"
fi

# Fallback jika npx tidak terinstal (menggunakan git clone langsung)
echo -e "${YELLOW}ℹ npx tidak ditemukan. Mengunduh skill langsung menggunakan Git...${NC}"

TARGET_DIR="${1:-./.agents/skills}"
REPO_URL="https://github.com/ipan140/Artcraft-skill-app.git"
TEMP_DIR=$(mktemp -d)

trap 'rm -rf "$TEMP_DIR"' EXIT

echo -e "Menyalin modul dari repositori resmi..."
git clone --depth 1 "$REPO_URL" "$TEMP_DIR" >/dev/null 2>&1

mkdir -p "$TARGET_DIR"

SKILLS=(
    "FigCraft" "AniCraft" "CADCraft" "CraftAnything" "DeckCraft"
    "DesignCraft" "EffectCraft" "FilmCraft" "GridCraft" "LightCraft"
    "MailCraft" "MaterialCraft" "PdfCraft" "PhotoCraft" "SolidCraft"
    "SoundCraft" "TextureCraft" "VectorCraft" "WordCraft"
)

for skill in "${SKILLS[@]}"; do
    if [ -d "$TEMP_DIR/$skill" ]; then
        cp -r "$TEMP_DIR/$skill" "$TARGET_DIR/"
        echo -e "  ${GREEN}✔${NC} Terpasang: ${BOLD}$skill${NC}"
    fi
done

echo -e "\n${GREEN}${BOLD}🎉 Seluruh 19 skill ArtCraft berhasil dipasang di: ${TARGET_DIR}${NC}\n"
