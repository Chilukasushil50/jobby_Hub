import { useState } from "react";
import { InputComponent } from "../../components/InputComponent";
import { ButtonComponent } from "../../components/ButtonComponent";
import axios from "axios";
import "../jobdetails/jobDetails.css";

const ApplyJob = () => {
  const [formData, setFormData] = useState({
    companyName: "", // New field for company name
    name: "",
    email: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.companyName || !formData.name || !formData.email) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3002/api/applied-jobs/apply", formData);
      alert(response.data.message);
      setFormData({ companyName: "", name: "", email: "" }); // Reset form
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Error submitting application!");
    }
  };

  return (
    <section className="job-details-section">
      <div className="container">
        <h3>Apply for this Job</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <InputComponent
              type="text"
              name="companyName"
              placeholder="Enter Company Name"
              value={formData.companyName}
              handleChange={handleChange}
              required
            />
          </div>
          <div>
            <InputComponent
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              handleChange={handleChange}
              required
            />
          </div>
          <div>
            <InputComponent
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              handleChange={handleChange}
              required
            />
          </div>
          <ButtonComponent btnText="Submit" type="submit" btnClass="mt-5" />
        </form>
      </div>
    </section>
  );
};

export default ApplyJob;
