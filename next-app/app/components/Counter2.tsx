import { useState } from "react"

type CounterProps = {
    num?: number;
}

// props로 count 받기
// {num=0} : undefined일 때만 기본값으로 처리, null은 그대로 적용
// {num?: number} : props의 타입은 number
// num ?? 0 : 널병합 연산자 num가 null이면 0으로 처리
export default function Counter2({num=0}: CounterProps){

    const [count, setCount] = useState<number>(num ?? 0);

    return(
        <div className="m-3">
            <h1 className="text-2xl m-2">{count}</h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={()=>{setCount(count+1)}}
                >+</button>
            <button className="px-4 py-2 mx-3 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={()=>{setCount(count-1)}}
                >-</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={()=>{setCount(num)}}
                >reset</button>
        </div>
    )
}