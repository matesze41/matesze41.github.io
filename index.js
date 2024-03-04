/*
const {EventEmitter} = require('events');
const evEm = new EventEmitter();

evEm.on('lunch', ()=> {
    console.log('yum');
});

evEm.emit('lunch');
*/
/*
const{readFile, readFileSync}=require('fs');
//blocking
const txt=readFileSync('./hello.txt','utf8');
console.log(txt);
console.log('Gyorsan kene');

//non-blocking
readFile('./hello.txt','utf8',(err,txt)=>{
    console.log(txt);
});
console.log("Gyorsan kene");
*/
/*
//promise
const{readFile}=require('fs').promises;
async function xdprint(){
    const file=await readFile('./hello.txt','utf8');
    console.log(file);
}
xdprint().catch(error=>console.log(error));
*/

const express=require('express');
const { readFile } = require('fs').promises;

const app=express();

app.get('/',async (request,response)=>
{
    response.send(await readFile('./index.html','utf8'));
});

app.listen(process.env.PORT || 3000, ()=> console.log('App available on http://localhost:3000'));



