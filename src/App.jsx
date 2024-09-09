import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import "./index.css";
import { News } from "./pages/News";
import { AppLayout } from "./pages/components/AppLayout";
import { Racers } from "./pages/Racers";
import { Volt } from "./pages/Volt";
import { Avatars } from "./pages/Avatars";
import { Settings } from "./pages/Settings";
import { Profile } from "./pages/Profile";

function App() {
  const isAuth = localStorage.getItem("authToken");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <AppLayout>
                <Home />
              </AppLayout>
            ) : (
              <Landing />
            )
          }
        />
        <Route
          path="/news"
          element={
            <AppLayout>
              <News />
            </AppLayout>
          }
        />
        <Route
          path="/racers"
          element={
            <AppLayout>
              <Racers />
            </AppLayout>
          }
        />
        <Route
          path="/volt"
          element={
            <AppLayout>
              <Volt />
            </AppLayout>
          }
        />
        <Route
          path="/avatars"
          element={
            <AppLayout>
              <Avatars />
            </AppLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <AppLayout>
              <Settings />
            </AppLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
