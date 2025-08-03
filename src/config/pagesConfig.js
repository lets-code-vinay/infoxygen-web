// Comprehensive configuration for all pages with metadata
export const PAGES_CONFIG = {
  services: {
    digital_strategy_design: {
      isPageAvailable: false,
      title: "Digital Strategy & Design",
      description: "Strategic digital transformation and design solutions",
      path: "digital-strategy-design",
    },
    software_product_engineering: {
      isPageAvailable: true,
      title: "Software Product Engineering",
      description:
        "Building innovative software products that drive business growth",
      path: "software-product-engineering",
    },
    intelligent_automation: {
      isPageAvailable: false,
      title: "Intelligent Automation",
      description: "AI-powered automation solutions for business processes",
      path: "intelligent-automation",
    },
    cx_transformation: {
      isPageAvailable: false,
      title: "CX Transformation",
      description: "Customer experience transformation and optimization",
      path: "cx-transformation",
    },
    data_analytics: {
      isPageAvailable: true,
      title: "Data & Analytics",
      description: "Transform your business with intelligent data solutions",
      path: "data-analytics",
    },
    enterprise_integration: {
      isPageAvailable: false,
      title: "Enterprise Integration",
      description: "Seamless integration solutions for enterprise systems",
      path: "enterprise-integration",
    },
    application_development_management: {
      isPageAvailable: false,
      title: "Application Development and Management",
      description:
        "End-to-end application development and lifecycle management",
      path: "application-development-management",
    },
    enterprise_it_security: {
      isPageAvailable: false,
      title: "Enterprise IT Security",
      description:
        "Comprehensive security solutions for enterprise environments",
      path: "enterprise-it-security",
    },
    cloud_infrastructure: {
      isPageAvailable: false,
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure and deployment solutions",
      path: "cloud-infrastructure",
    },
    open_source_hub: {
      isPageAvailable: false,
      title: "Open Source Hub",
      description: "Open source solutions and community-driven development",
      path: "open-source-hub",
    },
    web_development: {
      isPageAvailable: true,
      title: "Web Development",
      description:
        "Building modern, scalable web applications that drive business growth",
      path: "web-development",
    },
    mobile_app_development: {
      isPageAvailable: true,
      title: "Mobile App Development",
      description:
        "Creating innovative mobile experiences for iOS and Android platforms",
      path: "mobile-app-development",
    },
    cloud_solutions: {
      isPageAvailable: true,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions for modern applications",
      path: "cloud-solutions",
    },
  },
  industries: {
    banking_financial_services: {
      isPageAvailable: true,
      title: "Banking & Financial Services",
      description:
        "Driving innovation in financial technology and digital banking",
      path: "banking-financial-services",
    },
    insurance: {
      isPageAvailable: false,
      title: "Insurance",
      description: "Technology solutions for the insurance industry",
      path: "insurance",
    },
    healthcare: {
      isPageAvailable: true,
      title: "Healthcare",
      description:
        "Transforming healthcare delivery through innovative technology solutions",
      path: "healthcare",
    },
    life_sciences: {
      isPageAvailable: false,
      title: "Life Sciences",
      description:
        "Advanced technology solutions for life sciences and biotech",
      path: "life-sciences",
    },
    consumer_tech: {
      isPageAvailable: false,
      title: "Consumer Tech",
      description: "Innovative technology solutions for consumer markets",
      path: "consumer-tech",
    },
    industrial: {
      isPageAvailable: false,
      title: "Industrial",
      description: "Industry 4.0 solutions and industrial automation",
      path: "industrial",
    },
    software_hi_tech: {
      isPageAvailable: false,
      title: "Software & Hi-Tech",
      description:
        "Cutting-edge solutions for software and high-tech companies",
      path: "software-hi-tech",
    },
    telecom_media: {
      isPageAvailable: false,
      title: "Telecom & Media",
      description:
        "Technology solutions for telecommunications and media industries",
      path: "telecom-media",
    },
  },
};

// Helper function to get service page info
export const getServicePageInfo = (serviceName) => {
  const key = serviceName.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  return (
    PAGES_CONFIG.services[key] || {
      isPageAvailable: false,
      title: serviceName,
      description: "",
      path: serviceName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }
  );
};

// Helper function to get industry page info
export const getIndustryPageInfo = (industryName) => {
  const key = industryName.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  return (
    PAGES_CONFIG.industries[key] || {
      isPageAvailable: false,
      title: industryName,
      description: "",
      path: industryName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }
  );
};

// Helper function to check if a service page is available
export const isServiceAvailable = (serviceName) => {
  const pageInfo = getServicePageInfo(serviceName);
  return pageInfo.isPageAvailable;
};

// Helper function to check if an industry page is available
export const isIndustryAvailable = (industryName) => {
  const pageInfo = getIndustryPageInfo(industryName);
  return pageInfo.isPageAvailable;
};

// Helper function to get service URL path
export const getServicePath = (serviceName) => {
  const pageInfo = getServicePageInfo(serviceName);
  return `/services/${pageInfo.path}`;
};

// Helper function to get industry URL path
export const getIndustryPath = (industryName) => {
  const pageInfo = getIndustryPageInfo(industryName);
  return `/industries/${pageInfo.path}`;
};

// Helper function to get all available services
export const getAvailableServices = () => {
  return Object.values(PAGES_CONFIG.services).filter(
    (service) => service.isPageAvailable
  );
};

// Helper function to get all available industries
export const getAvailableIndustries = () => {
  return Object.values(PAGES_CONFIG.industries).filter(
    (industry) => industry.isPageAvailable
  );
};
