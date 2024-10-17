import "./App.css";
import DateType from "./components/datetype/DateType";
import Cards from "./components/cards/Cards";
import Gradient from "./components/gradient/Gradient";
import { useState } from "react";

function App() {
  const [planType, setPlanType] = useState("monthly");

  const monthlyPlans = {
    price1: "$125",
    price2: "$225",
    price3: "$325",
    date: "/Month",
  };

  const annuallyPlans = {
    price1: "$325",
    price2: "$425",
    price3: "$525",
    date: "/Annually",
  };

  const mPlans = [
    {
      type: "basic",
      price: "10",
      features: ["a", "b"],
    },
  ];

  console.log(monthlyPlans, annuallyPlans);

  return (
    <div className="container">
      <h1 className="title-pricing">Star Scalling Your Bussines Now</h1>
      <p className="text-below">
        Select from best plan,ensuring a perfect match
      </p>
      <DateType currentPlan={planType} onChangePlan={setPlanType} />
      <Cards plans={planType === "monthly" ? monthlyPlans : annuallyPlans} />
      <Gradient />
    </div>
  );
}

export default App;
