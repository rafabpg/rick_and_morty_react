import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { AppLayout } from "../layout/AppLayout";


export function AppRoutes(){


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route path="/characters" element={<HomePage/>}/>
                    {/* <Route path="/:id" element={}/>
                    <Route path="/episodes" element={}/>
                    <Route path="/episodes/:id" element={}/>
                    <Route path="/location" element={}/>
                    <Route path="/location/:id" element={}/> */}
                </Route>
            </Routes>
        </BrowserRouter>

    )

}