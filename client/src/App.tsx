import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Notifications from "./pages/Notifications";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
};

export default App;
