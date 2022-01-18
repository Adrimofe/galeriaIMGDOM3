# galeriaIMGDOM3
#Explicación del ejercicio y pasos:

Práctica a través del DOM en la cual a traves del QuerySelectorAll('a') de los enlaces es añadido a un bucle "forEach" para añadirlo a un evento click.

Este evento cuenta con una "arrow function" que establece el atributo "src" y "title" de la imagen[5] que es recogido a través de un getElementsByTagName('img'). 

Como conocemos su posición por eso establecemos el número[5], a través del evento recogemos y establecemos el atributo con un setAttribute("src", evento.target.src);
