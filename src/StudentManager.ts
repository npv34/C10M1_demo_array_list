import Student from "./Student";
import ScoreConst from "./ScoreConst";

class StudentManager {
    private readonly _students: Array<Student>;
    constructor() {
        this._students = []
    }

    add(student: Student): void {
        this._students.push(student)
    }

    showList(): void {
        console.table(this._students)
    }

    totalStudent(): number {
        return this._students.length;
    }

    findStudentByName(keyword: string): Array<Student> {
        return this._students.filter(student => student.name === keyword)
    }

    totalStudentsFail(): number {
        const studentsFail = this._students.filter(student => student.score <= ScoreConst.MIN_SCORE);
        return studentsFail.length;
    }
}

export default StudentManager;