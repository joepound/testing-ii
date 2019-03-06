import React from "react";

const Display = props => {
  return (
    <section className="Display">
      <h2 className="Display-header">Display</h2>
      <h4 data-testId="balls-count">Balls: {props.balls}</h4>
      <h4 data-testId="strikes-count">Strikes: {props.strikes}</h4>
    </section>
  );
};

export default Display;
