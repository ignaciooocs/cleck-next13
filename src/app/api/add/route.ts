import { database } from '@/libs/database'
import Note from '@/models/Note'
import { NextResponse, NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST (req: NextRequest) {
  try {
    const { title, content, userId } = await req.json()
    await database()
    
    const note = new Note({
      title,
      content,
      userId
    })
    const savedNote = await note.save()
    revalidateTag('notes')
    return NextResponse.json(savedNote)
  } catch (error) {
    return NextResponse.json({ error: 'Error postnotes' })
  }
}