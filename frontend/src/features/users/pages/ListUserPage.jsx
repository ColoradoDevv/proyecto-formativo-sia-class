import { userColumns } from "../table/UserColumns.jsx";
import { Button, DataTable } from "@/shared";
import { Link } from "react-router-dom";

import ReportConfigModal from "../reports/components/ReportConfigModal.jsx";
import { useState } from "react";
import { users } from "../../../../data/users/users.js";

export default function ListUserPage() {

    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

    return (
    <div className="p-6">
        <div className="flex justify-between mb-6">
            <h1 className="text-xl font-semibold mb-4">Usuarios</h1>

            <div className="flex gap-6">
                <Button
                    variant="secondary" 
                    onClick={() => setIsReportModalOpen(true)}
                >
                    Reporte
                </Button>


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

        <ReportConfigModal
            isOpen={isReportModalOpen}
            onClose={() => setIsReportModalOpen(false)}
        />
    </div>
    );
}
