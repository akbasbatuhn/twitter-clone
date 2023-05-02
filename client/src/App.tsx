import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Notifications from "./pages/Notifications";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";

import Loading from "./components/loading/Loading";

const App = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/auth" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
