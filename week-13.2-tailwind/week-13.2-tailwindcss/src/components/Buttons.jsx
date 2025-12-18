export const Button = ({
    disabled,
    children,
    onClick,
    type,
    placeholder
}) =>{
    return  <span onclick={onClick} className={`text-white text-4xl rounded-2xl px=32 py=8 cursor-pointer ${ disabled ? "bg-blue-500" : "bg-green-400"}`}>
        <input type={type} placeholder={placeholder} className={`"bg-blue-500"  outline-none p-4`}></input>
    </span>
   
}