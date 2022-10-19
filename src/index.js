import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import Product from "./Product";
import {Button} from './Button'
import {TaskCard} from './Task'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard/>
    {/* <Button text='Click me'/>
    <Button text='Pay'/>
    <Button text='Go to' name = 'javier'/> */}
    {/* <Product
      title="papaleta"
      amount={3000}
      married={false}
      points={[10, 20, 30.3]}
      address={{ street: "123 main road", city: "new york" }}
    />
    <Greeting/> */}
  </>
);
