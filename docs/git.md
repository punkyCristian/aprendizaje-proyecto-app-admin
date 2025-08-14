# Comandos configuracion
* git init 
* git status
* git add
* git remote set-url origin git@github.com:usuario/carpetaDelProyecto.git
  (para iniciar la sesion remota)
* git push -u origin main (para el primer branch main)

## Flujo de Trabajo con Git para Seguimiento

Crea una rama por cada área de estudio:

git branch java-core

git branch java-datos

git branch java-patrones

git branch data-science



Trabaja en ramas específicas:

git checkout java-core

## Realiza cambios sobre "Piensa en Java"

git add .

git commit -m "Ejercicios capítulos 4-6 de Piensa en Java"



Integra periódicamente a main:

git checkout main

git merge java-core --no-ff  # Fusiona manteniendo historia



Usa tags para hitos importantes:

git tag -a v0.1-java-basico -m "Completados conceptos básicos de Java" 