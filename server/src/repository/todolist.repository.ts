import database from "../config/db.config";

// select ten_cot from ten_bang
async function addTodos(title: string) {
  const [result] = await database.execute(
    "insert into todolist (title) values (?)",
    [title],
  );
  return result;
}
async function renderQuestion(title: any) {
  const [result]: any = await database.execute(
    `SELECT * FROM question WHERE category_id = ${title.category} AND level = ${title.difficulty} LIMIT ${title.amount}`,
  );
  console.log(result);
  return result;
  // const [result]: any = await database.execute(
  //   "SELECT question.content_question, answer.content_answer,answer.status FROM question INNER JOIN answer ON question.question_id = answer.question_id;",
  // );
  // console.log(result);
  // return result;
}
async function renderAnswer() {
  const [result]: any = await database.execute("select * from  answer");

  return result;
}

async function updateTodo(title: string, id: number) {
  const [result] = await database.execute(
    "update  todolist set title = ? where id = ?",
    [title, id],
  );
  return result;
}
export { addTodos, renderQuestion, updateTodo, renderAnswer };
