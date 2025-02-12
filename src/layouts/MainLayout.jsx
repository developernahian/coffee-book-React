import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            {/* React Hot Toast */}
            <Toaster />
            
            {/* NavBar */}
            {/* [=] navber fixed, navbar er jaigai banner chole ase. ejonno div diye jaiga dhore rekhechi */}
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            {/* Dynamic Section */}
            {/* <div className="min-h-screen"> */}
            {/* nav h= 65px, footer=164px, 100vh-(nav+footer) */}
            {/* [=] IM */}
            <div className="min-h-[calc(100vh-232px)] py-12 container px-12 mx-auto">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;