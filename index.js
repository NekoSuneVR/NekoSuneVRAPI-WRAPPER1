const { get } = require('https');
const { URL, URLSearchParams } = require('url');
const endpoints = require('./endpoints.json');

function getContent(url, apiKey) {
    return new Promise((resolve, reject) => {
        if (apiKey == null) return reject(`You Didnt add your ApiKey?`);

        const options = {
            headers: {
                'nekosunevr-api-key': apiKey
            }
        };

        const request = get(url, options, (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (e) {
                    reject(`Error: ${e.message}`);
                }
            });
        }).on('error', (err) => {
            reject(`Error: ${err.message}`);
        });

         // Set timeout for the request
         const timeout = 10000; // 10 seconds
         request.setTimeout(timeout, () => {
             request.abort();
             reject(`Request timed out`);
         });
    });
}

class NEKOSUNEAPI {
    constructor(apiKey) {
        let self = this;
        let baseURL = 'https://api.nekosunevr.co.uk/v4';
        Object.keys(endpoints).forEach(async (endpoint) => {
            self[endpoint] = async function (queryParams = '') {
                let url = new URL(`${baseURL}${endpoints[endpoint]}`);
                queryParams !== '' ? url.pathname = url.pathname + queryParams : '';
                return await getContent(url, apiKey);
            };
        });
    }
}

module.exports = NEKOSUNEAPI;