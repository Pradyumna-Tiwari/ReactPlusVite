const Header = ({ action, Setaction }) => {
    const handleOnClick = (tabName) => {        
        Setaction(tabName);

        console.log(action);
    }
    
    return (
        <>
            <div className="container">
                <div className="header d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li onClick={() => { handleOnClick("Home") }}><a href="#" className={`nav-link px-2 text-dark ${action === "Home" && "fw-bold"} `}>Home</a></li>
                        <li onClick={() => { handleOnClick("Features") }}><a href="#" className={`nav-link px-2 text-dark ${action === "Features" && "fw-bold"}`}>Features</a></li>
                        <li onClick={() => { handleOnClick("Pricing") }}><a href="#" className={`nav-link px-2 text-dark ${action === "Pricing" && "fw-bold"}`}>Pricing</a></li>
                        <li onClick={() => { handleOnClick("About") }}><a href="#" className={`nav-link px-2 text-dark ${action === "About" && "fw-bold"}`}>About</a></li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" onClick={()=>{handleOnClick("Login")}} className="btn btn-outline-dark me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;