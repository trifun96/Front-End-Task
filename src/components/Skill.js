import React, { useState, useEffect } from 'react'
import { getSkillsMock } from '../mock-server';

function Skill(props) {

    const [state, setState] = useState({ skillName: "", description: "", skillYearAquired: 0 });
  
    useEffect(() => {

        if (props.editRowId) {  
            getSkillsMock.get('/skills') 
                .then((response) => {
                    if (response.data) {
                        const allSkills = response.data.skills; 
                        const selectedSkill = allSkills.find(item => item.id === props.editRowId); 
                        setState({ skillName: selectedSkill.skillName, description: selectedSkill.description, skillYearAquired: selectedSkill.skillYearAquired }) 
                    }
                })
        }
    }, [props]);
  
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000);
        const dataToSend = { id, ...state };
         props.onNewAdd(dataToSend);
        setState({ skillName: "", description: "", skillYearAquired: 0 })
    }
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            [name]: value

        }));
    }

  
    const onEditHandler = (e) => {
        e.preventDefault();
        const id = props.editRowId;
        const dataToSend = { id, ...state }; 
        props.onEdit(dataToSend)
    }

    return (
        <div className="skills-container">

            <form onSubmit={props.editRowId ? onEditHandler : onSubmitHandler}>
                <label>
                    Skill Name:
                    <input
                        name="skillName"
                        type="text"
                        value={state.skillName}
                        onChange={handleInputChange} />
                </label>

                <label>
                    Skill Description:
                    <input
                        name="description"
                        type="text"
                        value={state.description}
                        onChange={handleInputChange} />
                </label>


                <label>
                    Skill Year Aquired:
                    <input
                        name="skillYearAquired"
                        type="number"
                        value={state.skillYearAquired}
                        onChange={handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Skill;
