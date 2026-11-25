// Optional provider fulfillment hook. Keep provider API credentials server-side.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  // TODO: Only fulfill after verified payment and validate the requested service.
  return res.status(501).json({ error: "SMM fulfillment is disabled." });
}
