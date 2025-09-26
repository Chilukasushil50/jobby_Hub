import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../../components/ButtonComponent";
import { heroImg } from "../../constants/imgData";
import "./home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      setIsAdmin(true);
    }
  }, []);
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="hero-content-card">
              <h1 className="h1 mb-5">Find The Job That Fits Your Life</h1>
              <p className="mb-5 lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, cum
                modi natus, distinctio quisquam nemo hic delectus excepturi
                nesciunt sed aperiam ducimus reiciendis adipisci, quas corrupti.
                Voluptate, cumque? Exercitationem, velit!
              </p>
              <ButtonComponent
                btnText={"Find Jobs"}
                btnClass="w-auto"
                handleClick={() => navigate("/jobs")}
              />
              {isAdmin && (
                <button onClick={() => navigate("/admin-email-section")}>
                  Admin Email Section
                </button>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="hero-img-card w-100">
              <img src={heroImg} alt="hero img" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
