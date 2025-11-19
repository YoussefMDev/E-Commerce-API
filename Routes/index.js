const categoryRoute = require('./categoryRoute');
const subCategoryRoute = require('./subCategoryroute');
const brandRoute = require('./Brandroute');
const productRoute = require('./productroute');
const userRoute = require('./userroute');
const authRoute = require('./authroute');
const reviewRoute = require('./reviewroute');
const wishlistRoute = require('./wishlistroute');
const addressRoute = require('./adressroute');
const couponRoute = require('./couponroute');
const cartRoute = require('./cartroute');
const orderRoute = require('./orderRoute');

const mountRoutes = (app) => {
  app.use('/api/v1/categories', categoryRoute);
  app.use('/api/v1/subcategories', subCategoryRoute);
  app.use('/api/v1/brands', brandRoute);
  app.use('/api/v1/products', productRoute);
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/reviews', reviewRoute);
  app.use('/api/v1/wishlist', wishlistRoute);
  app.use('/api/v1/addresses', addressRoute);
  app.use('/api/v1/coupons', couponRoute);
  app.use('/api/v1/cart', cartRoute);
  app.use('/api/v1/orders', orderRoute);
};

module.exports = mountRoutes;