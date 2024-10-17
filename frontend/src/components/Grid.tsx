import { Student as StudentProps } from "./types";
import Student from "./Student";
import {PropsWithChildren} from "react";


type GridProps = {
    studentList: StudentProps[], 
   // onAddStudent: ({name}: {name: string}) => void; 
    onRemoveStudent: (id:string) => void;
}

export default function Grid(props:PropsWithChildren<GridProps>) {
  
    const {studentList, onRemoveStudent, children} = props
    /*
    const onAddStudent = (student:StudentProps, studentList:StudentProps[]) => {
        const studentListCopy = studentList; 
        studentListCopy.push(student)
        setStudentList(studentListCopy)
    }*/ 
 
    return ( 
    <section className="grid">
        {studentList.map(student => <Student key={student.id} id={student.id} name={student.name} onRemoveStudent={onRemoveStudent} /> )}
        {children}
    </section>
    ); 
      /* 
       <AppStudentForm onAddStudent={onAddStudent}/> */
}