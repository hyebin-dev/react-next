import { userType } from "@/app/type/user"
import User from "./User";

type useProps = {
    users : userType[];
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}

export default function UserList1({users, onRemove, onToggle}: useProps) {
    return(
        <div className="flex felx-col item-center justify-center p-4">
            {
                users.map(user => (
                    <User
                        user={user}
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}/>
                ))
            }
        </div>
    )
}