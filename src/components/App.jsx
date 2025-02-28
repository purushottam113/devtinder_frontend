import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import SignIn from "./SignIn"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Profile from "./Profile"

function App() {

  return (
    <>
    <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element = {<Body/>}>
              <Route path="/profile" element= {<Profile/>}></Route>
              <Route path="/login" element= {<Login/>}></Route>
              <Route path="/signin" element= {<SignIn/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
