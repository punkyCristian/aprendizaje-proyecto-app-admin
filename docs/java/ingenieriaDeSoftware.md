# NIVELACION:

# Pruebas

* Pruebas de aceptación de Usuario
  * Perspectiva del ususario
  * Caja negra sobre la aplicación
  * Manual o automatizada
  * Bloquenates

* Pruebas técnicas/unitarias/componentes
  * Perspectiva del programador
  * No necesariamente caja negra
  * Automatizada
  * "No bloqueantes"

# Premisa de diseño

## Separación de incumbencias

## Separación de entrada/salida y la lógica de negocio

## Arquitectura hexagonal/Port & Adapters

# Convenciones (trabajo en equipo)

## editConfig
          identificación, fin de línea,etc
## Linters
    Leen nuestro codigo y verifican reglas en nuestro código
     casting


# Ruby

## Definición de clases, constantes, variables y métodos

~~~
class Foo

 UNA_CONSTANTE = 'SOY UNA CONSTANTE' 
 
 attr_accesor: atributo_publico   #GETTERS, SETTERS
 
 def initialize ( atributo1 , atributo2)   #def: define un metodo , initialize: define un constructor
    @atributo1 = atributo1                 #varables de instancia con el @ , sin el son variables locales del metodo
    @atributo2 = atributo2
    
    @atributo_publico = 'Hola, soy publico'  #tambien puedo usar self. para llamar al atributo publico (this)
 end
 
 def metodo1(parametro1, parametro2)
   puts "Dentro de metodo_1: parametro1 = #{parametro1}, parametro2 = #{parametro2}"
 end
 ~~~

# Typescript


 
 
 
 