import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* <!-- Sidebar - Brand --> */}
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div class="sidebar-brand-icon rotate-n-15">
              <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Identity <sup>1</sup></div>
      </a>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider my-0"/>

      {/* <!-- Nav Item - Dashboard --> */}
      <li class="nav-item">
        <Link class="nav-link" to="/">
          <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/constitution">
          <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Constitution</span></Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/register-constitution">
          <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Enregistrement constitution</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/validation">
          <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Validations</span></Link>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider"/>

      <li class="nav-item">
        <Link class="nav-link" to="/stories">
          <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Historiques</span></Link>
      </li>

    </ul>
  )
}

export default Sidebar