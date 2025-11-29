import { useRef, useState } from "react"

export default function InputSample2(){

    const [ inputs, setInputs ] = useState({
        // 여기서 사용할 객체 이름
        name:'',
        nick:''
    })

    const {name, nick} = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    // null! : 절대 null이 아니라고 확신할 때 사용
    // const nameInput = useRef<HTMLInputElement>(null!);
    const nameInput = useRef<HTMLInputElement | null>(null);

    const onReset = () =>{
        setInputs({
            name:'',
            nick:''
        })
        // ?선택적 체이닝
        nameInput.current?.focus();
    }


    
    return(
        <div className="flex felx-col item-center justify-center p-4">
            <input className="border boder-glay-300 p-2"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                ref={nameInput}
            />
            <input className="border boder-glay-300 p-2"
                type="text"
                name="nick"
                value={nick}
                onChange={onChange}
            />
            <button className="px-4 py-2 mr-5 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={onReset}
            >reset</button>
            <div className="mt-2">값 : {name} / {nick} </div>
        </div>       
    )
}