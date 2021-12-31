const express = require ('express');

const app= express();

app.use((req, res)=>{
res.json('Hello world');
});

module.exports =app;