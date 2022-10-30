-- usar bbdd northern_beauty
USE northern_beauty;

-- seleccionar todo de la tabla usuarios
SELECT * FROM usuarios;

-- crear tabla
CREATE TABLE usuarios (
_id varchar(9) PRIMARY KEY,
nombre varchar(40) NOT NULL,
apellidos varchar(40) NOT NULL,
username varchar(10) NOT NULL,
email varchar(20) NOT NULL,
telefono int(9) NOT NULL,
password varchar (10) NOT NULL
);

-- para eliminar los campos de una tabla
DELETE FROM usuarios;   
