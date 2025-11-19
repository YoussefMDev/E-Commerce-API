const express = require('express');
const {
  getBrandValidator,
  createBrandValidator,
  updateBrandValidator,
  deleteBrandValidator,
} = require('../utils/validator/Brandvalidator');

const authService = require('../Controllers/authcontroller');

const {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
  uploadBrandImage,
  resizeImage,
} = require('../Controllers/BrandController');

const router = express.Router();

router
  .route('/')
  .get(getBrands)
  .post(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    uploadBrandImage,
    resizeImage,
    createBrandValidator,
    createBrand
  );
router
  .route('/:id')
  .get(getBrandValidator, getBrand)
  .put(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    uploadBrandImage,
    resizeImage,
    updateBrandValidator,
    updateBrand
  )
  .delete(
    authService.protect,
    authService.allowedTo('admin'),
    deleteBrandValidator,
    deleteBrand
  );

module.exports = router;