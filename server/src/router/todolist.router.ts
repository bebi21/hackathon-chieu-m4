import express, { Express } from "express";
import {
  addNewToDo,
  render,
  renderA,
  updateTodo1,
} from "../controller/todolist.controller";

const todoRouter = async (app: Express) => {
  app.post("/question", render);
  app.get("/answer", renderA);
};
export default todoRouter;
