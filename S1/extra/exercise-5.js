const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
    
let totalVentas = 0;
let media = 0;

for (let i = 0; i < products.length; i++) {
  totalVentas += products[i].sellCount;
  media = totalVentas / products.length;
}
console.log('Total de Ventas:', totalVentas);
console.log(media);
