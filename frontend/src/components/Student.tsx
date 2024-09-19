import Avatar from "./Avatar";

export type StudentProps = {
    id: string, 
    name: string
}
export default function Student(props: StudentProps){
    const {id, name} = props; 
    return (
        <div>
        <p className="student-name">{name}</p>
        <Avatar name={name} />
        </div>
    ); 
} 

