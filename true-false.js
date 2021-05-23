// falsy values : false, 0, "", undefined, null, NaN
// truthy values : true, '0', " ", {}, []
// let name = "false";
let name = 0;
if(name || name == 0){
    console.log("the condition is true");
}
else{
    console.log("the condition is false")
}