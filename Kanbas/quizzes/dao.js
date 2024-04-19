import quizzesModel from "./model.js";

export const createQuiz = (quiz) => {
    const ans = quiz.save();
    return ans;
}

export const updateQuiz = (id, quiz) => {
    return quizzesModel.updateOne({ _id: id }, { $set: quiz });
}

export const deleteQuiz = (id) => {
    return quizzesModel.deleteOne({ _id: id });
}

export const findAllQuiz = () => {
    return quizzesModel.find();
}

export const findAllQuizzesByCourseId = (courseId) => {
    try {
        return quizzesModel.find({ course: courseId });
    } catch (error) {
        console.log(error)
    }
}