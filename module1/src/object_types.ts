//reference type object

const user:{
    fname: string;
    mName?: string; //optional type
    lastName: string;
    isMarried: boolean;
    companyName : "roman bd";//not changeable ...type-literal type or access modify er madhomeo (readonly) use readonly companyName :string
} = {
    fname: "Roman",
    // mName: "Sarker",
    lastName:"janina",
    isMarried:false,
    companyName:'roman bd'
}
// user.   dile onno file export kore easily property pabo
// user.companyName ="rom" not assignable it fixed
