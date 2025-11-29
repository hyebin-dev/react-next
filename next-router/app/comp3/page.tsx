"use client"
import Link from "next/link"
import { students } from "../data/data";
import Student from "../components/Student";
import { useState } from "react";

export default function Comp3() {

    // 다른 컴포넌트로 이동 / 데이터를 전달하는 작업
    // 데이터를 전달하는 방법 2가지
    // 1. Path Variable => /comp1/1/
    // 2. Query string => /comp1?id=1&page=3

    // Path Variable => params 객체로 접근 ([id] 동적폴더 사용)
    // Query String => searchParams 객체로 접근 (?key=value&key=value)

    const id = '홍길동';

    // id/nick 보내기 데이터 설정
    const [ inputs, setInputs ] = useState({
        idName:'',
        nick:''
    });

    const { idName, nick } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

    }

    return(
        <div className="flex flex-col justify-center bg-zinc-50 font-sans dark:bg-black ">
            <h1 className="text-3xl text-center font-bold m-5">Comp3.tsx Page</h1>
            <div>
                <div className="flex flex-col items-center gap-3">
                    {/* path variable 방법으로 Param.tsx에 값을 전달 */}
                    <Link href={`/param/${id}`}>path variable로 데이터 전달</Link>

                    {/* query string 방법으로 Param2.tsx에 값을 전달 */}
                    <Link href={`/param?page=2&no=10&name=${id}`}>query string 여러개의 데이터 전달</Link>
                </div>

                <div className="flex flex-col items-center gap-3">
                    {/* students 데이터를 가져와서 출력 */}
                    {/* students 데이터를 클릭하면 param.tsx로 학생의 이름을 전달 */}
                    {
                        students.map((s)=>(
                           <Link href={`/param/${s.name}`}>
                                <Student std={s} />
                           </Link>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center gap-3">
                    {/* input id, nick 전송   /param2?id=&nick */}
                    <input className="p-2 font-bold bg-blue-100 rounded ml-5" 
                        type="text"
                        name="idName"
                        value={idName}
                        placeholder="id..."
                        onChange={onChange} />
                    <input className="p-2 font-bold bg-blue-100 rounded ml-5" 
                        type="text"
                        name="nick"
                        value={nick}
                        placeholder="nickName..."
                        onChange={onChange} />
                    <Link href={`/param2?id=${idName}&nick${nick}`}>
                        <button className="bg-blue-500 text-white ml-3 px-4 py-2">전송</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}