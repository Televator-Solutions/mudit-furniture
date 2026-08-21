import React, { useEffect } from 'react';
import { BASE_SITE_URL, getLocalBusinessSchema } from '../../lib/seo';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schema?: Record<string, unknown>;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Mudit Furnitures | Premium Furniture Store in Agra',
  description = 'Explore quality home and office furniture at Mudit Furnitures in Agra. Discover sofas, beds, chairs, tables, cabinets, wardrobes and customized furniture.',
  canonicalPath = '',
  schema,
  keywords,
}) => {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title.includes('Mudit Furnitures') ? title : `${title} | Mudit Furnitures Agra`;
    document.title = formattedTitle;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Meta Keywords
    if (keywords) {
      let metaKey = document.querySelector('meta[name="keywords"]');
      if (!metaKey) {
        metaKey = document.createElement('meta');
        metaKey.setAttribute('name', 'keywords');
        document.head.appendChild(metaKey);
      }
      metaKey.setAttribute('content', keywords);
    }

    // 4. Canonical URL
    const canonicalUrl = `${BASE_SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 5. Open Graph Meta Tags
    const ogTags: Record<string, string> = {
      'og:title': formattedTitle,
      'og:description': description,
      'og:url': canonicalUrl,
      'og:type': 'website',
      'og:site_name': 'Mudit Furnitures',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    });

    // 6. JSON-LD Schema
    const scriptId = 'json-ld-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    const finalSchema = schema || getLocalBusinessSchema();
    scriptTag.text = JSON.stringify(finalSchema);

    return () => {
      // Optional cleanup
    };
  }, [title, description, canonicalPath, schema, keywords]);

  return null;
};
