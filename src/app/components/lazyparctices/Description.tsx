import React from "react";
import { Flex, Typography } from "antd";

const Descriptions: React.FC<Readonly<{ children: React.ReactNode }>> = (
  props
) => (
  <Flex justify="center" align="center">
    <div className="p-4">{props.children}</div>
  </Flex>
);
export default Descriptions;
