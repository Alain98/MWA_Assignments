var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
const {Observable, from} = require('rxjs');

let render = {};

// data fetches with node-fetch using Promises
router.get('/', function (req, res, next) {

    const usersPromise = fetch('http://jsonplaceholder.typicode.com/users/');
    usersPromise.then(data => data.json())
        .then(data => {
            render.usersWithPromises = data;
            next();
        })
        .catch(err => res.end(err));

});

// data fetches with node-fetch using Reactive Programming (Observables)
router.get('/', function (req, res, next) {

    const jsonObservable = from(fetch('http://jsonplaceholder.typicode.com/users/'));
    jsonObservable.subscribe(promiseResponse => {

        const dataObservable = from(promiseResponse.json());
        dataObservable.subscribe(data => {
            render.usersWithObservables = data;
            next();
        }, err => {
            res.end(err);
        });
    }, err => {
        res.end(err);
    });

});

// data fetches with node-fetch using Asyns/Await
router.get('/', async function (req, res, next) {
    const dataPromise = fetch('http://jsonplaceholder.typicode.com/users/');

    try {
        let promiseResponse = await dataPromise;
        let data = await promiseResponse.json();

        render.usersWithAsyncAwait = data;

        res.render('users', {render:render});

    } catch (err) {
        res.end(err);

    }
});

module.exports = router;
