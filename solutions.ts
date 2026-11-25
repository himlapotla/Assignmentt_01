function multiplyValue (value : number, multiplier? : number) : number {

  if(multiplier == undefined) {
    return value * 2
  }
  else {
    return value * multiplier
  }
}







type value = string | number | boolean
function processInput ( pmeter : value ) : value {

  if(typeof pmeter == "string") {
    return  pmeter.trim().toLowerCase();
  }
  else if( typeof pmeter == "number") {
    return pmeter * 10
  }
  else {
    return pmeter == true ? 'Active' : 'Inactive'
  }
}







function formatCoordinate( tuple: readonly [number, number, string] ): string {

  const [ latitude, longitude, locationName ] = tuple
  return `Location: ${locationName} (${latitude}, ${longitude})`
}







function concatenateArrays <T> (...arrays: T[][]): T[] {

  let newArr : T[] = []

  arrays.forEach(arr => {
    arr.forEach(e => {
      newArr.push(e)
    })
  })

  return newArr
}







interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses ( array : Course[], minStudents : number) : Course[] {
  return array.filter( course => course.isPublished && course.students >= minStudents )
}







function pluckValues < T, K extends keyof T > (items: T[], key: K ): T[K][] {
  return items.map((item) => item[key]);
}







class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`
  }
}







async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {

    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}
