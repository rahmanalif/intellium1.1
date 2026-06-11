GRIDMAPS ICON PACK — usage guide
=================================

All PNGs are rendered straight from vector, transparent background
unless noted. Pick by PLACEMENT SIZE on screen, not by file size:

01_Big_FullDetail/       Display >= ~80px  (hero, headers, store pages)
                         Full routes-and-stations network.
02_Medium_Simplified/    Display ~40-80px  (cards, nav bars, app grids)
                         Simplified routes, thicker strokes.
03_Small_Minimal/        Display <= ~36px  (favicons, tabs, lists)
                         Cells only - no pattern, stays crisp.
04_Web_Favicons/         Drop-in set for websites:

  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
  <!-- web app manifest -->
  "icons": [
    {"src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png"},
    {"src": "/maskable-icon-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]

  apple-touch-icon + appstore-icon are square and opaque on purpose -
  Apple applies its own corner mask. maskable-icon has the artwork in
  the safe zone for Android adaptive shapes.

05_Lockup_and_Sheet/     Raw highest-res lockup (transparent) + brand sheet.

Need bigger? The SVG / AI files in the logo package scale infinitely.
