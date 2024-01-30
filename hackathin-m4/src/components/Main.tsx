import { useEffect, useState } from "react";
import { Question, takeAnswer, takeQuestion } from "../store/quiz";
import Module from "./Modal";

import { useDispatch, useSelector } from "react-redux";

const Quiz = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const [module, setModule] = useState<boolean>(false);

  const question: any = useSelector((state: any) => {
    return state.counter.value;
  });

  const answers: any[] = useSelector((state: any) => {
    return state.counter.answer;
  });

  const answerSet: any[] = answers.filter(
    (item) => item.question_id === question[index]?.question_id,
  );

  const handleNextQuestion = () => {
    console.log("idex - question", index, question.length);
    if (index == question.length - 1) {
      setModule(true);
      return;
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    
    dispatch(takeAnswer());
  }, []);
  const [count, setCount] = useState<number>(0);

  const checkAnswer = (status: number) => {
    if (index == question.length - 1) {
      if (status === 1) {
        setCount(count + 1);
      }
      setModule(true);
      setIndex(0);
      return;
    }
    if (status === 1) {
      setCount(count + 1);
      setIndex(index + 1);
      return;
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <main className='min-h-screen flex items-center justify-center'>
        {module && <Module count={count} totalQuestion={question.length} />}
        <div className='p-3 py-5 md:p-8 bg-white shadow rounded-lg max-w-[800px] w-11/12 min-h-[300px]'>
          <p className='text-right pb-2 text-green-600'>
            Number:{" "}
            <span>
              {index + 1}/
              {question && question.length > 0 ? <>{question.length}</> : <></>}
            </span>
          </p>
          <div className='mt-3'>
            <p
              className='text-center font-medium text-2xl lg:text-3xl leading-loose'
              // dangerouslySetInnerHTML={{
              //   __html: question,}}
            >
              {question && question.length > 0 ? (
                <>{question[index]?.content_question}</>
              ) : (
                <></>
              )}
            </p>
            <div className='grid grid-cols-1 my-5 space-y-2 place-content-center'>
              {answerSet.map((item, index) => {
                return (
                  <button
                    onClick={() => checkAnswer(item.status)}
                    key={index}
                    className='bg-blue-500 w-4/5 rounded-lg mx-auto text-white p-2 hover:bg-blue-400'
                    dangerouslySetInnerHTML={{
                      __html: item.content_answer,
                    }}
                  />
                );
              })}
            </div>
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
