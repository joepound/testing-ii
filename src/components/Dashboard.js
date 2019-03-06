import React from "react";

const Dashboard = props => {
  return (
    <section className="Dashboard">
      <h2  className="Dashboard-header">Dashboard</h2>
      <button data-testid="ball-btn" onClick={props.ball}>Ball</button>
      <button data-testid="strike-btn" onClick={props.strike}>Strike</button>
      <button data-testid="foul-btn" onClick={props.foul}>Foul</button>
      <button data-testid="hit-btn" onClick={props.hit}>Hit</button>
    </section>
  )
};

export default Dashboard;