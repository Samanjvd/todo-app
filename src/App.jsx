import "./App.css";
import DateType from "./components/datetype/DateType";
import Cards from "./components/cards/Cards";
import Gradient from "./components/gradient/Gradient";

function App() {
  return (
    <div class="container">
      <h1 class="title-pricing">Star Scalling Your Bussines Now</h1>
      <p class="text-below">Select from best plan,ensuring a perfect match</p>
     <DateType/>
      <Cards/>
      <Gradient/>
    </div>
  );
}

export default App;
