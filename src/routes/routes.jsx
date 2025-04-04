import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/Home/HomePage";
import AllCampaigns from "../pages/Campaign/AllCampaigns";
import AddCampaign from "../pages/Campaign/AddCampaign";
import SecuredRoutes from "./SecuredRoutes";
import CampaignDetails from "../pages/Campaign/CampaignDetails";
import UpdateCampaign from "../pages/Campaign/UpdateCampaign";
import MyCampaigns from "../pages/Campaign/MyCampaigns";
import MyDonations from "../pages/Campaign/MyDonations";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import Page404 from "../pages/Page404";
import About from "../pages/About";
import Contact from "../pages/Contact";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "all-campaigns",
                element: <AllCampaigns />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "/add-campaign",
                element: (
                    <SecuredRoutes>
                        <AddCampaign />
                    </SecuredRoutes>
                ),
            },
            {
                path: "/campaigns/:id",
                element: <CampaignDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://innofund-server.vercel.app/campaigns/${params.id}`
                    ),
            },
            {
                path: "/update-campaign/:id",
                element: (
                    <SecuredRoutes>
                        <UpdateCampaign />
                    </SecuredRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://innofund-server.vercel.app/campaigns/${params.id}`
                    ),
            },
            {
                path: "/my-campaigns",
                element: (
                    <SecuredRoutes>
                        <MyCampaigns />
                    </SecuredRoutes>
                ),
            },
            {
                path: "/my-donations",
                element: (
                    <SecuredRoutes>
                        <MyDonations />
                    </SecuredRoutes>
                ),
                loader: () =>
                    fetch("https://innofund-server.vercel.app/campaigns"),
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/signin",
                element: <Signin />,
            },
            {
                path: "/auth/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <Page404 />,
    },
]);

export default routes;
