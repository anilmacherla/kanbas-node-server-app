import quizzesSchema from './schema.js';
import mongoose from 'mongoose';
const quizzesModel = mongoose.model('QuizzesModel', quizzesSchema);
export default quizzesModel;