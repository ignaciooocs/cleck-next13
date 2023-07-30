import mongoose from 'mongoose'

export const database = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI)
    console.log('Database connected')
  } catch (e) {
     throw new Error('Database Error')
  }
}