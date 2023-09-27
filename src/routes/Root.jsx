import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer.jsx"
import { Dashboard} from "../components/Dashboard.jsx";

const Root = () => {
    return (
            <div className="site-wrapper">
                <main className="main">
                    <Dashboard />
                    <Outlet />
                </main>

            </div>
    )
}

export default Root;