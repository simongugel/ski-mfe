#!/bin/sh
# Erzeugt alle App-Icons aus dem J+S-Logo.
#   Quelle:  logo/js-logo.png oder logo/JS_d_f_RGB-768x783.webp
#   Ziel:    $1 (Standard: out)
# Fehlt das Logo, entsteht ein neutraler Platzhalter "J+S", damit der Build nie scheitert.
set -eu

SRC="${LOGO:-logo/js-logo.png}"
OUT="${1:-out}"
mkdir -p "$OUT"

if [ -z "${LOGO:-}" ] && [ ! -f "$SRC" ] && [ -f logo/JS_d_f_RGB-768x783.webp ]; then
  SRC="logo/JS_d_f_RGB-768x783.webp"
fi

if command -v magick >/dev/null 2>&1; then IM="magick"; else IM="convert"; fi

if [ ! -f "$SRC" ]; then
  echo "WARNUNG: $SRC nicht gefunden – es wird ein Platzhalter-Icon erzeugt." >&2
  FONT="$(ls /usr/share/fonts/dejavu/DejaVuSans-Bold.ttf /usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf 2>/dev/null | head -n1 || true)"
  if [ -n "$FONT" ]; then
    $IM -size 1024x1024 xc:'#3A4195' -fill white -font "$FONT" -gravity center -pointsize 420 -annotate 0 'J+S' "$OUT/_src.png"
  else
    $IM -size 1024x1024 xc:'#3A4195' -fill white -gravity center -pointsize 420 -annotate 0 'J+S' "$OUT/_src.png"
  fi
  SRC="$OUT/_src.png"
fi

# Transparenten Rand entfernen, dann auf weissem Grund platzieren (iOS füllt Transparenz sonst schwarz).
$IM "$SRC" -background white -alpha remove -alpha off -trim +repage "$OUT/_trim.png"

tile() { # <Logo-Kantenlänge> <Gesamtgrösse> <Datei>
  $IM "$OUT/_trim.png" -resize "${1}x${1}" -background white -gravity center -extent "${2}x${2}" "$3"
}

tile 400 512 "$OUT/icon-512.png"
tile 150 192 "$OUT/icon-192.png"
tile 300 512 "$OUT/icon-maskable-512.png"   # Logo in der Safe-Zone (60 %), damit Android nichts abschneidet
tile 130 180 "$OUT/apple-touch-icon.png"
tile 40  48  "$OUT/favicon-48.png"

# Header-Logo: Höhe 44 px (CSS), 3-fach für scharfe Darstellung auf Retina-Displays.
$IM "$OUT/_trim.png" -resize x132 "$OUT/js-logo-header.png"

rm -f "$OUT/_trim.png" "$OUT/_src.png"
ls -l "$OUT"
