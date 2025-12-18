import axios from "axios";

async function getblogs(){
   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
   return response.data;
}

export default async function blogs(){
    const blogs = await getblogs()
    return (
        <div>
            <h1 className="text-4xl">Blogs Page</h1>
            {JSON.stringify(blogs)}
        </div>
    )
}