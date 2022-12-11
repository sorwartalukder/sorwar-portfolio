import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import AddProject from "../../Pages/Dashboard/AddProject/AddProject";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import ProjectDetails from "../../Pages/Projects/ProjectDetails/ProjectDetails";
import Projects from "../../Pages/Projects/Projects";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/projects/:id',
                loader: ({ params }) => fetch(`https://sorwar-portfolio-server.vercel.app/projects/${params.id}`),
                element: <ProjectDetails />
            },
            {
                path: '/dashboard/add-project',
                element: <PrivateRoute> <AddProject /></PrivateRoute>
            },
            {
                path: '/contact',
                element: <ContactMe />
            },
            {
                path: '/login',
                element: <Login />
            },

        ]
    },

])

export default router;