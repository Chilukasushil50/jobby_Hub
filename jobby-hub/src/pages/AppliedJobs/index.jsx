import { useEffect, useState } from "react";
import axios from "axios";
// import "./AppliedJobs.css";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/api/applied-jobs")
            .then(response => {
                setAppliedJobs(response.data);
            })
            .catch(error => {
                console.error("Error fetching applied jobs:", error);
            });
    }, []);

    return (
        <section className="applied-jobs-section">
            <div className="container">
                <h2>Applied Jobs</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Applicant Name</th>
                            <th>Email</th>
                            <th>Applied Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appliedJobs.map((job, index) => (
                            <tr key={index}>
                                <td>{job.companyName}</td>
                                <td>{job.name}</td>
                                <td>{job.email}</td>
                                <td>{new Date(job.appliedAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AppliedJobs;
