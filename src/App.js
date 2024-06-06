import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header text="Reliable, efficient delivery" isBold={false} />
      <Header text="Powered by Technology" isBold={true} />
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>

      <div className="container">
        <Card
          customClass="aqua-border"
          title="Supervisor"
          imgPath="/icon-supervisor.svg"
          content="Monitors activity to identify project roadblocks"
        />
        <div className="middle">
          <Card
            customClass="red-border"
            title="Team Builder"
            imgPath="/icon-team-builder.svg"
            content="Scans our talent network to create the optimal team for your project"
          />
          <Card
            customClass="orange-border mt-20"
            title="Karma"
            content="Regularly evaluates our talent to ensure quality"
            imgPath="/icon-karma.svg"
          />
        </div>
        <Card
          customClass="blue-border"
          title="Calculator"
          imgPath="/icon-calculator.svg"
          content="Uses data from past projects to provide better delivery estimates"
        />
      </div>
    </div>
  );
}

export default App;
