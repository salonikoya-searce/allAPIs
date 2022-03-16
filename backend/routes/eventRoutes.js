const router = require('express').Router();
const {getAllEvents,getEvent,createEvent,updateEvent,deleteEvent,getAllEventVendors} = require('../controllers/eventController');

router.get('/all',getAllEvents);
router.route('/:id').get(getEvent).delete(deleteEvent).put(updateEvent);
router.post('',createEvent);
router.get('/vendors/:eventId',getAllEventVendors);

module.exports = router;