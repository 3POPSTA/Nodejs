type Fish = { swim: ()=> void };
type Bird = { fly: ()=> void };


function isFish(pet: Fish | Bird): pet is Fish {
    return "swim" in pet;
}