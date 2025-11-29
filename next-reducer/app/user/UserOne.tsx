// users에서 id를 전달받아
// https://jsonplaceholder.typicode.com/users/id
// 가져와서 출력

import { useEffect, useState } from "react";
import { User, userType } from "../type/type";
import axios from "axios";

type userProps = {
    idx: number;
}

// {idx}: {idx:number}

async function getUser(idx: number){
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idx}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default function UserOne({idx}: userProps){

    const [ user, setUser ] = useState<User | null>(null);

    useEffect(()=>{
        //setUser(getUser(idx));
        const fetchUser = async ()=>{
            const tmp = await getUser(idx);
            setUser(tmp);
        };
        fetchUser();
    },[idx])

    if(!user) return <div> error...! </div>

    return(
        <div>
            <ul className="m-5 border-2 p-4">
                <li><h2 className="text-2xl text-bold">{user.name}</h2></li>
                <li><b>Username : {user.username}</b></li>
                <li><b>Email : {user.email}</b></li>
                <li><b>Website : {user.website}</b></li>
                <li><b>Phone: {user.phone}</b></li>
                {/* <li><b>Company: {user.company.name}</b></li> */}
            </ul>
        </div>
    )
}