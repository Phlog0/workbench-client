const testReduxState = [
  {
    id: "mainScheme",
    position: { x: 0, y: 0 },
    type: "MainSchemeType",
    draggable: true,
    // className: "light",
    // style: {
    //   width: 360,
    //   height: 30,
    // },
    totalVoltageForAll: "6", //(6/10 кВ) - для всего
  },

  //========================================================== SECTION 1 & 2 ==========================================================

  {
    id: "group1",
    position: { x: 670 * 0, y: 100 },
    type: "TireNodeType",
    draggable: false,
    // className: "light",
    style: {
      width: 360,
      height: 30,
    },
    parentNode: "mainScheme",
  },
  {
    id: "group2",
    position: { x: 670 * 1, y: 100 },
    type: "TireNodeType",
    draggable: false,

    // className: "light",
    style: {
      width: 360,
      height: 30,
    },
    parentNode: "mainScheme",
  },

  //========================================================== SKAF 1 ==========================================================

  {
    id: "1",
    type: "ElectricalPanelsNodeType",
    position: { x: 30, y: 0 },
    parentNode: "group1",
    draggable: false,
    currentCellOption: 0, //тип ячейки (СВ, ТСН, СР...)
    totalPowerOfAllElectricalAppliances: 0, //Суммарная мощность всех электроприборов, Вт (Для каждой ячейки. Только при ячейке - отходящей линии)
    currentTypeOfSwitchingDevice: 0, //КОММУТАЦИОННЫЙ АППАРАТ (ВВ,ВН,Р,НЕТ)
    reactiveCos:'0', //Реактивный косинус
    switchingDeviceVV: {
      type: "",
      name: "",
      manufacturer: "",
      ratedCurrent: "",
      ratedBreakingCurrent: "",
      ratedVoltage: "",
    },
    switchingDeviceVN: {
      type: "",
      name: "",
      manufacturer: "",
      ratedCurrent: "",
      ratedBreakingCurrent: "",
      ratedVoltage: "",
      numberOfGroundShafts: "",
      locationOfGroundingBlades: "",
      switchDriveLocation: "",
      locationOfTheGroundingBladeDrive: "",
    },
    switchingDeviceR: {
      type: "",
      name: "",
      manufacturer: "",
      ratedCurrent: "",
      thermalCurrent: "",
      ratedVoltage: "",
    },

    thereIsACircuitBreakers: 0, //есть предохранитель? (1/0) MySelect
    circuitBreakers: {
      type: "",
      name: "",
      manufacturer: "",
      ratedCurrentOfFuseLink: "",
    },

    currentTransformatorOption: 1, //Трансформаторы тока (2 транс. 3 обомтки) MySelect
    instrumentCurrentTransformers: {
      type: "",
      name: "",
      manufacturer: "",
      transformationRatio: "",
      accuracyClass: "",
      oneSecondThermalCurrent: "",
      typeOfService: "",
    },

    ratedCurrentOfTheMainCircuits: 0, // Номинальный ток главных цепей,А MySelect
    isThereAnOpn: 0,
    opn: {
      type: "",
      name: "",
      manufacturer: "",
      ratedOperatingVoltage: "",
      throughput: "",
      ratedDischargeCurrent: "",
      maximumContinuousPermissibleOperatingVoltage: "",
    },

    isThereAMicroprocessorProtectionDeviceAndAutomation: 0,

    microprocessorProtectionDeviceAndAutomation: {
      type: "",
      name: "",
      manufacturer: "",
    },

    isThereAnElectromagneticLocking: 0,
    electromagneticLocking: {
      type: "",
      name: "",
      manufacturer: "",
    },

    isThereAVoltageTransformers: 0,
    voltageTransformers: {
      type: "",
      name: "",
      manufacturer: "",
      ratedThreePhasePowerOfTheFirstWinding: "",
      accuracyClassOfTheFirstSecondaryWinding: "",
      ratedThreePhasePowerOfTheSecondSecondaryWinding: "",
      accuracyClassOfTheSecondSecondaryWinding: "",
      ratedThreePhasePowerOfAadditionalSecondaryWinding: "",
      accuracyClassOfSecondaryReturnWires: "",
      ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: "",
    },
    isThereAElectricityMeter: 0,
    electricityMeter: {
      type: "",
      name: "",
      manufacturer: "",
      accuracyClass: "",
    },
    transformersForOwnNeeds: {
      type: "",
      name: "",
      manufacturer: "",
      ratedPower: "",
    },
  },

  //========================================================== SKAF 2 ==========================================================

  {
    id: "2",
    type: "ElectricalPanelsNodeType",
    position: { x: 0, y: 100 },
    draggable: true,
    currentCellOption: 2,
    totalPowerOfAllElectricalAppliances: 0,
    reactiveCos:'0',
    currentTypeOfSwitchingDevice: 1,
    switchingDeviceVV: {
      type: "",
      name: "",
      manufacturer: "",
      ratedCurrent: "",
      ratedBreakingCurrent: "",
      ratedVoltage: "",
    },
    switchingDeviceVN: {
      type: "",
      name: "",
      manufacturer: "",
      ratedCurrent: "",
      ratedBreakingCurrent: "",
      ratedVoltage: "",
      numberOfGroundShafts: "",
      locationOfGroundingBlades: "",
      switchDriveLocation: "",
      locationOfTheGroundingBladeDrive: "",
    },
    switchingDeviceR: {
      type: "",
      name: "",
      manufacturer: "",
      ratedCurrent: "",
      thermalCurrent: "",
      ratedVoltage: "",
    },

    thereIsAFuseCurrent: 0,

    currentTransformatorOption: 2,
    parentNode: "",
    ratedCurrentOfTheMainCircuits: 1,
    isThereAnOpn: 0,
    opn: {
      type: "",
      name: "",
      manufacturer: "",
      ratedOperatingVoltage: "",
      throughput: "",
      ratedDischargeCurrent: "",
      maximumContinuousPermissibleOperatingVoltage: "",
    },
    isThereAMicroprocessorProtectionDeviceAndAutomation: 0,
    microprocessorProtectionDeviceAndAutomation: {
      type: "",
      name: "",
      manufacturer: "",
    },

    isThereAnElectromagneticLocking: 0,
    electromagneticLocking: {
      type: "",
      name: "",
      manufacturer: "",
    },
    instrumentCurrentTransformers: {
      type: "",
      name: "",
      manufacturer: "",
      transformationRatio: "",
      accuracyClass: "",
      oneSecondThermalCurrent: "",
      typeOfService: "",
    },
    isThereAVoltageTransformers: 0,
    voltageTransformers: {
      type: "",
      name: "",
      manufacturer: "",
      ratedThreePhasePowerOfTheFirstWinding: "",
      accuracyClassOfTheFirstSecondaryWinding: "",
      ratedThreePhasePowerOfTheSecondSecondaryWinding: "",
      accuracyClassOfTheSecondSecondaryWinding: "",
      ratedThreePhasePowerOfAadditionalSecondaryWinding: "",
      accuracyClassOfSecondaryReturnWires: "",
      ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: "",
    },

    circuitBreakers: {
      type: "",
      name: "",
      manufacturer: "",
      ratedCurrentOfFuseLink: "",
    },
    isThereAElectricityMeter: 0,

    electricityMeter: {
      type: "",
      name: "",
      manufacturer: "",
      accuracyClass: "",
    },
    transformersForOwnNeeds: {
      type: "",
      name: "",
      manufacturer: "",
      ratedPower: "",
    },
  },
];

export default testReduxState;
