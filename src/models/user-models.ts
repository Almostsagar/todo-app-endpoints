import mongoose, { Mongoose } from "mongoose";

interface TodoI {
  title: String;
  description: String;
}

interface TodoDocument extends mongoose.Document {
  title: String;
  description: String;
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    index: true,
    
  },
  description: {
    type: String,
    required: true,
  },
});

interface todoModelInterface extends mongoose.Model<TodoDocument> {
  set(x: TodoI): TodoDocument;
}

todoSchema.statics.set = (x: TodoI) => {
  return new Todo(x);
};

const Todo = mongoose.model<TodoDocument, todoModelInterface>(
  "Todo",
  todoSchema
);

Todo.set({
  title: "some title",
  description: "some desc",
});

export { Todo };
