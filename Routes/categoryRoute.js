const express = require('express');

const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require('../utils/validator/categoryvalidator');

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  uploadCategoryImage,
  resizeImage,
} = require('../Controllers/categoryController');

const authService = require('../Controllers/authcontroller');

const subcategoriesRoute = require('./subCategoryroute');

const router = express.Router();

router.use('/:categoryId/subcategories', subcategoriesRoute);

router
  .route('/')
  .get(getCategories)
  .post(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    uploadCategoryImage,
    resizeImage,
    createCategoryValidator,
    createCategory
  );
router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    uploadCategoryImage,
    resizeImage,
    updateCategoryValidator,
    updateCategory
  )
  .delete(
    authService.protect,
    authService.allowedTo('admin'),
    deleteCategoryValidator,
    deleteCategory
  );

module.exports = router;