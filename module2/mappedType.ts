{
    //map return a array

    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber["height"]; //look up type ...look after kore ber kore ane

    type AreaString = {
        [key in keyof AreaNumber ] :string //we can even boolen here
    }

    //
}