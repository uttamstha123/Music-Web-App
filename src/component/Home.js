import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import Header from '../component/Header';

export default function Home() {
    return <>
        <div className="d-flex m-0">
            <Sidebar />
            <div className="col">
                <Header />
                <Outlet />
            </div>

        </div>
    </>
}
