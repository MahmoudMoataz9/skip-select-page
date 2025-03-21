import { createBrowserRouter, RouteObject } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "./pages/Home/Home";
import SkipSelect from "./pages/SkipSelect/SkipSelect";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '', element: <Home />
            },
            { path: 'skip-select', element: <SkipSelect /> },
        ]
    },
]

export const router = createBrowserRouter(routes);