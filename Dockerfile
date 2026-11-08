# syntax=docker/dockerfile:1

# ---- Stufe 1: App-Icons aus dem J+S-Logo erzeugen (logo/js-logo.png) ----
FROM alpine:3.20 AS icons
RUN apk add --no-cache imagemagick font-dejavu libwebp-tools
WORKDIR /w
COPY docker/make-icons.sh ./make-icons.sh
COPY logo/ ./logo/
RUN sh ./make-icons.sh /w/out

# ---- Stufe 2: statische Seite mit nginx ausliefern ----
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY src/ /usr/share/nginx/html/
COPY --from=icons /w/out/ /usr/share/nginx/html/assets/icons/

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
