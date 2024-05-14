// 2
function classificaTriangulo(a, b, c) {
    if (a === b && b === c) {
      console.log("Equilátero");
    } else if (a === b || b === c || c === a) {
      console.log("Isóceles");
    } else {
      console.log("Escaleno");
    }
  }
  // classificaTriangulo(3, 3, 8);
  // classificaTriangulo(9, 3, 8);
  // classificaTriangulo(8, 8, 8);