import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/AuthenticationPage/LoginPage";
import Jobs from "../pages/jobs";
import { MainLayout } from "../Layouts";
import RegisterPage from "../pages/AuthenticationPage/RegisterPage";
import JobDetails from "../pages/jobdetails";
import ApplyJob from "../pages/applyJob";
import AppliedJobs from "../pages/AppliedJobs";

const router = createBrowserRouter([
    {   
        element:<MainLayout/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/jobs",
                element:<Jobs/>
            },
            {
                path:"/jobs/:id",
                element:<JobDetails/>
            },
            {
                path:"/apply-job",
                element:<ApplyJob/>
            },
            {
                path:"/applied-jobs",
                element:<AppliedJobs/>
            },
        ]
    },
    {
        path:"/",
        element:<LoginPage/>
    },
    {
        path:"/register",
        element:<RegisterPage/>
    },
])

export default router;