function serviceBanners() {

    // Banners for Services (Document Point 3)
    const serviceBanners = [
        { title: 'Admissions Open 2026', icon: '🎯', desc: 'Secure your seat today' },
        { title: 'Online Courses', icon: '💻', desc: 'Learn from anywhere' },
        { title: 'Distance Education', icon: '📚', desc: 'Flexible learning modes' },
        { title: 'Counselling Services', icon: '🤝', desc: 'Free expert guidance' },
    ];
    return (
        <>

            {/* --- BANNERS HIGHLIGHTING SERVICES --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {serviceBanners.map((banner, index) => (
                        <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow border-l-4 hover:border-l-[#6abd8d]">
                            <div className="text-3xl bg-[#6abd8d] text-red-700 p-3 rounded-xl">{banner.icon}</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{banner.title}</h4>
                                <p className="text-xs text-slate-500 mt-0.5">{banner.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default serviceBanners;