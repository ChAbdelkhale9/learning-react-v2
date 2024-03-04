
import { useState } from "react";

const Casi = (props) => {
  const [bg, setBg] = useState("bg-slate-500");
  const [sign, setSign] = useState(null);

  const toggleSign = () => {
    if (sign === null) {
      setSign(props.clicked ? "X" : "O");
      setBg(props.clicked ? "bg-orange-500" : "bg-blue-500");
      props.turn();
    }
  };

  return (
    <div
      className={`flex justify-center items-center text-8xl text-white h-[120px] w-[120px] ${bg}`}
      onClick={toggleSign}
    >
      <p className="disable-selection">{sign}</p>
    </div>
  );
};


export default Casi;