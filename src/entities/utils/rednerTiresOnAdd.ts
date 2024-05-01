import { v4 as uuidv4 } from "uuid";

const renderTiresOnAdd = (action, tireWidth, projectId, parentNode) => {
    const newTireWidth = tireWidth + action;

    const tireWidthForCalc = newTireWidth - 60;
    const newFastener = {
        id: uuidv4(),
        parentNode,
        type: "FastenerNodeType",
        style: { width: 10, height: 10 },
        position: { x: 176 + 300 * (tireWidthForCalc / 300 - 1), y: 0 },
        projectId,
        createdAt: Date.now(),

    };

    return { newTireWidth, newFastener }
}

export default renderTiresOnAdd