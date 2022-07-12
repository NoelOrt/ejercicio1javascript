prompt('prueba1');
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

alert(bart.name +','+bart.age+','+bart.hairColor);

const out = document.getElementById("person");
out.innerHTML = 'el nombre introducido es '+bart.name +' tiene '+bart.age+' años y el color de su pelo es '+bart.hairColor;
