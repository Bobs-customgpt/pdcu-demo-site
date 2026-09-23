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

## The two CustomGPT.ai agents (set in `config.js`)
1. **Floating chat** (bottom-right bubble): CustomGPT project 100838 via `chat.js`. Override for a test with `index.html?p_id=...&p_key=...`.
2. **AI search in the header search bar**: CustomGPT project 100839 via `sge.js` (Search Generative Experience). Submitting the search pill opens a containerized results dropdown anchored directly under the search bar (no page dimming; query in the title, close button, Escape or an outside click closes it, refocusing the input reopens the last result). Each search re-injects `sge.js` with the query as its `prompt` attribute, so results render in place with no page reload; the query is also mirrored to `?q=` so a results view can be deep-linked (`index.html?q=Do+you+offer+RV+loans`). Escape, the backdrop, or the × closes it.

If either pair of values is blank, the chat falls back to a purple "Chat with us" placeholder that explains the setup.

## Local preview
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Hosting
Live at https://bobs-customgpt.github.io/pdcu-demo-site/ (GitHub Pages, `main` branch, root folder, repo Bobs-customgpt/pdcu-demo-site). Push to `main` to redeploy. Deep-link a search result with `?q=`, e.g. https://bobs-customgpt.github.io/pdcu-demo-site/?q=auto+loan+rates
