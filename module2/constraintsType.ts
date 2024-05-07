{
    //
    //Constraints mean forse kora

    const AddCourseToStudent = <T extends {id:number; name:string;email:string}>(student : T) => { // T k extends kore dilam forcely its constraints
        const course = "Next level dev";

        return {
            ...student,
            course
        }
    }

//  const student3 = AddCourseToStudent({emni:"emni"}) after using extends now emni not exist
// const student3 = AddCourseToStudent({
//     id:222,
//     name: "roamn",
//     email:"a@ha.com",
//     emni:"emni"}) Now possile to use emni ja issa tai

    const student1 = AddCourseToStudent< {
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id:222,
        name: "roamn",
        email:"a@ha.com",
        devType:"dyhg"
    })

    const student2 = AddCourseToStudent({id:333,name: "roamnsarkerr",email:"aee@ha.com",hasWatch:"dyhg234567"})
    //
}



    //
}