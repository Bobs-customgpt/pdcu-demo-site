# NSTA / Atom — CustomGPT.ai Betty-displacement demo

Sales demo replica for **National Science Teaching Association**. Not affiliated with or endorsed by NSTA.

## Three surfaces (required)

1. **Floating live chat** — `js/main.js` loads `chat.js` using `DEMO_CONFIG.p_id` / `p_key`
2. **Full-page assistant** — hero button **"Try Atom AI assistant"** → `assistant.html` (embed.js)
3. **Header SGE search** — AI search bar → dropdown `#customgpt_search` via `sge.js`

## Open locally

```bash
cd /workspace/betty-demos/nsta/demo-site
python3 -m http.server 8080
```

Then open http://localhost:8080/ (and http://localhost:8080/assistant.html).

## Wire agents

Edit `config.js` and replace `PENDING` with public embed keys:

- `p_id` / `p_key` — chat agent (floating bubble + assistant.html)
- `search_p_id` / `search_p_key` — search/SGE agent

Or pass query overrides: `?p_id=...&p_key=...&search_p_id=...&search_p_key=...`

## CTA URL notes

- Verified 200: https://www.nsta.org/membership
- Verified 200 (redirect): https://www.nsta.org/conferences-and-events
- Verified 200: https://portal.nsta.org/professional-learning
- Verified 200: https://portal.nsta.org/atom
- Verified 200 (redirect from /about): https://www.nsta.org/overview

## Brand

Primary: `#003366` · Accent: `#e87722` · Seed: https://www.nsta.org/
