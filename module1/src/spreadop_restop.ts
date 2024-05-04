{


//spread operator or nearest rest operator
const boos1 : string[] =['roman','sarker','janina'];

const boos2 : string[] =['rok','sam','jani'];

boos1.push(...boos2) //we cant direct push full array at a time so we need to use spread array to push data to others array


//for object
const mentor1 = {
    java: 'rom',
    prisma: "rok",
    sql: "kijani",
}
const mentor2 = {
    ts: "typeman",
    redux: "superman",
    aws: "devopman"
}
const mentorlist = { //here mentorlist type easily infared or defined kore felce
    ...mentor1,
    ...mentor2
}

//rest operator cousin of spread
const greetingsFriends = (...friends: string[]) => {
    friends.forEach((friend: string)=> console.log(`Hi ${friend}`));
};
greetingsFriends("roman", "jaissa","lembar")











}


