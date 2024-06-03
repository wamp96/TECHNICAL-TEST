# TECHNICAL-TEST
Prueba Tecnica Cargo: Aprendiz Sena Backend Developer
****************************************************************
DESCRIPCION:

Este proyecto es una aplicacion para la administracion de tareas,un sistema de autenticacion con su debido registro, en el cual se garantiza que cada uno de los usuario registrados y logueados gestione unicamente sus propias tareas.


ARQUITECTURA: 

La aplicacion esta siendo desarrollada utilizando Node.js y Express.js para el backend, MongoDB como base de datos y TypeScript para tipificacion del codigo,


BACKEND: 

El backend esta escrito con TypeScript y utiliza Express.js como framework. Se integro con MongoDB para almacenar y recuperar datos relacionados con las tareas y los usuario.
Utiliza el sistema de enrutamiento de Express.js para definir las rutas de la API REST y los controladores necesario para gestionar operaciones en el CRUD.

FRONTEND:

El frontend esta desarrollado con la ayuda de la biblioteca de Bootstrap para dar los estilos necesarios a la pagina, con el apoyo de las HBS sistema de plantillas se procede a generar la estructura de la pagina con los datos recibidos en formato JSON.  

INSTUCCIONES DE CONFIGURACION:

REQUISITOS PREVIOS:
*Node.js y npm
*MongoDB
*TypeScript
*VS(Visual Studio Code)
*POSTMAN
*GIT/BASH

TECNOLOGIAS:
Mongodb = v 7.0.11
Express = v 4.19.2
Node.JS = v 18.20.3
NPM = v 10.7.0
TypeScript = v 5.4.5 - ES6


DEPENDENCIAS:
-express
    *express-flash
    *express-handlebars
    *express-session
    *method-override
-bcrypt
-bcryptjs
-connect-flash
-mongoose
-morgan
-passport
-passport-local
-rimraf

DEPENDENCIAS DEV:
-nodemon
-ts-node
-typescript

DEFINICIONES TYPESCRIP:
-@types/bcrypt
-@types/express
-@types/morgan

DEFINICIONES DEV TYPESCRIP:
-@types/express-flash
-@types/express-session
-@types/method-override
-@types/passport
-@types/passport-loc


CONFIGURACION Y EJECUCION:

1. Primero que todo debemos clonar el repositorio o realizar la descarga del mismo como archivo .zip

        git clone https://github.com/wamp96/TECHNICAL-TEST.git

2. Vamos diractamente a la carpeta generada
        cd TECHNICA-TEST
3. Realizamos la instalacion de las dependecias segun la necesidad que surjan del proyecto.
        npm install
4. Configuracion de MongoDB
        -Configuracion variables de entorno
        -Crear carpeta en la raiz de C 
            mkdir \data\db
        -Ejecucion de mongod desde la consola de comandos 
5. Iniciar Servidor
    Para realizar el inicio del servidor es posible realizarlo con los siguiente comandos:
        -npm run dev:Ejecuta el script dev del packege.json permitiendo realizar la ejecicion del proyecto 
        -npx nodemon:Permite reiniciar automaticamente el servidor cuendo se detectan cambios de manera local o remota



