// import { useState } from "react";
// import logo from '../asserts/image/logo.jpg';



// const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventdefault();
//         console.log(email);

//     }
//     return (
//         <>
//             <div className="LoginPageContainer">
//                 <div className="LoginPageInnerContainer">
//                     <div className="ImageContianer">
//                         <img src="https://st3.depositphotos.com/35530942/37682/v/450/depositphotos_376824262-stock-illustration-online-registration-sign-concept-young.jpg" className="GroupImage" />
//                     </div>
//                     <div className="LoginFormContainer">
//                         <div className="LoginFormInnerContainer">
//                             <div className="LogoContainer">
//                                 <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/foodies-logo-design-template-44f1cac34d28b362c02fd8079e141ad6_screen.jpg?ts=1658385175" className="logo" />
//                             </div>
//                             <header className="header"> Register </header>

//                             <form onSubmit={handleSubmit}>
//                                 <div className="inputContainer">
//                                     <label htmlFor="name">Full Name</label>
//                                     <input type="text" id="name" className="input" placeholder="Full Name" /></div>
//                                 <div className="inputContainer">
//                                     <label className="label" htmlFor="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" /><span>Email
//                                         Address*</span></label>
//                                     <input type="email" className="input" name="email" id="emailAddress" placeholder="Enter your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
//                                 </div>
//                                 <div className="inputContainer">
//                                     <label className="label" htmlFor="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
//                                         className="labelIcon" /><span>Password*</span></label>
//                                     <input type="password" className="input" name="password" id="emailAddress" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                 </div>

//                                 <button className="LoginButton" >Login</button>
//                             </form>
//                             <button onClick={() => props.onFormSwitch('sign')} className="LoginButton" >Already have an account? Sign in here</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Register;