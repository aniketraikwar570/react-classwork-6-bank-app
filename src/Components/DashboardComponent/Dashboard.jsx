import React, { useState } from "react";
import Home from "../HomeComponent/Home";
import ChartComponent from "../ChartComponent/Chart";

export default function Dashboard() {
  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(600);
  const [loanAmount, setLoanAmount] = useState(2400);
  const [interestRate, setInterestRate] = useState(5);
  const [tenure, setTenure] = useState(5);

  const totalLoanMonths = tenure * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const chartData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterestGenerated],
        backgroundColor: ["#42a5f5", "#ef5350"],
        hoverBackgroundColor: ["#1e88e5", "#e53935"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Left Panel: Sliders and Dropdown */}
      <div className="dashboard-left">
        <Home
          homeValue={homeValue}
          downPayment={downPayment}
          loanAmount={loanAmount}
          interestRate={interestRate}
          tenure={tenure}
          setHomeValue={setHomeValue}
          setDownPayment={setDownPayment}
          setLoanAmount={setLoanAmount}
          setInterestRate={setInterestRate}
          setTenure={setTenure}
        />
      </div>

      {/* Right Panel: Monthly Payment & Pie Chart */}
      <div className="dashboard-right">
        <h2>
          Monthly Payment: $
          {isNaN(monthlyPayment) ? 0 : monthlyPayment.toFixed(2)}
        </h2>
        <ChartComponent data={chartData} />
      </div>
    </div>
  );
}
