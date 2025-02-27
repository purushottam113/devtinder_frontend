import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Logout from "./Logout"
import SignIn from "./SignIn"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"

function App() {

  return (
    <>
    <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element = {<Body/>}>
              <Route path="/login" element= {<Login/>}></Route>
              <Route path="/logout" element= {<Logout/>}></Route>
              <Route path="/signin" element= {<SignIn/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
