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
            data: [],
            activeTask: [],
        }
    }
    async componentDidMount() {
        await axios.get(`https://api.jsonbin.io/b/5fa06e8447077d298f5bdbdc/2`)
            .then(async (res) => {
                this.setState({ data: res.data });
            }
            )
            .catch(e => console.log("Error from Card ", e));
        this.setData();
    }

    setData = () => {
        var data = this.state.data;
        var activeTask = data.filter((task) => task.active === true)
        this.setState({ activeTask })
    }
    handleUpload = () => {
        axios.post(`${apiURL}/tasks`, {
            "desc": this.state.news,
            "completed": false
        }, {
            headers: {
                Authorization: 'Bearer ' + Auth
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
                                    {
                                        this.state.activeTask.map(res => {
                                            return (
                                                <div className="card text-white bg-primary mb-3" style={{ marginTop: 30 }}>
                                                    <div className="card-header">Your Current Task</div>
                                                    <div className="card-body">
                                                        <h4 className="card-title">{res.Heading}</h4>
                                                        <p className="card-text">{res.Desc}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                            <div style={{ borderStyle: "solid", paddingTop: 50, textAlign: "center" }} className="col-md-6">

                                <b><p><span style={{ color: "red" }}>*</span> Enter News below  :- </p></b>
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
                                <h3>Your Last Three Accepted News</h3>
                                {this.state.data.filter((data)=>data.active!==true).slice(0, 3).map((res) => {
                                    // console.log("Data : ",res);
                                    return (
                                        <div>
                                            <div className="card text-white bg-primary mb-3" style={{ marginTop: 30 }}>
                                                <div className="card-header">{res.name}</div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{res.Heading}</h4>
                                                    <p className="card-text">{res.Desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}