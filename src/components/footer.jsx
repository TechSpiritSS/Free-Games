import React from "react";

function currentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <div className="footer">
      <p>copyright @{currentYear()}</p>
      <p>API Credits - GamerPower</p>
      <div className="social">
        <a href="https://www.github.com/techspiritss" target="_blank">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sidharthsethiss" target="_blank">
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://techspiritss.github.io/Sidharth_Sethi/"
          target="_blank"
        >
          <i className="fa fa-briefcase"></i>
        </a>
      </div>
    </div>
  );
}
