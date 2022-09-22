import {getRandomBytes} from 'expo-random';
import {customRandom, urlAlphabet} from 'nanoid';

export const randomId: (size?: number) => string = customRandom(urlAlphabet, 12, getRandomBytes);
