class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister){
       const checkEmail =  this.students.filter((student) => student.email === studentToRegister.email)
           if(checkEmail.length === 0) {
               this.students.push(studentToRegister)
               console.log(`${studentToRegister.name} has been registered to the bootcamp ${this.name}`)
           } else {

            console.log(`${studentToRegister.name} is already registered.`)
           }

           console.log(this.students)
           return this.students
        }
    }
      
      
      
      
        