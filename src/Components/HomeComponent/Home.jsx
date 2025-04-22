import React from "react";

const Home = ({
  homeValue,
  downPayment,
  loanAmount,
  interestRate,
  tenure,
  setHomeValue,
  setDownPayment,
  setLoanAmount,
  setInterestRate,
  setTenure,
}) => {
  return (
    <>
      <div className="slider-group">
        <label>Home Value: ${homeValue}</label>
        <input
          type="range"
          min="3000"
          max="100000"
          value={homeValue}
          onChange={(e) => setHomeValue(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {/* Down Payment Slider */}
      <div className="slider-group">
        <label>Down Payment: ${downPayment}</label>
        <input
          type="range"
          min="0"
          max="50000"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {/* Loan Amount Slider */}
      <div className="slider-group">
        <label>Loan Amount: ${loanAmount}</label>
        <input
          type="range"
          min="1000"
          max="100000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {/* Interest Rate Slider */}
      <div className="slider-group">
        <label>Interest Rate: {interestRate}%</label>
        <input
          type="range"
          min="1"
          max="18"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      {/* Tenure Dropdown */}
      <div className="slider-group">
        <label>Tenure: {tenure} years</label>
        <select
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          style={{ marginLeft: "10px" }}
        >
          {/* You can adjust these options as needed */}
          <option value={1}>1 year</option>
          <option value={5}>5 years</option>
          <option value={10}>10 years</option>
          <option value={15}>15 years</option>
          <option value={20}>20 years</option>
          <option value={25}>25 years</option>
          <option value={30}>30 years</option>
        </select>
      </div>
    </>
  );
};
export default Home;
