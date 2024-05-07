{
    //interface-generic

    interface Developer<T,X=null> { //default value null add korle paramerter er arguments no needs
        name:string;
        computer:{
            brand: string,
            model:string,
            releaseYear:number
        }
        smartWatch:T //parameter hisebe pore nice pathaici
     bike? : X
    }


    type GoriberWatch = {
        brand:string;
        model:string;
        display:string;
    }


const poorDeveloper : Developer<GoriberWatch,null> = {
    name:'roman',
    computer: {
    brand: "asus",
    model: "ftgrt",
    releaseYear: 2013
    },
    smartWatch:{
        brand: "emilab",
        model: "8i",
        display:'olead'
    }
}

interface BorolokerApple{
    brand:string;
    model:string;
    heartTrack:boolean,
    sleepTrack: boolean,
}

interface Yamaha {
    bike: string;
    model: string;
}

const richDeveloper : Developer<BorolokerApple,Yamaha> = {
    name:'rich dev',
    computer: {
    brand: "Apple",
    model: "ukh8",
    releaseYear: 2018
    },
    smartWatch:{
        brand: "appless",
        model: "8i45",
        heartTrack:true,
        sleepTrack: true,
    },
    bike: "yamaha",
    model:"10cc",
}


    //
}