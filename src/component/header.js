/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/image" class='ms-2'>Image-Generator</Link>
          </li>
        
      </ul>
    </div>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Header;