import DataTable from "@/shared/components/DataTable";
import { userColumns } from "../table/UserColumns.jsx";
import { users } from "../../../../data/users/users";
import { Button } from "@/shared";
import { Link } from "react-router-dom";

export default function ListUserPage() {
  return (
    <div className="p-6">
        <div className="flex justify-between mb-6">
            <h1 className="text-xl font-semibold mb-4">Usuarios</h1>

            <div className="flex gap-6">
                <Link to="/dashboard/crear-usuario">
                    <Button
                        variant="secondary" 
                    >
                        Reporte
                    </Button>
                </Link>


                <Link to="/dashboard/crear-usuario">
                    <Button
                        variant="primary"
                    >
                        Crear Usuario
                    </Button>
                </Link>


            </div>
        </div>

        <DataTable data={users} columns={userColumns} />
    </div>
  );
}
