import React from 'react'
import axios from 'axios'
import { apiURL } from '../helper/API';
import { Name, Auth } from '../helper/Auth';
export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: "",
            completed: 0,
            pending: 0,
            name: "",
            heading: "Dummy",
            Desc: "Dummmy",
            data: []
        }
    }
    async componentDidMount() {
        // axios.get("https://api.jsonbin.io/b/5fa06e8447077d298f5bdbdc")
        // .then(res=>{
        //     this.setState({name:res.data.name,Desc:res.data.Desc,heading:res.data.Heading})
        // })
        // .catch(e=>console.log("Error from Card ",e));
        await axios.get("https://api.jsonbin.io/b/5fa06e8447077d298f5bdbdc")
            .then(res => {
                this.setState({ data: res.data })
            })
            .catch(e => console.log("Error from Data ", e))
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
                            <div style={{ borderStyle: "solid", paddingTop: 50, textAlign: "center" }} className="col-md-3">

                                <img src="https://image.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600w-1290556063.jpg" style={{ width: 200, height: 200, borderRadius: "50%", borderStyle: "solid" }} alt="" />
                                <div style={{ marginTop: 15 }} >
                                    <p>Name of Intern : {name}</p>
                                    <div style={{ textAlign: "center" }}>
                                        <div className="row">
                                            <div className="col">0</div>
                                            <div className="col">0</div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <div className="row">
                                            <div className="col">Completed</div>
                                            <div className="col">Pending</div>
                                        </div>
                                    </div>
                                    <div className="card text-white bg-primary mb-3" style={{ marginTop: 30 }}>
                                        <div className="card-header">Your Current Task</div>
                                        <div className="card-body">
                                            <h4 className="card-title">{this.state.heading}</h4>
                                            <p className="card-text">{this.state.Desc}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div style={{ borderStyle: "solid", paddingTop: 50, textAlign: "center" }} className="col-md-6">

                                <b><p><span style={{ color: "red" }}>*</span> Enter Article below  :- </p></b>
                                <textarea rows="10" placeholder="Enter News Here" defaultValue={""} value={this.state.news} onChange={e => this.setState({ news: e.target.value })} />
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
                            <div style={{ borderStyle: "solid", paddingTop: 50, textAlign: "center" }} className="col-md-3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}