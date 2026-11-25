// SERVER-SIDE STARTER ONLY. Verify current ZapUPI documentation before enabling.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  // TODO: Validate package, amount and target on the server.
  // TODO: Create a unique internal order ID and call ZapUPI using server env vars.
  // Never trust an amount sent by the browser.
  return res.status(501).json({ error: "ZapUPI integration is not configured yet." });
}
