// import db from "../Database/index.js";
import * as dao from "./dao.js";
import modulesModel from "./model.js";
function ModuleRoutes(app) {
    app.get("/api/courses/:cid/modules", async (req, res) => {
        try {
            const { cid } = req.params;
            const modules = await dao.findAllModulesByCourseId(cid);
            res.send(modules);
        } catch (error) {
            console.log(error)
        }
    });

    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const { name, description } = req.body;
        const newModule = new modulesModel({
            id: 0,
            name: name,
            description: description,
            course: cid,
        });
        console.log("newModule")
        const module = await dao.createModule(newModule);
        res.send(module);
    });

    app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const modules = await dao.deleteModule(mid);
        res.send(modules);
    });

    app.put("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        // const moduleIndex = db.modules.findIndex(
        //     (m) => m._id === mid);
        // db.modules[moduleIndex] = {
        //     ...db.modules[moduleIndex],
        //     ...req.body
        // };
        const modules = await dao.updateModule(mid, req.body);
        res.sendStatus(204);
    });


}
export default ModuleRoutes;