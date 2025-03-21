import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Postcode from "./pages/Postcode/Postcode";
import WasteType from "./pages/WasteType/WasteType";
import PermitCheck from "./pages/PermitCheck/PermitCheck";
import ChooseDate from "./pages/ChooseDate/ChooseDate";
import Payment from "./pages/Payment/Payment";
import SelectSkip from "./pages/SelectSkip/SelectSkip";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '', element: <Navigate to={'/select-skip'} />
            },
            {
                path: 'postcode', element: <Postcode />
            },
            {
                path: 'waste-type', element: <WasteType />
            },
            {
                path: 'select-skip', element: <SelectSkip />
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