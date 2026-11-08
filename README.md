# MFE Skifahren – Konzentration im Schneesport

Mobile Web-App (PWA) für Teilnehmende auf dem Schnee. Statische Seite, ausgeliefert mit nginx in einem Docker-Container.
Gestaltung nach LernFlink (Swiss Snowsports), Variante «B – Tagesnavigation» mit J+S-Logo im Header.

## 1. J+S-Logo

Das bereitgestellte Logo `logo/JS_d_f_RGB-768x783.webp` wird beim Build automatisch für Header, Homescreen-Icons (iOS/Android) und Favicon verwendet. Optional kann `logo/js-logo.png` hinzugefügt werden; diese PNG-Datei hat Vorrang. Wenn keine der beiden Dateien vorhanden ist, wird ein Platzhalter «J+S» erzeugt.

## 2. Bauen und starten (VS Code)

Voraussetzung: Docker Desktop (oder Docker Engine) und die VS-Code-Erweiterung «Docker» (wird beim Öffnen des Ordners empfohlen).

- **Mit der Docker-Erweiterung:** Rechtsklick auf `Dockerfile` → *Build Image…* → danach im Docker-Tab das Image → *Run*, Port `80` auf `8080` legen.
- **Mit Aufgaben:** `Strg/Cmd+Shift+P` → *Tasks: Run Task* → *Docker: starten (http://localhost:8080)*.
- **Im Terminal:**

  ```bash
  docker compose up --build -d      # oder: docker build -t mfe-skifahren . && docker run -d -p 8080:80 mfe-skifahren
  ```

Danach läuft die Seite auf <http://localhost:8080>.

## 3. Auf den Homescreen legen

- **iPhone (Safari):** Teilen-Symbol → *Zum Home-Bildschirm*. Das J+S-Icon (`apple-touch-icon`) wird verwendet.
- **Android (Chrome):** Menü ⋮ → *App installieren* bzw. *Zum Startbildschirm hinzufügen*.

Wichtig: Für den Offline-Betrieb (Service Worker) und die echte App-Installation verlangen die Browser **HTTPS**
(nur `localhost` ist ausgenommen). Für die Teilnehmenden den Container hinter einen Reverse Proxy mit Zertifikat
(z. B. Traefik, Caddy oder den vorhandenen Webserver) stellen. Ohne HTTPS funktioniert das Ablegen als Lesezeichen mit Icon auf dem iPhone trotzdem, aber nicht der Offline-Modus.

## Inhalte anpassen

- Texte, Programm, Links: `src/content.js` (Zeilenformat steht am Dateianfang).
- **Links ergänzen:** Videos (`v|Titel|URL`) und Buttons (`k|Text|URL`) haben noch keine Ziel-URL. Solange die URL leer ist, sind sie sichtbar, aber ohne Wirkung.
- Farben und Grössen: `src/styles.css` (Variablen am Anfang).
- **Nach jeder Änderung** in `src/sw.js` die Zeile `var CACHE = 'mfe-ski-v1'` hochzählen (`v2`, `v3`, …), sonst bleibt bei den Geräten die alte Version im Cache.

## Struktur

```
Dockerfile              zwei Stufen: Icons erzeugen (ImageMagick) → nginx
docker-compose.yml      Port 8080 → 80
docker/nginx.conf       Caching, Manifest-MIME-Type
docker/make-icons.sh    Logo → Icons (läuft im Build)
logo/                   js-logo.png hier ablegen
src/                    index.html, styles.css, app.js, content.js, manifest.webmanifest, sw.js
.vscode/                Docker-Aufgaben, Erweiterungsempfehlung
```

## Hinweise

- Die Schrift Figtree wird von Google Fonts geladen und danach vom Service Worker gecacht. Als Ersatz dient die Systemschrift. Für den vollständig datenschutzkonformen Betrieb die Schrift lokal ablegen (`src/fonts/`) und in `index.html` einbinden.
- Abgehakte Aufgaben, gewählter Tag und gewählter Fokus werden nur lokal auf dem Gerät gespeichert (kein Server, kein Tracking).
