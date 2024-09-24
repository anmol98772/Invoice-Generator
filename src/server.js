const express = require("express");
const sendInvoiceEmail = require("./emailService");

const app = express();
app.use(express.json());

app.post("/api/send-invoice", async (req, res) => {
  const { email, invoiceDetails } = req.body;
  
  try {
    await sendInvoiceEmail(email, invoiceDetails);
    res.status(200).json({ message: "Invoice sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send invoice" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});