// type student = {
//     name: string;
//     age: number;
//     addr: string;
//     phone: string;
// }

interface student{
    name: string;
    age: number;
    addr: string;
    phone: string;
}

type stdProps = {
    std: student;
}

export default function Student({std}: stdProps) {
    return(
        <div className="flex justify-center">
            <b className="font bold">{std.name}({std.age})
            / {std.phone} ({std.addr})
            </b>
        </div>
    )
}