import Link from 'next/link';

export default function Page(){
  return <main className='min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-black to-zinc-900'>
    <h1 className='text-5xl font-semibold'>RUH 🫀BeaT</h1>
    <p className='mt-4 max-w-sm text-zinc-300'>Luxury cinematic AI quote poster app for share-worthy moments.</p>
    <Link href='/generator' className='mt-8 rounded-full bg-gold text-black px-6 py-3 font-semibold'>Start Creating</Link>
  </main>
}
