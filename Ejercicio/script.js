
const persons={};
function addpersons(){
    let name=prompt('Introduce tu nombre');
    let age=prompt('introduce la edad');
    let hairColor=prompt('color del pelo');
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}

const bart=new addpersons();

alert('Resumen de datos = '+bart.name +','+bart.age+','+bart.hairColor);
let up=bart.hairColor.toUpperCase();
const out = document.getElementById("person");
out.innerHTML = 'el nombre introducido es '+bart.name +' tiene '+bart.age+' años y el color de su pelo es '+up;
