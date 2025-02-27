import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Logout from "./Logout"
import SignIn from "./SignIn"

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Body/>}>
              <Route path="/login" element= {<Login/>}></Route>
              <Route path="/logout" element= {<Logout/>}></Route>
              <Route path="/signin" element= {<SignIn/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
