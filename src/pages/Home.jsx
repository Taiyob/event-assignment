import Nav from "../components/Nav";
import Banner from "../components/Banner"
import Events from "../components/Events";

const Home = () => {
    return (
        <div className="pr-10 pl-10 pt-10">
            <Nav></Nav>
            <Banner></Banner>
            <Events></Events>
        </div>
    );
};

export default Home;