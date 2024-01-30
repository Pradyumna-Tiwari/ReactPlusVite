const Login = () => {
    return (
    <div className="row" style={{margin:"50px"}}>
        <div className="col-sm-4 offset-4">
            <main className="form-signin m-auto">
                <form className="login">
                    <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" />
                    <h1 className="fw-normal text-center">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary py-2" type="submit">Sign in</button>
                    
                </form>
            </main>
        </div>
    </div>
    );
}
export default Login;