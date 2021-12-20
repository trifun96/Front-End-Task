import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let getSkillsMock = axios.create({
    baseURL: 'https://api.mock-test.com',
});
let skills = [
    { id: 1, skillName: 'React JS', description: 'Web development based on React JS framework', role: 'Front-End Developer', skillYearAquired: 2020 },
    { id: 2, skillName: 'HTML', description: 'Web development based on React JS framework', role: 'Front-End Developer', skillYearAquired: 2019 },
    { id: 3, skillName: 'CSS', description: 'Web development based on React JS framework', role: 'Front-End Developer', skillYearAquired: 2019 },
    { id: 4, skillName: 'JavaScript', description: 'Web development based on React JS framework', role: 'Front-End Developer', skillYearAquired: 2019 },
    { id: 5, skillName: 'Bootstrap', description: 'Web development based on React JS framework', role: 'Front-End Developer', skillYearAquired: 2019 },
    { id: 6, skillName: 'Axios', description: 'Web development based on React JS framework', role: 'Front-End Developer', skillYearAquired: 2020 },
    { id: 7, skillName: 'Git', description: 'Web development based on React JS framework', role: 'Front-End Developer', skillYearAquired: 2020 }
   

];
let mockGetAllSkills = new MockAdapter(getSkillsMock);
mockGetAllSkills.onGet('/skills').reply(200, {
    skills: skills
});



let getSingleSkill = axios.create({
    baseURL: 'https://api.mock-test.com',
});

let getSingleMockSkill = new MockAdapter(getSingleSkill);
getSingleMockSkill.onGet('/skills/:id').reply((config)=> {
    console.log('config', config);
});


let postMockSkill = axios.create({
    baseURL: 'https://api.mock-test.com',
});

let mockPost = new MockAdapter(postMockSkill);
mockPost.onPost("/new-skill").reply((config) => {
    const data = JSON.parse(config.data);
    if(data) {
        return ['200', data]
    }
});



let deleteMockSkill = axios.create({
    baseURL: 'https://api.mock-test.com',
});

let mockDelete = new MockAdapter(deleteMockSkill);

mockDelete.onPost("/delete-skill").reply((config) => {
    const data = JSON.parse(config.data);
    console.log('data delete', config);
    if(data) {
        return ['200', data]
    }
});


let putMockSkill = axios.create({
    baseURL: 'https://api.mock-test.com',
});

let mockPut = new MockAdapter(putMockSkill);

mockPut.onPut("/edit-skill").reply((config) => {
    const data = JSON.parse(config.data);
    console.log('data edit', data);
    if(data) {
        return ['200', data]
    }
});

  export {getSkillsMock, postMockSkill, deleteMockSkill, getSingleSkill, putMockSkill};


