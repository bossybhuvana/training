interface person {
    name: string;
    age: number;
    email: string;
  }
  class car {
    make: string;
    model: string;
    year: number;
    displayInfo() {
      console.log("\t\tCar Details"); //\t\t to make it as heading
      console.log("Made by : ", this.make);
      console.log("Model is : ", this.model);
      console.log("Year : ", this.year);
    }
  }
  let age: number = 21;
  let fullName: string = "Addala Bhuvana ";
  let isEmployee: boolean = false;
  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tup: [string, number, string, boolean] = [
    "bhuvana",
    21,
    "bossybhuvana57@gmail.com",
    false,
  ];
  console.log("name:", fullName);
  console.log("num:", age);
  console.log("boolean:", isEmployee);
  console.log("array of numbers:", numbers);
  console.log("tuple :", tup);
  enum week {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  }
  function add(n1: number, n2: number): number {
    let sum = n1 + n2;
    return sum;
  }
  function capitalize(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
  function reverseArray(arr: any[]): any[] {
    //:any[] to accept array of any data type
    let rev = [...arr]; //spread operator to unpack the array
    return rev.reverse();
  }
  let p: person = {
    name: "bhuvana",
    age: 21,
    email: "bossybhuvana57@gmail.com",
  };
  console.log("details of person :", p.name, p.age, p.email);
  let c = new car();
  c.make = "Ford";
  c.model = "Ford Mustang";
  c.year = 2015;
  c.displayInfo();
  console.log("sum of", 5, 2, "is", add(5, 2));
  console.log("capitalized version of bhuvana is", capitalize("bhuvana"));
  console.log("reverse of ", numbers, "is", reverseArray(numbers));
  console.log("reverse of ", tup, " is ", reverseArray(tup));