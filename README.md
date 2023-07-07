¿Qué sucedió al usar async y await?
Al usar async y await, el código se vuelve más legible y se puede escribir de manera más secuencial, como si fuera código síncrono, aunque las funciones sean asincrónicas. Al utilizar await antes de una función que devuelve una promesa, el programa espera hasta que la promesa se resuelva o se rechace antes de continuar ejecutando la siguiente línea de código. Esto permite escribir un código más conciso y fácil de entender, sin necesidad de encadenar múltiples llamadas a .then().

¿Qué sucedió al usar el método then()?
Al usar el método .then(), se realiza un encadenamiento de promesas donde se especifica qué hacer cuando cada promesa se resuelve correctamente. Esto implica que debes encadenar varias llamadas .then() para secuenciar las operaciones asincrónicas. Si se produce un erroren alguna de las promesas, puedes utilizar el método .catch() para capturar y manejar el error.

¿Qué diferencias encontraste entre async, await y el método then()?

async y await proporcionan una sintaxis más clara y concisa para manejar promesas y operaciones asincrónicas. Permiten escribir código que se asemeja a un estilo síncrono, lo que mejora la legibilidad y facilita el manejo de errores con el bloque try-catch. Por otro lado, el método .then() requiere encadenar múltiples llamadas y utilizar funciones de devolución de llamada para manejar los resultados de las promesas.
async y await permiten un mejor manejo de errores, ya que puedes utilizar bloques try-catch para capturar excepciones tanto síncronas como asíncronas. En cambio, con el método .then(), debes utilizar el método .catch() para capturar errores específicos.