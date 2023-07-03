const Express = require('express');
const work_Controller = require('../controller/work');

const router = Express.Router();

router.post('/AddWork',work_Controller.AddWork);

router.get('/get_Work',work_Controller.getWork);

router.delete('/delete_Work/:workId',work_Controller.deleteWork);

module.exports = router;