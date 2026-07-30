import React from 'react';
import { Link } from 'react-router-dom';
import { User, Tag, MessageCircle } from 'lucide-react';

const BlogCard = ({ blog }) => {
  const { slug, title, categoryName, author, dateDayMonth, dateYear, commentsCount, coverImage, excerpt } = blog;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Cover Image Container with Date Box Overlay */}
        <div className="relative w-full h-[240px] sm:h-[260px] overflow-hidden bg-slate-100">
          <img
            src={coverImage}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Date Badge Overlay (Blue Top, Yellow Bottom) */}
          <div className="absolute top-4 left-4 z-10 flex flex-col shadow-lg rounded-md overflow-hidden text-center min-w-[64px]">
            <div className="bg-[#002147] text-white font-extrabold text-xs px-2.5 py-1.5 uppercase tracking-wide">
              {dateDayMonth}
            </div>
            <div className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1">
              {dateYear}
            </div>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-[#002147] leading-snug group-hover:text-[#59c28a] transition-colors mb-3">
            <Link to={`/divine/blog/${slug}`}>{title}</Link>
          </h3>

          {/* Metadata Row: Author | Category | Comments */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium mb-3">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{author}</span>
            </span>

            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{categoryName}</span>
            </span>

            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{commentsCount}</span>
            </span>
          </div>

          {/* Yellow Line Accent Under Metadata */}
          <div className="w-10 h-0.5 bg-amber-400 rounded-full mb-4"></div>

          {/* Excerpt Paragraph */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6 font-normal">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Read More Button Footer */}
      <div className="px-6 pb-6 pt-0">
        <Link
          to={`/divine/blog/${slug}`}
          className="inline-flex items-center justify-center bg-[#002147] hover:bg-[#001530] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
