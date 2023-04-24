import Content from "./Content";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const Home = () => {
    return (
        <div className="flex min-h-screen max-w-7xl mx-auto">
            <Sidebar />
            <Content />
            <Widgets />
        </div>
    );
};

export default Home;
