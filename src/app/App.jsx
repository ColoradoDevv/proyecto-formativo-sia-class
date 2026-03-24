import { CreateUserPage } from "@/features/users";

export default function App(){
    return(
        <div className="text-center grid grid-cols-1 gap-4">
            <h1 className="text-white text-4xl font-bold bg-cyan-800 p-6">
                SIA - Proyecto Formativo
            </h1>

            <CreateUserPage/>
        </div>
    );
}