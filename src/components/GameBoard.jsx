import { useEffect, useState } from "react";

const GameBoard =()=>{

    const [randomNum, setRandomNum] = useState(Math.floor(Math.random()*100));
    const [choiceNum, setChoiceNum]=useState("");
    const [hint,setHint]=useState("0~100사이의 숫자를 맞춰보세요!");
    const onChangChoice=(e)=>{
        setChoiceNum(e.target.value);

    };
    const onClickCheck=()=>{
        let checkNum = parseInt(choiceNum);
        if (isNaN(checkNum)){
            setHint("숫자를 입력해주세요!")
            return;
        }
        if (0>checkNum || checkNum>99){
            setHint("숫자를 잘못 입력하셨습니다!")
            return;
        }

        if(randomNum===checkNum){
            setHint("정답입니다!")
        }
        else if(randomNum>checkNum) {
            setHint(`정답은 ${checkNum}보다 높은 숫자입니다.`);
        }
        else if(randomNum<checkNum) {
            setHint(`정답은 ${checkNum}보다 낮은 숫자입니다.`);
        }
    };

    useEffect(() => console.log(`랜덤 숫자는 ${randomNum}입니다.`), [randomNum]);
    useEffect(() => console.log(`입력한 값은 ${choiceNum}입니다.`), [choiceNum]);

    return (
    <div className=" w-full grow flex flex-col justify-center items-center">
    <div className="mb-4 text-xl font-bold">{hint}</div>
    <div>
        <input className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg" type="text" value={choiceNum} onChange={onChangChoice}/>
        <button onClick={onClickCheck} className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"> 확인 </button>
    </div>
    </div>
    );
}

export default GameBoard;