import { useState } from "react";

type AddStudentFormProps = {
    onAddStudent: ({name}: {name: string}) => void; 
}
export default function AppStudentForm(props: AddStudentFormProps) { 
   const {onAddStudent} = props; 
   const [name, setName] = useState(""); 

   const handelSubmit = (e: React.FormEvent) => {

        e.preventDefault(); 
        if(!name) return; 
        onAddStudent({name})
        setName(""); 
   }

    return (
        <>
        <form onSubmit={handelSubmit} className="add-student-form">
            <label htmlFor="name"></label>
            <input 
            id="name" 
            placeholder="Enter name..." 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <button type="submit">Add student</button>
        </form>
        </>

    ); 
}