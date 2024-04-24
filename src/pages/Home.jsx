import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Events from "../components/Events";
import Notice from "../components/Notice";
import Scanner from "../components/Scanner";
import Ticketing from "../components/Ticketing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="pr-20 pl-20 pt-10">
        <Nav></Nav>
        <Banner></Banner>
        <Events></Events>
        <Notice></Notice>
        <Scanner></Scanner>
        <Ticketing></Ticketing>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
