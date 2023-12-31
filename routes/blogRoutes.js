const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const cleancache = require('../middlewares/cleancache');

const Blog = mongoose.model('Blog');

module.exports = app => {
  app.get('/api/blogs/:id', requireLogin, async (req, res) => {
    const blog = await Blog.findOne({
      _user: req.user.id,
      _id: req.params.id
    });

    res.send(blog);
  });

  app.get('/api/blogs', requireLogin, async (req, res) => {
    const blogs = await Blog.find({ _user: req.user.id }).cache({
      key: req.user.id
    });

    res.send(blogs);
      //  const redis=require('redis');
      //  const redisUrl='redis://127.0.0.1:6379';
      //  const client=redis.createClient(redisUrl);
      //  const util=require('util');
      //  client.get =util.promisify(client.get);

       //do we have any cache data in redis related tho this query 
        // const cachedblogs=await client.get(req.user.id);
       //if yes then response to the request right  away and and return 
        //  if(cachedblogs){

        //   console.log("SERVING FOR Cache")
        //   return res.send(JSON.parse(blogs));
        //  }

       //if no  need to response to the request and update our cache to store the data 

    // const blogs = await Blog.find({ _user: req.user.id });

    // res.send(blogs);
    // console.log("Serving from mongodb");
    // client.set(req.user.id ,JSON.stringify(blogs));


  });

  app.post('/api/blogs', requireLogin, cleancache , async (req, res) => {
    const { title, content } = req.body;

    const blog = new Blog({
      title,
      content,
      _user: req.user.id
    });

    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });
};
