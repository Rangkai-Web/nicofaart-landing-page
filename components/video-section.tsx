export function VideoSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <video 
          src="/video/nicofaart-dipan.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full md:w-2/4 h-96 object-fit rounded-lg shadow-lg bg-black" 
          controls
        />
      </div>
    </section>
  );
}
