import { propsOnRowFromExcel } from "./propsOnRowFromExcel";

const setStructure = (rowData, currentProperty) => {
    const currentProp = { ...currentProperty };

    let i = 0;
    for (const key in currentProp) {
        currentProp[key] = rowData[i];
        i++
    }

    return currentProp;

}

export const propsinAlphabet =
    (type: string, rowData: string[], props: typeof propsOnRowFromExcel) => {

        console.log(props[type]);
        return setStructure(rowData, props[type as keyof typeof props])




    }