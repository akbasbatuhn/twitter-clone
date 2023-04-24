import Content from "./Content";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";

const Home = () => {
    return (
        <div className="flex min-h-screen max-w-7xl mx-auto">
            <Sidebar />
            <Content />
            <RightSideBar />
        </div>
    );
};

export default Home;
