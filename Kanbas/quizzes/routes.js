// import db from "../Database/index.js";
import * as dao from "./dao.js";
import quizzesModel from "./model.js";
function QuizzesRoutes(app) {
    app.get("/api/courses/:cid/quizzes", async (req, res) => {
        try {
            const { cid } = req.params;
            const quizzes = await dao.findAllQuizzesByCourseId(cid);
            res.send(quizzes);
        } catch (error) {
            console.log(error)
        }
    });

    app.post("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const { title } = req.body;
        const newQuiz = new quizzesModel({
            title: title,
            course: cid,
        });
        const quizzes = await dao.createQuiz(newQuiz);
        res.send(quizzes);
    });

    app.delete("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        const quizzes = await dao.deleteQuiz(qid);
        res.send(quizzes);
    });

    app.put("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        const quizzes = await dao.updateQuiz(qid, req.body);
        res.send(quizzes);
    });

}
export default QuizzesRoutes;