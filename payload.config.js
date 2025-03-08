import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { BlogPosts } from './collections/BlogPosts.js';
import { Users } from './collections/Users.js';
import { Media } from './collections/Media.js';


import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ,
  secret: process.env.PAYLOAD_SECRET,
  admin: {
    user: 'users',
    // auth : true
  },
  collections: [
    BlogPosts,
    Users,
    Media
  ],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI ,
  }),
  cors: ['http://localhost:3000'],
  csrf: ['http://localhost:3000'],
});