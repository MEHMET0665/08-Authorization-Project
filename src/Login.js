import React from 'react';

class Login extends React.Component {

constructor(props){
  super(props)
  this.state={
    authorized:false,
    count:1
  }
  this.userCheck=this.userCheck.bind(this)
}

  userCheck=()=>{
   
    if (this.props.user.password===document.querySelector('.form-control').value){
      this.setState({
        authorized:true,
      })
    }else{ 
      this.setState({count:this.state.count+1})
      console.log(this.state.count);
      alert('your password and user name does not match');
      if (this.state.count===3){
        document.querySelector('.form-control').disabled=true;
        setTimeout(()=>{
          document.querySelector('.form-control').disabled=false;  
        },5000)
      }
 
  }
  document.querySelector('.form-control').value=""}
  render(){
  
let login = (
  <div className="card">
        <form class="form-inline" action='#'>
          <div class="form-group">
            <input type="password" class="form-control mx-sm-3" placeholder="Password" />
            <button type="submit" class="btn btn-primary" onClick={this.userCheck}>Submit</button>
          </div>
        </form>
      </div>
);
let Card=(
  <div className="card">
   <div className="top">
     <h2 className="name ">{this.props.user.name}</h2>
     <h2>{this.props.user.imgURL}</h2>
   </div>
   <div className="bottom">
   <h2>{this.props.user.phone}</h2> 
   <h2>mail={this.props.user.mail}</h2>
   </div>
 </div>
 )
return (
  <div id="authorization">
    <h1>Enter the Password</h1>
    <div>
      {this.state.authorized===false ? login:Card}
    </div>
  </div>
)
  }

}

export default Login ;