import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Health&Fitness.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Health & Fitness
            </h1>
            <p className="leading-relaxed mb-3">
            Blogs about fitness routines, healthy eating, mental health awareness, 
            weight loss, yoga, and wellness practices are always in demand.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href='/#!'className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Lifestyle-pic.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Lifestyle
            </h1>
            <p className="leading-relaxed mb-3">
             These blogs encompass various aspects of daily living, including minimalism,
             fashion, beauty, home decor, organization, and travel.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href='/#!' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Technology-pic.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Technology
            </h1>
            <p className="leading-relaxed mb-3">
            Tech blogs focus on the latest gadgets, software reviews, technological innovations, 
            coding, cybersecurity, and digital trends.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href='/#!' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Finance&Money.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Finance & Money
            </h1>
            <p className="leading-relaxed mb-3">
            This category covers personal finance, investing, budgeting, saving money, financial independence, 
            and entrepreneurship.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href='/#!'className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Food&Recipes.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Food & Recipes
            </h1>
            <p className="leading-relaxed mb-3">
            Food blogs are incredibly popular, including recipe sharing, food reviews, nutrition advice, 
            cooking tips, and special diets (e.g., vegan, keto).
            </p>
            <div className="flex items-center flex-wrap">
              <Link href='/#!' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Travel.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Travel
            </h1>
            <p className="leading-relaxed mb-3">
            Travel blogs document personal experiences, offer travel guides, tips on destinations, 
            travel hacks, and advice on exploring the world.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href='/#!' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Education&Learning.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Education & Learning
            </h1>
            <p className="leading-relaxed mb-3">
            Topics can range from online courses, study tips, language learning, 
            and various other educational resources.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href='/#!' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Entertainment.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Entertainment
            </h1>
            <p className="leading-relaxed mb-3">
            These blogs discuss movies, TV shows, music, celebrity news, and pop culture trends.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href='/#!' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="Social Media&Marketing.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Social Media & Marketing
            </h1>
            <p className="leading-relaxed mb-3">
            These blogs cover trends in social media, digital marketing strategies, 
            SEO (Search Engine Optimization), and other digital marketing tools.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href='/#!' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Hero