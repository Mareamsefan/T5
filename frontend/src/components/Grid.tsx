import Student, { StudentProps } from "./Student";

type GridProps = {
    studentList: StudentProps[]
}
export default function Grid() {
    const studentList:StudentProps[] = [ 
       {id: '1', 
        name: 'Dummy1'
       }, 
       {id: '2', 
        name: 'Dummy2'
       },   
       {id: '3', 
        name: 'Dummy3'
       } 
    ]; 
    return ( 
    <section className="grid">
        {studentList.map(student => <Student key={student.id} id={student.id} name={student.name}  /> )}
    </section>
    ); 
}