# People Driven Credit Union — Demo Site

A static visual replica of the [People Driven Credit Union homepage](https://www.peopledrivencu.org/), built for the CustomGPT.ai website-agent demo to PDCU (Dave Sullivan, John Scharff). It reproduces the header, mega menu, hero with featured-rate carousel, goal icons, account/loan cards, feature blocks, testimonials, blog slider, disclosures and footer, and adds a floating CustomGPT.ai chat agent.

Not affiliated with or endorsed by People Driven Credit Union. Internal sales/demo prop only; do not present it as the customer's real site. Rates and copy were captured from the public homepage on 2026-09-23.

## Structure
- `index.html` — the full page
- `css/styles.css` — stylesheet (recreates the BloomCU theme look; colors, Gotham type, gradients, cards)
- `css/icons.css` — header icon data-URIs pulled from the live site's CSS
- `js/main.js` — carousels, dropdowns, login popover, mobile menu, footer accordions, CustomGPT loader
- `config.js` — paste the CustomGPT agent `p_id` / `p_key` here to go live
- `assets/` — logo, icons, photos and the Gotham Book webfont pulled from the live site

## Connect the agent
1. In CustomGPT, open the agent → Deploy → Embed → Live Chat and copy `p_id` and `p_key`.
2. Paste them into `config.js` (or test with `index.html?p_id=...&p_key=...`).
3. Until an agent is connected, a purple "Chat with us" placeholder button explains the setup.

## Local preview
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Hosting
Publish via GitHub Pages from the `main` branch, root folder (same pattern as the other demo sites).
