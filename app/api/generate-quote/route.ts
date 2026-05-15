import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const hits = new Map<string, { count:number; ts:number }>();
const sanitize = (v:string) => v.replace(/[^\w\s-]/g, '').slice(0, 40);

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || 'local';
  const now = Date.now();
  const info = hits.get(ip) || { count: 0, ts: now };
  if (now - info.ts > 60_000) { info.count = 0; info.ts = now; }
  info.count += 1; hits.set(ip, info);
  if (info.count > 20) return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });

  const body = await req.json();
  const category = sanitize(body.category || 'Islamic');
  const mood = sanitize(body.mood || 'Cinematic');

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ quote: 'Some silences\nhurt more\nthan goodbye.' });

  const prompt = `You are an elite cinematic quote writer.\n\nGenerate ONE short emotional quote.\n\nCategory:\n${category}\n\nMood:\n${mood}\n\nRules:\n- maximum 3 lines\n- maximum 14 words\n- emotionally deep\n- elegant\n- minimalist\n- realistic\n- human sounding\n- aesthetic social-media style\n- no cringe\n- no clichés\n- no emojis\n- cinematic feeling\n- visually beautiful in poster format`;

  try {
    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    return NextResponse.json({ quote: result.response.text().trim() });
  } catch {
    return NextResponse.json({ quote: 'Not everyone\nwho smiles\nhas healed.' });
  }
}
