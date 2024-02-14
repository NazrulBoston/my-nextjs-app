import Counter from "@/components/Counter/Counter";
import error from "./error";



const HomePage = () => {
// throw new error();
  return (
    <div >
      <p className='text-3xl'>This is NEXT.js application </p>
      <Counter></Counter>


    </div>

  );
};

export default HomePage;