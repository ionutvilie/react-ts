import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import './css/index.css';
import 'font-awesome/css/font-awesome.css';
// import * as WebFontLoader from 'webfontloader';

// WebFontLoader.load({
//         google: {
//                 families: ['Roboto:300,400,500,700', 'Material Icons'],
//         },
// });

render(
        (
        <BrowserRouter basename="/web">
                <AppRouter />
        </BrowserRouter>),
        document.getElementById('root')
);