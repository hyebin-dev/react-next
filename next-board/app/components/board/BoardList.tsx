import Link from "next/link";
import { boardList } from "../../data/data"
import { useEffect, useState } from "react";
import { boardType } from "@/app/type/boardType";

export default function BoardList(){
    // data.ts에서 sample data 가져오기
    // const board = boardList;

    const [board, setBoard] = useState<boardType[] | []>([]);

    // DB에서 가져오기
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await fetch('/api/board');
                const data = await response.json();
                setBoard(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    },[]);

    if(!board) return <div className="container w-300 mx-auto my-10">Not Found!!</div>

    return(
        <div className="container w-300 mx-auto my-10">
            <table className="table-auto border boder-gray-300 m-5 ">
                <thead>
                    <tr className="border boder-gray-300 bg-gray-200 text-xl text-center h-10">
                        <th>ID</th>
                        <th>title</th>
                        <th>writer</th>
                        <th>reg_date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        board.map(b => (
                            <tr key={b.id} className="border boder-gray-300 text-center h-10">
                                <td className="w-20">{b.id}</td>
                                <td className="w-150">
                                    <Link href={`/board/${b.id}`} className="hover:underline">
                                        {b.title}
                                    </Link>
                                </td>
                                <td className="w-50">{b.writer}</td>
                                <td className="w-80">{b.contents}</td>
                                <td className="w-80">{(b.reg_date).slice(0,10)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="text-center">
                <Link href={"/"}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700">home</button>
                </Link>
                <Link href={"/board/write"}>
                    <button className="bg-amber-500 text-white px-4 py-2 rounded m-2 hover:bg-amber-700">add</button>
                </Link>
            </div>
        </div>
    )
}