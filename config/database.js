module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST',process.env.DATABASE_HOST),
        port: env.int('DATABASE_PORT', process.env.DATABASE_PORT),
        database: env('DATABASE_NAME', process.env.DATABASE_NAME),
        username: env('DATABASE_USERNAME', process.env.USERNAME),
        password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});