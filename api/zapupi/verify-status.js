// SERVER-SIDE STARTER ONLY. Implement using the official current ZapUPI status API.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  return res.status(501).json({ error: "Payment status verification is not configured yet." });
}