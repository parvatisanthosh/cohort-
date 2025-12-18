export function SidebarClass(){
    return <div className="flex"> 
        <div className="bg-red-200 w-96 h-screen hidden md:block" > Sidebar </div>
        <div className="bg-green-800 w-full">Content</div>
    </div>
}