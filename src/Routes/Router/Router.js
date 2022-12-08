import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import Projects from "../../Pages/Projects/Projects";

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

        ]
    },

])

export default router;