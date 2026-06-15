// src/index.js
// HTTP server bootstrap — entry point

import app from "./app.js";

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n🚀  Real Estate API running on http://0.0.0.0:${PORT}`);
  console.log(`   • GET /api/properties`);
  console.log(`   • GET /api/properties/:id`);
  console.log(`   • GET /health\n`);
});
