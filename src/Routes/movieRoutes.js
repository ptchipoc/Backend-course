import express from "express"

const router = new express.Router();

router.get('/', (req, res) =>
{
  res.json({message: "get"});
})

router.post('/', (req, res) =>
{
  res.json({message: "post"});
})

router.delete('/', (req, res) =>
{
  res.json({message: "delete"});
})

router.put('/', (req, res) =>
{
  res.json({message: "put"});
})

router.get('/hello', (req, res) =>
{
  res.json({message: 'Hello world'});
})

export default router;  