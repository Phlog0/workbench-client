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






  //========================================================== SKAF 2 ==========================================================

  {
    id: "2",
    type: "ElectricalPanelsNodeType",
    position: { x: 0, y: 100 },
    draggable: true,
    parentNode: null,
    currentCellOption: 2,
    totalPowerOfAllElectricalAppliances: 0,
    reactiveCos: 0,
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
