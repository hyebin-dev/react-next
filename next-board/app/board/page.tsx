"use client"
import BoardList from "../components/board/BoardList";

export default function Board(){
    return(
        <div>
            <h2 className="text-2xl font-semibold m-15">Board List</h2>
            <BoardList />
        </div>
    )
}