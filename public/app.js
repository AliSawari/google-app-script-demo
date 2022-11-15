import * as lib from "./lib"


function checkAge(age){
  age = Number(age);
  if(typeof age === 'number'){
    if(age < 18) return "you cant drink kiddo!"
    if(age >= 18 && age <= 30) return "there you go! enjoy"
    if(age > 30) return "ofc you can drink grandpa!"
  }
  return "wtf you doing i need some age!"
}

lib.bindClick('go', () => {
  console.log("LOL i just got clicked")
  const age = lib.getValue("age");
  const response = checkAge(age);
  lib.setValue("result", response);
})