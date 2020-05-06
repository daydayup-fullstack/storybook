/*
  Project
  - id: string
  - name: string
  - tasks: Task[]
  - colorIndex: number
  - createdDate: Date
  - starred: boolean
  - sections: string[]
*/

export class Project {
  constructor(id, name, colorIndex, tasks, sections) {
    this.id = id; // string
    this.name = name; //string
    this.tasks = tasks; //task[]
    this.colorIndex = colorIndex; //number
    this.createdDate = new Date();
    this.starred = false;
    this.sections = sections; //string[]
  }
}


/*
  Section
  - id: string
  - name: string
*/

export class Section {
  constructor(name, id) {
    this.name = name; //string
    this.id = id; //string
  }
}



/*
  User
  - id: String
  - firstName: String
  - lastName: String
  - avatar: String
  - colorIndex: Number
*/
export class User{
  constructor(id, firstName, lastName, avatar, colorIndex){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.colorIndex = colorIndex;
  }
}

