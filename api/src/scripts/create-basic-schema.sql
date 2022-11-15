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




USE northern_beauty;

CREATE TABLE usuarios (
_id int(9) NOT NULL auto_increment PRIMARY KEY,
nombre varchar(40) NOT NULL,
apellidos varchar(40) NOT NULL,
username varchar(10) NOT NULL,
email varchar(20) NOT NULL,
telefono int(9) NOT NULL,
password varchar (255) NOT NULL
);

DELETE FROM usuarios;

SELECT * FROM usuarios;
DELETE FROM usuarios; 




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
add constraint fk_servicio_id FOREIGN key (servicio_id) references servicios(_id);

ALTER TABLE reservas
add constraint primary key (usuario_id, servicio_id);

SELECT * FROM reservas;




USE northern_beauty;

CREATE TABLE servicios (
_id int(9) NOT NULL auto_increment PRIMARY KEY,
nombre varchar(40) NOT NULL,
descripcion varchar(500) NOT NULL,
precio float (6,2) NOT NULL,
img varchar(50)
);


DELETE FROM servicios;

-- PARA AÑADIR UN CAMPO NUEVO A LA TABLA SIN TENER QUE ELIMINARLA Y CREARLA DE NUEVO
ALTER TABLE SERVICIOS ADD IMG VARCHAR(50); 

SELECT * FROM servicios;

-- PARA ACTUALIZAR LA INFO DE UN CAMPO CONCRETO DE LA TABLA
update servicios set img = 'facial.jpg' where nombre = 'Tratamiento facial';
update servicios set img = 'masaje.jpg' where nombre = 'Tratamiento corporal';
update servicios set img = 'manicura.jpg' where nombre = 'Manicura y Pedicura';
update servicios set img = 'maquillaje.jpg' where nombre = 'Maquillaje';
update servicios set img = 'armario.jpg' where nombre = 'Fondo de armario';
update servicios set img = 'laser.jpg' where nombre = 'Laser';

INSERT INTO servicios (nombre, descripcion, precio, img)
VALUES ('Tratamiento facial', 'Limpieza completa con Ultrasonidos + Hidrodermoabrasión', 21.90, 'citas.png');

INSERT INTO servicios (nombre, descripcion, precio)
VALUES ('Tratamiento corporal', 'Masajes corporales que pueden ser relajantes, piernas cansadas, brazos, senos, tonificantes, descontracturantes, anticelulíticos', 42.50);

INSERT INTO servicios (nombre, descripcion, precio)
VALUES ('Manicura y Pedicura', 'Diferentes tipos de manicuras y pedicuras para tener unas uñas perfectas', 15.90);

INSERT INTO servicios (nombre, descripcion, precio)
VALUES ('Maquillaje', 'Te maquillamos para una ocasión especial. Cuidamos de tu rostro con un maquillaje express, maquillaje para eventos o para el día de tu boda', 33.25);

INSERT INTO servicios (nombre, descripcion, precio)
VALUES ('Fondo de armario', 'Te ayudamos a mejorar tu armario con nuestro asesoramiento de imagen personal', 105.45);

INSERT INTO servicios (nombre, descripcion, precio)
VALUES ('Laser', 'Depilación laser de cuerpo completo', 1050.80);

SELECT `_id`, `nombre`, `descripcion`, `precio` FROM `servicios`;