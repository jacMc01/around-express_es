# Around the U.S. Back End  
    
Es una aplicación web desarrollada con Node.js y el framework Express. El primer archivo es el archivo principal de la aplicación, en el que se importa el módulo express para crear una instancia de la aplicación y configurar las rutas de la API. Se importan dos módulos adicionales, './routes/users' y './routes/cards', que se utilizan para manejar las solicitudes a las rutas '/users' y '/cards', respectivamente. También se establece un manejador para todas las solicitudes que no coinciden con ninguna de las rutas anteriores, que devuelve un mensaje de error indicando que el recurso solicitado no ha sido encontrado. Finalmente, se inicia el servidor escuchando en el puerto especificado en la variable de entorno 'port' o en el puerto 3000 si no se especifica.

El segundo archivo es un módulo específico para manejar solicitudes HTTP a la ruta '/users'. Contiene dos rutas, una para obtener todos los usuarios y otra para obtener un usuario específico por ID. Utiliza el método 'fs.readFile' para leer el archivo JSON de usuarios y luego utiliza la función 'JSON.parse' para convertirlo en un objeto Javascript. Luego, utiliza el método 'find' para buscar el usuario específico en el objeto y devolverlo en la respuesta HTTP. Si no se encuentra el usuario, se devuelve un mensaje de error indicando que el ID de usuario no ha sido encontrado. Este módulo es exportado para ser utilizado en otro lugar en la aplicación.

El tercer archivo es un módulo específico para manejar solicitudes HTTP a la ruta '/cards' mediante una función llamada 'cardsAPI'. Utiliza el método 'fs.readFile' para leer el archivo JSON de tarjetas (cards) y luego utiliza la función 'JSON.parse' para convertirlo en un objeto Javascript. Luego, la respuesta HTTP se envia con el contenido del archivo. Si ocurre un error al leer el archivo, se devuelve un mensaje de error indicando que ha habido un error al leer el archivo de tarjetas. Este módulo es exportado para ser utilizado en otro lugar en la aplicación.


...

It is a web application developed with Node.js and the Express framework. The first file is the main file of the application, in which the express module is imported to create an instance of the application and configure the API routes. Two additional modules, './routes/users' and './routes/cards', are imported and used to handle requests to the '/users' and '/cards' routes, respectively. A handler is also set up for all requests that do not match any of the previous routes, which returns an error message indicating that the requested resource was not found. Finally, the server is started listening on the port specified in the 'port' environment variable or on port 3000 if not specified.

The second file is a specific module for handling HTTP requests to the '/users' route. It contains two routes, one to get all users and one to get a specific user by ID. It uses the 'fs.readFile' method to read the users JSON file and then uses the 'JSON.parse' function to convert it into a Javascript object. Then, it uses the 'find' method to search for the specific user in the object and return it in the HTTP response. If the user is not found, an error message is returned indicating that the user ID was not found. This module is exported to be used elsewhere in the application.

The third file is a specific module for handling HTTP requests to the '/cards' route using a function called 'cardsAPI'. It uses the 'fs.readFile' method to read the cards JSON file and then uses the 'JSON.parse' function to convert it into a Javascript object. Then, the HTTP response is sent with the content of the file. If there is an error reading the file, an error message is returned indicating that there was an error reading the cards file. This module is exported to be used elsewhere in the application.


...

Imágenes/ images

https://www.loom.com/i/4a445985071b49d5b8c3079b80789980

https://www.loom.com/i/9b8dd5759f2a4a26b29f2a4777cf5043

https://www.loom.com/i/e80145fd4f9c48579f14e21dd5310d02

https://www.loom.com/i/184728a2ba864ac89e65ee1d26d7f1cf

https://www.loom.com/i/e7e9e6c83a994f89940585be79f273de

Video demostración/ Video demonstration

https://www.loom.com/share/37e1ee9965274f9bbda7a7bf3ce75f61


