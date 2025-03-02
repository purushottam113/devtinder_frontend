import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import SignIn from "./SignIn"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Feed from "./Feed"
import Connections from "./Connections"
import Profile from "./profile"
import Requests from "./Requests"

function App() {

  return (
    <>
    <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element = {<Body/>}>
              <Route path="/feed" element= {<Feed/>}></Route>
              <Route path="/profile" element= {<Profile/>}></Route>
              <Route path="/login" element= {<Login/>}></Route>
              <Route path="/signin" element= {<SignIn/>}></Route>
              <Route path="/connections" element= {<Connections/>}></Route>
              <Route path="/requests" element= {<Requests/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
