import React, { useEffect, useState } from "react";
import FilterBar from "../components/FilterBarMenu/FilterBar/FilterBar";
import FilterSort from "../components/FilterBarMenu/FilterSort/FilterSort";
import { users } from "../model/newModel"

export default {
  title: "FilterBar Menu",
  component: FilterBar
};
  



export const normal = () => {
    return  <FilterBar user={users.c8dc5864}/>

};
