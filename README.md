# API REST - MongoDB + Mongoose

## Descripción

Este proyecto consiste en el desarrollo de una **API REST** utilizando **Node.js, Express, MongoDB y Mongoose**, donde se implementan dos CRUD completos para dos colecciones relacionadas: **Providers** y **Products**.

La API permite gestionar proveedores y productos, manteniendo una relación entre ambas entidades mediante referencias (`ObjectId`).

---

## Tecnologías utilizadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Morgan
* Dotenv

---

## Estructura del proyecto

```
src/
├── config/
│   └── db_mongo.js
├── controllers/
│   ├── providers.controller.js
│   └── products.controller.js
├── models/
│   ├── providers.js
│   └── products.js
├── routes/
│   ├── providers.routes.js
│   └── products.routes.js
└── app.js
│ 
├── package-lock.json
├── package.json
```

---

## Configuración

### 1. Clonar el repositorio

```
git clone https://github.com/Elegm92/API_MongoDB-Mongoose.git
cd API_MongoDB-Mongoose
```

### 2. Instalar dependencias

```
npm install
```

### 3. Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```
PORT=3000
MONGO_URL=tu_uri_de_mongodb
```

---

## Ejecución del proyecto

```
npm start
```

El servidor estará disponible en:

```
http://localhost:3000
```

---

## Endpoints

### Providers

#### Obtener todos los proveedores

```
GET /api/providers
```

#### Crear proveedor

```
POST /api/providers
```

Ejemplo body:

```
{
  "company_name": "Nintendo",
  "CIF": "B12345678",
  "address": "Calle Mario 1",
  "url_web": "https://www.nintendo.com"
}
```

#### Actualizar proveedor

```
PUT /api/providers
```

#### Eliminar proveedor

```
DELETE /api/providers
```

---

### Products

#### Obtener todos los productos

```
GET /api/products
```

> Incluye datos del proveedor usando `populate()`

#### Crear producto

```
POST /api/products
```

Ejemplo body:

```
{
  "title": "Switch",
  "price": 300,
  "description": "Consola de Nintendo",
  "company_name": "Nintendo"
}
```

#### Actualizar producto

```
PUT /api/products
```

#### Eliminar producto

```
DELETE /api/products
```

---

## Relación entre colecciones

* Cada producto está asociado a un proveedor mediante `ObjectId`.
* Se utiliza `populate()` para obtener los datos completos del proveedor en los productos.

---

## Reglas de negocio

* No se permite eliminar un proveedor si tiene productos asociados.

---

## Despliegue

* Base de datos: MongoDB Atlas
* Servidor: Render

---

## Autor

Proyecto desarrollado por Elena Gonzalez como ejercicio práctico de API REST con MongoDB y Mongoose.
