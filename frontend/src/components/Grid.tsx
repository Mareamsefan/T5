import { useState } from "react";
import Student, { StudentProps } from "./Student";

type GridProps = {
    studentList: StudentProps[]
}

export default function Grid(props:GridProps) {
    const {studentList} = props; 
    const [studentListSate, setStudentList] = useState(studentList); 

    return ( 
    <section className="grid">
        {studentListSate.map(student => <Student key={student.id} id={student.id} name={student.name}  /> )}
    </section>
    ); 
}