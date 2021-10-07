// soal 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// fun1 mereturn object
// fun2 tidak mereturn apapun
/* output : 
    fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
    fun2 {}
*/
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// berbeda
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// karena this pada arrow function mengambil dari konteks mereka dibuat, dalam kasus ini kosong
const obj = {
    fun1: function() {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();

// soal 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
/*  
    Answer source : oracle academy
    Encapsulation means to enclose or cover something into a capsule or container.
    encapsulation covers, or wraps, the internal workings of a instance/object.
    Encapsulating your data prevents it from being modified by the user or other classes so that they do not corrupt it.
    Encapsulation can be used to protect sensitive data, such as personal information, by preventing the data from being changed, 
    except within the scope of the class itself.
*/
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
/*
    Answer source : PPT skilvul
    Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method 
    dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
    protect sensitive data, such as personal information, by preventing the method from being called, 
    except within the scope of the class itself.
*/
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
/*
    Answer source : oracle academy
    Inheritance is a simple but powerful tool of object oriented languages that allows classes to 
    inherit methods and fields from other classes.
    Inherit: to receive or obtain something from your predecessor or parent.
    the more code you can reuse, the fewer bugs you encounter and the less time you 
    spend re-writing already-exiting code.
*/
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/*
    Answer source : oracle academy
    When a variable or reference may refer to different types of objects is called polymorphism.
    Polymorphism is a term that means "many forms".
    In the case of programming, polymorphism allows variables to refer to many different types of objects, 
    meaning they can have multiple forms.
    more simple code.
*/

//source: MDN

//soal 03
class Phone {
    constructor(brand, storage, ram){
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }
    getBrandName(){
        return this.brand;
    }
    setBrandName(newName){
        this.brand = newName;
    }
    printSpecification(){
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
    }
    setSpecification(storage,ram){
        this.storage = storage;
        this.ram = ram;
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

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

    takeNewCourse(course) {
        this.courseOfferings.push(new CourseOffering(course));
        course.decreaseQuota();
    }

    takeATest(course){
        const index = this.getCourseIndex(course);
        if (this.courseOfferings[index].attendance >= course.getAttendance()) {
            this.courseOfferings[index].grade = Math.floor(Math.random() * 100);
        } else {
            console.log("please fill your absent");
        }
    }

    courseAttendance(course) {
        // course.attendance++;
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