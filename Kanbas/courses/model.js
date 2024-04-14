import courseSchema from "./schema.js";
import mongoose from "mongoose";

const courseModel = mongoose.model("CourseModel", courseSchema);

export default courseModel;