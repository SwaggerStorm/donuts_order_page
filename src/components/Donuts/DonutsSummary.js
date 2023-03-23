import React from "react";
import classes from "./DonutsSummery.module.css";

const DonutsSummery = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicous Donuts, Delivered To You!</h2>
      <p>
        Choose your favorite donut from our broad selection of available donuts
        and enjoy a delicious sweet donut at home.
      </p>
      <p>
        All our donuts are cooked with high-quality ingredients, every morning
        and of course by experienced bakers!
      </p>
    </section>
  );
};

export default DonutsSummery;
