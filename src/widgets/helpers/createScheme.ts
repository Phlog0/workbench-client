const createScheme = (tireCount: number, totalVoltage: number) => {
  // dispatch(uploadNodes([]));
  const mainScheme = {
    id: "mainScheme",
    position: { x: 0, y: 0 },
    type: "MainSchemeType",
    draggable: true,
    // style: {
    //   width: 500,
    //   height: 500,
    // },
    totalVoltageForAll: totalVoltage,
    totalPowerOfAllElectricalAppliances:'',
  };
  const tires = new Array(tireCount).fill("").map((item, index) => ({
    id: `group${index}`,
    position: { x: 670 * index, y: 100 },
    type: "TireNodeType",
    // className: "light",
    style: {
      width: 360,
      height: 30,
    },
    parentNode: "mainScheme",
    extent: "parent",
    draggable: false,
  }));
  // console.log([mainScheme, ...tires]);
  return [mainScheme, ...tires];
};

export default createScheme;
