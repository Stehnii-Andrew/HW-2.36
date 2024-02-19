import express from "express";
import Ajv from "ajv";

const router = express.Router();
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    postId: {type: "integer"},
    id: {type: "integer"},
    name: {type: "string"},
    email: {type: "string"},
    body: {type: "string"},
  },
  additionalProperties: false,
};

const data = {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
};


/* GET home page. */
router.get('/', (req, res, next) => {
  
  const validate = ajv.compile(schema);
  const valid = validate(data);
  console.log(valid);
  if (!valid) console.log(validate.errors);
  
  res.render('index', { title: 'Express' });
});

export default router;