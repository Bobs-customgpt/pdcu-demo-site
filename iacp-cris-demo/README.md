# IACP / CRIS — CustomGPT.ai Betty-displacement demo

Sales demo replica for **International Association of Chiefs of Police**. Not affiliated with or endorsed by IACP.

## Three surfaces (required)

1. **Floating live chat** — `js/main.js` loads `chat.js` using `DEMO_CONFIG.p_id` / `p_key`
2. **Full-page assistant** — hero button **"Try CRIS AI assistant"** → `assistant.html` (embed.js)
3. **Header SGE search** — AI search bar → dropdown `#customgpt_search` via `sge.js`

## Open locally

```bash
cd /workspace/betty-demos/iacp/demo-site
python3 -m http.server 8080
```

Then open http://localhost:8080/ (and http://localhost:8080/assistant.html).

## Wire agents

Edit `config.js` and replace `PENDING` with public embed keys:

- `p_id` / `p_key` — chat agent (floating bubble + assistant.html)
- `search_p_id` / `search_p_key` — search/SGE agent

Or pass query overrides: `?p_id=...&p_key=...&search_p_id=...&search_p_key=...`

## CTA URL notes

- Provisional: https://www.theiacp.org/membership
- Provisional: https://www.theiacp.org/events
- Provisional: https://www.theiacp.org/conference
- Research path: https://www.theiacp.org/ask-cris
- Homepage seed: https://www.theiacp.org/

## Brand

Primary: `#003366` · Accent: `#c41230` · Seed: https://www.theiacp.org/
