"use client"

import { useSearchParams } from "next/navigation"

export default function Param3(){
    const search = useSearchParams();
    const id = search.get('id') ?? '없음';
    const nick = search.get('nick') ?? '없음';

    return(
        <div className="flex flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl text-center font-bold m-5">
                id: {id} / nick: {nick}
            </h1>
        </div>
    )
}