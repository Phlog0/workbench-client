

export const updateProperties = () => {
  const select = event.target;

  if (select.id === "cellType")
    dispatch(
      updateCellType({
        id: id,
        index: select.selectedIndex,
      })
    );

  if (select.id === "commutationType")
    dispatch(
      updateCommutationType({
        id: id,
        index: select.selectedIndex,
      })
    );
  if (select.id === "transformatorType")
    dispatch(
      updateTransformatorType({
        id: id,
        index: select.selectedIndex,
      })
    );
};
