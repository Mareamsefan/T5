import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';

const studentList = [
  {Maream: '20 år...'}, 
  {Dummy: '22 år...'}, 
  {Dummy: '26 år...'}

]; 

const app = new Hono()

app.use("*", cors()); 
app.get('/api/students', (c) => {
  return c.json(studentList)
  
}); 

app.post("/api/students", async (c) => {
  const newStudent = await c.req.json(); 
  studentList.push(newStudent); 
  return c.json(studentList); 
}); 

app.delete("/api/students/:id", async (c)=> {
  const studentToDelete = await c.req.json(); 

  return c.json('text'); 
}); 

app.patch("/api/students/:id", (c)=> {

  return c.json('text'); 
}); 


const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
