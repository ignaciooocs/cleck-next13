import { Schema, model, models } from 'mongoose'

const noteSchema = new Schema({
  title: {
    type: String,
    required: [true, 'El titulo es requerido']
  },
  content: {
    type: String,
    required: [true, 'El contenido es requerido']
  },
  userId: {
    type: String,
    required: [true, 'El id de usuario es obligatorio']
  }
},
{
  versionKey: false
})

const Note = models.Note || model('Note', noteSchema)

export default Note