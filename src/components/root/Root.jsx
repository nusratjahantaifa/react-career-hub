import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
       <div className='max-w-6xl mx-auto'>
         <Header></Header>
       <Outlet></Outlet>
       </div>
      <div>
        <Footer></Footer>
      </div>
        </div>
    );
};

export default Root;