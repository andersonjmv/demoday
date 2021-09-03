import React from 'react'


export const Navbar = () => {
    return (
        <div className="container-fluid">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src="https://i.imgur.com/2fS3K1n.png" alt="logo" width="50" height="42" />
                </a>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-dark">Inicio</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Nosotros</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Contacto</a></li>
                </ul>
                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-danger me-2">Acceder</button>
                    <button type="button" className="btn btn-danger">Registrarse</button>
                </div>
                {/* <div className="dropdown text-end">
                    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
                    </a>
                    <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{}}>
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}
            </header>
        </div>
        
    )
}
