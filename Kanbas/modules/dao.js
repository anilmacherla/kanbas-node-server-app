import modulesModel from "./model.js";
import mongoose from "mongoose";

export const createModule = (module) => {
    const ans = module.save();
    return ans;
}

export const updateModule = (id, module) => {
    return modulesModel.updateOne({ _id: id }, { $set: module });
}

export const deleteModule = (id) => {
    return modulesModel.deleteOne({ _id: id });
}

export const findAllModules = () => {
    return modulesModel.find();
}

export const findAllModulesByCourseId = (courseId) => {
    try {
        return modulesModel.find({ course: courseId });
    } catch (error) {
        console.log(error)
    }
}