
type StudentProps = {
    id: string, 
    name: string
}
const Student =(props: StudentProps) => {
    const {id, name} = props; 
    return <h1>{name}</h1>
} 

export default Student; 