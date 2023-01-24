import { NavLink } from "react-router-dom"

function Menu() {
    return <div className="menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="tasks/save/:id">
                Agregar tarea
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Perfil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="users">
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="users/save/:id">
                Agregar usuario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="categories">
                Categorias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="categories/save/:id">
                Agregar categoria
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
} 

export {Menu}