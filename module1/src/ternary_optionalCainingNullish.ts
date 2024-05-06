{
    //Ternary Operator || optional chaining || nullish coalescing operator
    //need to install ts-node-dev to run into console   npm i -g ts-node-dev then ts-node-dev --respawn --transpile-only .\module1\src\ternary_optionalCainingNullish.ts

const age : number = 18;

// if(age>=18){
//     console.log("adult");
// }else{
//     console.log("Not Adult");
// }

const isAdult = age>=18 ? 'adult' : "not adult"
// console.log({isAdult});

//nullish coalescing operator only work when null/undefined not for empty string or others
// only work when null/undefined no --->decision making

// const isAuthenticated = null; 

const isAuthenticated = ""; 

const result1 = isAuthenticated ?? 'Guest'; //?? nullish coalesing operator only work null or undefined 
const result2 = isAuthenticated ? isAuthenticated : 'Guest'; //? ternary always work on falsy value null/undefined empty string.. whatever is
console.log({result1}, {result2});

//optional chaining

type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}
const user: User = {
    name:"Roman TheBird",
    address:{
        city: 'Dhaka',
        road: "urata-1",
        presentAddress:'467',

    }
}
const permanentAddress = user?.address?.permanentAddress ?? 'no permanent address'
console.log({permanentAddress});
    //
}