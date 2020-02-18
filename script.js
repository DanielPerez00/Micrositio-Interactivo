var inputBase = document.getElementById('base');
var inputAltura = document.getElementById('altura');

var rPerimetro = document.getElementById('rPerimetro');
var rArea = document.getElementById('rArea');

var fBase = document.getElementById('fBase');
var fAltura = document.getElementById('fAltura')
fAltura.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
});

fBase.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
});

inputBase.addEventListener('keyup', function (e) {
    var B = inputBase.value;
    var Area = 0.0;
    var Perimetro = 0.0;
    
    Area = 0.4330127018922193*(B*B);
    Perimetro = (B*3);
    
    rArea.innerText = Area;
    rPerimetro.innerText = Perimetro;

    
});

inputAltura.addEventListener('keyup', function (e) {
    var B = inputBase.value;
    var A = inputAltura.value;
    var Area = 0.0;
    var Perimetro = 0.0;
    
    Area = (B*A)/2;
    Perimetro = (B*3);
    
    rArea.innerText = Area;
    rPerimetro.innerText = Perimetro;

    
});
