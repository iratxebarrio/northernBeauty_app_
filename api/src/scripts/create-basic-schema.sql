-- usar bbdd northern_beauty
USE northern_beauty;

-- seleccionar todo de la tabla usuarios
SELECT * FROM usuarios;

-- crear tabla
CREATE TABLE usuarios (
_id varchar(9) PRIMARY KEY,
nombre varchar(40) NOT NULL,
apellido varchar(40),
telefono int(9),
edad int(2)
);

-- para eliminar los campos de una tabla
DELETE FROM usuarios;   
