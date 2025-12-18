import axios from "axios";


export default async function signin(){
    const response = await axios.get("http://localhost:3000/api/v1/user/details");
    await new Promise(resolve => setTimeout(resolve, 10000));
    const data = response.data;
    return(
         
        <div>signin page
           
            <input type="text"  placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign In</button>
            {data.name}
            {data.age}
        </div>
    )
}