function Accreditation() {
    return (
        <>
            {/* --- ACCREDITATION & RECOGNITION LOGOS --- */}
            <section className="border-t border-slate-200 bg-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-wider">
                        Recognized & Approved By
                    </p>
                    <div className="flex flex-wrap justify-between items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-xl font-bold font-serif text-slate-800">UGC DEB</div>
                        <div className="text-xl font-bold font-serif text-slate-800">NAAC A++</div>
                        <div className="text-xl font-bold font-serif text-slate-800">AICTE</div>
                        <div className="text-xl font-bold font-serif text-slate-800">WES</div>
                        <div className="text-xl font-bold font-serif text-slate-800">NIRF Ranked</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Accreditation