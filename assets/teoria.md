# Introducción

## Análisis del programa
<details><summary> Análisis del programa</summary>
<p>
Un de los grandes fallos que cometen las personas que están aprendiendo a programar (e incluso muchos profesionales, por falta de tiempo principalmente) es que se apresuran a escribir el código fuente sin haberse tomado antes el tiempo necesario para analizar los objetivos (qué debe hacer el programa) y los pasos necesarios para alcanzarlos, creando así un programa robusto (libre de errores).

Por ejemplo, si se está escribiendo un simple programa para pedir un número al usuario con motivo de mostrarlo después por pantalla, el objetivo principal sería mostrar el número, los pasos necesarios serían pedir el número y mostrarlo luego por pantalla... debiéndose también tener en cuenta cosas como: ¿qué debería hacer el programa si el usuario escribe una letra en lugar de un número?, ¿y si pulsa la tecla Esc?...

La fase de análisis es un paso fundamental para obtener una documentación del programa sobre cuya base se comenzará a desarrollar el mismo.

La documentación del programa debe mantenerse actualizada durante todo el ciclo de vida del mismo dejando constancia de todos los cambios realizados, pudiendo así ser consultada en caso de tener que comprobar algo, facilitar la comprensión del mismo por otros programadores que entren a formar parte del proyecto, etc.
</p>
</details>

<details><summary> Algoritmos</summary>
<p>
Una vez se han analizado los requisitos del programa podemos crear algoritmos para indicar qué pasos debe realizar el programa de modo que realice correctamente su propósito, independientemente del lenguaje de programación que sea usado.

Los algoritmos pueden representarse de tres modos: usando lenguaje natural, pseudocódigo o con Diagramas de Flujo de Datos (DFD), siendo los dos últimos métodos los más usados.

Para el presente tutorial nos centraremos principalmente en el pseudocódigo.
</p>
</details>

<details><summary>Algoritmos en Diagramas de Flujos de Datos (DFD)
</summary>
<p>
Para crear un Diagrama de Flujo de Datos usaremos entre otros los siguientes símbolos:

DFD

Algunas de las pautas para crearlos son:

Debe ser diseñado de forma que sea leído de arriba hacia abajo y de izquierda a derecha.
Todo Diagrama de Flujo de Datos (DFD) debe tener un conector de inicio y al menos uno de finalización (el programa debe terminar su ejecución en algún momento).
A un símbolo no puede apuntar más de una flecha.
Para conectar sus elementos han de usarse líneas rectas horizontales y/o verticales, y jamás deben cruzarse unas con otras.
Es posible que encuentres otras formas de representar un DFD.

En la siguiente imagen mostramos un ejemplo de un programa que pide un número al usuario y muestra el resultado por pantalla, realizado con un Diagrama de Flujo de Datos (DFD):

Diagrama

Para la acción de pedir el dato al usuario usamos el conector correspondiente, cargando el valor obtenido en una variable llamada 'entrada', cuyo valor a continuación será mostrado por pantalla.

Observa que para los elementos que dan comienzo y fin al programa se usan terminadores.

Más adelante veremos algunos ejemplos de Diagramas de Flujo de Datos más.
</p>
</details>

<details><summary>Algoritmos en pseudocódigo
</summary>
  \`\`\` js
ALGORITMO Mostrar;
        ...
    INICIO
        // Esto es un comentario
        /*
            Esto es un comentario
            Esto es otra línea dentro del mismo comentario
        */
        ...
    FIN
  \`\`\`
</details>


