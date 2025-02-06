# Recuperatorio 2° Parcial DDS 3k5 
> Importante
> 
> Este es un archivo MD (markdown)
> Si aún no lo estás haciendo, lee este documento usando la herramienta de preview, incluida en VSCode

## 1. Backend y Modelo de Datos

El backend expone una API con información sobre los premios Nobel. Los siguientes endpoints van a ser de utilidad para la implementación que se solicita: 

`GET /api/categorias/` recupera todas las categorías

`GET /api/premios/` recupera todos los premios Nobel

Este endpoint admite 3 query parameters: 
- categoria
- pais 
- nombre

Por ejemplo
`GET /api/premios?pais=Germany&nombre=Richard` retorna todos los premios del país "Germany" cuyo nombre contiene "Richard"

`POST /api/premios/` crea una entrada en la lista de Premios Nobel



Podés iniciar el backend en el puerto 3001 mediante 
`> node server`

La base de datos ubicada en `/datos/nobels.db` en el proyecto de backend ya contiene datos y obedece al siguiente modelo

### **1.1 premios**

| Campo         | Tipo                                 |
|---------------|--------------------------------------|
| id            | Int Clave Primaria Autoincremental   |
| anio          | int                                  |
| nombre        | varchar                              |
| pais          | varchar                              |
| categoria     | varchar                              |
| motivo        | varchar                              |




### **1.2. categorias**

| Campo         | Tipo                                 |
|---------------|--------------------------------------|
| id            | Int Clave Primaria Autoincremental   |
| descripcion   | int                                  |


## 2. Tecnología a utilizar

El ejercicio debe ser resuelto utilizando: 
    
- Node.js
- Express
- DB: Sqlite 3
- ORM: Sequelize
- React

## 3. Requerimientos

Debés construir una aplicación web con las siguientes características

1. Navegación: El item "Listado" de la barra de navegación debe navegar hacia un componente que tenés que crear: Premios

2. Listado: El componente Premios debe mostrar inicialmente el listado de los premios Nobel. Debe mostrar solamente los campos siguientes:

anio
nombre
pais
categoria

3. Filtros: Se debe implementar un filtro en el componente Premios que permita filtrar por los siguientes campos:

nombre: mediante un campo de texto libre
categoria: se debe cargar una lista desplegable (select) usando el endpoint provisto.

4. Alta: Se debe agregar un botón en este componente que permita navegar o exhibir otro componente: DetallePremio. Este componente debe permitir agregar un nuevo Premio ingresando datos para los campos siguientes:

- anio      
- nombre    
- pais      
- categoria 
- motivo   

Todos los campos son requeridos

Una vez ingresado exitosamente el registro del Premio, debe navegar hacia el listado, donde el registro recién ingresado estará visible (si concuerda con los filtros activos)


## 4. Puntaje y calificación

#### 4.1. Criterios de Evaluación

| Criterio                                   | Puntos |
|--------------------------------------------|--------|
| Navegación                                 |   10   |
| Listado                                    |   10   |
| Filtros                                    |   30   |
| Alta                                       |   30   |
| Validación                                 |   10   |
| Cálidad de Código                          |   10   |


#### 4.2. Escala de notas

| Nota | Porcentaje | Calificación     | 
|------|------------|------------------|
| 1    |            | No aprobado      |
| 2    |            | No aprobado      |
| 3    |            | No aprobado      |
| 4    | 55% a 57%  | Aprobado         |
| 5    | 58% a 59%  | Aprobado         |
| 6    | 60% a 68%  | Aprobado         |
| 7    | 69% a 77%  | Aprobado         |
| 8    | 78% a 86%  | Aprobado         |
| 9    | 87% a 95%  | Aprobado         |
| 10   | 96% a 100% | Aprobado         |


## 5. Entrega

Para entregar debés subir a la UV un archivo comprimido .zip conteniendo la carpeta `frontend`

> Antes de comprimir la carpeta, tenés que borrar la carpeta `node_modules`

El archivo tiene que nombrarse con el siguiente patrón: `<apellido>_<nombre>_<legajo>.zip`

Por ejemplo, si te llamás `Juan Garcia Saravia` y tu legajo es `45044`, el archivo que debés subir será:

`garcia_saravia_juan_45044.zip`

No parece tan dificil ¿no?

