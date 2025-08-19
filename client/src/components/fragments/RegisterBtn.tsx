import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  btnTxt: string;
  btnColor: string;
  txtColor: string;
}

function RegisterBtn({ btnTxt, btnColor, txtColor }: IProps) {
  const styleList = {
    background: btnColor,
    color: txtColor,
    borderRadius: "50px",
    padding: "1rem 1.2rem",
    fontSize: "18px",
    fontWeight: "500",
  };
  return (
    <button style={styleList}>
      <Link
        style={{ color: "inherit", textTransform: "capitalize" }}
        to={"register"}
      >
        {" "}
        {btnTxt}
      </Link>{" "}
    </button>
  );
}

export default RegisterBtn;
