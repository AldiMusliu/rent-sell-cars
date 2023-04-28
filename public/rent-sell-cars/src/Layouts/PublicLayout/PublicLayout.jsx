import { Outlet } from "react-router-dom";
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";

const PublicLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default PublicLayout;
