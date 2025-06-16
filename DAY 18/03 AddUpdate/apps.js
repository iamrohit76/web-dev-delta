let student = {
    namee : "Rohit Kumar",
    age : 20,
    roll_no : 49
};

student["namee"]="Aditya";
console.log(student);
student.namee="vivek";
console.log(student);
delete student.age;
console.log(student);