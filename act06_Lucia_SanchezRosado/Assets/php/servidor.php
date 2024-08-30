<?php
require_once("BBDD_CTRLR.php");

if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        case "Login":
            //Recuperar alias de la URL
            $alias = $_REQUEST['alias'];
            //Recuperar password de la URL
            $password = $_REQUEST['password'];
            //SQL QUE LO COMPRUEBA
            $sql = 
            "SELECT * FROM usuarios WHERE usu_alias = '$alias' AND usu_password = md5('$password')";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);      
            break;

        case "Registro":
            //Recuperar nombre de la URL
            $nombre = $_REQUEST['nombre'];
            //Recuperar alias de la URL
            $aliasR = $_REQUEST['aliasR'];            
            //Recuperar password de la URL
            $passwordR = $_REQUEST['passwordR'];
            //Recuperamos la foto de la URL
            $foto = $_REQUEST['foto'];
            //Recuperar password de la URL
            $email = $_REQUEST['email'];
            //SQL 
            $sql = "CALL Crear_Usuario('$nombre','$aliasR', '$foto', 0, '$passwordR', '$email')";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            echo json_encode($datos);      
            break;

        case "cargar_temas":
            $sql = "SELECT * FROM temas";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);      
            break;

        case "mostrar_tematica":
            $tematica=$_REQUEST['tematica'];
            $sql = "SELECT te.te_nombre, me.men_usu_id, u.usu_alias, u.usu_foto, me.men_texto, me.men_fecha, me.men_id FROM temas as te, usuarios as u, mensajes as me WHERE men_usu_id = usu_id AND men_te_id = te_id AND men_te_id = '$tematica'";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);      
            break; 

        case "Publicar":
            //Recuperar el mensaje
            $mensaje = $_REQUEST['mensaje'];
            //Recuperar el usu_id de la URL
            $usu_id = $_REQUEST['usu_id'];
            //Recuperar el te_id de la URL
            $te_id = $_REQUEST['te_id'];
            //SQL QUE LO COMPRUEBA
            $sql =  "CALL Crear_Mensaje('$mensaje', '$usu_id', '$te_id')";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            echo json_encode($datos);      
            break;

        case "mostrar_perfil":
            //Recuperar el usu_id de la URL
            $usu_id = $_REQUEST['usu_id'];
            //SQL QUE LO COMPRUEBA
            $sql =  "SELECT us.usu_alias, us.usu_nombre, us.usu_email, us.usu_foto FROM usuarios as us WHERE us.usu_id = '$usu_id'";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);      
            break;

        case "crear_tema":
            //Recuperar el te_nombre de la URL
            $te_nombre = $_REQUEST['te_nombre'];
            //SQL QUE LO EJECUTA
            $sql =  "CALL Crear_Temas('$te_nombre')";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            echo json_encode($datos);      
            break;

        case "borrar_tema":
            //Recuperar el te_id de la URL
            $te_nombre = $_REQUEST['te_nombre'];
            //SQL QUE LO EJECUTA
            $sql =  "CALL Borrar_Temas('$te_nombre')";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            echo json_encode($datos);      
            break;

        case "borrar_mensaje":
            //Recuperar el te_nombre de la URL
            $men_id = $_REQUEST['men_id'];
            //SQL QUE LO EJECUTA
            $sql =  "CALL Borrar_Mensajes('$men_id')";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            echo json_encode($datos);      
            break;
    }        
}
