module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '86766c917a934e39dd4c17560d915543'),
  },
});
