import { useState } from "react";

const InputSample = ()=>{

    // input value 값의 변수 useState로 관
    const [text, setText] = useState(''); // 문자의 초기값은 공백

    // text 변수에 input에서 쓰이는 글자가 저장되는 과정.
    // input에 값이 (적히거나, 삭제되거나) 변화할 때마다 text가 변경되는 함수
    // onChange => input의 상태가 변경될 때마다 실행

    const onChange = (e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }

    // 초기화 버튼
    const onClick = ()=>{
        setText('');
    }

    return(
        <div className="inputSample">
            {/* value => 내가 입력한 값 */}
            <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)}/>

            <button onClick={()=>setText('')}>초기화</button>
            <div>
                <b>값 : {text} </b>
            </div>
        </div>
    )
}

export default InputSample;