const router = require('express').Router();
const {getCategories,setCategories,updateCategories,deleteCategories,categoryById} = require('../controllers/categoryController');

router.get('/all',getCategories);
router.route('/:id').get(categoryById).delete(deleteCategories).put(updateCategories);
router.post('',setCategories);

module.exports = router;