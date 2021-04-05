# 🎉 Prueba técnica para Kmote Tecnologies

## 📱 [Live Review](https://prueba-kmote-technologies.efrenmartinez.dev/#/)
## 📋 [Repositorio](https://github.com/efrenmartinez/prueba-kmote-technologies)

## 📦  Instalación

> NOTA: USÉ MAC PARA DESARROLLAR LA PRUEBA.

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
## 📖 Contenido

Para la prueba me pedieron ciertos puntos a considerar:

* Me proporcionaron un endpoint de una API, en cual, respondía un listado de usuarios, de los cuales debí generar un ejemplo de cómo se verían en una plataforma Web.

En este caso decidí usar y configurar el proyecto de esta manera:

* **Quasar Framework** es un framework de VueJS que permite desplegar aplicaciones como PWA, SSR, SPA.
* **Vercel** para hostedar el sitio desde github.

La plataforma que me parecio la forma mas correcta fue mostrarlo como un administrador en donde el usuario pueda iniciar sesión
y mostrar un listado de los usuarios.

El listado de los usuarios puede ordenarse por cada columna.

Además de ver la posilidad de 'Ver detalles', 'Editar' y 'Eliminar' (solo cómo demostración) de cada registro.

Igual tiene una paginación para los resgistro.
