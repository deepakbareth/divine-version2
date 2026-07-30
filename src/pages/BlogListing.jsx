import React from 'react';
import { blogsData } from '../Data/blogsData';
import SectionHeader from '../Components/reusable/SectionHeader';
import LeadEnquiryForm from '../Components/reusable/LeadEnquiryForm';
import BlogCard from '../Components/Blog/BlogCard';

const BlogListing = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-22 sm:py-22 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          badgeText="Official Articles & News"
          title="Divine Institute"
          titleHighlight="Blogs"
          description="Read authentic articles, career advice, and educational updates from Divine Institute of Management Studies."
        />

        {/* Clean Simple Blog Grid (Equal width to other pages: max-w-7xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Bottom Lead Enquiry Form Banner */}
        <div className="max-w-3xl mx-auto">
          <LeadEnquiryForm
            title="Have Questions About Admissions or Distance Education?"
            subtitle="Connect with our academic counsellors for expert guidance on university programs and career planning."
            buttonText="Get Free Academic Consultation"
          />
        </div>

      </div>
    </div>
  );
};

export default BlogListing;
