import * as tf from '@tensorflow/tfjs';

export default async function linearRegressionModel(input) {

    //Crear un modelo sencillo.
    const model = tf.sequential();
    //Añadir una capa al modelo
    model.add(tf.layers.dense({
        units: 1,
        inputShape: [1]
    }));

    model.compile({
        /* el tipo de pérdida que será optimizada por el modelo: 
           promedio de la suma de los errores al cuadrado. */
        loss: 'meanSquaredError', 
        //Algoritmo de optimización: Gradient descent estocástico
        optimizer: 'sgd'
    });

    /*Vamos a entrenar el modelo.
      Los datos corresponden a la función y = 2x - 1*/
    const trainingInput = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const trainingOuput = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

    //Entrenar el modelo
    await model.fit(trainingInput,  //variable de entrada
                    trainingOuput,  //variable de salida
                    {
                        //número de veces que el modelo iterará sobre los datos de entrenamiento
                        epochs: 250 
                    });

    //Vamos a pasarle el parámetro de la función para hacer una predicción.
    const prediction = model.predict(tf.tensor2d([input], [1, 1]));
    const value = await prediction.data();
    return value[0];

};