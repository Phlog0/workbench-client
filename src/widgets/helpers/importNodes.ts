import { v4 as uuidv4 } from "uuid";

const importNodes = (items, projectId) => {


    const newMainNodeId = uuidv4();
    const oldMainNode = items.nodes.find(item => item.type === 'MainSchemeType');

    const newMainNode = { ...oldMainNode, id: newMainNodeId, projectId: projectId }


    console.log(oldMainNode, newMainNode);
    const oldTires = items.nodes.filter(item => item.type === 'TireNodeType')
    const oldTiresId = oldTires.map(item => item.id);
    const newTiresId = oldTiresId.map(item => uuidv4())
    const newTires = oldTires.map((item, index) => ({ ...item, id: newTiresId[index], parentNode: newMainNodeId, projectId: projectId }))

    console.log(newTires);


    const oldFasteners = items.nodes.filter(item => item.type === 'FastenerNodeType')
    const oldFastenersIds = oldFasteners.map(item => item.id)
    const newFastenersIds = oldFasteners.map(item => uuidv4())

    const newFasteners = oldFasteners.map((item, index) => {
        const newParentIdCandidate = oldTiresId.indexOf(item.parentNode);
        if (newParentIdCandidate !== -1) return { ...item, id: newFastenersIds[index], projectId, parentNode: newTiresId[newParentIdCandidate] }
        return { ...item, id: newFastenersIds[index], projectId }
    })

    console.log(newFasteners);

    const oldShkafs = items.nodes.filter(item => item.type === 'ElectricalPanelsNodeType')
    const oldShkafsIds = oldShkafs.map(item => item.id)
    const newShkafs = oldShkafs.map((item, index) => {
        console.log(item.parentNode);
        const newId = uuidv4();
        const newParentIdCandidate = oldFastenersIds.indexOf(item.parentNode);
        if (newParentIdCandidate !== -1) return { ...item, id: newId, projectId, parentNode: newFastenersIds[newParentIdCandidate] || null }
        // return { ...item, id: newId, projectId }


    })
    const newShkafsIds = newShkafs.map(item => item.id)


    const newEdges = items.edges.map(item => {

        return {
            ...item,
            id: uuidv4(),
            source: newShkafsIds[oldShkafsIds.indexOf(item.source)],
            target: newShkafsIds[oldShkafsIds.indexOf(item.target)],
            projectId
        }
    })
    console.log(newEdges);
    const oldStencils = items.nodes.filter(item => item.type === 'ImageNodeType')

    const newStencils = oldStencils.map(item => ({ ...item, id: uuidv4(), projectId, }))
    return {
        nodes: [
            newMainNode, ...newTires, ...newFasteners, ...newShkafs, ...newStencils
        ],
        edges: [
            ...newEdges
        ]
    }
    // return [...newShkafs]

}

export default importNodes;