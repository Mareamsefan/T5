import { Student as StudentProps } from "./types";
import Student from "./Student";
import AppStudentForm from "./AppStudentForm";


type GridProps = {
    studentList: StudentProps[], 
    onAddStudent: ({name}: {name: string}) => void; 
    onRemoveStudent: (id:string) => void;
}

export default function Grid(props:GridProps) {
  
    const {studentList, onAddStudent, onRemoveStudent} = props
    /*
    const onAddStudent = (student:StudentProps, studentList:StudentProps[]) => {
        const studentListCopy = studentList; 
        studentListCopy.push(student)
        setStudentList(studentListCopy)
    }*/ 
 
    return ( 
    <section className="grid">
        {studentList.map(student => <Student key={student.id} id={student.id} name={student.name} onRemoveStudent={onRemoveStudent} /> )}
        <AppStudentForm onAddStudent={onAddStudent}/> 
    </section>
    ); 
}