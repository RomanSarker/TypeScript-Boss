//two types function
//normal function
//arrow function

function add(num1:number,num2:number=40):number{
    return num1+num2;
}
add(2,3)

const addArrow = (num1:number,num2:number):number => num1+num2

const result = addArrow(10, 20);
console.log(result); // Output: 30

//object inside function call --->method
const bankUser ={
    name : "Roman",
    balance : 0,
    addBalance (balance:number):string{
        return `My new balance is: ${this.balance+ balance}`;
    }


}
console.log(bankUser.addBalance(100)); // Output: My new balance is: 100
console.log(bankUser.addBalance(50));  // Output: My new balance is:

const arr: number[] = [1,2,3,4]

const newArray:number[] = arr.map((elem:number):number =>elem*elem); //squre two element with call back function