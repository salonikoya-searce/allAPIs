const router = require('express').Router();
const {getAllVenues,getVenue,deleteVenue,updateVenue,createVenue}= require('../controllers/venueController.js');

router.get('/all',getAllVenues);
router.route('/:id').get(getVenue).delete(deleteVenue).put(updateVenue);
router.post('',createVenue);

module.exports = router;