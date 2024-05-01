export const currentCellArray = [
    "ТСН (Трансформатор собсвтенных нужд)",
    "Шинный мост",
    "СВ (Секционный выключатель)",
    "СР (Секционный разъединитель)",
    "Шинный переход",
    "Ввод",
    "Отходящая линия",
    "УКРМ (Устройство компенсации реактивной мощности)",
    "ТН (Трансформатор напряжения)",
];
export const currentSwitchingDeviceArray = [
    "Нет",
    "ВВ (Вакуумные выключатели)",
    "ВН (Выключатели нагрузки)",
    "СР (Секционный разъединитель)",
    "Р (Разъединители)",
];

export const currentTransformers = [
    "нет",
    "2 Трансформатора тока 2 обмотки",
    "2 Трансформатора тока 3 обмотки",
    "2 Трансформатора тока 4 обмотки",
    "3 Трансформатора тока 2 обмотки",
    "3 Трансформатора тока 3 обмотки",
    "3 Трансформатора тока 4 обмотки",
];


export const currentSwitchingDevice = (item) => {
    switch (item.currentTypeOfSwitchingDevice) {
        case 0:
            return "---";
        case 1:
            return `${currentSwitchingDeviceArray[1]} ${item?.switchingDeviceVV.name || "?"
                }`;

        case 2:
            return `${currentSwitchingDeviceArray[2]} ${item?.switchingDeviceVN.name || "?"
                }`;

        case 3:
            return `${currentSwitchingDeviceArray[3]} ${item?.switchingDeviceR.name || "?"
                }`;

        default:
            break;
    }
};
export const currentTransformersPower = (item) => {
    switch (item.currentTransformatorOption) {
        case 0:
            return "---";



        default:
            return `${item?.instrumentCurrentTransformers.transformationRatio || "?"
                }`;
            break;
    }
};
export const currentTransformersQuantity = (item) => {
    switch (item.currentTransformatorOption) {
        case 0:
            return "---";

        case 1:
        case 2:
        case 3:
            return 2;
        case 4:
        case 5:
        case 6:
            return 3;

        default:
            break;
    }
};


export const currentTransformersAccuracyClass = (item) => {
    switch (item.currentTransformatorOption) {
        case 0:
            return "---";



        default:
            return `${item?.instrumentCurrentTransformers.accuracyClass || "?"
                }`;

    }
};
export const voltageTransformerPower1 = (item) => {
    if (item.currentCellOption !== 8 && item.isThereAVoltageTransformers !== 1) return "---";

    return `${item?.voltageTransformers.ratedThreePhasePowerOfTheFirstWinding || "?"
        }`;


};
export const voltageTransformerPower2 = (item) => {
    if (item.currentCellOption !== 8 && item.isThereAVoltageTransformers !== 1) return "---";

    return `${item?.voltageTransformers.ratedThreePhasePowerOfTheSecondSecondaryWinding || "?"
        }`;


};
export const voltageTransformersAccuracyClass1 = (item, selectOption, prop) => {
    if (item.currentCellOption !== 8 && item.isThereAVoltageTransformers !== 1) return "---";

    return `${item?.voltageTransformers.accuracyClassOfTheFirstSecondaryWinding || "?"
        }`;


};
export const voltageTransformersAccuracyClass2 = (item) => {
    if (item.currentCellOption !== 8 && item.isThereAVoltageTransformers !== 1) return "---";

    return `${item?.voltageTransformers.accuracyClassOfTheSecondSecondaryWinding || "?"
        }`;


};
export const electircityMeter = (item) => {
    if (!item.isThereAElectricityMeter) return "---";

    return `${item?.electricityMeter.type || "?"
        }`;


};
export const microProc = (item) => {
    if (!item.isThereAMicroprocessorProtectionDeviceAndAutomation) return "---";

    return `${item?.microprocessorProtectionDeviceAndAutomation.name || "?"
        }`;


};
export const opn = (item) => {
    if (!item.isThereAnOpn) return "---";

    return `${item?.opn.name || "?"
        }`;


};
export const electromagneticLocking = (item) => {
    if (!item.isThereAnElectromagneticLocking) return "---";

    return `${item?.electromagneticLocking.name || "?"
        }`;


};