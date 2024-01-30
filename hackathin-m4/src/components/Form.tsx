import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { takeQuestion } from "../store/quiz";
interface Quiz {
  amount: number;
  category: number;
  difficulty: number;
}
const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(takeQuestion(quiz));
    navigate("/begin");
  };

  const [quiz, setQuiz] = useState<Quiz>({
    amount: 4,
    category: 1,
    difficulty: 1,
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: +value });
  };
  console.log(quiz);

  return (
    <div className='justify-center flex items-center min-h-screen '>
      <form className='bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 '>
        <h2 className='text-3xl font-medium'>Setup Quiz</h2>
        <div className='flex flex-col space-y-2'>
          <label className='text-gray-600 font-medium' htmlFor='amount'>
            Number of Questions
          </label>
          <input
            type='number'
            id='amount'
            name='amount'
            className='bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300'
            value={quiz.amount}
            onChange={handleChange}
            min={2}
            max={4}
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='text-gray-600 font-medium' htmlFor='category'>
            Select Category
          </label>
          <select
            onChange={handleChange}
            value={quiz.category}
            id='category'
            name='category'
            className='bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300'>
            <option value={1}>toán</option>
            <option value={2}>văn</option>
          </select>
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='text-gray-600 font-medium' htmlFor='difficulty'>
            Select Difficulty
          </label>
          <select
            onChange={handleChange}
            value={quiz.difficulty}
            id='difficulty'
            name='difficulty'
            className='bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300'>
            <option value={1}>easy</option>
            <option value={2}>medium</option>
          </select>
        </div>

        <button
          type='button'
          onClick={handleStart}
          className='bg-yellow-600 rounde-md w-full p-2 text-white hover:bg-yellow-500'>
          Start
        </button>
      </form>
    </div>
  );
};

export default Form;
