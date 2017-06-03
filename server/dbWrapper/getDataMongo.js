'use strict';
import closeMongo from './closeMongo';

export function getDataMongo(app, db) {
    console.log('Autentificare in auth################################################################')
    let resultsCollection;
    db.collection('studenti').find().toArray(function (err, results) {
        resultsCollection = results;
        console.log(results);
    });
    closeMongo(db);

    return resultsCollection;
}