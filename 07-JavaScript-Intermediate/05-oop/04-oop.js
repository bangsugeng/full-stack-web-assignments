//soal 04
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courseOfferings = [];
    }

    getCourseIndex(course) {
        let index = -1;
        for(let i = 0; i < this.courseOfferings.length;i++){
            if (this.courseOfferings[i].course.getSubject() === course.getSubject()){
                index = i;
                break;
            }
        }
        return index;
    }

    // fungsi untuk memproses pengambilan course oleh student
    takeNewCourse(course) {
        this.courseOfferings.push(new CourseOffering(course));
        course.decreaseQuota();
    }

    // fungsi untuk menambahkan grade pada course
    takeATest(course){
        const index = this.getCourseIndex(course);
        if (this.courseOfferings[index].attendance >= course.getAttendance()) {
            this.courseOfferings[index].grade = Math.floor(Math.random() * 100);
        } else {
            console.log("please fill your absent");
        }
    }

    // fungsi untuk menambahkan attandance pada course
    courseAttendance(course) {
        const index = this.getCourseIndex(course);
        this.courseOfferings[index].attendance++;
    }
}

class CourseOffering {
    constructor(course) {
        this.course = course;
        this.attendance = 0;
        this.grade = 0;
    }
}

class Course {
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
    }
    getSubject() {
        return this.subject;
    }
    getAttendance() {
        return this.attendance;
    }
    decreaseQuota() {
        this.quota--;
    }
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);