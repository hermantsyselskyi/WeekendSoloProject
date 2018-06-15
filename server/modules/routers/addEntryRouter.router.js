const express = require('express');
const router = express.Router();

const pool = require( '../pool' );

router.get( '/', ( req, res ) => {
    console.log( 'In GET request for ' );
    const queryText = 'SELECT * FROM entries';
    pool.query( queryText )
    .then(  ( result ) => {
        console.log( `Back from the database with ${ result }`);
        res.send( result.rows );
    }).catch( ( error ) => {
        console.log( `Error getting powers: ${ error }` );
        res.sendStatus( 500 );
    });
})
// router.post('/', (req, res) => {
//     console.log('POST /hero', req.body);
//     const hero = req.body;
//     const queryText = `INSERT INTO hero (name, backstory) VALUES ($1, $2)`;
//     pool.query(queryText, [hero.name, hero.backstory])
//         .then((result) => {
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log('error making ship insert query', error);
//             res.sendStatus(500);
//         });
// });
module.exports = router;
