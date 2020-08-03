const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
}); // This short redis-server connection string is one of the perks of using docker containers!
client.set('visits', 0);

app.get('/', (req,res) => {
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits)+1);
        return
    });
    
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
})