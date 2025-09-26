const mongoose = require("mongoose");

const AppliedJobSchema = new mongoose.Schema({
  companyName: { type: String, required: true }, // Store company name instead of job ID
  name: { type: String, required: true },
  email: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AppliedJob", AppliedJobSchema);
