class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombre=createElement("h3");
        this.apellido=createElement("h4");
        this.input = createInput();
        this.button = createButton("Enviar");
    }
    display(){
        this.title.html("Mi base de datos");
        this.title.position(130,0);
        this.nombre.html("Ingresa tu nombre");
        this.nombre.position(130,100);
        this.apellido.html("Ingresa tu apellido");
        this.apellido.position(130,160);
        this.genero.html("Ingresa tu genero");
        this.genero.position(250,200);
        this.telefono.html("Ingresa tu telefono");
        this.telefono.position(250,200);

        this.input.position(130,200);
        this.butthon.position(230,540);
        this.input.position(450,400);
        this.input.position(130,150);
        this.input.position(138,540);

        this.button.mousePressed(()=>{
            persona.nombre=this.input.value();
            persona.update();
        })
    }
}