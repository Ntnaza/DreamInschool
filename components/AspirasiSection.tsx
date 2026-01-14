"use client";

import { useState } from "react";
import { submitAspirasi } from "@/lib/actions"; // Import Server Action tadi

export default function AspirasiSection() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Status loading

  // Handle saat form dikirim
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Cegah refresh halaman
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Tambahkan status anonim ke data yang dikirim
    formData.append("isAnonim", isAnonymous.toString());

    // Panggil Server Action
    const result = await submitAspirasi(formData);

    if (result.success) {
      alert(result.message); // Tampilkan pesan sukses
      form.reset(); // Kosongkan form
      setIsAnonymous(false); // Reset toggle anonim
    } else {
      alert(result.message); // Tampilkan error
    }

    setIsLoading(false);
  }

  return (
    <section className="relative w-full py-24 z-10 overflow-hidden">
      
      {/* Background: Gradient Gelap Elegan */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#020617] dark:to-[#0b1121] z-0" />
      
      {/* Dekorasi Blob */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 dark:bg-slate-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-indigo-500/10 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* KIRI: TEKS AJAKAN */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">
              Suara Anda Berharga 📢
            </span>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Punya Ide atau <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500">
                Masukan Membangun?
              </span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Jangan ragu untuk menyampaikan aspirasi, kritik, atau saran untuk kemajuan OSIS & SMK Nurul Islam. Identitasmu aman bersama kami.
            </p>
            
            <div className="flex flex-col gap-3 pt-4">
              {['Privasi Terjaga', 'Langsung Didengar Pengurus', 'Bebas & Bertanggung Jawab'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xs">✓</div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* KANAN: FORM CARD */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative">
              
              {/* === FORM MULAI DI SINI === */}
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                
                {/* Toggle Anonim */}
                <div className="flex items-center justify-between bg-slate-50 dark:bg-black/40 p-3 rounded-xl border border-slate-100 dark:border-white/5">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 pl-2">
                    Kirim sebagai Anonim? 🕵️‍♂️
                  </span>
                  <button 
                    type="button"
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isAnonymous ? 'bg-blue-600 dark:bg-slate-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${isAnonymous ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>

                {/* Input Nama & Kelas */}
                <div className={`grid grid-cols-2 gap-4 transition-all duration-500 ${isAnonymous ? 'opacity-40 grayscale pointer-events-none select-none blur-[1px]' : 'opacity-100'}`}>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">Nama Lengkap</label>
                    <input 
                      name="nama" // Wajib ada name biar kebaca di FormData
                      type="text" 
                      placeholder="Nama Kamu" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium transition-all"
                      disabled={isAnonymous}
                      required={!isAnonymous} // Wajib isi kalau tidak anonim
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">Kelas / Jurusan</label>
                    <input 
                      name="kelas"
                      type="text" 
                      placeholder="X PPLG 1" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium transition-all"
                      disabled={isAnonymous}
                      required={!isAnonymous}
                    />
                  </div>
                </div>

                {/* Input Pesan */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">Pesan Aspirasi</label>
                  <textarea 
                    name="pesan"
                    rows={4}
                    placeholder="Tulis kritik, saran, atau ide kreatifmu di sini..." 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium resize-none transition-all"
                    required
                  ></textarea>
                </div>

                {/* Tombol Kirim */}
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-slate-100 dark:text-black dark:hover:bg-white text-white font-bold text-sm shadow-lg shadow-blue-500/30 dark:shadow-slate-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "MENGIRIM... ⏳" : "KIRIM ASPIRASI 🚀"}
                </button>

                <p className="text-center text-[10px] text-slate-400">
                  *Pesan yang mengandung SARA atau ujaran kebencian tidak akan diproses.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}