import { Col, Container, Form, Row } from "react-bootstrap";
import "./jobs.css";
import { InputComponent } from "../../components/InputComponent";
import { jobsData } from "../../constants/data";
import noData from "../../assets/images/no-data.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Jobs = () => {
  const [value, setValue] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedJobTypes([...selectedJobTypes, value]);
    } else {
      setSelectedJobTypes(selectedJobTypes.filter((type) => type !== value));
    }
  };

  const handleRadioChange = (e) => {
    setSelectedPackage(e.target.value);
  };



  //   let filteredJobs = jobsData.filter((item) => item.jobTitle.toLowerCase().includes(value.toLowerCase()) || item.workingType.toLowerCase().includes(value.toLowerCase()));
  const filteredJobs = jobsData.filter((item) => {
    const matchesSearch = item.jobTitle.toLowerCase().includes(value.toLowerCase());
    const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(item.workingType);
    const matchesPackage = !selectedPackage || parseFloat(item.package) >= parseFloat(selectedPackage);
    return matchesSearch && matchesJobType && matchesPackage;
  });


  return (
    <section className="jobs-section">
      <Container>
        <Row>
          <Col xs={3}>
            <div>
              <div className="profile-card d-flex flex-column position-relative overflow-hidden">
                <div className="profile-avatar rounded-circle overflow-hidden">
                  <img src="https://i.pravatar.cc/50" alt="profile avatar" width={60} height={60} className="w-100 h-100 object-fit-cover" />
                </div>
                <div className="profile-content-card">
                  <h6>Sushil Chiluka</h6>
                  <p>Lead Software Developer and AHML expert</p>
                </div>
              </div>
              <div className="form-wrap left-card">
                <Form.Check label="Full Time" value="Full Time" name="group1" type={"checkbox"} id={`fullTime`} onChange={handleCheckboxChange} />
                <Form.Check label="Part Time" value="Part Time" name="group1" type={"checkbox"} id={`partTime`} onChange={handleCheckboxChange} />
                <Form.Check label="Freelance" value="Freelance" name="group1" type={"checkbox"} id={`freelance`} onChange={handleCheckboxChange} />
                <Form.Check label="Internship" value="Internship" name="group1" type={"checkbox"} id={`intership`} onChange={handleCheckboxChange} />
              </div>
              <div className="form-wrap left-card">
                <Form.Check label="10 LPA and above" name="group1" value="10" type={"radio"} id={`fullTime`} onChange={handleRadioChange} />
                <Form.Check label="20 LPA and above" name="group1" value="20" type={"radio"} id={`partTime`} onChange={handleRadioChange} />
                <Form.Check label="30 LPA and above" name="group1" value="30" type={"radio"} id={`freelance`} onChange={handleRadioChange} />
                <Form.Check label="40 LPA and above" name="group1" value="40" type={"radio"} id={`intership`} onChange={handleRadioChange} />
              </div>
            </div>
          </Col>
          <Col xs={9}>
            <div>
              <div>
                <InputComponent
                  type={"search"}
                  value={value}
                  handleChange={handleChange}
                  placeholder={"Search anything.."}
                  inputClass={"search-input w-100"}
                  prefixIcon={
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
                        <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  }
                />
              </div>

              <div className="d-grid gap-4 mt-5">
                {filteredJobs.length > 0 && filteredJobs.map((job, index) => {
                  return (
                    <div className="job-card" key={index} onClick={() => navigate(`/jobs/${job.id}`)} >
                      <div className="job-upper-card">
                        <div className="d-flex gap-3 mb-5">
                          <div className="job-img-card flex-shrink-0">
                            <img src={job.companyLogo} alt="netflix logo" width={60} height={60} className="w-100 h-100" />
                          </div>
                          <div className="title-card">
                            <h6 className="fw-normal">{job.jobTitle}</h6>
                            <div className="rating-card d-flex align-items-center gap-3">
                              <span className="icon d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                </svg>
                              </span>
                              <h6 className="mb-0">{job.rating}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between gap-3 align-items-center">
                          <div className="d-flex align-items-center gap-4">
                            <div className="d-flex align-items-center gap-3">
                              <span className="icon d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                                </svg>
                              </span>
                              <span>{job.location}</span>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                              <span className="icon d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M15 3C15.5523 3 16 3.44772 16 4V6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7C2 6.44772 2.44772 6 3 6H8V4C8 3.44772 8.44772 3 9 3H15ZM16 8H8V19H16V8ZM4 8V19H6V8H4ZM14 5H10V6H14V5ZM18 8V19H20V8H18Z"></path>
                                </svg>
                              </span>
                              <span>{job.workingType}</span>
                            </div>
                          </div>
                          <h6 className="mb-0">{job.package} LPA</h6>
                        </div>
                      </div>
                      <div>
                        <span>Description</span>
                        <p className="h6 mt-4 mb-0">
                        {job.description}
                        </p>
                        <p className="mb-0">{job.workType}</p>
                      </div>
                    </div>
                  );
                })}

                {filteredJobs.length <= 0 && 
                <div className="no-data-img-card">
                  <img src={noData} alt="no data found" width={400} height={400} className="w-100 h-100" />
                </div>
                }
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Jobs;
