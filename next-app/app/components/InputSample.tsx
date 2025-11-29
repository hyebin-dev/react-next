import { useState } from "react"

export default function InputSample(){

    // input의 값이 변경되면 input value 값이 업데이트 되어야 함.
    // useState()로 관리
    const [ text, setText ] = useState<string>(''); // 문자 타입으로 초기 설정은 반환
    
    // e : event 해당 event의 대상이 되는 타겟의 객체(element)
    // React.ChangeEvent<HTMLInputElement>
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value);
    }
    
    return(
        <div className="flex felx-col item-center justify-center p-4">
            <input className="border boder-glay-300 p-2"
                type="text"
                name="text"
                value={text}
                onChange={onChange}
            />
            <button className="px-4 py-2 mr-5 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={()=> setText('')}
            >reset</button>
            <div>값 : {text}</div>
        </div>
    )
}