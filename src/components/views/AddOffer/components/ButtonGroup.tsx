import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: String;
  values: string[];
  changeFunc: (e:any)=>void;
  classVal: String | string[]
}
export default function ButtonGroup({ title, values, changeFunc, classVal }: Props) {
  return (
    <>
      <h3>{title}</h3>
      <div>
        {values.map(val => (
            <motion.button
              whileTap={{ scale: 0.75 }}
              key={val}
              value={val}
              onClick={changeFunc}
              className={classVal.includes(val) ? "button-selected" : ""}
            >
              {val}
            </motion.button>
        ))}
      </div>
    </>
  );
}
