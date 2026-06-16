// frontend/src/features/access/components/PermissionModule.jsx


import { Checkbox, Select, Switch, Button, Input } from "@/shared";


export default function PermissionModule({   
  groupPermissions }) {


  return (
    <section className="border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Gestión usuarios</h2>


      <div className="flex flex-wrap gap-6">
        <Checkbox
          id="list_users"
          name="list_users"
          label="Listar Usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "list_users",
          )}
          onChange={() => {}}
        />

        <Checkbox
          id="create_users"
          name="create_users"
          label="Crear Usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "create_users",
          )}
          onChange={() => {}}
        />

        <Checkbox
          id="visualize_users"
          name="visualize_users"
          label="Visualizar Usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "visualize_users",
          )}
          onChange={() => {}}
        />

        <Checkbox
          id="edit_users"
          name="edit_users"
          label="Editar Usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "edit_users",
          )}
          onChange={() => {}}
        />

        <Checkbox
          id="report_users"
          name="report_users"
          label="Reportar Usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "report_users",
          )}
          onChange={() => {}}
        />

        <Checkbox
          id="delete_users"
          name="delete_users"
          label="Eliminar Usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "delete_users",
          )}
          onChange={() => {}}
        />
      </div>
    </section>
  );
}
