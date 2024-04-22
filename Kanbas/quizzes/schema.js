// import mongoose from "mongoose";
// const quizzesSchema = new mongoose.Schema({
//     id: String,
//     title: String,
//     course: String,
//     isAvailable: Boolean,
//     availableDate: String,
//     availableUntilDate: String,
//     dueDate: String,
//     points: Number,
//     questionsCount: Number,
//     published: Boolean,
//     quizType: String,
//     assignmentGroup: String,
//     accessCode: String,
//     instructions: String,
//     options: {
//         oneQAtATime: Boolean,
//         requireWebCam: Boolean,
//         lockAnswersAfterFinalSubmission: Boolean,
//         showCorrectAnswers: Boolean,
//         shuffleAnswers: Boolean,
//         doesHaveTimer: Boolean,
//         timeLimit: Number,
//         allowMultipleAttempts: Boolean,
//     }
// }, { collection: "quizzes" });
// export default quizzesSchema;
import mongoose from "mongoose";

const quizzesSchema = new mongoose.Schema({
    id: { type: String, default: "" },
    title: { type: String, default: "" },
    course: { type: String, default: "" },
    isAvailable: { type: Boolean, default: false },
    availableDate: { type: String, default: "" },
    availableUntilDate: { type: String, default: "" },
    dueDate: { type: String, default: "" },
    points: { type: Number, default: 0 },
    questionsCount: { type: Number, default: 0 },
    published: { type: Boolean, default: false },
    quizType: { type: String, default: "Graded Quiz" },
    assignmentGroup: { type: String, default: "Quizzes" },
    accessCode: { type: String, default: "" },
    instructions: { type: String, default: "" },
    options: {
        oneQAtATime: { type: Boolean, default: true },
        requireWebCam: { type: Boolean, default: false },
        lockAnswersAfterFinalSubmission: { type: Boolean, default: false },
        showCorrectAnswers: { type: Boolean, default: false },
        whenCorrectAnswer: { type: String, default: "" },
        shuffleAnswers: { type: Boolean, default: true },
        doesHaveTimer: { type: Boolean, default: false },
        timeLimit: { type: Number, default: 20 },
        allowMultipleAttempts: { type: Boolean, default: false },
    },
    queAndAns: [{
        questionTitle: {type: String, default: ""},
        questionContent: { type: String, default: "" },
        answers: [{ type: String, default: "" }],
        questionType: {type:String, default: ""},
        blanks: [{ type: String, default: "" }],
        points: {type: String}
    }]
}, { collection: "quizzes" });

export default quizzesSchema;
