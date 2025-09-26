import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logo } from "../../constants/imgData";
import { ButtonComponent } from "../ButtonComponent";
import "./HeaderComponent.css";

export const HeaderComponent = () => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const adminStatus = localStorage.getItem("isAdmin") === "true";
        setIsAdmin(adminStatus);
    }, []);

    return (
        <header className="header-section position-fixed top-0 w-100 d-flex justify-content-center align-items-center z-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={"/home"} className="logo-wrap w-100">
                        <img src={logo} alt="logo" width={120} height={45} />
                    </Link>
                    <ul className="header-nav-list d-flex align-items-center">
                        <li>
                            <Link to={"/home"} className="d-block">Home</Link>
                        </li>
                        <li>
                            <Link to={"/jobs"} className="d-block">Jobs</Link>
                        </li>
                        {/* Show "Applied Jobs" only for Admin */}
                        {isAdmin && (
                            <li>
                                <Link to={"/applied-jobs"} className="d-block">Applied Jobs</Link>
                            </li>
                        )}
                    </ul>
                    <ButtonComponent btnText={"Logout"} btnClass={"w-auto"} handleClick={() => {
                        localStorage.removeItem("isAdmin");
                        localStorage.removeItem("userEmail");
                        navigate("/");
                    }} />
                </div>
            </div>
        </header>
    );
};
