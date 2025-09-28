export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});


// // module.exports = ({ env }) => ({
// //   url: env('PUBLIC_URL', 'https://cookwithme-backend.onrender.com'),
// //   app: { keys: env.array('APP_KEYS', ['yourKey1', 'yourKey2']) },
// //   proxy: true, // 👈 Trust Render’s proxy so HTTPS is respected
// //   admin: {
// //     auth: {
// //       secret: env('ADMIN_JWT_SECRET'),
// //     },
// //     // You usually don’t need to force cookies here
// //   },
// // });

// module.exports = ({ env }) => ({
//   host: '0.0.0.0',
//   port: env.int('PORT', 10000),
//   url: env('PUBLIC_URL', 'https://cookwithme-backend.onrender.com'),
//   proxy: true, // 👈 trust Render's proxy so HTTPS is respected
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   // admin: {
//   //   auth: {
//   //     secret: env('ADMIN_JWT_SECRET', 'someRandomSecret'),
//   //   },
//   // },
// });