import conf from '../conf/conf';
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";


export class Service {
  client = new Client()
  databases;
  bucket;
  //create document or post  in db
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  //file uploads servicess

  //create post on document
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {

      return await this.databases.createDocument(
        conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )

    } catch (error) {
      console.log('Appwrite service:: createPost:: error', error)
    }
  }

  //update document
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {


      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )


    } catch (error) {
      console.log('Appwrite service:: updatePost:: error', error)
    }
  }

  //delete post
  async deletePost(slug) {
    try {

      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true;

    } catch (error) {
      console.log('Appwrite service:: deltePost:: error', error)
      return false
    }
  }
  async getPost(slug) {
    try {

      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )

    } catch (error) {
      console.log('Appwrite service:: getPost:: error', error)
    }
  }

  //list of all documents
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {

      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,

      )

    } catch (error) {
      console.log('Appwrite service:: getPosts:: error', error)
    }
  }

  //file  upload services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,

      )

    } catch (error) {
      console.log('Appwrite service:: fileupload:: error', error)

    }
  }
  //delete file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true

    } catch (error) {
      console.log('Appwrite service:: filedelte:: error', error)
      return false

    }
  }
  //file preview 
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }


}


const service = new Service()

export default service


