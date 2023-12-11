import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="text-center justify-center w-fit">
      <h1 className="bg-blue-500 my-4 font-bold text-white">React Context api</h1>
      <Login />
      <Profile />
      </div>
      
    </UserContextProvider>
  );
}

export default App;
