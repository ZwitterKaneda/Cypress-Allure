# Cypress Allure Integration Guide

Este repositorio sirve como guía para integrar Allure con Cypress, lo que te permite generar informes detallados y visualmente atractivos basados en
tus pruebas con Cypress.

## 📦 Instalación y configuración

1 **Clona el repositorio:**

```bash
git clone git@github.com:ZwitterKaneda/Cypress-Allure.git
```

2 **Navega al directorio del proyecto clonado:**

```bash
cd Cypress-Allure
```

3 **Instala las dependencias necesarias utilizando Yarn:**

```bash
yarn install
```

4 **Estructura del Repositorio**

```plaintext
.
├── crearTest.sh
├── cypress
│   ├── e2e                     # Pruebas de extremo a extremo.
│   ├── fixtures                # Archivos de datos fijos.
│   └── support                 # Scripts de soporte y comandos.
├── cypress.config.ts           # Configuración principal de Cypress.
├── package.json                # Lista de dependencias y scripts.
├── regression.json             # Configuración para pruebas de regresión.
└── tsconfig.json               # Configuración de TypeScript.
```

## Dependencias utilizadas

Estas son las dependencias que estamos utilizando para este proyecto:

```json
"devDependencies": {
  "@shelex/cypress-allure-plugin": "2.40.0",
  "@typescript-eslint/eslint-plugin": "6.7.2",
  "@typescript-eslint/parser": "6.7.2",
  "allure-commandline": "2.24.0",
  "cypress": "13.2.0",
  "cypress-multi-reporters": "1.6.3",
  "cypress-plugin-api": "2.11.1",
  "eslint": "8.49.0",
  "eslint-config-prettier": "9.0.0",
  "eslint-plugin-only-warn": "1.1.0",
  "mocha": "10.2.0",
  "mocha-allure-reporter": "1.4.0",
  "mocha-junit-reporter": "2.2.1",
  "prettier": "3.0.3",
  "typescript": "5.2.2"
}
```

## Ejecución de pruebas y generación de informes con Allure

Para ejecutar tus pruebas y aprovechar la integración con Allure:

1 **Ejecuta tus pruebas con Cypress:**

```bash
yarn cypress run --env allure=true
```

2 **Tras la ejecución, puedes generar el informe con Allure:**

```bash
allure generate --clean -o allure-report && allure open
```

Esto abrirá una ventana del navegador con un informe detallado generado por Allure.
