{
    // type aliace er  moto interface o use kora jay but interface uses like object wise        

    type User1 = { //type aliase
        name:string;
        age:number;
    }

    interface User2 { //similar way for interface 
        name:string;
        age:number;
    }

 type UserWithRole1 = User1 & {role:string} //intersect with role property
 
 interface UserWithRole2 extends User2 {
    role:string
}

 const user1: UserWithRole2 = {
    name: "Persian",
    age:120,
    role:"manager"
 }

 //In js..> (all is) object ,array->object, function ...>object

 type Rool1 = number[]

 interface Roll2 {
    [index : number ] : number //index signiture madhome interface array type declaration
 }

 const rollNumber1: Roll2 = [1,2,3]
                          // 0 1 2 ----number type so
   
type Add1 = (num1:number, num2: number) =>number

interface Add2{
    (num1:number, num2: number) : number
}

const add: Add1 = (num1,num2) => num1+num2 //for array or function type alice best for object we can use interface or type any


    


    //
}