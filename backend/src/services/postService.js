const prisma = require("../models/prismaClient");

// Create a post
exports.create = async (postData) => {
  return await prisma.post.create({
    data: postData,
  });
};

// Update a post
exports.update = async (id, postData) => {
  return await prisma.post.update({
    where: { id },
    data: postData,
  });
};

// Delete a post
exports.delete = async (id) => {
  return await prisma.post.delete({
    where: { id },
  });
};

// Find a post by ID
exports.findById = async (id) => {
  return await prisma.post.findUnique({
    where: { id },
  });
};

// Find all posts
exports.findAll = async () => {
  return await prisma.post.findMany();
};
