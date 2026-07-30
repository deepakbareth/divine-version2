import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../Data/blogsData';
import BlogCard from '../Components/Blog/BlogCard';
import LeadEnquiryForm from '../Components/reusable/LeadEnquiryForm';
import { Calendar, Clock, User, ArrowLeft, Tag, BookOpen } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="bg-slate-50 min-h-screen py-32 text-center font-sans">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h2>
          <p className="text-slate-500 text-sm mb-6">The blog post you are looking for does not exist or has been relocated.</p>
          <Link
            to="/divine/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#59c28a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog Listing
          </Link>
        </div>
      </div>
    );
  }

  // Related Blogs
  const relatedBlogs = blogsData.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <div className="bg-slate-50 min-h-screen py-22 sm:py-22 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/divine/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#59c28a] transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
        </div>

        {/* Main Article Container */}
        <article className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl mb-16">

          {/* Category Badge & Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[#59c28a]/10 text-[#3ba16a] font-bold text-xs uppercase tracking-wider border border-[#59c28a]/20">
              {blog.categoryName}
            </span>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#59c28a]" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#59c28a]" />
                {blog.readTime}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6 font-serif">
            {blog.title}
          </h1>

          {/* Author Bar */}
          <div className="flex items-center gap-3 pb-6 mb-8 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-[#59c28a]/10 text-[#59c28a] flex items-center justify-center font-bold text-sm">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{blog.author}</p>
              <p className="text-xs text-slate-500 font-medium">{blog.authorRole}</p>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden mb-8 border border-slate-100 shadow-md">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-auto max-h-[440px] object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 font-normal"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags Bar */}
          {blog.tags && (
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          )}

        </article>

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">More Articles from Divine Institute</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedBlogs.map((rBlog) => (
                <BlogCard key={rBlog.id} blog={rBlog} />
              ))}
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default BlogDetail;
