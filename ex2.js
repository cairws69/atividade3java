const arrayPrint = [
    [5, 10, 12],
    [2, 9, 11],
    [15, 8, 6]
  ];
  
  console.log("Valores maiores que 10:");
  
  arrayPrint.forEach((linha) => {
    linha.forEach((valor) => {
      if (valor > 10) {
        console.log(valor);
      }
    });
  });
  