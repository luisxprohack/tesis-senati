module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 2203),
        database: env('DATABASE_NAME', 'tesisdb'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'luisenrique0'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
