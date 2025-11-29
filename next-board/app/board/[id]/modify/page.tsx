"use client"
import { boardList } from "@/app/data/data";
import { boardType } from "@/app/type/boardType";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function BoardModify(){
    // id에 해당하는 배열의 번지 객체 찾아오기
    // findIndex : 특정 조건을 만족하는 요소의 index 리턴
    const params = useParams();
    // const idx = boardList.findIndex(b => b.id.toString() === params.id);
    // const board = boardList[idx];

    //const boardTest = boardList.filter(b => b.id.toString() === params.id)[0];

    // async function 이용하여 DB에서 해당 데이터를 가지고 오기.
    const [ board, setBoard ] = useState<boardType | null> (null);
    const idx = params.id;

    // 수정할 데이터 보관용
    const [ form, setForm ] = useState({
        title:'',
        writer:'',
        contents:''
    });

    const { title, writer, contents } = form;
    
    useEffect(()=>{
        const getFetchBoard = async ()=>{
            try {
                const response = await fetch(`/api/board/${idx}`);
                if(response.ok) throw new Error('게시글을 불러오지 못했습니다.');
                const data = await response.json();
                setBoard(data);
                // 수정할 form 객체에도 셋팅
                setForm(data);
            } catch (error) {
                console.log(error);
                setBoard(null);
            }
        }
        getFetchBoard();
    },[idx]);

    // 수정 데이터 값 onChange
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // 수정 데이터 DB 등록
    const onSubmit = async () => {
        const response = await fetch(`/api/board/${idx}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(form)
        });

        // 실행 후 이동할 경로
        window.location.href=`/board/${idx}`;
    }
    
    if(!board) return <div className="container w-300 mx-auto my-10">Not Found!!</div>

    return(
        <div className="w-full mx-auto">
            <h2 className="text-2xl text-center font-semibold m-15"
            >{board.id}번 게시글 수정</h2>
            <form className="flex flex-col space-y-4 w-300 mx-auto">
                <input 
                    type="text" 
                    name="title"
                    value={title}
                    placeholder="title..."
                    className="p-2 border rounded"
                    onChange={onChange}
                />
                <input 
                    type="text"
                    name="writer" 
                    value={writer}
                    readOnly
                    placeholder="writer..."
                    className="p-2 border rounded"
                    onChange={onChange}
                />
                <textarea 
                    className="p-2 border rounded"
                    name="contents"
                    value={contents}
                    placeholder="contents..."
                    cols={30}
                    rows={10}
                    onChange={onChange}
                >
                </textarea>
                </form>

                <div className="text-center">
                    <Link href={"/board"}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                        >list</button>
                    </Link>
                    
                    <button className="bg-amber-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                        onClick={onSubmit}
                    >modify</button>
                    <Link href={`/board/${board.id}`}>
                        <button className="bg-red-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                        >reset</button>
                    </Link>
                </div>
            
        </div>
    )
}