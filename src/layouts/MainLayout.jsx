import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const MainLayout = () => {
    return (
        <div>
            {/* NavBar */}
            <NavBar></NavBar>
            {/* Dynamic Section */}
            {/* <div className="min-h-screen"> */}
            {/* nav h= 65px, footer=164px, 100vh-(nav+footer) */}
            {/* [=] footer */}
            <div className="min-h-[calc(100vh-232px)]">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;