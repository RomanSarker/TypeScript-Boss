{
    //
    
    //generic type Array
    const EmpNumber: number[] =[1,2,4] //or below we can generalised this Array

    const EmpNumber: Array<number> = [1,2,4] //same for string as well boolean

    // type GenericType = Array<boolean>

    // const boolArray: Array<boolean> = [true,false,true]; or below
    const boolArray: GenericType = [true,false,true];


    // like function we can make it reusable

    // type GenericTypes<param> = Array<param> we can use T instead of param as industry standard
    type GenericTypes<T> = Array<T>

    const boolArray: GenericTypes<boolean> = [true,false,true];

const stringArray: GenericTypes<string> = ["mr rom","mr x","mr. y"];

//bY USING Generic array of Object

const user: GenericTypes<{name:string,age:number}> = [
    {
        name: "Roman",
        age : 34,
    },
    {
        name:"uu",
        age:234
    }
]

//generic tuple

type GenericTuple<X,Y> = [X,Y]
const man : GenericTuple<string,string> = ['male','female']

const userWithId : GenericTuple<number,{name:string,age:number}> = [123,{name:'rom',age:123}]
    //
}