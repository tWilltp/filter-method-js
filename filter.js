  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age > 21);
console.log(oldEnough);

// obtain object array

const paul = people.filter(p => p.name === 'Paul');
console.log(paul);

// obtain object itself

const paul2 = people.filter(p => p.name === 'Paul')[0];
console.log(paul2);



// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// 1 function most condensed

const candidates1 = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
});

console.log(candidates1);

// 2 has strong skills in seperate function, called in candidates

const hasStrongSkills2 = student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
};

const candidates2 = students.filter(hasStrongSkills2);

console.log(candidates2);

// 3 has strong skills in seperate function, called in candidates. has 5 years experience in seperate function, called in has strong skills

const has5YrsExp = skill => skill.yrsExperience >= 5;

const hasStrongSkills3 = student => {
  let strongSkills = student.skills.filter(has5YrsExp);
  return strongSkills.length > 0;
};

const candidates3 = students.filter(hasStrongSkills3);

console.log(candidates3);

// 4 /\/\ this means you can remove the return statement and the stong skills variable. just attach .length on to the inner filter === single line code

const has5YrsExp2 = skill => skill.yrsExperience >= 5;

const hasStrongSkills4 = student => student.skills.filter(has5YrsExp).length > 0; // << .length on inner filter

const candidates4 = students.filter(hasStrongSkills3);

console.log(candidates4);

// /\/\ write out function in its entirety (1) then simplify