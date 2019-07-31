import React from "react";
import { Card } from "semantic-ui-react";

export default function SchoolCard(props) {
  return (
    <Card
      header={props.schoolName}
      meta={props.schoolLocation}
      description="$"
      {...props.currentFunds}
    />
  )
}
