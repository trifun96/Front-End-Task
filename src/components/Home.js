import React from 'react'
import '../styles/home.css';
import {getSkillsMock} from '../mock-server';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {

            skills: [],

        }
    }
    componentDidMount() {
        getSkillsMock.get('/skills')
            .then((response) => {
                if (response.data) {
                    this.setState({ skills: response.data.skills })
                }
            })

    }



    render() {
        const skills = this.state.skills;

        return (
           
            <div className="home-container">
                <div className="wrapper">
                    <div className='left'>
                        <div className="images-content">
                            <img src='images/cv imagee.jpg'></img>
                            <h3>Name: Trifun Markovic</h3>

                        </div>

                        <div className="info">
                            <h1>Contact</h1>
                            <h4>Email: trifun90@gmail.com</h4>
                            <h4>Linkedln: https://www.linkedin.com/in/trifun-markovic-234925211/</h4>
                            <h4>Guthub: https://github.com/trifun96</h4>
                        </div>

                        <div className="skill-graph">
                            <h3>Skill Graph</h3>
                            <div className="skills">
                                <div className="skill-box">
                                    <p>React</p>
                                    <p>55%</p>
                                    <div className="skill">
                                        <div className="skill-level" style={{ width: "55%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <p>HTML5</p>
                                    <p>65%</p>
                                    <div className="skill">
                                        <div className="skill-level" style={{ width: "65%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <p>CSS</p>
                                    <p>66%</p>
                                    <div className="skill">
                                        <div className="skill-level" style={{ width: "66%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <p>JavaScript</p>
                                    <p>50%</p>
                                    <div className="skill">
                                        <div className="skill-level" style={{ width: "50%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <p>Bootstrap</p>
                                    <p>60%</p>
                                    <div className="skill">
                                        <div className="skill-level" style={{ width: "60%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <p>Axios</p>
                                    <p>55%</p>
                                    <div className="skill">
                                        <div className="skill-level" style={{ width: "55%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <p>Git</p>
                                    <p>60%</p>
                                    <div className="skill">
                                        <div className="skill-level" style={{ width: "60%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="right">
                        <h1>Skill List</h1>
                        <div className="info-container">
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Skill Name</th>
                                            <th>Role</th>
                                            <th>Skill Year Aquired</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {skills &&
                                            skills.map((el, i) => {
                                                return (
                                                    <tr key={i} className="table-row" >
                                                        <td>{el.skillName}</td>
                                                      
                                                        <td>{el.role}</td>
                                                        <td>{el.skillYearAquired}</td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        )
    }
}


export default Home;