import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import { Student, Student as StudentProps } from "./components/types";



function App() {
  const student:StudentProps[] = [ 
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
  const [studentList, setStudentList] = useState<StudentProps[]>( student?? []);
  const onAddStudent =  (student: Omit<Student, "id">) => {
    setStudentList((prev) => [...prev, {id: crypto.randomUUID(), ...student}]); 
   }; 
  
   const onRemoveStudent=(id:string) => {
      setStudentList((prev) => prev.filter((student) => student.id !== id)); 
   }
  return (
    <>
  <Grid studentList={studentList}  onAddStudent = {onAddStudent} onRemoveStudent={onRemoveStudent}/>
  <Total total={studentList.length} />
  </>
  ); 
}

export default App
