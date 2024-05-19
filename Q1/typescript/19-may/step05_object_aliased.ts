//anonymous
let teacher: { name: string, exp: number } = {
    name: "riijab",
    exp:22
}
console.log(teacher.name, teacher.exp);

//Aliased object type
type student = {
    name: string,
    exp: number
}
let student: student = {
    name: "alia",
    exp: 26
}
    console.log(student.name, student.exp);
