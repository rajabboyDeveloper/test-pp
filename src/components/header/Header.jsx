import React from "react";
import l from "./Header.module.css";
function Header() {
  return (
    <div className={l.Header}>
      <h1 className={l.title}>Header</h1>
      <div className={l.one}></div>
    </div>
  );
}

export default Header;
