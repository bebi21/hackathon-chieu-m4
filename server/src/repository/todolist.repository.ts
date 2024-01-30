import database from "../config/db.config";

// select ten_cot from ten_bang
async function addTodos(title: string) {
  const [result] = await database.execute(
    "insert into todolist (title) values (?)",
    [title],
  );
  return result;
}
async function renderQuestion() {
  const [result]: any = await database.execute("select * from  question");
  console.log(result);
  return result;
}

async function updateTodo(title: string, id: number) {
  const [result] = await database.execute(
    "update  todolist set title = ? where id = ?",
    [title, id],
  );
  return result;
}
export { addTodos, renderQuestion, updateTodo };
