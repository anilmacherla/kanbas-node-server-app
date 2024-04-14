import modulesSchema from './schema.js';
import mongoose from 'mongoose';
const modulesModel = mongoose.model('ModulesModel', modulesSchema);
export default modulesModel;