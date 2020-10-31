import React from 'react';
// import { apiURL } from '../helper/API';
import axios from 'axios'
// export const UploadForm = () => {

// }   
export default class UploadForm extends React.Component {
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
        this.setState({isLoading:true})
            axios.post('http://pandey-task-manager-api.herokuapp.com/users/login/',{
                "email":this.state.email,
                "password":this.state.password
            }).then(res=>{
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
            .catch(e=>e.message ? console.log("Login Failed") : "")
    }
    render() {
        // let email="tu"
        return (
            <div>
                {
                    this.state.isAuthenticated && (
                        <div className="upload-form">
                            <h3 className="section-title">Upload News</h3>
                            <p>Name of Intern : {this.state.name}</p>
                            {/* Add a <textarea> tag */}
                            <b><p><span style={{ color: "red" }}>*</span> Enter Article below  :- </p></b>
                            <textarea defaultValue={""} />
                            <p><span style={{ color: "red" }}>*</span> Required fields must be filled</p>
                            {/* Add an <input> tag */}
                            <input className="contact-submit" type="submit" defaultValue="Send" />
                        </div>
                    )
                }
                {
                    !this.state.isAuthenticated && (
                        <div className="upload-form">
                            <h3 className="section-title">Login</h3>
                            <p><span style={{ color: "red" }}>*</span> Email : {this.state.email}</p>
                            <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            <p><span style={{ color: "red" }}>*</span> Password : {this.state.password}</p>
                            <input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            <p><span style={{ color: "red" }}>*</span> Required fields must be filled</p>
                            <nav onClick={this.handleSubmit}>
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
            </div>
        )
    }
}