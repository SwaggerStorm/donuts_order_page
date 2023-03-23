import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import donutsImage from "../../assets/donuts.jpg";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Koala's Donut!</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={donutsImage} alt="Donuts from heaven!" />
      </div>
    </Fragment>
  );
};

export default Header;
