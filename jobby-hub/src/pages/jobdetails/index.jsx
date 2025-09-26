import { useNavigate, useParams } from "react-router-dom";
import { jobsData } from "../../constants/data";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./jobDetails.css";
import { ButtonComponent } from "../../components/ButtonComponent";


const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get job ID from URL
  const job = jobsData.find((job) => job.id === parseInt(id)); // Find job by ID



  return (
    <section className="job-details-section">
      <div className="container">
        <div className="job-details-card">
          <h2>{job.jobTitle}</h2>
          <p>
            ⭐ {job.rating} | 📍 {job.location} | 💼 {job.workingType} | 💰{" "}
            {job.package} LPA
          </p>
          <p>{job.description}</p>
          <p>{job.workType}</p>
          <div className="mb-4">
            <h4 className="mb-4">Skills Required:</h4>
            <ul className="list">
              {job.skillsRequired.map((data, index) => {
                return (
                  <li key={index} className="list-item">
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="mb-4">Responsibilities:</h4>
            <ul className="list">
              {job.responsibilities.map((data, index) => {
                return (
                  <li key={index} className="list-item">
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="mb-4">Benefits:</h4>
            <ul className="list">
              {job.benefits.map((data, index) => {
                return (
                  <li key={index} className="list-item">
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
          <div >
            <h4 className="mb-4">Application process:</h4>
            <ul className="list">
              {job.applicationProcess.map((data, index) => {
                return (
                  <li key={index} className="list-item">
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>

          <ButtonComponent btnText={"Apply"} btnClass={"mt-5"} handleClick={() => navigate("/apply-job")}/>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
