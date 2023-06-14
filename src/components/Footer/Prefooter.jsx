import React from "react";
import { useLocation } from "react-router-dom";

function Prefooter() {
  const location = useLocation();
  const loc = location.pathname;
  return (
    <div className={loc === "/" ? "none" : "prefooter"}>
      <h3>Vous souhaitez nous soutenir ?</h3>
      <div>
        <a
          href="https://www.helloasso.com/associations/association-educanoo"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="button_style button_white_blue">
            Faire un don
          </button>
        </a>
        <a
          href="https://www.helloasso.com/associations/association-educanoo"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="button_style button_white_blue">
            Adhérer à l'association
          </button>
        </a>
      </div>
    </div>
  );
}

export default Prefooter;
