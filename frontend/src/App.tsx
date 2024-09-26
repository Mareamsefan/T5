import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import { Student as StudentProps } from "./components/types";



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
  const onAddStudent =  (student: {name:string}) => {
    setStudentList((prev) => [...prev, {id: crypto.randomUUID(), ...student}]); 
   }; 
    
  return (
    <>
  <Grid studentList={studentList}  onAddStudent = {onAddStudent}/>
  <Total total={studentList.length} />
  </>
  ); 
}

export default App
