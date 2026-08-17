export default function ParallaxCollage() {
  return (
    <section 
      className="relative h-[60vh] min-h-[500px] flex items-center justify-center parallax-bg overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Building The Future</h2>
        <p className="text-xl text-slate-200 max-w-2xl mx-auto">
          Combining art, technology, and empathy to create experiences that resonate.
        </p>
      </div>

      {/* Abstract decorative collage elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
}
