# ASQ / Quincy — CustomGPT.ai Betty-displacement demo

Sales demo replica for **American Society for Quality**. Not affiliated with or endorsed by ASQ.

## Three surfaces (required)

1. **Floating live chat** — `js/main.js` loads `chat.js` using `DEMO_CONFIG.p_id` / `p_key`
2. **Full-page assistant** — hero button **"Try Quincy AI assistant"** → `assistant.html` (embed.js)
3. **Header SGE search** — AI search bar → dropdown `#customgpt_search` via `sge.js`

## Open locally

```bash
cd /workspace/betty-demos/asq/demo-site
python3 -m http.server 8080
```

Then open http://localhost:8080/ (and http://localhost:8080/assistant.html).

## Wire agents

Edit `config.js` and replace `PENDING` with public embed keys:

- `p_id` / `p_key` — chat agent (floating bubble + assistant.html)
- `search_p_id` / `search_p_key` — search/SGE agent

Or pass query overrides: `?p_id=...&p_key=...&search_p_id=...&search_p_key=...`

## CTA URL notes

- Provisional: https://asq.org/membership
- Provisional: https://asq.org/training
- Provisional: https://asq.org/cert
- Provisional: https://asq.org/events
- Research path: https://asq.org/quincy-ai
- Homepage seed: https://asq.org/

## Brand

Primary: `#00529B` · Accent: `#4CAF50` · Seed: https://asq.org/
