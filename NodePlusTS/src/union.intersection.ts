// Union type
function formatId(id: string | number){
    return `ID ${id}`;
}

// Intersection type
type User = { name:string} & { id: number };