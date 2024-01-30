import express, { Express } from "express";
import {
  addNewToDo,
  render,
  updateTodo1,
} from "../controller/todolist.controller";

const todoRouter = async (app: Express) => {
  app.get("/question", render);
};
export default todoRouter;
