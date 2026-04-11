import { NextResponse } from 'next/server';
import { getReflection } from '@/lib/reflections';

export async function GET() {
  const res = await fetch('https://beta.ourmanna.com/api/v1/get/?format=json&order=daily');

  const json = await res.json();
  const reflection = getReflection();

  return NextResponse.json({
    verse: json.verse.details,
    reflection,
  });
}
