const { json } = require("body-parser");
const { Collection } = require("mongoose");
const mongoose=require("mongoose");
const redis=require("redis");
const util=require("util");
const redisUrl='redis://127.0.0.1:6379';

const client=redis.createClient(redisUrl);
client.get=util.promisify(client.get);

const exec=mongoose.Query.prototype.exec= async function(){
    const key=JSON.stringify(Object.assign({},this.getQuery(),{Collection:this.mongooseCollection.name}));
  
    // if we have value for key in the redis 

    const cacheValue= await client.get(key);

    //if we do return that 

    if(cacheValue){
        console.log(cacheValue);

    }
    //otherwise we no did then store the query into the redis and also in result 

    const result =await exec.apply(this ,arguments);

    console.log(result);
}