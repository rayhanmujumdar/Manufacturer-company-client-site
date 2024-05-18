/** @type {import('tailwindcss').Config} */
import keepPreset from 'keep-react/preset';
import daisyui from 'daisyui';
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    daisyui: {
        themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    },
    plugins: [daisyui],
    presets: [keepPreset],
};
