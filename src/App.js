import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header text="Reliable, efficient delivery" isBold={false} />
      <Header text="Powered by Technology" isBold={true} />
    </div>
  );
}

export default App;
