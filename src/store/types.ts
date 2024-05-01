


interface position {
    x: number
    y: number
}

export interface IShkaf {
    id: string
    type: "ElectricalPanelsNodeType",
    position: position
    parentNode: null | string,
    addedToGroup: null | string,
    draggable: true,
    currentCellOption: number,
    totalPowerOfAllElectricalAppliances: number,
    currentTypeOfSwitchingDevice: number,
    reactiveCos: number,
    indexInGroup: null | number,
    switchingDeviceVV: {

        manufacturer: string,
        name: string,
        ratedBreakingCurrent: string,
        ratedCurrent: string,
        ratedVoltage: string,
        type: string,
    },
    switchingDeviceVN: {
        locationOfGroundingBlades: string,
        locationOfTheGroundingBladeDrive: string,
        manufacturer: string,
        name: string,
        numberOfGroundShafts: string,
        ratedBreakingCurrent: string,
        ratedCurrent: string,
        ratedVoltage: string,
        switchDriveLocation: string,
        type: string,
    },
    switchingDeviceR: {
        manufacturer: string,
        name: string,
        ratedCurrent: string,
        ratedVoltage: string,
        thermalCurrent: string,
        type: string,
    },

    thereIsACircuitBreakers: number, //есть предохранитель? (1/number) MySelect
    circuitBreakers: {
        manufacturer: string,
        name: string,
        ratedCurrentOfFuseLink: string,
        type: string,
    },

    currentTransformatorOption: number, //Трансформаторы тока (2 транс. 3 обомтки) MySelect
    instrumentCurrentTransformers: {
        accuracyClass: string,
        manufacturer: string,
        name: string,
        oneSecondThermalCurrent: string,
        transformationRatio: string,
        type: string,
        typeOfService: string,
    },

    ratedCurrentOfTheMainCircuits: number, // Номинальный ток главных цепей,А MySelect
    isThereAnOpn: number,
    opn: {
        manufacturer: string,
        maximumContinuousPermissibleOperatingVoltage: string,
        name: string,
        ratedDischargeCurrent: string,
        ratedOperatingVoltage: string,
        throughput: string,
        type: string,
    },

    isThereAMicroprocessorProtectionDeviceAndAutomation: number,

    microprocessorProtectionDeviceAndAutomation: {
        manufacturer: string,
        name: string,
        type: string,
    },

    isThereAnElectromagneticLocking: number,
    electromagneticLocking: {
        name: string, type: string, manufacturer: string
    },

    isThereAVoltageTransformers: number,
    voltageTransformers: {

        accuracyClassOfSecondaryReturnWires: string,
        accuracyClassOfTheFirstSecondaryWinding: string,
        accuracyClassOfTheSecondSecondaryWinding: string,
        manufacturer: string,
        name: string,
        ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: string,
        ratedThreePhasePowerOfAadditionalSecondaryWinding: string,
        ratedThreePhasePowerOfTheFirstWinding: string,
        ratedThreePhasePowerOfTheSecondSecondaryWinding: string,
        type: string,
    },
    isThereAElectricityMeter: number,
    electricityMeter: {
        name: string, type: string, manufacturer: string, accuracyClass: string
    },
    transformersForOwnNeeds: {
        manufacturer: string,
        name: string,
        ratedPower: string,
        type: string,
    },
}


export interface IStore {
    nodes: IShkaf[]
}