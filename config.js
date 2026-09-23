/* ============================================================
   CustomGPT.ai agent connections for the PDCU demo site
   ------------------------------------------------------------
   Two agents power the demo:
     1. Floating chat (bottom-right bubble)  -> chat.js  (p_id / p_key)
     2. AI search in the header search bar   -> sge.js   (sge_p_id / sge_p_key)
   Values come from CustomGPT -> agent -> Deploy -> Embed. They are public,
   client-side embed values (the same ones that sit in any website embed).

   You can override the chat agent without editing this file by adding
   query params to the page URL: index.html?p_id=12345&p_key=your-embed-key
   ============================================================ */
window.DEMO_CONFIG = {
  // Floating live chat (CustomGPT project 100838)
  p_id:  "100838",
  p_key: "524edb88c586c922e73ae252188df966",

  // Search Generative Experience agent wired to the header search bar (project 100839)
  sge_p_id:  "100839",
  sge_p_key: "78ab7eca6f4f8cbeb3a68ad184f73e47",
  sge_div_id: "customgpt_chat",

  // Labels shown in the search results panel
  searchTitle: "PDCU AI Search",
  searchHint:  "Ask anything about accounts, loans, rates, branches or digital banking.",
  placeholderLabel: "Chat with us"
};
