 export const API_KEY = 'AIzaSyDr89H6gf2HJwL_G5b2HetPmGcrRBG7Ijk'

 export const value_converter = (value) => {
    if (value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if (value >= 1000){
        return Math.floor(value/1000) + "K";
    }
    else {
        return value;
    }
 }