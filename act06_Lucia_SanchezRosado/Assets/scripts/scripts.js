// VARIABLES GLOBALES

let fotoUsuarioElegida;
let usuarioLogueado = null;
let tematicaPublicacion = null;
let usuAdmin = null;
let temaAbierto = null;
let temaElegido;

function fLogin(){

                    //Leer el alias
                    let alias = document.querySelector('#alias').value;
                    //Leer el password
                    let password = document.querySelector('#password').value;
                
                    //Enviar estos datos al servidor php
                
                    let URL = "Assets/php/servidor.php?peticion=Login";
                    URL += "&alias=" + alias;
                    URL += "&password=" + password;
                        //Debemos de pedirsela al servidor
                    
                        fetch(URL)
                        .then((response) => response.json())
                        .then((data) => {
                    
                            //Para asegurarme de que funciona, imprimo los datos en la consola
                            console.log(data);
                
                        //Si esta:

                        if(data.datos.length > 0) {

                                //Le doy la bienvenida
                                //Creamos variables

                                document.querySelector("#modal_registro").style.display = 'none';
                                document.querySelector("#modal_bienvenida").style.display = 'flex';
                                document.querySelector("#div_bienvenida").style.display = 'flex';
                                document.querySelector("#div_bienvenida").innerHTML = 'Hola, ' + data.datos[0].usu_alias + ' &#10024;&#128075;';

                                usuarioLogueado = data.datos[0].usu_id;
                                usuAdmin = data.datos[0].usu_admin;

                                //Vaciamos
                                document.querySelector('#alias').value = '';
                                //vaciamos
                                document.querySelector('#password').value = '';                              


                        } else {

                        //Si no esta:

                        //Le comunicamos en el mismo formulario en div_error que es error de acceso   

                            document.querySelector("#div_error").style.display = 'block';
                            document.querySelector("#div_error").innerHTML = "Username o contraseña incorrecta. Acceso denegado."
                        }
                                
   

                
            })


}

function fMostrarLogin(){

    document.querySelector("#modal_bienvenida").style.display = 'none';
    document.querySelector("#modal_nueva_cuenta").style.display = 'none';
    document.querySelector("#menu_categorias").style.display = 'none';
    document.querySelector("#div_error").style.display = 'none';
    document.querySelector("#modal_tema").style.display = 'none';
    document.querySelector('#modal_perfil').style.display = 'none';

    if (usuarioLogueado != null) {

        if (usuarioLogueado != 1) {

            // La ponemos visible

                document.querySelector('#modal_perfil').style.display = 'flex';
                

                    //Enviar estos datos al servidor php
            
                        let URL = "Assets/php/servidor.php?peticion=mostrar_perfil";
                        URL += "&usu_id=" + usuarioLogueado;

                            //Debemos de pedirsela al servidor
                        
                            fetch(URL)
                            .then((response) => response.json())
                            .then((data) => {

                                //Creamos las variables de nombre y foto que queremos imprimir en la modal

                                let alias = `<div>` + data.datos[0].usu_alias + `</div>`;
                                let nombre = `<div>` + data.datos[0].usu_nombre + `</div>`;
                                let email = `<div>` + data.datos[0].usu_email + `</div>`;
                                let foto = data.datos[0].usu_foto;
                                let ruta = "Assets/img/";
                                let html = "";

                               //Imprimimos en la consola
                               
                               document.querySelector('#div_foto').innerHTML = `<img src="` + ruta + foto + `" alt="">`;
                               document.querySelector('#div_usu').innerHTML = alias;
                               document.querySelector('#div_nombre').innerHTML = nombre;
                               document.querySelector('#div_email').innerHTML = email;

                               // Ocultamos

                               document.querySelector('#div_publicar_nuevo_tema').style.display = 'none';
                               document.querySelector('#div_borrar_nuevo_tema').style.display = 'none';


                    
                })              

        } else {

            // La ponemos visible

            document.querySelector('#modal_perfil').style.display = 'flex';
                

            //Enviar estos datos al servidor php
    
                let URL = "Assets/php/servidor.php?peticion=mostrar_perfil";
                URL += "&usu_id=" + usuarioLogueado;

                    //Debemos de pedirsela al servidor
                
                    fetch(URL)
                    .then((response) => response.json())
                    .then((data) => {

                        //Creamos las variables de nombre y foto que queremos imprimir en la modal

                        let alias = `<div>` + data.datos[0].usu_alias + `</div>`;
                        let nombre = `<div>` + data.datos[0].usu_nombre + `</div>`;
                        let email = `<div>` + data.datos[0].usu_email + `</div>`;
                        let foto = data.datos[0].usu_foto;
                        let ruta = "Assets/img/";
                        let html = "";

                       //Imprimimos en la consola
                       
                       document.querySelector('#div_foto').innerHTML = `<img src="` + ruta + foto + `" alt="">`;
                       document.querySelector('#div_usu').innerHTML = alias;
                       document.querySelector('#div_nombre').innerHTML = nombre;
                       document.querySelector('#div_email').innerHTML = email;

                    // Ponemos flex el input de crear temas
                    
                    document.querySelector('#div_publicar_nuevo_tema').style.display = 'flex';
                    document.querySelector('#div_borrar_nuevo_tema').style.display = 'flex';
            
        })              
 

        }




    } else if (usuarioLogueado == null){

        document.querySelector("#modal_registro").style.display = 'flex';

    }



}

function fCerrarSesion(){

    // Ponemos el valor del usuario como NULL, no registrado.
    usuarioLogueado = null;
    usuAdmin = null;

    // Cerramos modal perfil 
    document.querySelector('#modal_perfil').style.display = 'none';
    document.querySelector('#div_publicar_nuevo_tema').style.display = 'none';


    // Abrimos el login

    document.querySelector("#modal_registro").style.display = 'flex';
    document.querySelector("#div_bienvenida").innerHTML = '';

}

function fMostrarHome(){
    document.querySelector("#modal_nueva_cuenta").style.display = 'none';
    document.querySelector("#modal_bienvenida").style.display = 'flex';
    document.querySelector("#modal_registro").style.display = 'none';
    document.querySelector("#menu_categorias").style.display = 'none';
    document.querySelector("#modal_tema").style.display = 'none';
    document.querySelector("#modal_tema").style.display = 'none';
    document.querySelector('#modal_perfil').style.display = 'none';


   
}

function fMostrarRegistro(){
    document.querySelector("#modal_nueva_cuenta").style.display = 'flex';
    document.querySelector("#modal_bienvenida").style.display = 'none';
    document.querySelector("#modal_registro").style.display = 'none';
    document.querySelector("#menu_categorias").style.display = 'none';
    document.querySelector("#modal_tema").style.display = 'none';
    document.querySelector("#modal_tema").style.display = 'none';
    document.querySelector('#modal_perfil').style.display = 'none';




}

function fRegistro(){

    //PRIMERO LEEMOS TODAS LAS VARIABLES

    let nombre = document.querySelector('#nombre').value;
    let aliasR = document.querySelector('#aliasR').value;
    let email = document.querySelector('#email').value;
    let foto = fotoUsuarioElegida;
    let passwordR = document.querySelector('#passwordR').value;
    let passwordR2 = document.querySelector('#passwordR2').value;

    if (passwordR != passwordR2) {
        document.querySelector("#div_mensaje").style.display = 'block';
        document.querySelector("#div_mensaje").innerHTML = 'Las contraseñas no coinciden, por favor pruebe de nuevo.';        
        return;
    }

    // A partir de aqui, las password coinciden. Enviar estos datos al servidor php

    let URL = "Assets/php/servidor.php?peticion=Registro";

    URL += "&nombre=" + nombre;
    URL += "&aliasR=" + aliasR;
    URL += "&foto=" + foto;
    URL += "&email=" + email;
    URL += "&passwordR=" + passwordR;

    console.log(URL);

     //LE PEDIMOS A SERVIDOR EL REGISTRO EN EL FORO
        
     fetch(URL)
     .then((response) => response.json())
     .then((data) => {
 
    //Para asegurarme de que funciona, imprimo los datos en la consola
     console.log(data);

     document.querySelector('#div_mensaje').style.display = 'block';
     document.querySelector('#div_mensaje').innerHTML = 'CUENTA CREADA CORRECTAMENTE. ¡Disfruta de todos los contenidos del Foro!';

})
    
}

function fMostrarTematicas(){

    //OCULTAMOS TODAS LAS MODALES Y SACAMOS LA MODAL DEL MENU

    document.querySelector("#modal_bienvenida").style.display = 'none';
    document.querySelector("#modal_registro").style.display = 'none';
    document.querySelector("#modal_nueva_cuenta").style.display = 'none';
    document.querySelector("#menu_categorias").style.display = 'flex';
    document.querySelector("#modal_tema").style.display = 'none';
    document.querySelector('#modal_perfil').style.display = 'none';



    //AHORA QUIERO IMPRIMIR EN LA MODAL, TODAS LAS CATEGORIAS QUE TIENE EL FORO

    const URL = "Assets/php/servidor.php?peticion=cargar_temas";

    fetch(URL)
    .then((response) => response.json())
    .then((data) => {

        //Para asegurarme de que funciona, imprimo los datos en la consola
        console.log("aa", data);
        //Para cada elemento de la lista (las categorias), mostrarlo en div_categorias
        
        let html = "";

        for(i=0; i<data.length; i++){

            html += `<div class="div_tipo_categorias" onclick="fFiltroTematica('${data[i].te_id}', '${data[i].te_nombre}')">${data[i].te_nombre}</div>`;

        }

        document.querySelector("#menu_categorias>#div_categorias").innerHTML = html;

    })      


}

function fFiltroTematica(id_tematica, tema){
 
    temaElegido = tema; 

    tematicaPublicacion = id_tematica;

    console.log(temaElegido, tematicaPublicacion);

    //OCULTAMOS TODAS LAS MODALES POR SI ACASO Y MOSTRAMOS LA DEL MODAL TEMA

    document.querySelector("#modal_nueva_cuenta").style.display = 'none';
    document.querySelector("#modal_bienvenida").style.display = 'none';
    document.querySelector("#modal_registro").style.display = 'none';
    document.querySelector("#menu_categorias").style.display = 'none';
    document.querySelector("#modal_tema").style.display = 'flex';
    document.querySelector('#modal_perfil').style.display = 'none';


        //MOSTRAR EN EL SECTION: EL TITULO, LA DESCRIPCION, EL NUMERO DE PUBLICACIONES Y LAS PUBLICACIONES

        //Debemos de pedirla a servidor


        let URL = "Assets/php/servidor.php?peticion=mostrar_tematica&tematica=" + id_tematica;

            fetch(URL)
            .then((response) => response.json())
            .then((data) => {

                //Para asegurarme de que funciona, imprimo los datos en la consola
                console.log("aa", data);
                
                //Para cada foto de la lista, mostrarlo en el section
                // Creamos las variables de foto y ruta, para insertarlo

                //VARIABLES TEMATICA

                let html = "";
                let nombre = `<div>` + temaElegido + `</div>`;

                // VARIABLES MENSAJE

                let foto = "";
                let ruta = "Assets/img/";
                let user = "";
                let fecha = "";
                let texto = "";

                console.log(usuarioLogueado);

                if (usuAdmin == 1){

                    for(i=0; i<data.datos.length; i++){

                        foto = data.datos[i].usu_foto;
                        user = data.datos[i].usu_alias;
                        fecha = data.datos[i].men_fecha;
                        texto = data.datos[i].men_texto;

                        html += `<div class="div_publicacion">`

                        html +=     `<div class="div_info">`;
                        html +=         `<img class="avatar" src="` + ruta + foto + `" alt="">`;
                        html +=         `<div class="div_user">` + user + `</div>`;
                        html +=         `<div class="div_fecha">` + fecha + `</div>`;
                        html +=         `<img class="basura" onclick="fBorrarMensaje('${data.datos[i].men_id}')" src="Assets/img/eliminar.png" alt="">`;
                        html +=     `</div>`;
                        html +=     `<div class="div_texto">` + texto + `</div>`;

                        html += `</div>`;

                    }
                    
                    document.querySelector('#div_publicar').style.display='flex';

                } else if (usuAdmin == 0){

                    for(i=0; i<data.datos.length; i++){

                        foto = data.datos[i].usu_foto;
                        user = data.datos[i].usu_alias;
                        fecha = data.datos[i].men_fecha;
                        texto = data.datos[i].men_texto;

                        html += `<div class="div_publicacion">`

                        html +=     `<div class="div_info">`;
                        html +=         `<img class="avatar" src="` + ruta + foto + `" alt="">`;
                        html +=         `<div class="div_user">` + user + `</div>`;
                        html +=         `<div class="div_fecha">` + fecha + `</div>`;
                        if (usuarioLogueado == data.datos[i].men_usu_id){
                            html +=         `<img class="basura" onclick="fBorrarMensaje('${data.datos[i].men_id}')" src="Assets/img/eliminar.png" alt="">`;
                        }
                        html +=     `</div>`;
                        html +=     `<div class="div_texto">` + texto + `</div>`;

                        html += `</div>`;

                    }  

                    document.querySelector('#div_publicar').style.display='flex';

                } else if (usuAdmin == null) {

                    for(i=0; i<data.datos.length; i++){

                        foto = data.datos[i].usu_foto;
                        user = data.datos[i].usu_alias;
                        fecha = data.datos[i].men_fecha;
                        texto = data.datos[i].men_texto;

                        html += `<div class="div_publicacion">`

                        html +=     `<div class="div_info">`;
                        html +=         `<img class="avatar" src="` + ruta + foto + `" alt="">`;
                        html +=         `<div class="div_user">` + user + `</div>`;
                        html +=         `<div class="div_fecha">` + fecha + `</div>`;
                        html +=     `</div>`;
                        html +=     `<div class="div_texto">` + texto + `</div>`;

                        html += `</div>`;

                    }

                    document.querySelector('#div_publicar').style.display='none';

                }

                console.log(html);

                document.querySelector("#div_titulo_tematica").innerHTML = nombre;
                document.querySelector("#div_publicaciones").innerHTML = html;

    })


}

function fPublicar(){


    // QUIERO QUE SE PUBLIQUE EL MENSAJE 

    // NECESITO SABER EL USUARIO, Y LA TEMATICA EN LA QUE ESTA
    // He creado una variable global para cuando este en las paginas de publicacion, se actualice y guarde, e igual cuando se loguea.
    // Ya tenemos el usuario logueado y la tematica.

    if (usuarioLogueado != null) {



         //Queremos leer y guardar el texto que ha escrito el usuario.
        let mensaje = document.querySelector('#mensaje').value;

            //Enviar estos datos al servidor php
    
                let URL = "Assets/php/servidor.php?peticion=Publicar";
                URL += "&mensaje=" + mensaje;
                URL += "&usu_id=" + usuarioLogueado;
                URL += "&te_id=" + tematicaPublicacion;

                    //Debemos de pedirsela al servidor
                
                    fetch(URL)
                    .then((response) => response.json())
                    .then((data) => {

                    //Para asegurarme de que funciona, imprimo los datos en la consola

                        console.log("usuario logueado: ", usuarioLogueado);
                        console.log("tema registrado: ", tematicaPublicacion);
                        console.log(data);
                        console.log(data.datos);

                        document.querySelector('#mensaje').value = ' ';

        
            
        })

        .finally(()=>{

            fFiltroTematica(tematicaPublicacion, temaElegido);
        })
       
    }


}

function fCrearTema(){

    //QUIERO PUBLICAR EL TEMA

    //Queremos leer y guardar el texto que ha escrito el usuario.
    let te_nombre = document.querySelector('#tema').value;

            //Enviar estos datos al servidor php
    
            let URL = "Assets/php/servidor.php?peticion=crear_tema";
            URL += "&te_nombre=" + te_nombre;
            
                //Debemos de pedirsela al servidor
            
                fetch(URL)
                .then((response) => response.json())
                .then((data) => {

                //Vaciamos
                    console.log(data);
                    document.querySelector('#tema').value = ' ';
            
            //Mostramos la pagina tematicas
                        
    })
    
    .finally(()=>{

        fMostrarTematicas();
    })
    

}

function fBorrarTema(){

        //QUIERO BORRAR EL MENSAJE

        let te_nombre = document.querySelector('#tema_borrar').value;


            //Enviar estos datos al servidor php
    
            let URL = "Assets/php/servidor.php?peticion=borrar_tema";
            URL += "&te_nombre=" + te_nombre;
            
                //Debemos de pedirsela al servidor
            
                fetch(URL)
                .then((response) => response.json())
                .then((data) => {

                document.querySelector('#tema_borrar').value = '';


        
    })
    
    .finally(()=>{

        fMostrarTematicas();
    })
    

}

function fBorrarMensaje(men_id){

    //QUIERO BORRAR EL MENSAJE

            //Enviar estos datos al servidor php
    
            let URL = "Assets/php/servidor.php?peticion=borrar_mensaje";
            URL += "&men_id=" + men_id;
            
                //Debemos de pedirsela al servidor
            
                fetch(URL)
                .then((response) => response.json())
                .then((data) => {

        
    })
    
    .finally(()=>{

        fFiltroTematica(tematicaPublicacion, temaElegido);
    })

}