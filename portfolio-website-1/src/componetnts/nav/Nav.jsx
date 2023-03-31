/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./index.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNam, setActiveNav] = useState('');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNam === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNam === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#exp"
        onClick={() => setActiveNav("#exp")}
        className={activeNam === "#exp" ? "active" : ""}
      >
        <BiBookAlt />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNam === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNam === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
