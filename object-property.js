const students = [
    {id: 12, name: "Jawad"},
    {id: 13, name: "Rahim"},
    {id: 14, name: "Karim"},
    {id: 15, name: "Jahim"}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>13);
const biggerone = students.find(s => s.id>12);
console.log(bigger);