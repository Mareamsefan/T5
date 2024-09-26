import { useState } from "react";
import { Student as StudentProps } from "./types";
import Student from "./Student";
import AppStudentForm from "./AppStudentForm";
import Total from "./Total";

type GridProps = {
    studentList: StudentProps[], 
    onAddStudent: ({name}: {name: string}) => void; 
}

export default function Grid(props:GridProps) {
  
    const {studentList, onAddStudent} = props
    /*
    const onAddStudent = (student:StudentProps, studentList:StudentProps[]) => {
        const studentListCopy = studentList; 
        studentListCopy.push(student)
        setStudentList(studentListCopy)
    }*/ 
 
    return ( 
    <section className="grid">
        {studentList.map(student => <Student key={student.id} id={student.id} name={student.name}  /> )}
        <AppStudentForm onAddStudent={onAddStudent}/> 
    </section>
    ); 
}