import React from 'react';
import { Auth, Name } from '../helper/Auth';
import Login from './Login'
import axios from 'axios'
import { apiURL } from '../helper/API';

// export const UploadForm = () => {

// }   
export default class UploadForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news : ""
        }
    }
    handleUpload = () =>{
        axios.post(`${apiURL}/tasks`,{
            "desc":this.state.news,
            "completed":false
        },{
            headers: {
                Authorization: 'Bearer ' + Auth //the token is a variable which holds the token
              }
        }).then(res=>console.log(res))
        .catch(e=>console.log(e.message))
    }
    render() {
        let isAuthenticated = Auth
        let name = Name
        return (
            <div>
                {
                    isAuthenticated && (
                        <div className="upload-form">
                            <h3 className="section-title">Upload News</h3>
                            <p>Name of Intern : {name}</p>
                    <b><p><span style={{ color: "red" }}>*</span> Enter Article below  :- {this.state.news}</p></b>
                            <textarea defaultValue={""} value={this.state.news} onChange={e=>this.setState({news:e.target.value})} />
                            <p><span style={{ color: "red" }}>*</span> Required fields must be filled</p>
                            <nav id="test" onClick={this.handleUpload}>
                                <ul>
                                    <li>
                                        Upload
                         <span></span><span></span><span></span><span></span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )
                }
                {
                    !isAuthenticated && <Login />
                }
            </div>
        )
    }
}