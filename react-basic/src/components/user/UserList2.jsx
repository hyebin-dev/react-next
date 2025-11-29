import { useRef, useState } from "react";
import UserList1 from "./UserList1";
import CreateUser from "./CreateUser";

const UserList2 = ()=>{

    // users의 객체에 (등록, 삭제) 하기 위한 컴포넌트
    // users의 객체에 등록, 삭제, 수정 하기 위해 useState()로 관리
    const [users, setUsers] = useState(
        [
        {
            id:1,
            username: 'hong',
            email: 'publicHong@naver.com',
            active: true
        },
        {
            id:2,
            username: 'kim',
            email: 'kim@gmail.com',
            active: false
        },
        {
            id:3,
            username: 'lee',
            email: 'leeTest@gmail.com',
            active: false
        }
    ]
    );

    // id 설정
    const nextId = useRef(4); // 추가할 때 사용될 id 값 설정

    // CreateUser 값을 관리
    const[ inputs, setInputs ] = useState({
        username:'',
        email:''
    });

    const { username, email } = inputs; // 구조분해

    // onChange() 설정
    const onChange = (e) =>{
        const { name, value } = e.target; // input name="" value=""
        setInputs({
            ...inputs, // 기존 inputs 복사
            [name] : value
        });
    };

    // onCreate() 설정 => 추가
    // 객체를 생성하여 => users 배열에 추가
    const onCreate = ()=>{
        // onChange() 실행하면 inputs 값을 배열에 추가
        const user = {
            id: nextId.current, // 객체의 현재 값
            username: username, // key:value 값이 같을 때 생략 가능
            email: email,
            active: false
        }

        // push / pop은 안씀 : 원본의 데이터가 변경되는 값은 쓰지 않음.
        //setUsers([...users, user]);
        setUsers([...users].concat(user)); // 성능 개선 시 편함. 
        
        //nextId 값을 1증가
        nextId.current += 1;

        // 추가 후 inputs 객체를 초기화
        setInputs({
            username:'',
            email:''
        });
    }

    // onRemove() 설정
    const onRemove = (id)=>{
        // id : 파라미터의 값으로 가져온 값 (User user.id)

        // 삭제 : users.id의 값이 파라미터로 들어오는
        // id와 일치하지 않는 것만 추출
        // filter : 조건에 맞는 값만 추출하여 배열로 리턴
        setUsers(users.filter(user => user.id !== id));
    }

    // onToggle() 설정
    const onToggle = (id) =>{
        // 현재 클릭한 id의 유저 active를 자신의 값과 반대로 설정
        setUsers(
            users.map(user => user.id == id ?
                { ...user, active: !user.active } : user)
        ) 
    };

    // 활성 사용자 수 설정 : users.active = true인 인원수 
    const countActiveUser = ()=>{
        return users.filter(user => user.active).length;
    }
    const count = countActiveUser();

    return(
        <div>
            {/* 등록 컴포넌트 => CreateUser */}
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />

            {/* UserList 컴포넌트 => UserList1 users={users} */}
            <UserList1
                users={users}
                onRemove={onRemove}
                onToggle={onToggle} 
            />

            <div>활성 사용자수:{count}명</div>
        </div>


    ) 
}

export default UserList2;