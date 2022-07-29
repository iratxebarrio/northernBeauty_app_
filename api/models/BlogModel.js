//Abstraccion que representa una tabla en bbdd.

//El modelo facilita un monton de datos a sequelize sobre la bbdd

//Importamos la conexión a la DB
import db from "../database/db";

//Importamos sequelize
import { DataTypes } from "sequelize";

//definir conexión
const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},

})

//'blogs' es el nombre de la tabla. En el objeto vienen los campos que vamos a utilizar

export default BlogModel