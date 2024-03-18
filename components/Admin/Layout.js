import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({children}){
    return(
        <div className="bg-[#1D1B16]">
            <Header/>
            <div className="flex border-t-2 border-[#2b2821] ">
            <Sidebar/>
            <div className="flex-grow p-4">
            {children}
            </div>
            </div>
        </div>
    )
}