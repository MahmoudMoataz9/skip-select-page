import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "./pages/Home/Home";
import SkipSelect from "./pages/SkipSelect/SkipSelect";
import Postcode from "./pages/Postcode/Postcode";
import WasteType from "./pages/WasteType/WasteType";
import PermitCheck from "./pages/PermitCheck/PermitCheck";
import ChooseDate from "./pages/ChooseDate/ChooseDate";
import Payment from "./pages/Payment/Payment";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '', element: <Navigate to={'/skip-select'} />
            },
            {
                path: 'postcode', element: <Postcode />
            },
            {
                path: 'waste-type', element: <WasteType />
            },
            {
                path: 'skip-select', element: <SkipSelect />
            },
            {
                path: 'permit-check', element: <PermitCheck />
            },
            {
                path: 'choose-date', element: <ChooseDate />
            },
            {
                path: 'payment', element: <Payment />
            },
        ]
    },
]

export const router = createBrowserRouter(routes);