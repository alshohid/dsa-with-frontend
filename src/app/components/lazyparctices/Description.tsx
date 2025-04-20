import React from "react";
import { Flex, Typography } from "antd";

const Descriptions: React.FC<Readonly<{ text?: string | number }>> = (
  props
) => (
<Flex justify="center" align="center" style={{ height: "100%" }}>

    {props.text}

  </Flex>
);
export default Descriptions;
