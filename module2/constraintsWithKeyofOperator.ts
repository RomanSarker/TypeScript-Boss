{
    //genric constraints with keyof operator

    type Vehicle = {
        bike:string;
        car:string;
        ship:string
    }

    type Owner = keyof Vehicle 
     const person1 : Owner = "" //control+space press kore property dekhbo

     const getPropertyValue=<X,Y extends keyof X> (obj:X, key: Y)=>{
        return obj[key]
     }
const user = {
    name: "roman",
    age: 299,
    address: "ctg"
};
const car = {
    model: "roman",
    age: 299,
    address: "ctg"
};

const result1 = getPropertyValue(car,'age')

    //
}