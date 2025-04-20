import React from "react";
import { Watermark } from "antd";


const WaterMark = ({children}:{children:React.ReactNode}) => (
    <Watermark content={["Shohid Design", "Happy Coding"]}>
        {children}
    </Watermark>
    );

export default WaterMark;
