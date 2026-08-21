import { BUSINESS_PHONE_RAW, BUSINESS_PHONE_DISPLAY } from './contact';

export const BASE_SITE_URL = 'https://muditfurnitures.in';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: 'Mudit Furnitures',
    alternateName: 'मुदित फर्नीचर्स',
    description: 'Premier furniture showroom in Agra offering quality home furniture, executive office setups, and bespoke customized furniture solutions.',
    url: BASE_SITE_URL,
    telephone: BUSINESS_PHONE_DISPLAY,
    priceRange: '₹₹ - ₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13/A, Gwalior Rd, Naulakha, Agra Cantt, Idgah Colony',
      addressLocality: 'Agra',
      addressRegion: 'Uttar Pradesh',
      postalCode: '282001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.1594,
      longitude: 78.0064,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '93',
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:30',
        closes: '20:30',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Furniture Collections',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Living Room Furniture' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bedroom Furniture & Mattresses' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Furniture & Chairs' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Steel Almirahs & Wardrobes' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customized Furniture Manufacturing' } },
      ],
    },
    potentialAction: {
      '@type': 'CommunicateAction',
      target: `tel:${BUSINESS_PHONE_RAW}`,
      name: 'Call Store',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_SITE_URL}${item.url}`,
    })),
  };
}
