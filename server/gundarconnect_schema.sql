<<<<<<< HEAD
-- Follows table for user follow/following
CREATE TABLE IF NOT EXISTS "Follows" (
    id SERIAL PRIMARY KEY,
    "followerId" INTEGER REFERENCES "Users"(id) ON DELETE CASCADE,
    "followingId" INTEGER REFERENCES "Users"(id) ON DELETE CASCADE,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE ("followerId", "followingId")
);
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
-- Create database (run this as a superuser, or skip if already created)
CREATE DATABASE gundarconnect;
\c gundarconnect;

-- Users table
CREATE TABLE IF NOT EXISTS "Users" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) DEFAULT 'default-avatar.png',
    bio VARCHAR(255) DEFAULT '',
    major VARCHAR(255) NOT NULL,
    "studentId" VARCHAR(255) UNIQUE NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Posts table
CREATE TABLE IF NOT EXISTS "Posts" (
    id SERIAL PRIMARY KEY,
    "authorId" INTEGER REFERENCES "Users"(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    image VARCHAR(255),
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Comments table
CREATE TABLE IF NOT EXISTS "Comments" (
    id SERIAL PRIMARY KEY,
    "postId" INTEGER REFERENCES "Posts"(id) ON DELETE CASCADE,
    "authorId" INTEGER REFERENCES "Users"(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    image VARCHAR(255),
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- PostLikes join table (many-to-many for likes)
CREATE TABLE IF NOT EXISTS "PostLikes" (
    id SERIAL PRIMARY KEY,
    "postId" INTEGER REFERENCES "Posts"(id) ON DELETE CASCADE,
    "userId" INTEGER REFERENCES "Users"(id) ON DELETE CASCADE,
    UNIQUE ("postId", "userId")
);
<<<<<<< HEAD

-- About table for user profile 'About' tab
CREATE TABLE IF NOT EXISTS "About" (
    id SERIAL PRIMARY KEY,
    "userId" INTEGER REFERENCES "Users"(id) ON DELETE CASCADE,
    bio1 TEXT,
    bio2 TEXT,
    "skillsTechnical" JSON,
    "skillsSoft" JSON,
    "skillsLanguages" JSON,
    experience JSON,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
