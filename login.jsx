import React,{useState,useRef} from "react";

const Login=()=>{
  const [msg,setMsg]=useState(" ");
  const username=useRef();
  const password=useRef();

  const login=()=>{
    if(username.current.value==="admin" && password.current.value==="admin123")
    {
      setMsg("your logined successfully-------")
    }
    else {
      setMsg("please enter valid username and password");
    }
  }

  return(<>
    <div>
      <h1> login form </h1>
      User Name:<input type="text" ref={username}/>
      <p></p>
      password:<input type="password" ref={password}/>
      <p></p>
      <button onClick={login}>login</button>
    </div>
    <hr></hr>
    <p>{msg}</p>
  </>)
}

export default Login;
