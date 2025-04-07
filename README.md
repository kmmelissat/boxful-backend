# 📦 Boxful Backend - Prueba Técnica

Este es el backend de la prueba técnica de **Boxful**, desarrollado con **NestJS**, **MongoDB** y **Prisma**. Contiene autenticación con JWT, validación con DTOs, y un endpoint protegido para registrar envíos (shipments).

---

## 🚀 Tecnologías

- [NestJS](https://nestjs.com/) - Framework principal
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Base de datos NoSQL
- [Prisma](https://www.prisma.io/) - ORM para Mongo
- [JWT](https://jwt.io/) - Autenticación segura

---

## 📁 Estructura del Proyecto

src/ ├── auth/ # Registro, login, JWT ├── prisma/ # PrismaService ├── shipments/ # DTOs, controlador y lógica de envíos ├── app.module.ts # Módulo principal └── main.ts # Bootstrap con validación global

yaml
Copy
Edit

---

## ⚙️ Instalación

```bash
git clone https://github.com/tu-usuario/boxful-backend.git
cd boxful-backend
npm install
🔐 Variables de Entorno
Crea un archivo .env con el siguiente contenido:

env
Copy
Edit
DATABASE_URL="mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/boxful"
JWT_SECRET="supersecretboxful"
PORT=3010
🛠 Prisma
bash
Copy
Edit
npx prisma generate     # Genera el cliente
Como se usa MongoDB, no se necesita migrar esquemas.

▶️ Ejecutar en desarrollo
bash
Copy
Edit
npm run start:dev
📬 Endpoints principales
Método	Ruta	Protección	Descripción
POST	/auth/register	❌	Crear nuevo usuario
POST	/auth/login	❌	Iniciar sesión (JWT)
POST	/shipments	✅ JWT	Crear un nuevo envío
Los endpoints protegidos deben incluir el header: Authorization: Bearer <token>

📦 Payload esperado en /shipments
json
Copy
Edit
{
  "pickupAddress": "Colonia Roma Norte",
  "scheduledDate": "2025-04-10T10:00:00.000Z",
  "firstName": "Melissa",
  "lastName": "Torres",
  "email": "melissa@example.com",
  "phone": "+50371234567",
  "deliveryAddress": "Zona Rosa, San Salvador",
  "department": "San Salvador",
  "municipality": "San Salvador",
  "referencePoint": "Frente al parque",
  "instructions": "Llamar al llegar",
  "packages": [
    {
      "content": "Zapatos",
      "weight": 2.5,
      "length": 30,
      "height": 10,
      "width": 20
    }
  ]
}
🔒 Seguridad
Las contraseñas se almacenan encriptadas con bcrypt

Los endpoints protegidos requieren JWT válido

Validación estricta con DTOs + class-validator

✨ Autora
Desarrollado con 💛 por Karla Melissa Torres Solorzano

