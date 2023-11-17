import React from "react";
import MySelect from "../shared/MySelect";
import { useAppSelector } from "../hook";
const FilterItems = () => {
  // const { data, error, isLoading } = useFetchAllOPNQuery();

  const filterTrans = () => {};
// const items = useAppSelector(state=>state.dictAPI)
  return (
    <div>
      <MySelect
        options={["1", "2", "3"]}
        current={1}
        label={"Фильровать количество катушек"}
        tag={"KatushkaFilter"}
      />
    </div>
  );
};

export default FilterItems;
