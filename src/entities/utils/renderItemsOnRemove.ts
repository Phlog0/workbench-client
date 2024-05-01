import { v4 as uuidv4 } from "uuid";

const renderTiresOnRemove = (action, tireWidth) => {
    const newTireWidth = tireWidth + action;

    const tireWidthForCalc = newTireWidth - 60;


    return { newTireWidth }
}

export default renderTiresOnRemove