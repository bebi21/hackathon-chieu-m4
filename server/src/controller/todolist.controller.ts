import { Request, Response } from "express";
import {
  addTodos,
  renderQuestion,
  updateTodo,
  renderAnswer,
} from "../repository/todolist.repository";

export const addNewToDo = async (req: Request, res: Response) => {
  const { title } = req.body;
  await addTodos(title);
  res.status(201).json({
    message: "Admin them thanh cong",
  });
};

export const render = async (req: Request, res: Response) => {
  const title = req.body;
  console.log(title);

  const result = await renderQuestion(title);
  res.status(200).json({
    data: result,
    message: "thanh  cong",
  });
};
export const renderA = async (req: Request, res: Response) => {
  const result = await renderAnswer();

  res.status(200).json({
    data: result,
    message: "thanh  cong",
  });
};

export const updateTodo1 = async (req: Request, res: Response) => {
  // console.log(req.params.id);
  const { id } = req.params;
  const { title } = req.body;
  const result = await updateTodo(title, +id);
  console.log(result);
  res.status(200).json(result);
};
