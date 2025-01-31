import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import express from 'express';
import cors from 'cors';
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
const app = express();
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
AssignmentRoutes(app)
Lab5(app);
Hello(app);
CourseRoutes(app);
app.listen(process.env.PORT || 4000);