import Content from "./content.component";
import Sidebar from "./sidebar.component";
import Widgets from "./widgets.component";

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
