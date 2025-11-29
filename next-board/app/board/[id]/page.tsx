"use client"
import { boardList } from "@/app/data/data";
import { boardType } from "@/app/type/boardType";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function BoardDetail(){
    // id에 해당하는 배열의 번지 객체 찾아오기
    // findIndex : 특정 조건을 만족하는 요소의 index 리턴
    const params = useParams();
    // const idx = boardList.findIndex(b => b.id.toString() === params.id);
    // const board = boardList[idx];

    //const boardTest = boardList.filter(b => b.id.toString() === params.id)[0];

    // async function 이용하여 DB에서 해당 데이터를 가지고 오기.
    const [ board, setBoard ] = useState<boardType | null> (null);
    const idx = params.id;
    
    useEffect(()=>{
        const getFetchBoard = async ()=>{
            try {
                const response = await fetch(`/api/board/${idx}`);
                if(response.ok) throw new Error('게시글을 불러오지 못했습니다.');
                const data = await response.json();
                setBoard(data);
            } catch (error) {
                console.log(error);
                setBoard(null);
            }
        }
        getFetchBoard();
    },[idx]);

    // 삭제 비동기 요청 보내기
    const onDelete = async () => {
        // id를 경로에 달아서 파라미터로 보내기
        const response  = await fetch(`/api/board/${idx}`,{method:'DELETE'});
        window.location.href = "/board";
    }
    
    if(!board) return <div className="container w-300 mx-auto my-10">Not Found!!</div>

    return(
        <div className="w-full m-10">
            <h2 className="text-2xl text-center font-semibold m-15"
            >{board.id}번 게시글</h2>
            <div className="w-4/5 mx-auto my-10 bg-white shadow-lg rounded-lg border berder-bray-200 ">
                <div className="p-15">
                    <h2 className="text-xl font-semibold mb-4">
                        [{board.id}] {board.title} 
                    </h2>
                    <p className="text-sm mb-4"> 
                        {board.reg_date.substring(0, board.reg_date.lastIndexOf('T'))} {board.reg_date.substring(board.reg_date.indexOf('T')+1, board.reg_date.lastIndexOf('.'))}
                    </p>
                    <p className="text-gray-700 mb-4">
                        {board.contents}
                    </p>
                </div>

                <div className="p-4 border-t text-sm text-gray-600">
                    create on {board.reg_date.substring(0, board.reg_date.lastIndexOf('T'))} by {board.writer}
                </div>
            </div>
            <div className="text-center">
                <Link href={"/board"}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                    >list</button>
                </Link>
                <Link href={`/board/${board.id}/modify`}>
                    <button className="bg-amber-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                    >modify</button>
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                >delete</button>
            </div>
            
        </div>
    )
}