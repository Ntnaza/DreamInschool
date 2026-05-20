export default function Loading() {
  return (
    <div className="relative min-h-screen bg-[#020617] overflow-x-hidden font-sans">
      {/* Skeleton Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#020617] overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[1200px] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute top-[15%] left-[-10%] w-[70%] h-[1200px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[100vw] mx-auto px-4 pt-16">
        
        {/* Header Skeleton */}
        <div className="text-center max-w-4xl mx-auto min-h-[50vh] flex flex-col justify-center items-center">
          <div className="h-16 md:h-20 w-3/4 md:w-1/2 bg-white/5 animate-pulse rounded-2xl mb-6"></div>
          <div className="h-6 w-full max-w-xl bg-white/5 animate-pulse rounded-lg mt-4"></div>
          <div className="h-6 w-2/3 max-w-md bg-white/5 animate-pulse rounded-lg mt-2"></div>
        </div>

        {/* Profile Cards Skeleton */}
        <div className="relative flex flex-col gap-8 md:gap-16 w-full pb-32">
          
          {/* Division Title Skeleton */}
          <div className="max-w-5xl mx-auto mb-16 w-full">
            <div className="flex flex-col items-center mb-8">
              <div className="h-8 w-64 bg-white/5 animate-pulse rounded-lg"></div>
              <div className="w-16 h-1 bg-white/10 rounded-full mt-4"></div>
            </div>
          </div>

          {[1, 2, 3].map((i) => (
            <div key={i} className={`relative w-full max-w-7xl mx-auto flex flex-col xl:flex-row ${i % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'} items-center xl:items-stretch gap-8 xl:gap-16 py-12 md:py-24`}>
              
              {/* Vertical line skeleton */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/5 hidden xl:block" />

              {/* Card Image Skeleton */}
              <div className="w-full xl:w-1/2 flex justify-center py-4">
                <div className="w-[260px] h-[340px] md:w-[300px] md:h-[400px] bg-white/5 border border-white/10 animate-pulse rounded-2xl flex-shrink-0 z-20"></div>
              </div>

              {/* Card Content Skeleton */}
              <div className="w-full xl:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 px-4 md:px-0 z-20">
                <div className="w-full bg-[#111827]/50 border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl animate-pulse">
                  <div className="h-4 w-16 bg-white/10 rounded mb-4"></div>
                  <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
                  <div className="h-4 w-5/6 bg-white/5 rounded mb-2"></div>
                  <div className="h-4 w-4/6 bg-white/5 rounded mt-6 mb-2"></div>
                  <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                </div>

                {/* Social Buttons Skeleton */}
                <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3 w-full">
                  <div className="h-10 w-32 bg-white/5 animate-pulse rounded-full"></div>
                  <div className="h-10 w-32 bg-white/5 animate-pulse rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
