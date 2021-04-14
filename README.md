# prueba_logica

## Sección 1. Lógica

### Problema 1 Sean N listas, de longitudes diferentes:

El archivo prueba_logica.js contiene las funciones desarroladas para realizar las combinaciones de n listas. Sean las entradas $> f({colors,ancients}), donde :

colors = ["red","blue","green"] y ancients = ["Protagoras","Homer","Sappho"]. La salida deberá mostrarse de esta manera. 

============>

[
{colors: "red",ancients:"Protagoras"},
{colors: "red",ancients:"Homer"},
{colors: "red",ancients:"Sappho"},
{colors: "blue",ancients:"Protagoras"},
{colors: "blue",ancients:"Homer"},
{colors: "blue",ancients:"Sappho"},
{colors: "green",ancients:"Protagoras"},
{colors: "green",ancients:"Homer"},
{colors: "green",ancients:"Sappho"},
]

## Test
EL archivo test.js utiliza el modulo jest que permite realizar pruebas unitarias de las siguientes entradas:
      1. f({})
      2. f({colors})
      3. f({colors,ancients})
      4. f({colors,countries, constellations})
      5. f({animals, ancients, countries, constellations})
      6. f({fruits, colors, ancients, animals, countries, constellations, js_frameworks})

es necesario ejecutarlo de la siguiente manera en consola: 

        npm run test
        

