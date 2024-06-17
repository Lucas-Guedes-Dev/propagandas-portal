import { text } from "stream/consumers";

export const lightTheme = {
    colors: {
        primary: 'white',
        background: 'rgb(230,230,230)',
        text: '#000000',
        button: {
            text: '#ffffff',
            background: '#6200ee'
        },
        input: {
            text: 'black',
            background: 'rgb(210, 210, 210)'
        }
    },
    fonts: {
        main: 'Helvetica, Arial, sans-serif',
        code: 'monospace'
    }
};

export const darkTheme = {
    colors: {
        primary: '#bb86fc',
        background: '#121212',
        text: '#ffffff',
        button: {
            text: '#ffffff',
            background: '#bb86fc'
        },
        input: {
            text: 'black',
            background: 'rgb(180, 180, 180)'
        }
    },
    fonts: {
        main: 'Helvetica, Arial, sans-serif',
        code: 'monospace'
    }
};
