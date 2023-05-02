import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Landing = lazy(() => import("./pages/Landing"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Explore = lazy(() => import("./pages/Explore"));
const Messages = lazy(() => import("./pages/Messages"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const Profile = lazy(() => import("./pages/Profile"));

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
