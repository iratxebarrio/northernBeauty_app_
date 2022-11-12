-- usar bbdd northern_beauty
USE northern_beauty;

-- seleccionar todo de la tabla usuarios
SELECT * FROM usuarios;

-- crear tabla
CREATE TABLE usuarios (
_id int(9) NOT NULL auto_increment PRIMARY KEY,
nombre varchar(40) NOT NULL,
apellidos varchar(40) NOT NULL,
username varchar(10) NOT NULL,
email varchar(20) NOT NULL,
telefono int(9) NOT NULL,
password varchar (255) NOT NULL
);

-- para eliminar los campos de una tabla
DELETE FROM usuarios;
DELETE FROM servicios;
DELETE FROM reservas;


-- crear tabla servicios
CREATE TABLE servicios (
_id int(9) NOT NULL auto_increment PRIMARY KEY,
nombre varchar(40) NOT NULL,
descripcion varchar(500) NOT NULL,
precio float (6,2) NOT NULL
);

-- insertar datos en tabla servicios
INSERT INTO servicios (nombre, descripcion, precio)
VALUES ('Tratamiento facial', 'Limpieza completa con Ultrasonidos + Hidrodermoabrasión', 21.90);

-- PARA AÑADIR UN CAMPO NUEVO A LA TABLA SIN TENER QUE ELIMINARLA Y CREARLA DE NUEVO
ALTER TABLE SERVICIOS ADD IMG VARCHAR(50)

-- PARA ACTUALIZAR LA INFO DE UN CAMPO CONCRETO DE LA TABLA
update servicios set img = 'citas.png' where nombre = 'Tratamiento facial';



--crear tabla reservas
CREATE TABLE reservas (
usuario_id int (9),
servicio_id int (9),
fecha date,
estado varchar (10) 
);

-- crear claves foraneas
ALTER TABLE reservas
add constraint fk_usuarioId FOREIGN key (usuario_id) references usuarios(_id);

ALTER TABLE reservas
add constraint fk_servicioId FOREIGN key (servicio_id) references servicios(_id);

