import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";
import { Home } from "./pages/Home";
import "./index.css";
import { NewsPage } from "./pages/News";
import { AppLayout } from "./pages/components/AppLayout";
import { Racers } from "./pages/Racers";
import { Volt } from "./pages/Volt";
// import { Avatars } from "./pages/Avatars";
import { Settings } from "./pages/Settings";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import { UserIn } from "./pages/UserIn";
import { useEffect, useState } from "react";
import { checkAuthToken } from "./auth";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    checkAuthToken().then((res) => {
      setIsAuth(res.status === 200);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
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
            path="/userIn"
            element={
              isAuth ? (
                <AppLayout>
                  <Home />
                </AppLayout>
              ) : (
                <UserIn />
              )
            }
          />
          {isAuth && (
            <>
              <Route
                path="/news"
                element={
                  <AppLayout>
                    <NewsPage />
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
              {/* <Route
            path="/avatars"
            element={
              <AppLayout>
                <Avatars />
              </AppLayout>
            }
          /> */}
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
            </>
          )}

          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
