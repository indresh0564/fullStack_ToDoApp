const Express = require('express');
const work_Controller = require('../controller/workDone');

const router = Express.Router();

router.post('/AddWorkDone',work_Controller.AddWorkDone);

router.get('/get_WorkDone',work_Controller.getWorkDone);

// router.delete('/delete_Work/:workId',work_Controller.deleteWork);

module.exports = router;