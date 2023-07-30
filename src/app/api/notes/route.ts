import { NextResponse } from 'next/server'
import Note from '@/models/Note'
import { database } from '@/libs/database'

export async function GET (req: Request) {
  try {
    await database()

    const notes = await Note.find({})
    return NextResponse.json(notes)
  } catch (error) {
    return NextResponse.json({ error: 'Error getnotes' })
  }
}