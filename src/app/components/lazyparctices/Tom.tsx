"use client"
import dynamic from "next/dynamic"
import { useState } from "react"
const lazyTom = dynamic(()=>import("./TomStory"),{
  loading:()=><p> lazy Tom loading...</p>
})
import { Button} from "antd";
import TomStory from "./TomStory";
const Tom = () => {

  const [show,setShow]=useState(false)
  return (
    <div>
      <Button onClick={() => setShow(!show)} color="cyan" variant="outlined">
        show lazy loading
      </Button>
      {show && <TomStory/>}

    </div>
  );
}

export default Tom