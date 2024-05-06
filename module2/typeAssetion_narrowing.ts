{
    //
//type assertion (as A developer I better understand from typescript...using as keyword)
let anything : any;
anything = "Hello Roman";

anything=123;
// (anything as number).

const kgToGm = (value:string | number)  : string | number| undefined =>{
    if(typeof value=== 'string'){
        const convertedValue = parseFloat(value)*1000;
        return `The converted Value is ${convertedValue}`
    }
    if(typeof value === "number"){
return value*1000
    }
}

const result = kgToGm(1000) as number
const result2 = kgToGm("1000") as string

type CustomError = {
    message: string
}
try{

}catch(error){
console.log((error as CustomError).message);
}

    
    //


}