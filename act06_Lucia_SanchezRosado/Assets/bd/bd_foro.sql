-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2024 a las 12:25:05
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_foro`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `Borrar_Mensajes` (IN `_id` INT)  delete from mensajes where men_id = _id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Borrar_Temas` (IN `_nombre` VARCHAR(50))  delete from temas where te_nombre = _nombre$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Borrar_Usuario` (IN `_id` INT)  delete from usuarios  where usu_id = _id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Crear_Mensaje` (IN `_texto` MEDIUMTEXT, `_idusu` INT, IN `_idte` INT)  insert into mensajes values (null, _texto, null, _idusu, _idte)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Crear_Temas` (IN `_nombre` VARCHAR(50))  insert into temas values (null, _nombre, current_timestamp())$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Crear_Usuario` (IN `_nombre` VARCHAR(50), IN `_alias` VARCHAR(50), IN `_foto` VARCHAR(50), IN `_admin` BOOLEAN, IN `_contra` VARCHAR(50), IN `_email` VARCHAR(50))  insert into usuarios values (null, _nombre, _alias, _foto, _admin, md5(_contra), _email)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ver_Mensajes_Tema` (IN `_id` INT)  select * from mensajes where men_te_id = _id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ver_Temas` ()  select te_nombre from temas ORDER BY te_nombre ASC$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `men_id` int(10) UNSIGNED NOT NULL,
  `men_texto` mediumtext NOT NULL,
  `men_fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `men_usu_id` int(10) UNSIGNED NOT NULL,
  `men_te_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`men_id`, `men_texto`, `men_fecha`, `men_usu_id`, `men_te_id`) VALUES
(1, '¿Qué tan bueno es el skin-care? \r\nEs cierto que desde hace meses que tengo una rutina de skin-care y mi piel ha mejorado mucho. Pero, ¿necesito tanto uso de tónicos o serums? ¡Es que son caríiiiisimos!\r\n', '2024-03-07 08:11:29', 1, 2),
(3, 'Exista o no, es divertido para pasar el tiempo.', '2024-03-12 07:42:43', 2, 1),
(4, '¿Cuál es vuestra película favorita? La mía hermano oso.', '2024-03-12 07:42:43', 2, 4),
(5, '¿Alguna rutina de entrenamiento para ganar masa muscular en gemelos?', '2024-03-12 08:45:27', 3, 3),
(6, 'Los gemelos son muy difíciles de desarrollar, es mayormente genético.', '2024-03-12 07:43:46', 1, 3),
(7, 'La mía también es mi favorita! Me encanta, tengo un tatuaje en su honor.', '2024-03-12 09:41:40', 1, 4),
(8, 'Yo soy Géminis, ¿y vosotros?', '2024-03-12 09:47:04', 1, 1),
(9, 'Mi película favorita es ser un sosaina.', '2024-03-12 09:49:38', 5, 4),
(10, 'A mi solo me gusta hacer bádminton. Soy un crack.', '2024-03-12 10:31:58', 5, 3),
(11, 'Yo solo me echo agua del grifo, soy mitad asiático', '2024-03-12 10:35:23', 4, 2),
(12, 'Mi peli favorita de Disney es Mulán. Con valoooooor!!!!', '2024-03-12 10:44:22', 6, 4),
(13, 'Hermano Oso >>>>>> el resto de disney', '2024-03-12 10:51:13', 7, 4),
(14, 'Yo soy Leo, full cabezón.', '2024-03-12 10:54:35', 7, 1),
(15, ' Y encima me parecen una mierda los horóscopos.', '2024-03-12 10:55:12', 7, 1),
(16, ' El bádmintón es un deporte??? HAZ JACA', '2024-03-12 10:56:13', 7, 3),
(18, 'Los pajaritos en la Latina, 100%', '2024-03-14 08:38:11', 6, 6),
(19, ' Yo soy Escorpio jeje.', '2024-03-14 08:40:30', 6, 1),
(20, '¿Os gusta hacer paracaidismo?', '2024-03-14 09:40:27', 1, 7),
(21, ' A mi no me gusta hacer deporte :(', '2024-03-14 09:42:53', 6, 3),
(22, ' No, a mi me da bastante yuyu.', '2024-03-14 09:46:45', 6, 7),
(25, 'A mi me encanta programar en Java. Que viva ECLIPSE.', '2024-03-14 10:35:15', 6, 8),
(26, 'El horóscopo es como una cuento asiático.', '2024-03-14 10:42:40', 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `te_id` int(10) UNSIGNED NOT NULL,
  `te_nombre` varchar(50) NOT NULL,
  `te_fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`te_id`, `te_nombre`, `te_fecha`) VALUES
(1, 'Horóscopo', '2024-03-07 07:31:49'),
(2, 'Skin-care', '2024-03-07 07:31:49'),
(3, 'Rutinas de entrenamiento', '2024-03-07 07:31:49'),
(4, 'Películas Disney', '2024-03-07 07:31:49'),
(6, 'Bares buenos y baratos en Madrid', '2024-03-14 07:40:51'),
(7, 'Deportes de riesgo', '2024-03-14 09:27:34'),
(8, 'Programación', '2024-03-14 09:54:21'),
(11, 'Coches', '2024-03-14 10:57:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usu_id` int(10) UNSIGNED NOT NULL,
  `usu_nombre` varchar(50) NOT NULL,
  `usu_alias` varchar(50) NOT NULL,
  `usu_foto` varchar(50) NOT NULL,
  `usu_admin` tinyint(1) NOT NULL,
  `usu_password` varchar(50) NOT NULL,
  `usu_email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usu_id`, `usu_nombre`, `usu_alias`, `usu_foto`, `usu_admin`, `usu_password`, `usu_email`) VALUES
(1, 'Lucía Sánchez', 'Lucilu', '0.png', 1, '3ba430337eb30f5fd7569451b5dfdf32', 'luciasanc98@gmail.com'),
(2, 'Marta Sánchez', 'Martu', '6.png', 1, 'a763a66f984948ca463b081bf0f0e6d0', 'martasanc95@gmail.com'),
(3, 'Vadym Batsula', 'Vadym', '4.png', 0, 'ee720a9e68535fa227d1b6e7d11cd22d', 'vadymb@gmail.com'),
(4, 'Alex Álvarez Sugimoto', 'Sugi', '3.png', 0, '534b44a19bf18d20b71ecc4eb77c572f', 'alexsugimoto@gmail.com'),
(5, 'Gonzalo Álvarez', 'Gontu', '2.png', 0, 'cf1023b94cd07a210860bdf4f03a7126', 'gontu@gmail.com'),
(6, 'Alberto Serrano', 'elProfe', '5.png', 0, '177dacb14b34103960ec27ba29bd686b', 'alberto@gmail.com'),
(7, 'David Pires', 'Batistaker47', '6.png', 0, '172522ec1028ab781d9dfd17eaca4427', 'david@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`men_id`),
  ADD KEY `men_usu_id` (`men_usu_id`),
  ADD KEY `men_te_id` (`men_te_id`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`te_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `men_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `temas`
--
ALTER TABLE `temas`
  MODIFY `te_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usu_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`men_usu_id`) REFERENCES `usuarios` (`usu_id`),
  ADD CONSTRAINT `mensajes_ibfk_2` FOREIGN KEY (`men_te_id`) REFERENCES `temas` (`te_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
