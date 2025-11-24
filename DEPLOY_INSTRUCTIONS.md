# Instrucciones para Desplegar en Vercel

## Paso 1: Iniciar sesión en Vercel
Ejecuta en la terminal:
```bash
vercel login
```
Esto abrirá tu navegador para autenticarte.

## Paso 2: Desplegar el proyecto
Una vez autenticado, ejecuta:
```bash
vercel --prod
```

## Paso 3: Configurar el dominio
Si ya tienes el dominio https://www.franklin-osede-prieto.com/ configurado en Vercel, se desplegará automáticamente.

## Alternativa: Configuración desde el Dashboard de Vercel

1. Ve a https://vercel.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "Add New Project"
4. Importa el repositorio: `Franklin-Osede/Portfolio-Nextjs`
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Configura el dominio personalizado si es necesario
7. Haz clic en "Deploy"

Una vez configurado, cada push a `main` desplegará automáticamente.

