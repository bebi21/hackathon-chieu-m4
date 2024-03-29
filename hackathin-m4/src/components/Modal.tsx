import { useNavigate } from "react-router-dom";

interface Props {
  count: number;
  totalQuestion: number;
}

const Module = (props: Props) => {
  const navigate = useNavigate();
  const handleTable = () => {
    navigate("/");
  };
  return (
    <div className='absolute top-0 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,.5)]'>
      <div className=' text-center bg-white p-8 mx-auto rounded-lg max-w-[600px] w-11/12'>
        <h4 className='text-3xl pb-3 text-center font-bold'>
          Your score is <span className={"text-red-600"}>{props.count}</span>
        </h4>
        <p className='py-2'>
          You got {props.count}/{props.totalQuestion}
        </p>
        {<p className='py-2 font-medium'>Congrats!!!</p>}
        <button
          onClick={handleTable}
          className='bg-yellow-600 py-2 px-7 rounded-xl text-white mt-2 hover:bg-yellow-500'>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Module;
