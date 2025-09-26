import {  logo } from "../../../constants/imgData";
import "./LoginPage.css"
import { InputComponent} from "../../../components/InputComponent"
import {ButtonComponent} from "../../../components/ButtonComponent"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
    const [name,setName] = useState();
    const [email,setEmail]= useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/register",{name,email,password})
        .then(result =>{console.log(result)
            navigate("/")
        })
        .catch(error => console.log(error))
    }

    return(
        <>
        <section className="login-section">
            <div className="container">
                <div className="login-wrapper">
                    <div className="logo-wrapper d-flex justify-content-center align-items-center mx-auto">
                    <img src={logo} alt="alert" className="w-100 h-100"/>
                    </div>
                    <form className="form-wrapper d-grid" onSubmit={handleSubmit}>
                        <div>
                            <InputComponent type={"text"} placeholder={"enter name"} id={"name"} label={"username"} handleChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div>
                            <InputComponent type={"email"} placeholder={"enter name"} id={"email"} label={"Email"} handleChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div>
                            <InputComponent type={"password"} placeholder={"enter name"} id={"password"} label={"password"} handleChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div>
                            <ButtonComponent btnText={"Register"} type="submit" />
                        </div>
                    </form>
                    <div className="mt-3 d-flex justify-content-between align-items-center gap-3">
                        <p>Already registered?</p>
                        <Link to={"/"}>Login</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default RegisterPage;