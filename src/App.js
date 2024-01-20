import Navbar from "./Componenets/Navbar";
import Screen from "./Componenets/Screen";

function App() {
  return (
    <div className="App flex w-[1924.35px] bg-[#F4F4F4] space-x-[38.65px]">
      <Navbar activeTab={"seat"} />
      <Screen />
    </div>
  );
}

export default App;
