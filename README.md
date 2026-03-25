# 🎨 Generador de Paletas de Colores

Aplicación web que permite generar paletas de colores aleatorios en formatos HEX y HSL, con opciones de personalización y copia al portapapeles.

---

## 🚀 Características

- Generación de colores aleatorios
- Formatos soportados:
  - HEX
  - HSL
- Selección de cantidad de colores (6, 8 o 9)
- Render dinámico sin recargar la página
- Copia de colores al portapapeles
- Notificación visual (toast)

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (Grid + Flexbox)
- JavaScript (Vanilla JS)

---

## 🧠 Decisiones técnicas

### 1. Uso de JavaScript puro (Vanilla JS)

Se decidió no utilizar frameworks para reforzar el manejo del DOM, eventos y lógica base.

### 2. Render dinámico

Los colores se generan y renderizan dinámicamente en el DOM utilizando:

- `createElement`
- `appendChild`
- `innerHTML` para limpieza del contenedor

Esto permite actualizar la interfaz sin recargar la página.

## 3. Generación de colores

- HEX: usando números aleatorios convertidos a base 16
- HSL: usando valores aleatorios de matiz, saturación y luminosidad

## 5. Feedback al usuario

Se implementó un sistema de notificaciones tipo "toast" para indicar cuando un color es copiado y cuando se genera una paleta de colores de manera correcta.

## ▶️ Instrucciones de uso

- Selecciona la cantidad de colores
- Selecciona el formato (HEX o HSL)
- Haz clic en "Generar paleta"
- Haz clic en un color para copiarlo
- Usa el botón 🔒 para bloquear colores

## ⚙️ Cómo ejecutar el proyecto

### Opción 1: Abrir directamente

- Descarga el repositorio
- Abre el archivo index.html en tu navegador
- Opción 2: Servidor local (recomendado)

## Opción 2: Si usas Visual Studio Code:

- Instala la extensión Live Server
- Haz clic derecho en index.html
- Selecciona "Open with Live Server"

## 🌐 Despliegue

### Opción 1: GitHub Pages

- Sube tu proyecto a GitHub
- Ve a:
  Settings → Pages
  Configura:
  Branch: main
  Folder: /root
- Guarda y obtén la URL pública

## 👨‍💻 Autor

Desarrollado por Brandon Almora

## 📄 Licencia

Proyecto con fines educativos.
