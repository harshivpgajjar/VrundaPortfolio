import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import communicationCollage from "@assets/IMG-20250730-WA0182_1753946886348.jpg";
import nightShiftPoster from "@assets/poster_1753948710814.jpeg";
import writingImage1 from "@assets/IMG-20250730-WA0181_1753946886344.jpg";
import writingImage2 from "@assets/IMG-20250730-WA0183_1753946886349.jpg";
import writingImage3 from "@assets/IMG-20250730-WA0185_1753946886350.jpg";
import keepItInMindImage from "@assets/WhatsApp Image 2025-07-31 at 18.58.48_efd197d1_1753968750819.jpg";
import surrealHandImage from "@assets/WhatsApp Image 2025-07-31 at 18.58.50_7aac5522_1753968750882.jpg";
import artComfortImage from "@assets/WhatsApp Image 2025-07-31 at 18.58.49_0f453904_1753968750897.jpg";

const workCategories = [
  {
    title: "SHORT FILM",
    description: "\"The Night Shift\" was a group collaboration for a college project. I wrote the script and co-directed the film with my peers. Neo-noir was the allotted genre and we hoped to do justice to it.",
    projects: [
      {
        title: "The Night Shift",
        videoUrl: "https://youtu.be/mfqwNWA2X1A?si=oLHD2mGSp8sm07i7",
        thumbnail: nightShiftPoster,
        type: "video"
      }
    ]
  },
  {
    title: "YOUTUBE SCRIPTS FOR KOTAK 811",
    description: "During my tenure as a Copywriting Trainee at Schbang, I had the opportunity to work on various projects, including creating content for Kotak 811. I was responsible for writing scripts for several of their campaigns. This experience allowed me to develop my scriptwriting skills and contribute to impactful brand storytelling.",
    projects: [
      {
        title: "Kotak 811 Campaign Script 1",
        videoUrl: "https://youtu.be/CY3zOtCc7ls?si=HBOcuirosm20prg2",
        thumbnail: "https://img.youtube.com/vi/CY3zOtCc7ls/maxresdefault.jpg",
        type: "video"
      },
      {
        title: "Kotak 811 Campaign Script 2", 
        videoUrl: "https://youtu.be/t-p6X6FNwQQ?si=Arf1OLr3OywQRdzD",
        thumbnail: "https://img.youtube.com/vi/t-p6X6FNwQQ/maxresdefault.jpg",
        type: "video"
      },
      {
        title: "Kotak 811 Campaign Script 3",
        videoUrl: "https://youtu.be/wvrjm0n_j7w?si=3NBuDPSelghjXWkr", 
        thumbnail: "https://img.youtube.com/vi/wvrjm0n_j7w/maxresdefault.jpg",
        type: "video"
      }
    ]
  },

  {
    title: "STORIES FOR THE SOUL (FIRST DRAFTS)", 
    description: "Hum mein kayi kahaniya chhipi hai. Kuch humara hissa hai aur kuch ka hum banna chahte hai. In kahaniyo ke bal, maine bhi likhi hai kuch.",
    projects: [
      {
        title: "Stories Collection",
        driveUrl: "https://drive.google.com/drive/folders/1OpjFq_AV2F10rdPImYyaqbcYiLoVq-H_?usp=sharing",
        type: "folder",
        thumbnail: writingImage1
      }
    ]
  },
  {
    title: "SCRIPTWRITING",
    description: "Visual storytelling through scripts for various media formats and digital content.",
    projects: [
      {
        title: "AD Script for Macbook Pro",
        driveUrl: "https://drive.google.com/file/d/1sYMvXaoEqE-MfPKjkmuI9TrzFvfXoTYm/view?usp=sharing",
        type: "document",
        thumbnail: writingImage2
      }
    ]
  },
  {
    title: "POETRY",
    description: "This is where it all began for me. My truest reflection often mirrors my writings, and I hope it resonates with you.",
    projects: [
      {
        title: "Poetry Collection",
        driveUrl: "https://drive.google.com/drive/folders/1iRsRhuj5e1mBbyI1OVWLuYAtqAaRL5K7?usp=sharing",
        type: "folder",
        thumbnail: writingImage3
      }
    ]
  },
  {
    title: "PRESS RELEASE ARTICLES",
    description: "During my writing internship at ARtmeTech, I had the privilege to write two press releases for their esteemed company along with other projects.",
    projects: [
      {
        title: "AR Advertising: A Bold Bet for Brand Success",
        articleUrl: "https://archive.adgully.com/ar-advertising-a-bold-bet-for-brand-success-nirvi-jain-133036.html",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/AdGully_Logo.png/1200px-AdGully_Logo.png",
        type: "article",
        publication: "AdGully"
      },
      {
        title: "Harnessing the Power of AI: Transforming Marketing Efforts for Success",
        articleUrl: "https://timesofindia.indiatimes.com/blogs/voices/harnessing-the-power-of-ai-transforming-marketing-efforts-for-success/?source=app&frmapp=yes",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_Times_of_India.svg/1200px-The_Times_of_India.svg.png",
        type: "article",
        publication: "Times of India"
      }
    ]
  },
  {
    title: "BLOGS AND ARTICLES",
    description: "A collection of blogs, articles and written content showcasing various topics and writing styles.",
    projects: [
      {
        title: "Article Collection",
        driveUrl: "https://drive.google.com/drive/folders/10Ydad-dmWgJkoMtVFEeTuIIQCSXR-j9k?usp=sharing",
        type: "folder",
        thumbnail: keepItInMindImage
      }
    ]
  },
  {
    title: "MAGAZINE",
    description: "I designed this magazine on InDesign for a third-year college project.",
    projects: [
      {
        title: "College Magazine Project",
        driveUrl: "https://drive.google.com/drive/folders/1ONICeV1TFp4BXx4cuE4AdXdUaIK6C6QZ?usp=drive_link",
        type: "folder",
        thumbnail: surrealHandImage
      }
    ]
  },
  {
    title: "RADIO PROJECT",
    description: "We made a 15-min radio project in the third-year of our college. I conceptualized the idea, wrote the script and co-hosted the show.",
    projects: [
      {
        title: "College Radio Show",
        driveUrl: "https://drive.google.com/drive/folders/1K96qYOtl0uJz-zt5EM36Ix-KpJ0vPpdg?usp=sharing",
        type: "folder",
        thumbnail: artComfortImage
      }
    ]
  }
];

export function Work() {
  const [activeCategory, setActiveCategory] = useState<string>("SHORT FILM");

  const categories = [
    "SHORT FILM",
    "YOUTUBE SCRIPTS FOR KOTAK 811", 
    "STORIES FOR THE SOUL (FIRST DRAFTS)",
    "SCRIPTWRITING", 
    "POETRY",
    "PRESS RELEASE ARTICLES",
    "BLOGS AND ARTICLES",
    "MAGAZINE",
    "RADIO PROJECT"
  ];

  const getActiveCategory = () => {
    return workCategories.find(cat => cat.title === activeCategory);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            <Link href="/">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider cursor-pointer text-white hover:text-gray-300 transition-colors">
                VRUNDA MUNDHRA
              </span>
            </Link>
            
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
              <Link href="/">
                <span className="font-mono text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                  HOME
                </span>
              </Link>
              <Link href="/work">
                <span className="font-mono text-xs sm:text-sm text-white font-bold cursor-pointer">
                  WORK
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.015]"
          style={{
            backgroundImage: `url(${communicationCollage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-wider text-black">
              WORK
            </h1>
            <p className="font-mono text-xs sm:text-sm text-black max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4">
              A collection of my professional and personal work spanning scriptwriting, copywriting, 
              storytelling, and creative strategy across various media and platforms.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 px-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-mono text-xs sm:text-sm px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 border transition-all duration-300 text-center min-w-0 ${
                  activeCategory === category
                    ? 'border-black bg-black text-white'
                    : 'border-black text-black hover:border-gray-500 hover:bg-gray-100'
                }`}
                style={{ wordBreak: 'break-word' }}
              >
                <span className="block leading-tight">
                  {category.length > 20 ? 
                    category.split(' ').map((word, i) => (
                      <span key={i} className="block sm:inline sm:mr-1">{word}</span>
                    )) 
                    : category
                  }
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selected Category Content */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {getActiveCategory() && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-black p-4 sm:p-6 lg:p-8 hover:bg-gray-50 transition-all duration-300"
            >
              <h2 className="font-mono text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 tracking-wider text-black">
                {getActiveCategory()?.title}
              </h2>
              
              <p className="font-mono text-xs sm:text-sm text-black mb-6 sm:mb-8 leading-relaxed">
                {getActiveCategory()?.description}
              </p>

              <div className="space-y-4">
                {/* Check if this category has multiple videos (like Kotak scripts) or multiple articles */}
                {getActiveCategory()?.projects.some(p => typeof p === 'object' && p !== null && 'type' in p && (p.type === 'video' || p.type === 'article')) && 
                 getActiveCategory()?.projects.length! > 1 ? (
                  // Multiple videos layout - grid for Kotak scripts
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {getActiveCategory()?.projects.map((project, projectIndex) => (
                      <div key={projectIndex}>
                        {typeof project === 'object' && project !== null && 'type' in project && project.type === 'video' && 'videoUrl' in project && 'thumbnail' in project ? (
                          <a 
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            <div className="relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300">
                              <img 
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/90 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="mt-2 sm:mt-3 font-mono text-xs text-gray-600 group-hover:text-black transition-colors">
                              → SCRIPT {projectIndex + 1}
                            </div>
                          </a>
                        ) : typeof project === 'object' && project !== null && 'type' in project && project.type === 'article' && 'articleUrl' in project ? (
                          <a 
                            href={project.articleUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            <div className="relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300">
                              {'thumbnail' in project ? (
                                <img 
                                  src={project.thumbnail}
                                  alt={project.title}
                                  className="w-full h-24 object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-full h-24 bg-gray-50 flex items-center justify-center">
                                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 011 .22l4 2.4a1 1 0 010 1.76l-4 2.4a1 1 0 01-1 .22H5" />
                                  </svg>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="mt-2 text-center">
                              <div className="font-mono text-xs text-gray-600 hover:text-black transition-colors">
                                → ARTICLE {projectIndex + 1}
                              </div>
                            </div>
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Single video or text projects layout
                  <>
                    {getActiveCategory()?.projects.map((project, projectIndex) => (
                      <div key={projectIndex}>
                        {typeof project === 'object' && project !== null && 'type' in project && project.type === 'video' && 'videoUrl' in project && 'thumbnail' in project ? (
                          // Single video project with large thumbnail
                          <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                            <a 
                              href={project.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              <div className="relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                <img 
                                  src={project.thumbnail}
                                  alt={project.title}
                                  className={`w-full object-contain group-hover:scale-105 transition-transform duration-300 ${
                                    project.thumbnail === nightShiftPoster ? 'h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]' : 'aspect-video object-cover'
                                  }`}
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 sm:mt-4 text-center font-mono text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">
                                → {typeof project === 'object' && project !== null && 'title' in project ? project.title : 'Video'}
                              </div>
                            </a>
                          </div>
                        ) : typeof project === 'object' && project !== null && 'type' in project && project.type === 'document' && 'driveUrl' in project ? (
                          // Document project with Google Drive link
                          <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                            <a 
                              href={project.driveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              <div className="relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                {'thumbnail' in project ? (
                                  <div className="relative">
                                    <img 
                                      src={project.thumbnail}
                                      alt={project.title}
                                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 text-xs font-mono">
                                      {typeof project === 'object' && project !== null && 'title' in project ? project.title : 'Document'}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="p-8 sm:p-12 bg-gray-50 hover:bg-gray-100">
                                    <div className="flex items-center justify-center">
                                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 sm:mt-4 text-center font-mono text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">
                                → {typeof project === 'object' && project !== null && 'title' in project ? project.title : 'Document'}
                              </div>
                            </a>
                          </div>
                        ) : typeof project === 'object' && project !== null && 'type' in project && project.type === 'folder' && 'driveUrl' in project ? (
                          // Folder project with Google Drive link
                          <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                            <a 
                              href={project.driveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              <div className="relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                {'thumbnail' in project ? (
                                  <div className="relative">
                                    <img 
                                      src={project.thumbnail}
                                      alt={project.title}
                                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 text-xs font-mono">
                                      {typeof project === 'object' && project !== null && 'title' in project ? project.title : 'Folder'}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="p-8 sm:p-12 bg-gray-50 hover:bg-gray-100">
                                    <div className="flex items-center justify-center">
                                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 sm:mt-4 text-center font-mono text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">
                                → {typeof project === 'object' && project !== null && 'title' in project ? project.title : 'Folder'}
                              </div>
                            </a>
                          </div>
                        ) : typeof project === 'object' && project !== null && 'type' in project && project.type === 'article' && 'articleUrl' in project ? (
                          // Article project with publication thumbnail
                          <div className="max-w-lg mx-auto">
                            <a 
                              href={project.articleUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              <div className="relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                {'thumbnail' in project ? (
                                  <img 
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-32 object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-300"
                                  />
                                ) : (
                                  <div className="w-full h-32 bg-gray-50 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 011 .22l4 2.4a1 1 0 010 1.76l-4 2.4a1 1 0 01-1 .22H5" />
                                    </svg>
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 text-center">
                                <div className="font-mono text-sm text-gray-600 hover:text-black transition-colors mb-1">
                                  → {typeof project === 'object' && project !== null && 'title' in project ? project.title : 'Article'}
                                </div>
                                {'publication' in project && (
                                  <div className="font-mono text-xs text-gray-400">
                                    {project.publication}
                                  </div>
                                )}
                              </div>
                            </a>
                          </div>
                        ) : (
                          // Regular text project
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="font-mono text-sm text-gray-500 hover:text-black transition-colors cursor-pointer p-4 border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                              → {typeof project === 'string' ? project : 'Project'}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Only show VIEW SAMPLES link for non-video, non-document, non-article, and non-folder categories */}
              {!getActiveCategory()?.projects.some(p => typeof p === 'object' && p !== null && 'type' in p && (p.type === 'video' || p.type === 'document' || p.type === 'article' || p.type === 'folder')) && (
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <div className="font-mono text-sm text-gray-400">
                    VIEW SAMPLES →
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}