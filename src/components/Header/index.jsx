import React from "react";
import { ChangeTheme, Topo } from "./styles";
import sun from "../../assets/img/sun.svg";

export default function Header() {
  return (
    <Topo>
      <h1>devfinder</h1>
      <ChangeTheme>
        <h2>LIGHT</h2>
        <img src={sun} alt="" />
      </ChangeTheme>
    </Topo>
  );
}
