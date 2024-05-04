{
    //nullable type

    const searchName = (value: string | null) => {
        if(value){
            console.log("searching");
        }else{
            console.log("there is nothing to search");
        }
    }
    searchName(null);

    //unknown typeof

    const getSpeedInMeterPerSecond = (value:unknown) => {
        if(typeof value === 'number') {
            const convertedSpeed = ((value*100)/3600)
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

       else if(typeof value === 'string'){
            const [result, unit] = value.split(' ')
            const convertedSpeed = ((parseFloat(result)*100)/3600)
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }else{
            console.log("wrong input");
        }
    }

     
    // getSpeedInMeterPerSecond(`1000 km^-1`);
    getSpeedInMeterPerSecond(null);

    //Never Type
    const throwError =(msg:string):never=>{ //this function will never return anythings
        throw new Error (msg);
    }
    throwError('error hoye galo re')







    //
}