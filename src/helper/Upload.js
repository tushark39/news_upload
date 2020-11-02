import React from 'react'
import axios from 'axios'
import { apiURL } from '../helper/API';
import { Name, Auth } from '../helper/Auth';
export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: ""
        }
    }
    handleUpload = () => {
        axios.post(`${apiURL}/tasks`, {
            "desc": this.state.news,
            "completed": false
        }, {
            headers: {
                Authorization: 'Bearer ' + Auth //the token is a variable which holds the token
            }
        }).then(res => {
            console.log(res);
            alert("Hurray!!News has been uploaded successfully.Your News will be verified soon");

        }).then(() => this.setState({ news: "" }))
            .catch(e => console.log(e.message))
    }
    render() {
        let name = Name;
        return (
            <div>
                {/* <div>hi</div> */}
                <div className="">
                    <h3 className="section-title" style={{ textAlign: "center" }}>Upload News</h3>

                    <div className="container">
                        <div className="row">
                            <div  style={{ borderStyle: "solid",paddingTop:50,textAlign:"center" }} className="col-md-3">

                                <img src="https://image.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600w-1290556063.jpg" style={{ width: 200, height: 200, borderRadius: "50%", borderStyle: "solid" }} alt="" />
                                <div >
                                    <p>Name of Intern : {name}</p>
                                    <div style={{textAlign:"center"}}>
                                        <div className="row">
                                            <div className="col">0</div>
                                            <div className="col">0</div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:"center"}}>
                                        <div className="row">
                                            <div className="col">Completed</div>
                                            <div className="col">Pending</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div  style={{ borderStyle: "solid",paddingTop:50,textAlign:"center" }} className="col-md-6">

                                <b><p><span style={{ color: "red" }}>*</span> Enter Article below  :- </p></b>
                                <textarea defaultValue={""} value={this.state.news} onChange={e => this.setState({ news: e.target.value })} />
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
                            <div  style={{ borderStyle: "solid",paddingTop:50,textAlign:"center" }} className="col-md-3">col</div>
                        </div>
                    </div>


                    {/* <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="https://image.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600w-1290556063.jpg" style={{ width: 200, height: 200, borderRadius: "50%", borderStyle: "solid" }} alt="" />
                                <div >
                                    <p>Name of Intern : {name}</p>
                                </div>
                                <div className="col">
                                    <b><p><span style={{ color: "red" }}>*</span> Enter Article below  :- </p></b>
                                    <textarea defaultValue={""} value={this.state.news} onChange={e => this.setState({ news: e.target.value })} />
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
                                <div className="col">hi</div>
                            </div>
                        </div>
                    </div>
                */}
                </div>
            </div>
        )
    }
}