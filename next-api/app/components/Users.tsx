import { useEffect, useState } from "react"
import { userType } from "../type/type";
import axios from "axios";
import UserOne from "./UserOne";

export default function Users(){
    // https://jsonplaceholder.typicode.com/users 
    // 경로에서 데이터 가져오기 (비동기로 가져오기 async())
    // 컴포넌트가 마운트 됐을 때 (처음 나타날 때) / 언마운트 됐을 때(사라질 때)
    // 업데이트 될 때 (특정 props가 변경될 때)
    // useEffect()

    const [ users, setUsers ] = useState<userType[] | null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);

    // 내가 선택한 id를 저장할 변수
    const [ selectedId, setSelectedId ] = useState<number | null>(null);

    // axios 별도 설치 라이브러리 npm i axios

    const fetchUser = async() =>{
        try{
            // 요청이 시작되기 전 error, loading, users 값 세팅
            setError(null);
            setUsers(null);
            setLoading(true);

            // 데이터 가져오기
            const response = await axios.get<userType[]>('https://jsonplaceholder.typicode.com/users')
            console.log(response.data);
            setUsers(response.data);

        } catch (err: any) {
            setError(err);
        }

        // 로딩이 끝나고 난 후 설정변경
        setLoading(false);
    }

    // callbackFunction : 처음 마운트 될 때 실행할 함수 호출
    // deps : 업데이트 될 때 props 값으로 채움. 비우면 처음 마운트될 때의 함수 호출
    useEffect(()=>{
        fetchUser();
    },[]);

    if(loading) return <div>loading...</div>
    if(error) return <div>error...</div>
    if(!users) return <div>null</div>

    return(
        <div>
            <h1>users axios 예제</h1>
            <ul>
                {
                    users.map(user => (
                        <li className="p-2"
                            key={user.id}
                            onClick={()=> setSelectedId(user.id)}
                            style={{
                                cursor:'pointer',
                                backgroundColor: selectedId === user.id ? 'lightblue' : 'transparent'
                            }} >
                            {user.username}({user.name})/ {user.phone} : {user.website}({user.email})
                            <hr className="border border-gray-300" />
                        </li>
                    ))
                }
            </ul>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={fetchUser}
                >불러오기</button>
            </div>
            {/* user를 선택하면 해당 유저의 정보를 component로 출력 */}
            {/* 조건부 랜더링 && */}
            {/* 조건 && (...) : 조건이 null 또는 false가 아니라면 (..) 구문이 랜더링 */}
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