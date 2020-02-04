export default class School {  
 private students = new Map<string, Array<string>>();

  classlist() : Map<string, Array<string>> {
      let tmpList = new Map<string, Array<string>>();
      this.students.forEach((value, key) => { tmpList.set(key, [...value]) })
      return tmpList;
  }

  addStudent(name: string, klasse: number) : void {
      let students = this.getStudents(klasse);
      students.push(name);
      students.sort()
      this.students.set(klasse.toString(), students);
  }

  studentsInClass(klasse: number) : Array<string> {
      return [...this.getStudents(klasse)];
  }

  private getStudents(klasse: number) : Array<string> {
      return this.students.get(klasse.toString()) || new Array<string>();
  }
}