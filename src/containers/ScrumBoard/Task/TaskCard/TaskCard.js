import React, { Fragment } from "react";
import { Card, Badge, Popconfirm, Tooltip } from "antd";
import moment from "moment";
import { IconSvg } from "@iso/components/ScrumBoard/IconSvg/IconSvg";
import { HrBar, CardFooter, CardBody } from "../Task.style";

import { CardTitle, CardImage } from "./TaskCard.style";

let Col1,
  Col2 = "";
const TaskCard = ({ task }) => {
  // Col1 = task.column_id;
  // if (Col1 !== Col2) {
  //   Col2 = task.column_id;
  //   console.log(task);
  // }

  return (
    <Card
      style={{
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
      }}
      bodyStyle={{ padding: 0 }}
      headStyle={{ borderBottom: "none", fontSize: 14, color: "#788195" }}
      bordered={true}
    >
      <CardBody>
        <CardTitle>{task.title}</CardTitle>
        <CardImage variant="top" src={task.image}></CardImage>
      </CardBody>
      <HrBar />
    </Card>
  );
};
export default TaskCard;
