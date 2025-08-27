/**
 * 사이트 전체 설정 파일
 * 다른 주제의 블로그로 쉽게 변경할 수 있도록 모든 설정을 중앙화
 */

const siteConfig = {
  // === 사이트 기본 정보 ===
  site: {
    name: "Easy Digital Marketing",
    title: "Easy Digital Marketing - Simple Guides & Tips",
    description: "Step-by-step digital marketing tips, SEO strategies, and social media growth guides for beginners and businesses.",
    url: "https://easy-digital-marketing-blog.vercel.app",
    logo: "/logo.png",
    favicon: "/favicon.ico"
  },

  // === 브랜딩 (UI에서 직접 사용되는 텍스트) ===
  branding: {
    siteName: "Digital Marketing Hub",
    tagline: "Marketing made simple",
    subtitle: "Learn SEO, social media, and online marketing in the easiest way possible.",
    author: "EDM Team",
    email: "hello@easydm.com",
    companyName: "Easy Digital Marketing",
    footerDescription: "Simple, practical, and beginner-friendly digital marketing tips."
  },

  // === Blog Theme Settings (Only change this section when creating new blog) ===
  blogTheme: {
    type: 'digital',

    // Primary color (Soft Orange)
    primaryColor: {
      50: "#fdf6f0", // Warm ivory
      100: "#fae1d0", // Soft peach beige
      200: "#f8cba5", // Muted pastel apricot
      500: "#f5a97f", // Gentle peach orange (main)
      600: "#ec8f6a", // Warm muted coral
      700: "#d87756"  // Deeper terracotta orange
    },

    secondaryColor: {
      50: "#f9f9f7", // Light sand
      100: "#f3ede5", // Beige cream
      500: "#d6b893", // Sand beige (secondary accent)
      600: "#c29d78", // Muted camel
      700: "#a6815f"  // Warm brownish accent
    },

    // UI 요소별 색상 설정
    uiColors: {
      // 카드 제목 색상 (검은색으로 강조)
      cardTitle: 'primary', // 'auto', 'primary', 'secondary', 'gray'
      // 카드 호버시 제목 색상 (회색으로 대비 효과)
      cardTitleHover: 'gray', // 'primary', 'secondary', 'gray'
      // 메뉴/링크 호버 색상 (미니멀한 회색)
      linkHover: 'secondary', // 'primary', 'secondary', 'gray'
      // 태그 색상 (세컨더리 회색)
      tagColor: 'secondary', // 'primary', 'secondary', 'gray'
      // 버튼 색상 (모던한 솔리드 검은색)
      buttonStyle: 'solid-primary', // 'gradient', 'solid-primary', 'solid-secondary'
    },

    // Reddit 서브레딧 설정 (기존 reddit-config.json 통합)
    contentSources: {
      selectedSubreddit: "DigitalMarketing", // 메인 서브레딧
      fallbackSubreddits: [], // 대체 서브레딧들
      targetAudience: "general", // 'general', 'expert', 'beginner'
      outputLanguage: "english", // 'korean', 'english'

      // 댓글 수집 제한
      commentLimits: {
        topComments: 15,
        newComments: 30,
        maxTotal: 50
      },

      // 필터링 설정
      filterSettings: {
        minUpvotes: 3,
        minCommentLength: 10,
        excludeDeleted: true,
        excludeRemoved: true,
        excludeNSFW: true
      },

      // AI 글쓰기 설정
      aiSettings: {
        promptTemplate: "summary", // 'informative', 'engaging', 'analytical', 'technical', 'casual', 'summary'
        gptModel: "gpt-4o", // 'gpt-3.5-turbo', 'gpt-4', 'gpt-4-turbo'  
        includeComments: true,
        commentAnalysis: true
      }
    },

    // AI 모델 정의 (기존 reddit-config.json에서 이동)
    availableModels: {
      "gpt-3.5-turbo": {
        name: "GPT-3.5 Turbo",
        description: "빠른 속도, 저렴한 비용, 일반적인 블로그 작성에 적합",
        maxTokens: 4096,
        costPerToken: "낮음",
        speed: "빠름"
      },
      "gpt-4": {
        name: "GPT-4",
        description: "높은 품질, 정확성, 복잡한 주제 분석에 적합",
        maxTokens: 8192,
        costPerToken: "높음",
        speed: "보통"
      },
      "gpt-4-turbo": {
        name: "GPT-4 Turbo",
        description: "GPT-4의 성능과 빠른 속도, 긴 글 작성에 최적화",
        maxTokens: 128000,
        costPerToken: "중간",
        speed: "빠름"
      }
    },

    // 글쓰기 스타일 템플릿 (기존 reddit-config.json에서 이동)
    promptTemplates: {
      informative: {
        name: "정보 전달형",
        description: "정확한 정보 전달에 중점을 둔 체계적이고 논리적인 글쓰기 스타일",
        blogStyle: "informative",
        tone: "professional"
      },
      engaging: {
        name: "흥미 유발형",
        description: "독자의 흥미를 끄는 스토리텔링과 감정적 연결에 중점을 둔 글쓰기 스타일",
        blogStyle: "engaging",
        tone: "conversational"
      },
      analytical: {
        name: "분석형",
        description: "데이터와 근거를 바탕으로 한 깊이 있는 분석과 인사이트 제공에 중점을 둔 글쓰기 스타일",
        blogStyle: "analytical",
        tone: "academic"
      },
      technical: {
        name: "기술형",
        description: "기술적 세부사항과 전문적인 내용 전달에 중점을 둔 글쓰기 스타일",
        blogStyle: "technical",
        tone: "expert"
      },
      casual: {
        name: "캐주얼형",
        description: "친근하고 편안한 대화체로 쉽게 읽을 수 있는 글쓰기 스타일",
        blogStyle: "casual",
        tone: "friendly"
      },
      summary: {
        name: "쉬운 요약형",
        description: "복잡한 내용을 쉬운 용어로 간단명료하게 핵심만 정리해서 설명하는 글쓰기 스타일",
        blogStyle: "summary",
        tone: "simple"
      }
    },

    // 이미지 키워드 설정 (마케팅 테마에 맞게 변경)
    imageKeywords: {
      koreanToEnglish: {
        "디지털 마케팅": "digital marketing",
        "광고": "advertising",
        "브랜드": "brand",
        "소셜": "social media",
        "SEO": "seo",
        "검색엔진": "search engine",
        "성장": "growth",
        "사업": "business",
        "스타트업": "startup",
        "콘텐츠": "content",
        "전략": "strategy",
        "이커머스": "ecommerce",
        "데이터": "data",
        "분석": "analytics"
      },
      allowedEnglishKeywords: [
        "digital marketing", "seo", "business", "advertising",
        "social media", "branding", "analytics", "tips", "guide"
      ],
      defaultKeywords: ["digital marketing", "seo"]
    }
  },

  // === UI Text (Changed to Digital Marketing theme) ===
  uiText: {
    featuredArticleLabel: "🔥 Must-Read",
    staffPicksTitle: "Editor's Choice",
    latestArticlesTitle: "Latest Marketing Insights",
    totalInsightsText: "Marketing insights",
    loadMoreButton: "Load More Articles",
    noMorePostsTitle: "Fresh content coming soon!",
    noMorePostsSubtitle: "New digital marketing tips are on the way.",

    searchPlaceholder: "Search SEO, ads, social media...",
    totalPostsText: "Total {count} articles",
    searchResultText: "Search results for '{query}'",
    noSearchResultsTitle: "No results found",
    noSearchResultsSubtitle: "Try different keywords.",
    viewAllPostsButton: "View All Articles",

    backToHomeText: "View More Tips",
    footerSectionTitle: "Was this guide useful?",

    contactPageTitle: "Get in Touch",
    contactPageSubtitle: "Have questions, collaboration ideas, or feedback? We'd love to hear from you!",
    contactFormTitle: "Send us a message",
    contactFormSubtitle: "We’ll reply within 24 hours",

    previousButtonLabel: "Previous",
    nextButtonLabel: "Next",
    noPostsTitle: "No posts available yet",
    noPostsSubtitle: "Stay tuned for upcoming guides",

    contactFields: {
      name: { label: "Name", placeholder: "Your full name", required: true },
      email: { label: "Email", placeholder: "your.email@example.com", required: true },
      subject: { label: "Subject", placeholder: "What's this about?", required: true },
      category: {
        label: "Category",
        required: true,
        options: [
          { value: "business", label: "Business Inquiry" },
          { value: "collaboration", label: "Collaboration" },
          { value: "feedback", label: "Feedback" },
          { value: "press", label: "Press & Media" },
          { value: "other", label: "Other" }
        ]
      },
      message: { label: "Message", placeholder: "Tell us more about your inquiry...", required: true }
    },

    contactFormButton: "Send Message",
    contactFormSending: "Sending...",
    contactFormSuccess: "Message sent! 🎉",
    contactFormSuccessDesc: "Thanks for reaching out! We'll get back to you soon.",
    contactFormError: "Failed to send message",
    contactFormErrorDesc: "Please try again or email us at {email}",

    featureBadges: [
      { icon: "trending-up", text: "Beginner-Friendly" },
      { icon: "calendar", text: "Practical Strategies" },
      { icon: "zap", text: "Step-by-Step Guides" }
    ]
  },

  // === Social Media ===
  social: {
    twitter: "@easy_digital_mkt",
    linkedin: "https://linkedin.com/company/easy-digital-marketing",
    facebook: "https://facebook.com/easydigitalmarketing"
  },

  // === Theme Settings ===
  theme: {
    primaryColor: "orange",
    accentColor: "beige",
    darkMode: false,
    fontFamily: "Inter",
    language: "en",
    timezone: "America/New_York"
  },

  // === 콘텐츠 설정 ===
  content: {
    postsPerPage: 6,
    excerptLength: 160,
    showReadingTime: true,
    showAuthor: true,
    showTags: true,
    showDate: true,
    enableComments: false,
    enableSearch: true,
    defaultAuthor: 'EDM Team'
  },

  // === Menu Structure ===
  navigation: {
    main: [
      { name: "Home", href: "/", external: false },
      { name: "Contact", href: "/contact", external: false }
    ],
    footer: [
      { name: "Home", href: "/" },
      { name: "SEO Tips", href: "/seo" },
      { name: "Social Media", href: "/social" },
      { name: "Contact Us", href: "/contact" }
    ]
  },

  // === SEO Settings ===
  seo: {
    defaultKeywords: ["Digital Marketing", "SEO", "Social Media", "Online Ads", "Beginners Guide", "Marketing Tips"],
    ogImage: "/og-digital-marketing.jpg",
    twitterCard: "summary_large_image"
  },

  // === 이미지 설정 ===
  images: {
    provider: "unsplash",
    defaultImage: "https://source.unsplash.com/1200x600/?digital,marketing",
    sizes: {
      thumbnail: "300x200",
      card: "600x400",
      featured: "1200x600",
      og: "1200x630"
    }
  },


  // === Footer Settings ===
  footer: {
    sections: [
      {
        title: "About",
        content: "custom",
        customText: "Easy Digital Marketing helps beginners and businesses learn online marketing with simple guides and practical strategies."
      },
      {
        title: "Popular Topics",
        content: "custom",
        customText: "SEO • Social Media • Google Ads • Content Marketing • Branding • Email Marketing"
      },
      {
        title: "Community",
        content: "custom",
        customText: "Join thousands of readers who trust Easy Digital Marketing for step-by-step marketing knowledge."
      }
    ],
    automation: {
      schedule: "Daily content automation",
      technology: "Curated by experts"
    },
    copyright: {
      text: "All rights reserved",
      showYear: true,
      showCompany: true
    }
  },

  // === 이메일 설정 ===
  email: {
    from: "TokTips Daily <${GMAIL_USER}>", // 환경변수로 대체됨
    replyTo: "${GMAIL_USER}", // 환경변수로 대체됨
    notifications: ["${GMAIL_USER}"], // 환경변수로 대체됨
    templates: {
      success: "자동화 성공 알림",
      failure: "자동화 실패 알림",
      partial: "부분 성공 알림"
    }
  },

  // === 포스트 정리 설정 (AI 생성 후 후처리) ===
  postProcessing: {
    // 제거할 패턴들 (정규식)
    removePatterns: [
      /\n===TAGS===[\s\S]*$/m,     // ===TAGS=== 섹션
      /\n---TAGS---[\s\S]*$/m,     // ---TAGS--- 섹션
      /\n\*\*Tags:\*\*[\s\S]*$/m,  // **Tags:** 섹션
      /\nTags:[\s\S]*$/m           // Tags: 섹션
    ],

    // 태그 관련 설정
    tags: {
      // 기본 태그 (부적절한 태그 대신 사용)
      defaultTags: ["Digital Marketing", "SEO", "Social Media"],

      // 최대 태그 개수
      maxTags: 5
    }
  },

}

module.exports = siteConfig