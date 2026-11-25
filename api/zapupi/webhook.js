// SERVER-SIDE STARTER ONLY. Verify webhook signature before changing order state.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  // TODO: Verify ZAPUPI_WEBHOOK_SECRET according to official provider documentation.
  // TODO: Make webhook handling idempotent; never mark an order paid from browser input.
  return res.status(501).json({ error: "Webhook verification is not configured yet." });
}