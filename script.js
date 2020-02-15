var input =document.getElementById('numero');
            var resultado = document.getElementById('resultado')
            var form = document.getElementById('formulario')

            form.addEventListener('submit', function(e){
                e.preventDefault();
            })

            input.addEventListener('keyup',function(e){
                var value = input.value;
                if(value%2 == 0){
                resultado.innerText = 'par';
                }
                else{
                resultado.innerText = 'impar';
                }                
            });

            var value = input.value;
            console.log(input);