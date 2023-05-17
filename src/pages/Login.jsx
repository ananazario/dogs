import { Route, Routes } from "react-router-dom"
import LoginForm from "./Login/LoginForm"
import LoginCreate from "./Login/LoginCreate"
import LoginPasswordLost from "./Login/LoginPasswordLost"
import LoginPasswordReset from "./Login/LoginPasswordReset"

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="create" element={<LoginCreate />} />
                <Route path="lost" element={<LoginPasswordLost />} />
                <Route path="reset" element={<LoginPasswordReset />} />
            </Routes>
        </div>
    )
}

export default Login