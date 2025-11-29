"use client"

import React, { useState } from "react"

export default function Comp2() {

    // count + - => 0~10
    const [count, setCount] = useState<number>(0);

    const onIncre = () =>{
        setCount(num => (num < 10) ? num + 1 : num);
    }

    const onDecre = ()=>{
        setCount(num => (num > 0) ? num-1 : num);
    }

    // input 값 처리 onChange
    const [text, setText] = useState<string>('');
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    // input color로 값 처리
    const [color, setcolor] = useState<string>('');
    const style = {
        color:'black',
        backgroundColor:color
    }

    return(
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" >
            <h1 className="text-3xl font-bold m-5">Comp2.tsx Page</h1>

        {/* counter */}
        <div>
            <h1 className="text-3xl font-bold text-center pb-5">0</h1>
            <div>
                <button onClick={onIncre}
                    className="bg-blue-500 text-white mr-3 px-4 py-2 rounded hover:bg-blue-700">+</button>
                <button onClick={onDecre}
                    className="bg-blue-500 text-white mr-3 px-4 py-2 rounded hover:bg-blue-700">-</button>
            </div>
        </div>
        <br />
        <div>
            <input className="p-2 font-bold bg-blue-100"
                type="text"
                name="text"
                value={text}
                onChange={onChange} />
                <br />
                <div>input 글자 출력 : {text}</div>
            </div>
            <br />
            <div>
                <h2 style={style}>BackgroundColor</h2>
                <input type="color" onChange={(e)=>{setcolor(e.target.value)}}/>
            </div>

        </div>
    )
}