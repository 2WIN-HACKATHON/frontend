import React, { Component} from 'react'
import './resources/Signup.css'


class SignUp extends Component{
  render(){
    return(
      <div id="loginform">
        <FormHeader title="SignUp" />
        <Form />
        <OtherMethods />
      </div>
    )
  }
}

export default SignUp;

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Email" placeholder="Enter your Email" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="SignUp"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label> OR </label>
    <div id="iconGroup">
      <Google />
    </div>
  </div>
);

const Google = props => (
  <>
  
  <a href="#" id="googleIcon"></a>
  <button className="btn-confirm" >Continue With Google</button>
  
  </>
  
);
