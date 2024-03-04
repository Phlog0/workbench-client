const initialProps = {

    // currentCellOption: 1, //тип ячейки (СВ, ТСН, СР...)
    currentTypeOfSwitchingDevice: 0, //КОММУТАЦИОННЫЙ АППАРАТ (ВВ,ВН,Р,НЕТ)
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

    currentTransformatorOption: 0, //Трансформаторы тока (2 транс. 3 обомтки) MySelect
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
  }

  export default initialProps;