//destructuring array and object
{
    const user = {
        id: 123,
        name:{
            firstName: 'Roman',
            middleName: "janina",
            lastName: "sarker"
        },
    
        contactNo: "017333333",
        address: "Uganda",
    };
     const {
        contactNo,
        name: {middleName :nickName}, //we can name alise here not datatypes writting like string coz ts can auto detect
     } = user;

}

// array destructuring

const myFriend = ['roman','sarker','tui','mui','oi','aro ja issa']

const [,,bestFriend,...rest] = myFriend //here ,, skiping 0,1 index value bestFriend mean tui and spread op ...rest keeping last value