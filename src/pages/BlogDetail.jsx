import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../Data/blogsData';
import BlogCard from '../Components/Blog/BlogCard';
import { User, Tag, MessageCircle, ArrowLeft, BookOpen } from 'lucide-react';

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
        <article className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl mb-16 max-w-4xl mx-auto">

          {/* Cover Image with Date Badge Overlay */}
          <div className="relative rounded-2xl overflow-hidden mb-8 border border-slate-100 shadow-md">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-auto max-h-[440px] object-cover"
            />
            {/* Date Badge Overlay (Blue Top, Yellow Bottom) */}
            <div className="absolute top-4 left-4 z-10 flex flex-col shadow-lg rounded-md overflow-hidden text-center min-w-[64px]">
              <div className="bg-[#002147] text-white font-extrabold text-xs px-2.5 py-1.5 uppercase tracking-wide">
                {blog.dateDayMonth}
              </div>
              <div className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1">
                {blog.dateYear}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002147] leading-tight mb-4 font-sans">
            {blog.title}
          </h1>

          {/* Metadata Row: Author | Category | Comments */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium mb-3">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{blog.author}</span>
            </span>

            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{blog.categoryName}</span>
            </span>

            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{blog.commentsCount}</span>
            </span>
          </div>

          {/* Yellow Line Accent Under Metadata */}
          <div className="w-12 h-0.5 bg-amber-400 rounded-full mb-8"></div>

          {/* Custom Styled Quote Callout Box */}
          <style>{`
            .blog-article-content blockquote {
              background-color: #f8f9fa;
              padding: 1.5rem 2rem;
              margin: 2rem 0;
              border-radius: 0.75rem;
              font-style: italic;
              color: #334155;
              position: relative;
              border: none;
              quotes: none;
            }
            .blog-article-content blockquote::before {
              content: "“";
              color: #f59e0b;
              font-size: 2.25rem;
              font-family: Georgia, serif;
              line-height: 1;
              display: inline-block;
              margin-right: 0.5rem;
              float: left;
              margin-top: -0.2rem;
            }
          `}</style>

          {/* Article Body Content */}
          <div
            className="blog-article-content prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 font-normal"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

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
