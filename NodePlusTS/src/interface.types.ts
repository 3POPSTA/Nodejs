interface User {
    id:number;
    name: string;
    email?: string; // Optional property
};

const user1: User = {
    id: 12,
    name: "love",
}

// Type alias
type Point = {
     x: number;
    y: number;
};
