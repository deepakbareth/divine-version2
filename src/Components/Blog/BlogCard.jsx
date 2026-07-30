import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';

const BlogCard = ({ blog }) => {
  const { slug, title, categoryName, author, date, readTime, coverImage, excerpt } = blog;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#59c28a]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Cover Image Container */}
        <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
          <img
            src={coverImage}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
              {categoryName}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Metadata Bar */}
          <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#59c28a]" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#59c28a]" />
              {readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 leading-snug transition-colors mb-2.5 line-clamp-2">
            <Link to={`/divine/blog/${slug}`}>{title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4 font-normal">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium truncate max-w-[65%]">
          <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{author}</span>
        </div>

        <Link
          to={`/divine/blog/${slug}`}
          className="text-xs font-bold uppercase tracking-wider text-[#59c28a] group-hover:text-[#46aa75] flex items-center gap-1 shrink-0"
        >
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
