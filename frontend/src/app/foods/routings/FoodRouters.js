import React from "react";
import { Route, Routes } from "react-router-dom";
import FoodItem from "../../foods/components/FoodItem";
import AddFood  from "../components/AddFood";
import UpdateFood  from "../components/UpdateFood";

const FoodRouters = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/create-food" element={}></Route> */}
        <Route path="/:id" element={<FoodItem></FoodItem>}></Route>
        <Route path="/add-food" element={<AddFood></AddFood>}></Route>
        <Route path="/update-food" element={<UpdateFood></UpdateFood>}></Route>
      </Routes>
    </div>
  );
};

export default FoodRouters;
