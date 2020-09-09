import { h, createContext } from '../../preact';

export const theme = {
    light: {
        foreground: '#ffffff',
        background: 'red'
    },
    dark: {
        foreground: '#000000',
        background: 'red'
    }

};
export const wrapContext = createContext({});