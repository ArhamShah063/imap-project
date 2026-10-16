# My personal portfolio

A portfolio designed as a passport, because I like travelling almost as much as I like data.

- **Cover:** tap it and the passport opens.
- **Personal details:** the data page, with my photo and a machine-readable zone at the bottom.
- **Route so far:** school, NMIMS, and my internship at Reliance Retail.
- **Boarding passes:** six projects from my GitHub, each linking to its code.
- **Visas & entry stamps:** my skills. Tap them to stamp them.
- **Achievements unlocked:** what I do offline (skydiving, parasailing, swimming, surfing, food, games).
- **Postcard:** how to reach me.

A touch from my gaming side: an XP bar that fills as you scroll.

**Light and dark mode:** the round button in the top right corner switches themes. The site starts from the visitor's device setting and remembers their choice.

## Built with

Plain HTML, CSS and JavaScript.

```
index.html      page structure and content
style.css       all styling, including the mobile layout
script.js       light/dark toggle, cover animation, XP bar, stamps, copy-email
assets/         favicon and my photo
```

## Run it locally as well as on a live site.

Open `index.html` in a browser, or run:

```bash
python -m http.server
```

Then visit http://localhost:8000.

**Live site:** https://imap-project-xi.vercel.app
## Hosting

Deployed with GitHub Pages from the `main` branch.

## Credits

- Fonts from [Google Fonts](https://fonts.google.com), all under the SIL Open Font License:
  - [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)
  - [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)
  - [Kalam](https://fonts.google.com/specimen/Kalam)
- The photo is my own.
- Emoji icons are rendered by the visitor's system emoji font.
- All other graphics (passport cover, stamps, barcodes, postage stamp) are drawn in CSS and inline SVG for this site.
- I used an AI assistant to help write and debug the code.
