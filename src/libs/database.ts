import mongoose from 'mongoose'

export const database = async () => {
  try {
    if (typeof process.env.DATABASE_URI !== 'string') throw new Error('La variable de entorno no se configuró correctamente')
    await mongoose.connect(process.env.DATABASE_URI)
    console.log('Database connected')
  } catch (e) {
     throw new Error('Database Error')
  }
}