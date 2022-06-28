// function bucleWhile(num) {
//   let i = 0;
//   while (i < num) {
//     console.log(i);
//     i++;
//   }
// }

// bucleWhile(11);

// function bucleFor(num) {
//   for (let i = 0; i < num; i++) {
//     console.log(i);
//   }
// }

// bucleFor(11);

// while (true) {
//   num = prompt('Ingrese un número');
//   if (num == "") {
//     break;
//   }
// }

let password = prompt("Ingrese la contraseña");

if (password !== null) {
  while (password !== "hola") {
    password = prompt("La contraseña es incorrecta, inténtelo una vez más");
  }

  alert("Contraseña correcta");
}