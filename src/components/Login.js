import React from 'react'
import '../styles/Login.css'
import {Link, NavLink} from 'react-router-dom'
const Login = () => {
  
  return (
        <div className="login">
            <div className="container">
            <div className="twitter">
                <img src="https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__" alt="" />
            </div>
            <div className="title">
                <div>Log in to Twitter</div>
            </div>
            <div className="inputs">
                <form>
                    <input required placeholder='Phone number, email address' type="email" className="mail" />
                    <input required placeholder='tele' type="password" />
                    <button type='submit'>Login</button>
                </form>
            </div>
            <div className="foot">
                <div>
                    Forgot password?
                </div>
                <div>
                   <Link to={'/register'}>
                   <span className="blue">Sign up to Twitter</span>
                   </Link>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Login