import UserContextProvider from "./context/UserContextProvider";
import Login from "./Component/login";
import "./App.css";
import Profile from "./Component/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
