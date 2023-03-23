import classes from "./AvailableDonuts.module.css";
import DonutItem from "./DonutItem/DonutItem";
import Card from "../UI/Card";

const DUMMY_DONUTS = [
  {
    id: "m1",
    name: "Original Glazed",
    description: "Signiture donut of Koala's",
    price: 1.59,
  },
  {
    id: "m2",
    name: "Chocolate Iced Glazed",
    description: "Chocolate iced on original glazed",
    price: 2.09,
  },
  {
    id: "m3",
    name: "Cookie Vanilla",
    description: "Vanilla cream iced and cookie sprinklings",
    price: 2.59,
  },
  {
    id: "m4",
    name: "Lemon Cheese Cake",
    description: "Lemon filling inside and cheese cream iced",
    price: 2.59,
  },
];

const AvailableDonuts = () => {
  const donutsList = DUMMY_DONUTS.map((donut) => (
    <DonutItem
      id={donut.id}
      key={donut.id}
      name={donut.name}
      description={donut.description}
      price={donut.price}
    ></DonutItem>
  ));

  return (
    <section className={classes.donuts}>
      <Card>
        <ul>{donutsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDonuts;
