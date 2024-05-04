{
    //union types |

    type Operator = 'junior' | 'senior'
    type SeniorOp = 'operator' | "ordinaryOp"

    type Operate = Operator | SeniorOp

    // const newOp : Operator= 'junior'
    
    type User  = {
        name: string,
        email?:string,
        gender:"male" | "female"
    }
    const user1:User={
        name : "roamn",
        gender: "male",

    }

    //InterSection or Common Property

    type FrontEndDeveloper = {
        skills : string[];
        designation1:'FrontEnd Developer'
    }
    type BackEndDeveloper = {
        skills : string[];
        designation2:'BackEndDeveloper Developer'
    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper

    const fullStackDeveloper  : FullStackDeveloper ={
        skills: ['HTML', 'CSS', 'EXPRESS'],
        designation1 : 'FrontEnd Developer',
        designation2 : 'BackEndDeveloper Developer'
    }

}