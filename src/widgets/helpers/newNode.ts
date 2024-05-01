const newNode = {

  type: "ElectricalPanelsNodeType",
  position: { x: 0, y: 0 },
  parentNode: null,
  addedToGroup: null,
  draggable: true,
  currentCellOption: 0, //тип ячейки (СВ, ТСН, СР...)
  totalPowerOfAllElectricalAppliances: 0, //Суммарная мощность всех электроприборов, Вт (Для каждой ячейки. Только при ячейке - отходящей линии)
  currentTypeOfSwitchingDevice: 0, //КОММУТАЦИОННЫЙ АППАРАТ (ВВ,ВН,Р,НЕТ)
  reactiveCos: 0, //Реактивный косинус
  currentOL: 0, //ТОК

  indexInGroup: null,
  switchingDeviceVV: {

    manufacturer: "",
    name: "",
    ratedBreakingCurrent: "",
    ratedCurrent: "",
    ratedVoltage: "",
    type: "",
  },
  switchingDeviceVN: {
    locationOfGroundingBlades: "",
    locationOfTheGroundingBladeDrive: "",
    manufacturer: "",
    name: "",
    numberOfGroundShafts: "",
    ratedBreakingCurrent: "",
    ratedCurrent: "",
    ratedVoltage: "",
    switchDriveLocation: "",
    type: "",
  },
  switchingDeviceR: {
    manufacturer: "",
    name: "",
    ratedCurrent: "",
    ratedVoltage: "",
    thermalCurrent: "",
    type: "",
  },

  thereIsACircuitBreakers: 0, //есть предохранитель? (1/0) MySelect
  circuitBreakers: {
    manufacturer: "",
    name: "",
    ratedCurrentOfFuseLink: "",
    type: "",
  },

  currentTransformatorOption: 0, //Трансформаторы тока (2 транс. 3 обомтки) MySelect
  instrumentCurrentTransformers: {
    accuracyClass: "",
    manufacturer: "",
    name: "",
    oneSecondThermalCurrent: "",
    transformationRatio: "",
    type: "",
    typeOfService: "",
  },

  ratedCurrentOfTheMainCircuits: 0, // Номинальный ток главных цепей,А MySelect
  isThereAnOpn: 0,
  opn: {
    manufacturer: "",
    maximumContinuousPermissibleOperatingVoltage: "",
    name: "",
    ratedDischargeCurrent: "",
    ratedOperatingVoltage: "",
    throughput: "",
    type: "",
  },

  isThereAMicroprocessorProtectionDeviceAndAutomation: 0,

  microprocessorProtectionDeviceAndAutomation: {
    manufacturer: "",
    name: "",
    type: "",
  },

  isThereAnElectromagneticLocking: 0,
  electromagneticLocking: {
    name: '', type: '', manufacturer: ''
  },

  isThereAVoltageTransformers: 0,
  voltageTransformers: {
    // type: "",
    // name: "",
    // manufacturer: "",
    // ratedThreePhasePowerOfTheFirstWinding: "",
    // accuracyClassOfTheFirstSecondaryWinding: "",
    // ratedThreePhasePowerOfTheSecondSecondaryWinding: "",
    // accuracyClassOfTheSecondSecondaryWinding: "",
    // ratedThreePhasePowerOfAadditionalSecondaryWinding: "",
    // accuracyClassOfSecondaryReturnWires: "",
    // ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: "",
    accuracyClassOfSecondaryReturnWires: "",
    accuracyClassOfTheFirstSecondaryWinding: "",
    accuracyClassOfTheSecondSecondaryWinding: "",
    manufacturer: "",
    name: "",
    ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: "",
    ratedThreePhasePowerOfAadditionalSecondaryWinding: "",
    ratedThreePhasePowerOfTheFirstWinding: "",
    ratedThreePhasePowerOfTheSecondSecondaryWinding: "",
    type: "",
  },
  isThereAElectricityMeter: 0,
  electricityMeter: {
    name: '', type: '', manufacturer: '', accuracyClass: ''
  },
  transformersForOwnNeeds: {
    manufacturer: "",
    name: "",
    ratedPower: "",
    type: "",
  },
}; //🔥🔥🔥🔥🔥🔥🔥🔥 NEW ITEM!

export default newNode;
