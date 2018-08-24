/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import proxy from 'express-http-proxy';
import { renderToString } from 'react-dom/server';
import App from './app';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use('/api', proxy(process.env.API_SERVER_URL, {
    proxyReqPathResolver: req => {
        const parts = req.url.split('?');
        const queryString = parts[1];
        const updatedPath = parts[0];
        const api_key = '?api_key=' + process.env.API_KEY;
        return updatedPath + api_key + (queryString ? '&' + queryString : '');
    }
}));

server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', (req, res) => {
        const context = {};
        const markup = renderToString(
            <StaticRouter context={ context } location={ req.url }>
                <App />
            </StaticRouter>
        );

        if (context.url) res.redirect(context.url);
        else res.status(200).send(
            `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
    assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''
}
        ${
    process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
}
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
        );

    });

export default server;
/* eslint-enable import/no-dynamic-require */
