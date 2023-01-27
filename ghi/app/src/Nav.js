import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">All Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create/automobile">Build Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">All Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create/model">Register Vehicle Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">All Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create/manufacturer">Register Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments">All Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create/appointment">Make Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales_log">All Sale Logs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create/sales_log">Make A Sales Log</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales_person">All Salesmen</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create/sales_person">Make A New Salesman</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer">All Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create/customer">Make A New Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create/technician">Hire Technician</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
