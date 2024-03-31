import db from "../Database/index.js";
function AssignmentRoutes(app) {
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments.filter((a) => a.course === cid);
        res.send(assignments);
    });
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = { ...req.body, course: cid, _id: new Date().getTime().toString() };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const aindex = db.assignments.findIndex((a) => a._id === assignmentId);
        db.assignments[aindex] = { ...db.assignments[aindex], ...req.body };
        res.sendStatus(204);
    });
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(204);
    });
}
export default AssignmentRoutes;