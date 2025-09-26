import { logo } from "../../../constants/imgData";
import "./LoginPage.css";
import { InputComponent } from "../../../components/InputComponent";
import { ButtonComponent } from "../../../components/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if user is admin (fixed email & password)
        if (email === "admin@gmail.com" && password === "123") {
            localStorage.setItem("isAdmin", "true"); // Mark as admin
            localStorage.setItem("userEmail", email); // Store email
            navigate("/home"); // Redirect to home
            return; // Stop execution here (No API call needed)
        }

        // If not admin, validate against backend (MongoDB)
        try {
            const result = await axios.post("http://localhost:3002/login", { email, password });

            if (result?.data?.status === 200) {
                localStorage.setItem("isAdmin", "false"); // Mark as regular user
                localStorage.setItem("userEmail", email); // Store email
                navigate("/home"); // Redirect to home
            } else {
                setErrorMsg(result?.data?.msg);
            }
        } catch (error) {
            console.log(error);
            setErrorMsg("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="login-section">
            <div className="container">
                <div className="login-wrapper">
                    <div className="logo-wrapper d-flex justify-content-center align-items-center mx-auto">
                        <img src={logo} alt="alert" className="w-100 h-100" />
                    </div>
                    <form className="form-wrapper d-grid" onSubmit={handleSubmit}>
                        <div>
                            <InputComponent
                                type="email"
                                placeholder="Enter email"
                                id="email"
                                label="Email"
                                handleChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <InputComponent
                                type="password"
                                placeholder="Enter password"
                                id="password"
                                label="Password"
                                handleChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <ButtonComponent btnText="Login" type="submit" />
                        </div>
                        {errorMsg && (
                            <div>
                                <p className="error-msg text-danger">{errorMsg}</p>
                            </div>
                        )}
                    </form>
                    <div className="mt-3 d-flex justify-content-between align-items-center gap-3">
                        <p>Not registered yet?</p>
                        <Link to={"/register"}>Register</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
