type AvatarProps = {
    name: string; 

}
const Avatar = (props:AvatarProps) => {
    const {name} = props; 
    const firstLetter = name.split("");      
    return <p>{firstLetter[0].toUpperCase()}</p>
}
export default Avatar; 