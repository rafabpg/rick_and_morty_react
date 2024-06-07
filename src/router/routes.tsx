import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { AppLayout } from "../layout/AppLayout";
import { NotFound } from "@/pages/notFound";


export function AppRoutes(){


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    {/* <Route path="/:id" element={}/>
                    <Route path="/episodes" element={}/>
                    <Route path="/episodes/:id" element={}/>
                    <Route path="/location" element={}/>
                    <Route path="/location/:id" element={}/> */}
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>

    )

}