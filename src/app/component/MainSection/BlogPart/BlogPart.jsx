import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    imageSrc: '/assets/images/blog2.png',
    date: '01 June, 2024',
    title: 'The Art of Mixing Patterns: A Guide to Perfectly Layered Interior',
    slug: 'Blog1'
  },
  {
    imageSrc: '/assets/images/blog4.png',
    date: '02 June, 2024',
    title: 'Transforming Small Spaces: Tips and Tricks for a Cozy Home',
    slug: 'Blog2'
  },
  {
    imageSrc: '/assets/images/blog2.png',
    date: '03 June, 2024',
    title: 'Sustainable Living: Eco-Friendly Interior Design Ideas',
    slug: 'Blog3'
  },
  {
    imageSrc: '/assets/images/blog4.png',
    date: '04 June, 2024',
    title: 'Modern Minimalism: Achieving a Clean and Simple Aesthetic',
    slug: 'Blog4'
  },
  {
    imageSrc: '/assets/images/blog2.png',
    date: '05 June, 2024',
    title: 'Color Psychology: How to Choose the Perfect Palette for Your Home',
    slug: 'Blog5'
  },
  {
    imageSrc: '/assets/images/blog4.png',
    date: '06 June, 2024',
    title: 'The Ultimate Guide to DIY Home Decor Projects',
    slug: 'Blog6'
  },
];

const BlogB = ({ imageSrc, date, title, slug }) => (
  
  <Link href={`/blog/blogging/${slug}`}>
    <div className="flex flex-col mb-6 w-full ml-2 cursor-pointer">
      <Image
        src={imageSrc}
        alt={title}
        width={450}
        height={300}
        className="object-cover"
      />
      <div className="bg-white p-4 flex flex-col items-start gap-2 ml-2">
        <p className="text-sm text-[#2F2F2F]">{date}</p>
        <h3 className="text-lg font-semibold text-[#575757] mt-0">{title}</h3>
      </div>
    </div>
  </Link>
);

const BlogPart = () => (
  <div className="relative bg-white p-6 ml-2 mr-2 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
      {blogs.slice(0, 3).map((blog, index) => (
        
        <BlogB key={index} {...blog} />
      ))}
    </div>
    <div className="relative flex justify-center">
      <div className="absolute top-0 left-[calc(100%/3)] transform -translate-x-1/2 w-px h-full bg-black"></div>
      <div className="absolute top-0 left-[calc(200%/3)] transform -translate-x-1/2 w-px h-full bg-black"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 relative">
      {blogs.slice(3).map((blog, index) => (
        <BlogB key={index} {...blog} />
      ))}
    </div>
  </div>
);

export default BlogPart;
