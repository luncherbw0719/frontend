import React, { useState } from "react";
import "./styles/SchoolCard.scss";

import { Modal, Badge, Progress } from "reactstrap";

const SchoolCard = props => {
  const [open, setOpen] = useState(false);

  return (
    <div className="school-card">
      <div className="content">
        <div className="left">
          <h1>
            {props.name}{" "}
            {props.currentfunds >= props.fundgoals && (
              <Badge color="success">REACHED</Badge>
            )}{" "}
          </h1>
          <h3 className="subhead">{props.location}</h3>
        </div>
        <div className="right">
          <h3>
            Raised ${props.currentfunds} of ${props.fundgoals}
          </h3>
          <Progress
            color="info"
            value={Math.round((props.currentfunds / props.fundgoals) * 100)}
          >
            {Math.round((props.currentfunds / props.fundgoals) * 100)}%
          </Progress>
        </div>
      </div>
      <div className="donate">
        <button className="donate-btn">Donate</button>
      </div>
    </div>
  );
};

export default SchoolCard;
