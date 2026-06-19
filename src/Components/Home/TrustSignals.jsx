import React from 'react';

const TrustSignals = () => {
    const stats = [
        { id: 1, value: '15K+', label: 'STUDENTS' },
        { id: 2, value: '50+', label: 'UNIS' },
        { id: 3, value: '100+', label: 'EXPERTS' },
        { id: 4, value: '2010', label: 'SINCE' },
    ];

    return (
        <div className="w-full bg-white py-6 sm:py-8 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Flex container for horizontal layout */}
                <div className="flex flex-row items-center justify-between">

                    {stats.map((stat, index) => (
                        <React.Fragment key={stat.id}>

                            {/* Individual Stat Block */}
                            <div className="flex flex-col items-center justify-center flex-1 px-1 sm:px-4">
                                <span className="text-xl sm:text-3xl md:text-6xl font-extrabold text-[#6abd8d] mb-0.5 sm:mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-[9px] sm:text-xs md:text-xl font-bold text-slate-500 uppercase tracking-wider">
                                    {stat.label}
                                </span>
                            </div>

                            {/* Vertical Divider (Hidden after the last item) */}
                            {index !== stats.length - 1 && (
                                <div className="w-px h-8 sm:h-12 md:h-14 bg-slate-200/80"></div>
                            )}

                        </React.Fragment>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default TrustSignals;