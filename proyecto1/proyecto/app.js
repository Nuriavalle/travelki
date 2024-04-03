//tipos de datos
//ITERADORES

const arrayNumbers = [5, 5, 4, 4, 2];

const iteratorNumbers = arrayNumbers[Symbol.iterator]()

    //console.log(iteratorNumbers.next())
    //console.log(iteratorNumbers.next())
    //console.log(iteratorNumbers.next())
    //console.log(iteratorNumbers.next())
    //console.log(iteratorNumbers.next())
    //console.log(iteratorNumbers.next())

    // function* generatorNumbers(){
    //     yield 'Hello'
    //     yield 'World'
    // }

    // const iteratorGen=generatorNumbers()
    // console.log(iteratorGen.next())
    // console.log(iteratorGen.next())

    let colores = ['Amarillo', 'Azul', 'Rojo'];
    function iterador(array) {
        let count = 0;
        return {
            next: function(){
                if(count < array.length)
                return {value:array[count++], done:false}
                else
                return{value: undefined, done:true}
            }
        }
    }
let refIterador = iterador(colores);

console.log(refIterador.next());
console.log(refIterador.next());
console.log(refIterador.next());