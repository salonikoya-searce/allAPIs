const router = require('express').Router();
const {createVendor,getAllVendors,getVendor,updateVendor,deleteVendor} = require('../controllers/vendorController');

router.get('/all',getAllVendors);
router.route('/:id').get(getVendor).delete(deleteVendor).put(updateVendor);
router.post('',createVendor);

module.exports = router;