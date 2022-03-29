class Persona {
    constructor(){
       this.nombre=null;
       this.apellido=null;
       this.genero=null;
       this.telefono=null;
    }
 update(){
     database.ref('persona').set({
      "nombre":  this.nombre
      "apellido":  this.nombre
      'genero':  this.nombre
      'telefono':  this.nombre
     })
 }
}