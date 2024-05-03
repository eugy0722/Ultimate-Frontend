import Navbar from "../../components/header/NavBar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/index";

const HomePage = () => {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
