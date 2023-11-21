import Home from './pages/home/Home'
import TopBar from './components/topbar/TopBar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/settings/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const currentUser = true
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        ></Route>
        <Route
          path="/login"
          element={currentUser ? <Home /> : <Login />}
        ></Route>
        <Route
          path="/write"
          element={currentUser ? <Write /> : <Register />}
        ></Route>
        <Route
          path="/settings"
          element={currentUser ? <Setting /> : <Register />}
        ></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
