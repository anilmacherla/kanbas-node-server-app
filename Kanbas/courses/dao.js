import courseModel from "./model.js";
export const createCourse = (course) => {
    try {
        return course.save();
    } catch (error) {
        console.log(error)
    }
}

export const updateCourse = (courseId, course) => courseModel.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => courseModel.deleteOne({ _id: courseId });


export const findAllCourses = () => courseModel.find();
export const findCourseById = (courseId) => courseModel.find({ id: courseId });
export const findCoursesByDepartment = (department) => courseModel.find({ department: department });
export const findCoursesByInstuctor = (instructor) => courseModel.find({ instructor: instructor });
