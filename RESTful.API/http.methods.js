import express from "express";
const app = express();
const port = 3000;

// Middleware for parsing JSON
app.use(express.json());

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET - Retrieve all users
app.get("/api/users", (request, response) => {
    response.json(users);
});

// GET - Retrieve a specific user
app.get("/api/users/:id", (request, response) => {
    const user = users.find(u => u.id === parseInt(request.params.id));
    if (!user) {
        return response.status(404).json({
            message: 'User not found'
        });
    }
    response.json(user);
});

// POST - Create a new user (Fixed missing slash)
app.post("/api/users", (request, response) => {
    // Safer ID generation
    const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    
    const newUser = {
        id: nextId,
        name: request.body.name,
        email: request.body.email
    };
    users.push(newUser);
    response.status(201).json(newUser);
});

// PUT - Update a user completely
app.put("/api/users/:id", (request, response) => {
    const user = users.find(u => u.id === parseInt(request.params.id));
    if (!user) return response.status(404).json({ message: 'User not found' });

    user.name = request.body.name;
    user.email = request.body.email;

    response.json(user);
});

// DELETE - Remove a user (Fixed path pluralization and request.params.id)
app.delete("/api/users/:id", (request, response) => {
    const userIndex = users.findIndex(u => u.id === parseInt(request.params.id));
    if (userIndex === -1) return response.status(404).json({ message: 'User not found' });

    const deletedUser = users.splice(userIndex, 1);
    response.json(deletedUser[0]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});