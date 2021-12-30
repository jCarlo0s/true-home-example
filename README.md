# True Home Example with NextJS and React

Esta prueba incluye el uso de:
1. React
2. Redux
3. Redux Saga
4. Axios
5. Sass
6. PropTypes
7. Reselect

URL Productiva: https://truehome-front.herokuapp.com/

Redux DevTools esta habilitado en la url productiva solo para que puedan explorar el store 
en funcionamiento. [ En un entorno productivo real esto no debe pasar ]

## EL API.

El api esta creada con Django y Django Rest Framerok, con ModelViewSets para
hacer mas rapido el desarrollo solo limitando los request que pueden hacerse (solo aceptan GET)

URL API Productiva: https://truehome-api.herokuapp.com/api/

La url productiva esta en modo debug true solo para motivos de pruebas, en un entorno
real deberia estar **DEBUT = False**

## Para correr el proyecto
El proyecto ya cuenta con un env.development con las variables configuradas con el api productivo
y el host local.

Solo restaria hacer:
1. Yarn install
2. Yarn dev

**Nota.** Se requiere una version de Node Js instalada en el sistema.

## Notas sobre la estructura

### Components
La carpeta components contiene los elementos necesarios para conformar la interfaz ademas de ser pensados
para ser reutilizados en otras estructuras.

### Pages
Aqui encontraran las paginas que confirma la seleccion de origin, destino y la vista de detalles 
para las reservaciones.

### Public
Esta carpeta contiene solo archivos de iconos

### Redux
Esta carpeta contiene toda la configuracion del store asi como una carpeta Main con la configuracion
de acciones, reductores, sagas y selectores.

### Styles
Esta carpeta contiene los archivos de estilos para hacer funcionar tanto las paginas como los componentes
utilize dos ideas generales.

SASS. Con generacion de elementos de ayuda como margenes y paddings asi como el layout basico a 12 columnas
basandome en la idea de TailwindCSS

Modulos. Esta idea es siguiente el ejemplo base que tiene next al momento de crear la app
creando un modulo por componente para aislar los estilos mezclandolo con SASS y mixins para controlar
los media query y hacer mas compacto el archivo.