import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Admin from "./Admin";
import Header from "./Header";
import Login from "./Login";
import Feed from "./Feed";
import OfflineFeed from "./OfflineFeed";
import MyPosts from "./MyPosts";
import CreatePost from "./CreatePost";
import CreateAccount from "./CreateAccount";
import LogInContextProvider from "./LogInContext";

function App() {
  return (
    <LogInContextProvider>
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={<Login />}></Route>
          <Route path="/offline" element={<OfflineFeed />}></Route>
          <Route path="/signup" element={<CreateAccount />}></Route>
          <Route path="/myposts" element={<MyPosts />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </LogInContextProvider>
  );
}

export default App;
