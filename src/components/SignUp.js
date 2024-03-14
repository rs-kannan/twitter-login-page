import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/SignUp.css'
const SignUp = () => {
    const [type,setType] = useState(true)
    const navigate = useNavigate()
    const success =()=>{
        alert('Login sucessfull!')
        navigate('/')
    }
  return (
    <div className='signup'>
        <div className="signup2">
            <div className="twitter" style={{display:'flex',justifyContent:'center'}}>
                    <img style={{width:'30px',height:'25px'}} src="https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__" alt="" />
                </div>
                <div className="create">
                    Create an account
                </div>
          <form action="">
                <div className="details">
                    <input required placeholder='Name' type="text"  />
                    <input required placeholder={type ?"Phone number" : 'email'} type={type ?"number" : 'email'} />
                </div>
                <div className="use" onClick={()=>setType(!type)}>
                    <span className="blue" >Use email</span>
                </div>
        
            <div className="bob">
                <h5>Date of birth</h5>
                <div className="contents">
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
                </div>

                <div className="date">

                </div>
                <button type='submit' className="next" >
                    <span onClick={()=>success()}> 
                        Next
                    </span>
                </button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp