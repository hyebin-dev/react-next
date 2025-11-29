import axios from "axios";
import { useReducer } from "react";
import UserOne from "./UserOne";

export interface userType{
    id: number;
    username: string;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface stateType{
    loading: boolean;
    data: userType[] | null;
    error: string | null;
}

type Action =
{type: 'LOADING'} |
{type : 'SUCCESS', data:userType[]} |
{type : 'ERROR', error: string}

function reducer (state: stateType, action: Action){
    // loading, success, error
    switch(action.type){
        case 'LOADING' :
            return{
                loading:true,
                data: null,
                error: null
            }
        case 'SUCCESS' :
            return{
                loading:false,
                data: action.data,
                error: null
            }
        case 'ERROR' :
            return{
                loading:false,
                data: null,
                error: action.error
            }
        default:
            throw new Error(`Unhandled action type: ${(action as Action).type}`);
    }
}

export default function User(){
    //next-api의 데이터 Reducer 형태로 변경
    const [ state, dispatch ] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const [ selectedId, setSelectedId ] = 

    const fetchUsers = async () => {
        try {
            // 요청이 시작할 떄 LOADING 액션을 호출
            dispatch({type:"LOADING"});
            
            // 데이터 가져오기
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type:"SUCCESS", data:response.data});

        } catch (e:any) {
            dispatch({type:"ERROR", error: e.message})
            
        }
    }

    // 마운트 시 바로 호출 useEffect(()=>[]);

    const { loading, data:users, error } = state;

    if(loading) return <div>loading...</div>
    if(error) return <div>error...</div>

    // user가 비었다면 (아직 로딩전이라면...) 불러오기 버튼 생성
    if(!users){
        return(
            <div>

            </div>
        )
    }

    return(
        <div>
            <ul>
                users.map(user => (
                        <li className="p-2"
                            key={user.id}
                            onClick={()=> setSelectedId(user.id)}
                            style={{
                                cursor:'pointer',
                                backgroundColor: selectedId === user.id ? 'lightblue' : 'transparent'
                            }} >
                            {user.username}({user.name})/ {user.phone}
                            <hr className="border border-gray-300" />
                        </li>
                    ))
                }
                <button className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={fetchUsers}
                >불러오기</button>
            </ul>
            {
                selectedId && (
                    <div>
                        <UserOne idx={selectedId} />
                        <button className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={()=> setSelectedId(null)}
                        >닫기</button>
                    </div>
                )
            }
        </div>
    )
}