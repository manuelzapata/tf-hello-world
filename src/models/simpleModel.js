import * as tf from '@tensorflow/tfjs';

const a = tf.scalar(2);
const b = tf.scalar(4);
const c = tf.scalar(8);

export default function simpleModel(input) {

    const prediction = tf.tidy(() => {

        const x = tf.scalar(input);

        const ax2 = a.mul(x.square());
        const bx = b.mul(x);
        const y = ax2.add(bx).add(c);

        return y;
    });

    return prediction.get();
};