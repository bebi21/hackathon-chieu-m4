import { useEffect, useState } from "react";
import { Question, takeQuestion } from "../store/quiz";
import Module from "./Modal";

import { useDispatch, useSelector } from "react-redux";

const Quiz = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const [currentQuest, setCurrentQuest] = useState<Question>({
    "question-id": ;
    "category-id": number;
    content: string;
    level: number;
  });

  const question: any = useSelector((state: any) => {
    return state.counter.value;
  });
  const handleCheck = () => {
    if (!question[index].content) {
    }
  };

  useEffect(() => {
    dispatch(takeQuestion());
  }, []);
  const handleNextQuestion = () => {
    if (index === question.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  return (
    <>
      <main className='min-h-screen flex items-center justify-center'>
        {/* <Module /> */}
        <div className='p-3 py-5 md:p-8 bg-white shadow rounded-lg max-w-[800px] w-11/12 min-h-[300px]'>
          <p className='text-right pb-2 text-green-600'>
            Number: <span></span>
          </p>
          <div className='mt-3'>
            <p
              className='text-center font-medium text-2xl lg:text-3xl leading-loose'
              dangerouslySetInnerHTML={{
                __html: question,
              }}
            />
            <div className='grid grid-cols-1 my-5 space-y-2 place-content-center'></div>
          </div>
          <div className='flex justify-center pt-4'>
            <button
              onClick={handleNextQuestion}
              className='py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700'>
              Next question
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Quiz;
