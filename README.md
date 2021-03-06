# 馃帀 Prueba t茅cnica para Kmote Tecnologies

## 馃摫 [Live Review](https://prueba-kmote-technologies.efrenmartinez.dev/#/)
## 馃搵 [Repositorio](https://github.com/efrenmartinez/prueba-kmote-technologies)

## 馃摝  Instalaci贸n

> NOTA: US脡 MAC PARA DESARROLLAR LA PRUEBA.

1. Se necesita clonar el repositorio desde GITHUB:

```bash
$ git clone https://github.com/efrenmartinez/prueba-kmote-technologies.git
```

2. Acceder a la carpeta *prueba-kmote-technologies*.

```bash
$ cd prueba-kmote-technologies
```

3. Instalar las dependencias.  Se puede usar [NPM](https://www.npmjs.com/). Correr el siguiente comando:

```bash
$ npm install
```

4. Para correr el proyecto, ejecutar el comando:

```bash
$ npx quasar dev -m pwa
```
## 馃摉 Contenido

Para la prueba me pedieron ciertos puntos a considerar:

* Me proporcionaron un endpoint de una API, en cual, respond铆a un listado de usuarios, de los cuales deb铆 generar un ejemplo de c贸mo se ver铆an en una plataforma Web.

En este caso decid铆 usar y configurar el proyecto de esta manera:

* **Quasar Framework** es un framework de VueJS que permite desplegar aplicaciones como PWA, SSR, SPA.
* **Vercel** para hostedar el sitio desde github.

La plataforma que me parecio la forma mas correcta fue mostrarlo como un administrador en donde el usuario pueda iniciar sesi贸n
y mostrar un listado de los usuarios.

El listado de los usuarios puede ordenarse por cada columna.

Adem谩s de ver la posilidad de 'Ver detalles', 'Editar' y 'Eliminar' (solo c贸mo demostraci贸n) de cada registro.

Igual tiene una paginaci贸n para los resgistro.
