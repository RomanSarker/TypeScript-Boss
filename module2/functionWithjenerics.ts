{
    //

    const AddCourseToStudent = <T>(student : T) => { //:T janina ki type hobe <T> parameter hisebe rec korbe
        const course = "Next level dev";

        return {
            ...student,
            course
        }
    }
    const student1 = AddCourseToStudent({name: "roamn",email:"a@ha.com",devType:"dyhg"})

    const student2 = AddCourseToStudent({name: "roamnsarkerr",email:"aee@ha.com",hasWatch:"dyhg234567"})
    //
}