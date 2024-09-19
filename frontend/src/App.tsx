import Grid from "./components/Grid";
import { StudentProps } from "./components/Student";

function App() {
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
    <>
  <Grid studentList={studentList} />
  </>
  ); 
}

export default App
