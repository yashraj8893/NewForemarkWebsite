import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

export const SEO = ({ 
  title = "Foremark Technologies",
  description = "Foremark is a premium software engineering company crafting scalable web applications, beautiful websites, and digital products that help businesses grow faster.",
  type = "website",
  canonicalUrl = "https://foremark.in",
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes("Foremark") ? title : `${title} | Foremark`;
  
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foremark Technologies",
    "url": "https://foremark.in",
    "logo": "https://foremark.in/logo.png",
    "description": "Premium software engineering and design agency.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "Customer Service",
      "email": "hello@foremark.in"
    }
  };

  const finalStructuredData = structuredData || baseStructuredData;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://foremark.in/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://foremark.in/og-image.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};
