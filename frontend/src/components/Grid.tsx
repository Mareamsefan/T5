import { useState } from "react";
import { Student as StudentProps } from "./types";
import Student from "./Student";
import AppStudentForm from "./AppStudentForm";

type GridProps = {
    studentList: StudentProps[]
}

export default function Grid(props:GridProps) {

    const [studentList, setStudentList] = useState<StudentProps[]>(props.studentList ?? []);

    /*
    const onAddStudent = (student:StudentProps, studentList:StudentProps[]) => {
        const studentListCopy = studentList; 
        studentListCopy.push(student)
        setStudentList(studentListCopy)
    }*/ 
   const onAddStudent =  (student: {name:string}) => {
    setStudentList((prev) => [...prev, {id: crypto.randomUUID(), ...student}]); 
   }; 
    
    return ( 
    <section className="grid">
        {studentList.map(student => <Student key={student.id} id={student.id} name={student.name}  /> )}
        <AppStudentForm onAddStudent={onAddStudent}/> 
    </section>
    ); 
}