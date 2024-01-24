import Student from "./src/Student";
import StudentManager from "./src/StudentManager";

const student1: Student = new Student("Manh", "C10M", 5);
const student2: Student = new Student("Dung", "C10M", 8);
const student3: Student = new Student("Quan", "C10M", 9);
const student4: Student = new Student("Mai", "C10M", 4);
const student5: Student = new Student("Bao", "C10M", 2);

const studentManager: StudentManager = new StudentManager();
studentManager.add(student1);
studentManager.add(student2);
studentManager.add(student3);
studentManager.add(student4);
studentManager.add(student5);

studentManager.showList();

console.log("---Student failed: " + studentManager.totalStudentsFail());
console.log("---Find student by name: Manh");
console.table(studentManager.findStudentByName("Manh2"));