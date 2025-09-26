const express = require("express");
const AppliedJob = require("../models/AppliedJob");
const router = express.Router();

// POST - Apply for a Job
router.post("/apply", async (req, res) => {
  try {
    const { companyName, name, email } = req.body;

    // Check if all fields are provided
    if (!companyName || !name || !email) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Store the application
    const appliedJob = new AppliedJob({ companyName, name, email });
    await appliedJob.save();
    console.log(appliedJob);
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error applying for the job", error });
  }
});

// GET - Fetch all applied jobs
router.get("/", async (req, res) => {
  try {
    const appliedJobs = await AppliedJob.find();
    res.status(200).json(appliedJobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applied jobs", error });
  }
});

module.exports = router;
