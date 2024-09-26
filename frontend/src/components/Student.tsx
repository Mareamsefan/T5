import { useState } from "react";
import Avatar from "./Avatar";
import { Student as StudentProps } from "./types";

export default function Student(props: StudentProps & {
    onRemoveStudent: (id:string) =>void; 
}){
    const {id, name, onRemoveStudent} = props; 
    const [hovered, sethovered] = useState<boolean>(false); 

    const updateShowState= () => {
        sethovered(true)
    }
    const setShowRemove = () => {
        sethovered(false)
    }

    return (
        <div id="student" onMouseOver={updateShowState} onMouseLeave={setShowRemove}>    
        <p className="student-name">{name}</p>
        <Avatar name={name} />
        {hovered && (
            <button type="button" onClick={()=> {onRemoveStudent(id)
                console.log({id})
            }}>Delete student</button>
        )}
        </div>
        
    ); 
} 

