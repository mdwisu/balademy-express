import express from 'express';
const router = express.Router();

let users = [

];

router
  .route('/users')
  .get((req, res) => {
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url
      });
    } else {
      res.json({
        status: false,
        msg: "data user masih kosong"
      })
    }
  })
  .post((req, res) => {
    users.push(req.body);
    res.json({
      status: true,
      data: users,
      msg: 'Data user berhasil disimpan',
      method: req.method,
      url: req.url
    });
  });

router.put('/users/:id', (req, res) => {
  users.filter((user) => {
    if (user.id == req.params.id) {
      user.id = req.body.id;
      user.nama = req.body.nama;
      user.email = req.body.email;
      return user;
    }
  });
  res.json(users);
});
router.delete('/users/:id', (req, res) => {
  users = users.filter((user) => user.id != req.params.id);
  res.send(users);
});

export default router;
