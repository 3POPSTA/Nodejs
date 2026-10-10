const User = require("../models/User");
const { AppError } = require("../utils/errorHandler");
const { catchAsync } = require("../utils/catchAsync");

const getUsers = catchAsync(async (request, response) => {
    const users = await User.findAll();
    response.status(200).json(users);
});

const getUserById = catchAsync(async (request, response, next) => {
    const user = await User.findById(request.params.id);
    if (!user) {
        return next(new AppError(404, 'User not found'));
    }
    response.status(200).json(user);
});

const createUser = catchAsync(async (request, response) => {
    const user = await User.create(request.body);
    response.status(201).json(user);
});

const updateUser = catchAsync(async (request, response, next) => {
    const user = await User.update(request.params.id, request.body);
    if (!user) {
        return next(new AppError(404, 'User not found'));
    }
    response.status(200).json(user);
});

const deleteUser = catchAsync(async (request, response, next) => {
    const user = await User.delete(request.params.id);
    if (!user) {
        return next(new AppError(404, 'User not found'));
    }
    response.status(200).json({ message: 'User deleted successfully', user });
});

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };