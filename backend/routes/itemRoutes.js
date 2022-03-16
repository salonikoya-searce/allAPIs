const router = require('express').Router();
const{getAllItems,getItem,createItem,deleteItem,updateItem,getAllVendorItems}=require('../controllers/itemController')

router.get('/all',getAllItems);
router.get('/vendor/:vendorId',getAllVendorItems);
router.route('/:id').get(getItem).delete(deleteItem).put(updateItem);
router.post('',createItem);

module.exports = router;