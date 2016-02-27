
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

```
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

### Case

```
var opcao = '+'
var x = 5;
var y = 9;

switch(opcao) {
  case '+':
    console.log(x + y);
    break;
  case '-':
    console.log(x - y);
    break;
  case '*':
    console.log(x * y);
    break;
  case '/':
    console.log(x / y);
    break;
  default:
    console.log('Escolha uma operação correta!');
    break;
}
```

## Funções

- Um bloco de código designado para realizar um conjunto de comandos.
- Pode retornar algum valor, ou não retornar nada.
- Uma função é executada quando ela é Invocada (chamada)

```
function helloWorld() {
  console.log('Hello world!');
}

function soma(a, b) {
  return a + b;
}

console.log(soma(4, 8));
console.log(soma(5, 20));
console.log(soma(3, 7));

// outra forma de criar uma função
var mult = function (a, b) {
  return a * b;
}

console.log(mult(4, 6));
console.log(mult(2, 9));
console.log(mult(3, 10));


// Escopo
var x = 10;

function x() {
  console.log(x)
}

function y() {
  var x = 20;
  console.log(x);
}

```

Desafio: Toggle de imagens
Desafio: Calculador de IMC

## Vetores

Vetores, ou Arrays são uma forma de estrutura de dados, onde é possível armazenar uma lista de elementos.

```
var arr = [];

// inserindo elementos no array
arr[0] = 'Maçã';
arr[1] = 'Banana';
console.log(arr);

// inserindo elementos no final do array
arr.push('Abacate');
arr.push('Melancia');

console.log(arr);

// retirando elementos pelo inicio
var fruta1 = arr.shift();
var fruta2 = arr.shift();
var fruta3 = arr.shift();

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(arr);

```

## Objetos

```
// forma mais básica de criar um objeto.
var hugo = {
  firstName: 'Hugo',
  lastName: 'Tamaki',
  books: ['O pequeno principe', 'Lerinho', 'bafafa'],
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(hugo.getFullName());
console.log(hugo.firstName);
console.log(hugo.lastName);
console.log(hugo.readBooks);

// criando uma "classe" geradora de objetos
var Person = function() {
  this.sayHello = function() {
    return "Hello world!";
  }

  this.setFirstName = function(firstName) {
    this.firstName = firstName;
  }

  this.setLastName = function(lastName) {
    this.lastName = lastName;
  }

  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  }
}

var maria = new Person();
console.log(maria.sayHello());
maria.setFirstName('Maria');
maria.setLastName('Silva');
console.log(maria.getFullName());
```

## Loops

### For

```
// repete 10 vezes hello world
for(var i=0;i<11;i++) {
  console.log('Hello world!!!');
}

var myArray = ['Apple', 'Banana', 'Melon'];

for(var i=0;i < myArray.length;i++) {
  console.log(myArray[i]);
}

var myOtherArray = [];

for(var i=0;i<10;i++) {
  myOtherArray.push(i);
}

console.log(myOtherArray);

var evens = [];
for(var i=0;i < myOtherArray.length;i++) {
  if (myOtherArray[i] % 2 === 0) {
    evens.push(myOtherArray[i]);
  }
}

console.log(evens);
```
### While

```
var i = 0;

while (i < 10) {
  console.log('ahuehuaheu');
  i++;
}
```

Desafio: 
sum(range(1, 10)) - criar uma função range que recebe dois parâmetros, start e end, e retorna um vetor contendo todos os numeros entre start e end. Outra função chamada sum que recebe um array como argumento, e retorna a soma de todos os valores.
loop pra contar quantos nomes tem mais de 5 letras
loop pra contar quantos animais são cachorros (array de obj)
loop pra transformar elementos (retornar apenas nome dos animais)
loop pra encontrar um valor especifico dentro do vetor
loop pra filtrar apenas um tipo de animal

Projetos: 
Todo lista
Validação de formulários