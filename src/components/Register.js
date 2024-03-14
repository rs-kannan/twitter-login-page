import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Register.css'
const Register = () => {
  return (
    <div className='register'>

      <div className="cont1">
          <div className="leftcon">
            <img src="https://s3-alpha-sig.figma.com/img/fc73/ba7a/f1e6944d750f97b53adecbabca7ffd40?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHj4MqcoD8Pt9gywdK~mGb3QpXAxpNO67y7K7kxl56NE6u2ENZoTesZW6m7teX-p-IeWHRCEYwuyN6jd~vXWAYBa8Y2Rg5iTYo2KAFKdOnrEs8BgdUCuqWb9aHsp4qlu7NirP52vkL9Xe1aiW3IxKwr4RJrGopYHqSLXM4JEPLkzpKKIK8eoQCwo6mNliI7teAMvS6uXIwWdpaHqT1MMmU0b0plwtNbj4a5Ca~tHz6sTq75PbfCOPd0CVkzbNzP4IAVh2Pts1NxsukBmGzH9FBvOFtbS0iqounqAMhBnnJWrZZXpb9LIB5nrH2RNv084HafNDnAffZP7d0pqMNB9kQ__" alt="" />
          </div>
          <div className="rightcon">
          <div className="twitter">
                <img src="https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__" alt="" />
            </div>
            <div className="toptitle">
                Happening now
            </div>
            <div className="today">
            Join Twitter today
            </div>
                <div className="options">
                  <div className="b1">
                    <Link style={{color:'inherit'}}>
                      <div className='button'>
                        <img src="https://s3-alpha-sig.figma.com/img/1f3b/b6be/728025b15ccc2ae88294e7237d0b4f03?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QTuCJ-sZKLluyeGI4KNyQp37kM~JcRBGbYw-PCVz4fGMLTfjptE2sYu-Zthj6ktoI3JuYRAYjXUMGdVs0SSd9Ag3HjBvw6jxNNZNVdVESFhkqTZsO1mbgwewgMPZttY9xEGyW20nmytSJ1PzAK3vDpISoT1fCRfEql96hnAjCX0g4v03ECgR-YjFURE3dtEkhkm9crxZcMcBtHcPvoEYkPQeMnE8ScmJL5t4U4UW2LSua0rEk4TbmVEjxvbddoNV6ANl~v5fxTh3qJpOTynVjbsdZ3dJggqhGlKljCmY71sXbTlenbW2VBGMUrzWF4LV6QMpr0f4FVXYgLCpltwElg__" alt="" />
                      <p>Sign up with Google</p>
                      </div>
                    </Link>
                  </div>
                  <div className="b1">
                    <Link style={{color:'inherit'}}>
                      <div className='button'>
                        <img src="https://s3-alpha-sig.figma.com/img/b899/5ae1/7720325906073458b3a96dc92f8f7eca?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnt8vgwfFxMFIYIMdb8hdwbboM-07hxDvIBZwNqdRtwIAU5llcX~F1f~TVTddpDC1OqIOp6b7D5P~z4Q-odsGW8X-Pfu935PYL4pI~Cjd~FBoE1BCq-P3u6H2OazeBqT9gw8kTPDiT552WtWkU-iY4ZLIG0XRZls2eHKZYwCAa0LN1UG4fbBRC2UjSp7wE89rO7Wdm5Qa74kjZM05HwBewxaZgHAlg8BvYIwj5DvQSwfv66PGPPJD4Ywbwd95tTx2BwFW3XmY9cQQbyYNfReVzX20trGi3EN~OFhEd5~b~t09tx3oDDytCoDUAF6IcY19vxplPOD8SoE6NOiNmtf4g__" alt="" />
                      <p>Sign up with Google</p>
                      </div>
                    </Link>
                  </div>
                  <div className="b1">
                    <Link to={'/signup'} style={{color:'inherit'}}>
                      <div className='button'>
                      <p>Sign up with phone or email</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="policy">
                By singing up you agree to the <span className="blue">Terms of Service</span> and <span className="blue">Privacy Policy</span>, including <span className="blue">Cookie Use</span>.
                </div>
                <div className="already">
                Already have an account? <Link to={'/'}><span className='blue'>Log in</span></Link>
                </div>
          </div>
      </div>
      <div className="lofooter">
        <ul>
          <li>About</li>
          <li>Help Center</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Ads info</li>
          <li>Blog</li>
          <li>Status</li>
          <li>Carrres</li>
          <li>Brand Resources</li>
          <li>Advertsing</li>
          <li>Marketing</li>
        </ul>
      </div>
    </div>
  )
}

export default Register