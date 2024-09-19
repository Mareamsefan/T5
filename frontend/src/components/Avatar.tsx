type AvatarProps = {
    name: string; 

}
export default function Avatar(props:AvatarProps){
    const {name} = props; 
    const firstLetter = name.split("");      
    return <p>{firstLetter[0].toUpperCase()}</p>
}
