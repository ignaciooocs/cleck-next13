import { NextResponse } from 'next/server'
import Note from '@/models/Note'
import { database } from '@/libs/database'

export async function GET(req: Request, { params }: { params: { id: string }}) {
  const userId = params.id
  try {
    await database()
    const notes = await Note.find({ userId })
    return NextResponse.json(notes)
  } catch (error) {
    return NextResponse.json({ error: 'Error getnotes' })
  }
}