const User = require("../models/User");

const getUsers = async (request,response)=>{
    try{
        const users = await User.findAll();
        response.status(200).json(users);
    }
    catch(error){
        response.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};

const getUserById = async (request,response)=>{
    try{
        const user = await User.findById(request.params.id);
        if(!user) return response.status(404).json({ message: 'User not found' });
        response.status(200).json(user);
    }
    catch(error){
        response.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
}

const createUser = async (request,response) => {
    try{
        const user = await User.create(request.body);
        response.status(200).json(user);
    }
    catch(error){
        response.status(400).json({ message: 'Error creating user', error: error.message });

    }
}

module.exports = { getUsers, getUserById, createUser };