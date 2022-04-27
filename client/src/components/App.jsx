import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Login from "./Login";
import Feed from "./Feed";
import OnlineFeed from "./OnlineFeed";
import MyPosts from "./MyPosts";
import CreatePost from "./CreatePost";
import CreateAccount from "./CreateAccount";
import LogInContextProvider from "./LogInContext"

function App() {
  return (
    <LogInContextProvider>
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/online" element={<OnlineFeed />}></Route>
          <Route path="/createAccount" element={<CreateAccount />}></Route>
          <Route path="/myposts" element={<MyPosts />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </LogInContextProvider>
  );
}

export default App;
