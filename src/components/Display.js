import React from "react";

const Display = props => {
  return (
    <section className="Display">
      <h2 className="Display-header">Display</h2>
      <h4>Balls: {props.balls}</h4>
      <h4>Strikes: {props.strikes}</h4>
    </section>
  );
};

export default Display;
