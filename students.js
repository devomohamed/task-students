// import filesystem
const fs = require('fs');
addPerson = (id, name, grade, comment = "") => {
    const Students = loadStudents()
    const myArray = grade.split(",");
    let total = 0;
    myArray.forEach(g => {
        total += parseInt(g)
    });
    const duplicateStudents = Students.filter((Student) => {
        return Student.id === id
    })
    if (duplicateStudents.length === 0) {
        Students.push({
            id,
            name,
            total,
            comment
        })
        saveStudents(Students)
        console.log("Saved Note")
    } else {
        console.log("this Student is exsist");
    }
}

const loadStudents = () => {
    try {
        let m = fs.readFileSync('Students.json').toString()
        return JSON.parse(m)
    } catch (e) {
        return []
    }
}
const saveStudents = (Students) => {
    let jsonStudents = JSON.stringify(Students);
    fs.writeFileSync('students.json', jsonStudents)
}





const remove = (id) => {
    const Students = loadStudents()
    const studentsKeep = Students.filter((student) => {
        return student.id !== id
    })

    saveStudents(studentsKeep)
    console.log('done delete student');
}


const readStudent = (id) => {
    const Students = loadStudents()
    const Student = Students.find((student) => {
        return student.id === id
    })
    if (Student) {
        console.log(Student);
    } else {
        console.log("This Student Is Not Exsist");
    }

}
const showAll = () => {
    const Students = loadStudents()
    Students.forEach(student => {
        console.log(student);
    });
}














module.exports = {
    addPerson,
    remove,
    readStudent,
    showAll
}