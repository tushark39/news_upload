import React from 'react'
import { apiURL } from '../helper/API';
import axios from 'axios'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name:"",
            isAuthenticated: false,
            isLoading:false
        }
    }
    handleSubmit = () => {
        document.getElementById("test").style.visibility = "hidden";
        this.setState({isLoading:true})
            axios.post(`${apiURL}/users/login/`,{
                "email":this.state.email,
                "password":this.state.password
            }).then(res=>{
                console.log(res);
                localStorage.setItem('tokenInternTheEGuardians',res.data.token)
                localStorage.setItem('nameInternTheEGuardians',res.data.user.name)
                if (res.status===200) {
                   let name = res.data.user.name;
                    this.setState({
                        name:name,
                        isLoading:false,
                        isAuthenticated:true
                    })
                    
                } else {

                    console.log("Failed login");
                }
            })
            .then(()=>{
                window.location.reload()
            })
            // .catch(e=>e.message ?   : "")
            .catch(e=>{
                if (e.message) {
                    document.getElementById("test").style.visibility = "visible";
                    console.log("Login Failed");
		    this.setState({isLoading:false});
                } else {
                    return ""
                }
            } )
    }
    render() {
        return (
            <div className="upload-form">
                <h3 className="section-title">Login</h3>
                <p><span style={{ color: "red" }}>*</span> Email : {this.state.email}</p>
                <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                <p><span style={{ color: "red" }}>*</span> Password : </p>
                <input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                <p><span style={{ color: "red" }}>*</span> Required fields must be filled</p>
                <p>{this.state.isLoading ? "Please Wait" : ""}</p>
                <nav id="test" onClick={this.handleSubmit}>
                    <ul>
                        <li>
                            Login
                         <span></span><span></span><span></span><span></span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}