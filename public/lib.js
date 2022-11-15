export function bindClick(id, func){
  return document.getElementById(id).addEventListener('click', func)
}


export function getValue(id){
  return document.getElementById(id).value;
}

export function setValue(id, value){
  return document.getElementById(id).textContent = value;
}