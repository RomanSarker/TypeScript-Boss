{
    //Type Alice
type Operator = {
    name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
}

    const operator1:Operator = {
        name: "Roman",
        age: 50,
        gender:'male',
        contactNo: '01788888',
       address: "ctg",
    }
    const operator2: Operator = {
        name: "SARKER",
        age: 40,
        gender:'FEmale',
       address: "ctg",
    }


    //type alice for string

    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = "Rokon"
    const isAdmin : IsAdmin = true


    //function type alice
    type Add = (num1:number,num2:number)=>number;

    const add: Add =(num1,num2)=>num1+num2;
// 
}