import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hamzateha.dev';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-11-04T00:00:00Z'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
