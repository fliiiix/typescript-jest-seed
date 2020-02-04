export default class School {  
 private students: Map<string, Array<string>> = new Map();

  classlist() : Map<string, Array<string>> {
      let tmpList = new Map<string, Array<string>>();
      this.students.forEach((value, key) => { tmpList.set(key, [...value]) })
      return tmpList;
  }

  addStudent(name: string, klasse: number) : void {
      let k = klasse.toString();
      if(!this.students.has(k)){
          this.students.set(k, [name]);
      }
      else{
          this.students.get(k).push(name);
          this.students.get(k).sort();
      }
  }

  studentsInClass(klasse: number) : Array<string> {
      let k = klasse.toString();
      if (this.students.has(k)){
          return [...this.students.get(k)];
      }
      return [];
  }
}