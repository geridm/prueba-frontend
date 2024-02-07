import React from "react";

const UsersList = ({ users }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Departamento</th>
            <th>Cargo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr>
                <td>{user.usuario}</td>
                <td>{user.primerNombre} {user.segundoNombre}</td>
                <td>{user.primerApellido} {user.segundoApellido}</td>
                <td>{user.departamento?.nombre}</td>
                <td>{user.cargo?.nombre}</td>
                <td>
                    <button><box-icon name='trash'></box-icon>Eliminar</button>
                    <button><box-icon name='edit-alt' ></box-icon>Editar</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
