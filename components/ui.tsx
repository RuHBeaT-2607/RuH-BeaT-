'use client';
import { motion } from 'framer-motion';
import { useQuoteStore } from '@/store/useQuoteStore';

export function MobileNavbar(){return <header className='sticky top-0 z-40 glass p-4 text-center font-semibold'>RUH 🫀BeaT</header>;}
export function BottomActionBar({children}:{children:React.ReactNode}){return <div className='fixed bottom-0 left-0 right-0 z-40 glass p-3'>{children}</div>;}

export function Selector({title,items,keyName}:{title:string;items:string[];keyName:'category'|'mood'|'typography'|'sky'|'background'}){
  const state=useQuoteStore();
  const selected=state[keyName];
  return <section className='space-y-2'><h3 className='text-sm uppercase text-zinc-400'>{title}</h3><div className='flex gap-2 overflow-auto pb-1'>{items.map(i=><button key={i} onClick={()=>state.set({[keyName]:i} as never)} className={`rounded-full border px-3 py-1 text-sm ${selected===i?'border-gold text-gold':'border-zinc-700'}`}>{i}</button>)}</div></section>
}

export const CategorySelector=(p:{items:string[]})=><Selector title='Category' items={p.items} keyName='category'/>;
export const MoodSelector=(p:{items:string[]})=><Selector title='Mood' items={p.items} keyName='mood'/>;
export const FontSelector=(p:{items:string[]})=><Selector title='Typography' items={p.items} keyName='typography'/>;
export const SkySelector=(p:{items:string[]})=><Selector title='Sky Atmosphere' items={p.items} keyName='sky'/>;
export const BackgroundSelector=(p:{items:string[]})=><Selector title='Background' items={p.items} keyName='background'/>;

export function TypographyRenderer({quote,font}:{quote:string;font:string}){return <p style={{fontFamily: `'${font}', serif`}} className='whitespace-pre-line text-center text-4xl leading-tight drop-shadow-xl'>{quote}</p>}
export function GrainOverlay(){return <div className='pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:3px_3px]'/>}
export function WatermarkLayer(){return <div className='absolute bottom-4 right-4 text-xs text-zinc-300/80'>RUH 🫀BeaT</div>}
export function QuoteCanvas(){const {quote,typography}=useQuoteStore();return <motion.div layout className='relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-950 p-10 flex items-center justify-center shadow-glow'><TypographyRenderer quote={quote} font={typography}/><GrainOverlay/><WatermarkLayer/></motion.div>}
export function MobilePreviewCard(){return <div className='p-4'><QuoteCanvas/></div>}
export function GenerateButton({onClick,loading}:{onClick:()=>void;loading:boolean}){return <button onClick={onClick} className='w-full rounded-full bg-gold px-6 py-3 font-semibold text-black'>{loading?'Generating…':'Generate Poster'}</button>}
export function ExportModal(){return <div className='glass rounded-2xl p-4 text-sm text-zinc-200'>Export: PNG/JPG · 1080x1920 · 1080x1350 · 1080x1080</div>}
export function LoadingScreen(){return <div className='animate-pulse rounded-3xl bg-zinc-800 h-48'/>}
