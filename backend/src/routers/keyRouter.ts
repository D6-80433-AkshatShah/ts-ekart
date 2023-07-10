import express from "express";

export const keyRouter = express.Router();
// /api/keys/
keyRouter.get("/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID || "sb" });
});
