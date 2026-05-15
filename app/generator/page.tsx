'use client';
import { BACKGROUNDS, CATEGORIES, FONTS, MOODS, SKIES } from '@/lib/constants';
import { BackgroundSelector, BottomActionBar, CategorySelector, ExportModal, FontSelector, GenerateButton, LoadingScreen, MobileNavbar, MobilePreviewCard, MoodSelector, SkySelector } from '@/components/ui';
import { useQuoteStore } from '@/store/useQuoteStore';

export default function GeneratorPage(){
  const {set,loading,category,mood}=useQuoteStore();
  const generate=async()=>{set({loading:true});
    try{const r=await fetch('/api/generate-quote',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({category,mood})}); const d=await r.json(); set({quote:d.quote||'Allah knows\nthe pain\nyou never explain.'});}
    finally{set({loading:false});}
  };
  return <main className='pb-24'><MobileNavbar/><div className='p-4 space-y-4'>
    {loading?<LoadingScreen/>:<MobilePreviewCard/>}
    <CategorySelector items={CATEGORIES}/><MoodSelector items={MOODS}/><FontSelector items={FONTS}/><SkySelector items={SKIES}/><BackgroundSelector items={BACKGROUNDS}/><ExportModal/>
  </div><BottomActionBar><GenerateButton onClick={generate} loading={loading}/></BottomActionBar></main>
}
