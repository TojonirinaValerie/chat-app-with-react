import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import constantRoute from "./constants/routes.json";
import ChatPage from "./pages/Chat";
import AuthRequire from "./core/authRequire";
import AuthLayout from "./layout/AuthLayout/AuthLayout";

const App = () => {
    return(
        <Routes>
            <Route element={<AuthLayout />} >
                <Route path={constantRoute.LOGIN} element={<LoginPage />} />
                <Route path={constantRoute.SIGNUP} element={<SignupPage />} />
            </Route>

            <Route element={<AuthRequire />} >
                <Route path={constantRoute.HOME} element={<ChatPage />}/>
            </Route>
        </Routes>
    )
}

export default App;
