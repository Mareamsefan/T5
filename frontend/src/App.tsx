import Grid from "./components/Grid";
import { Student as StudentProps } from "./components/types";

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

function App() {

  return (
    <>
  <Grid studentList={studentList} />
  </>
  ); 
}

export default App
