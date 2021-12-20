import React from 'react'
import { getSkillsMock, postMockSkill, deleteMockSkill, putMockSkill } from '../mock-server';
import '../styles/skill.css';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import Skill from './Skill'

class Skills extends React.Component {

    constructor() {
        super();
        this.state = {
            skills: [],
            isNewSkillOpened: false,
            selectedRow: null
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

    addNewSkillHandler(data) {
        postMockSkill.post('/new-skill', data).then((response) => {
            if (response.data) {
                const data = response.data;
                this.setState((prevState => ({
                    skills: [...prevState.skills, data]
                })))

                this.toggleSkillForm();
            }
        })
    }

    onEditSubmitted(data) {
        putMockSkill.put('/edit-skill', data).then((response) => {
            if (response.data) {
                const skills = [...this.state.skills];
                const objIndex = skills.findIndex((obj => obj.id === response.data.id))
                skills[objIndex] = response.data;
                this.setState((({
                    skills: skills,
                    selectedRow: null,
                    isNewSkillOpened: false 
                })));


            }
        })
    }

    handleDeleteSkill(id) {
        if (id) {
            deleteMockSkill.post('/delete-skill', id).then((response) => {
                if (response.data) {
                    const skillId = response.data;
                    const skillsArray = this.state.skills;
                    const newSkillArray = skillsArray.filter(item => item.id !== skillId);
                    this.setState((({
                        skills: newSkillArray
                    })))
                }
            })
        }
    }

    handleEditMode(id) {
        this.setState((({
            selectedRow: id,
            isNewSkillOpened: true
        })))
    }
    toggleSkillForm() {
        this.setState({ isNewSkillOpened: !this.state.isNewSkillOpened })
    }


    render() {
        const skills = this.state.skills;
        const opened = this.state.isNewSkillOpened
        return (
            <div className="skill-container">

                <div className="skills-wrapper">
                    <div className="skill-left">
                        <h1>Skills List</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Skill Name</th>
                                    <th>Description</th>
                                    <th>Skill Year Aquired</th>
                                    <th>CTA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skills &&
                                    skills.map((el, i) => {
                                        return (

                                            <tr key={i} className="table-row" row-id={i + 1}>
                                                <td>{el.id}</td>
                                                <td>{el.skillName}</td>
                                                <td>{el.description}</td>
                                                <td>{el.skillYearAquired}</td>
                                                <td><span className='icon-edit' onClick={() => this.handleEditMode(el.id)}><FiEdit /></span> <span className='icon-delete'><MdDeleteForever onClick={() => this.handleDeleteSkill(el.id)} /></span></td>

                                            </tr>

                                        );
                                    })}
                            </tbody>
                        </table>

                        <div className="add-new-skill-container">
                            <button style={this.state.isNewSkillOpened ? { display: 'none' } : { display: 'inline-block' }} type="button" className="add-new-skill-btn" onClick={() => this.toggleSkillForm()}>Add New Skill</button>

                        </div>

                    </div>


                    <div>
                        <div className={this.state.isNewSkillOpened ? `skill-wrapper` : `hide-skill-wrapper`}>
                            <h1>Skill Form Add</h1>


                            <Skill onEdit={(data) => this.onEditSubmitted(data)} onNewAdd={(data) => this.addNewSkillHandler(data)} editRowId={this.state.selectedRow} />
                        </div>
                    </div>
                </div>
            </div>






        )
    };
}

export default Skills;