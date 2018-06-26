import * as tf from '@tensorflow/tfjs';

/** Vamos a implementar la función y = a * x ^ 2 + b * x + c */

//Constantes en la ecuación del modelo
const a = tf.scalar(2);
const b = tf.scalar(4);
const c = tf.scalar(8);

export default function simpleModel(input) {

    /*La funcion tf.tidy se encarga de liberar memoria al eliminar tensores 
      que no son necesarios después de ejecutada la función.*/
    const prediction = tf.tidy(() => {

        const x = tf.scalar(input);

        //Multiplicación y elevación al cuadrado de tensores.
        const ax2 = a.mul(x.square());
        const bx = b.mul(x);
        //Suma de tensores.
        const y = ax2.add(bx).add(c);

        return y;
    });

    //Obtener valor guardado en el tensor como un tipo básico
    return prediction.get();
};