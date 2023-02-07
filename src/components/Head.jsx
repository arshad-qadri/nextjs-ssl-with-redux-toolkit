

import Link from "next/link";
import React from "react";


const Header = () => {

  return (
    <>
  
      <div className="head">
        <Link href={"/"}>
          Logo
        </Link>
        <ul>
          <li>
            <Link href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/serviecs"}>Services</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;


