
# JavaScript

## Sobre a linguagem

Javascript é uma linguagem interpretada, de tipagem fraca, muito usada em navegadores para scripts que facilitam a navegação ou a interface com o usuário, assim como no servidor (atualmente com Node js), em frameworks front-end (Angular js, React js, Backbone js...) e atualmente até em banco de dados (MongoDb), para fazer aplicativos mobile (Cordova, Ionic, Phonegap) e até mesmo para programar Raspberry pi.

## Tipos

Basicamente existem X tipos. 
São eles: String, number, boolean, array, object

## Dinâmico

```
var x;

x = 5;
console.log(x);

x = "John"
console.log(x);
```

## Tipagem fraca

```
var x = 99;

x = x + "not a number";
console.log(x);

x = 44
x = x + "490"
console.log(x);
```

## Operadores

- Soma
- Subtração
- Multiplicação
- Divisão
```
var x = 5;
var y = 6;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
```

## Comparadores

- Maior / maior que
- Menor / menor que
- Identidade
- Equalidade

```
5 > 3
6 < 10
5 == "5" //  true
5 === "5" //  false
5 === 5 // true
```

## Condicionais

If / Else

```
if (idade > 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

```
if (idade > 18) {
  console.log("Maior de idade");
} else if (idade == 18) {
  console.log("Você tem exatamente 18!");
} else {
  console.log("Menor de idade");
}
```

Case

```
var idade = 18

```