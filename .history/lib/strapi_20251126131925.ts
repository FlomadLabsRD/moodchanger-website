/**
 * Strapi API Helper Functions
 * 
 * This module provides utility functions for fetching data from the Strapi CMS.
 * It handles API requests, error handling, and data formatting.
 */

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Generic fetch function for Strapi API
 */
async function fetchAPI(
  path: string,
  options: RequestInit = {},
  urlParamsObject: Record<string, string | number | boolean> = {}
) {
  // Merge default and user options
  const mergedOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
    },
    ...options,
  };

  // Build request URL
  const queryString = new URLSearchParams(urlParamsObject).toString();
  const requestUrl = queryString 
    ? `${STRAPI_API_URL}${path}?${queryString}`
    : `${STRAPI_API_URL}${path}`;

  try {
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error(`Strapi API error: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

/**
 * Fetch the home page content
 */
export async function getHomePage() {
  try {
    const data = await fetchAPI('/home-page', {}, {
      populate: '*',
    });
    return data.data;
  } catch (error) {
    console.error('Error fetching home page:', error);
    return null;
  }
}

/**
 * Fetch all use cases (People, Athletes, Pets)
 */
export async function getUseCases() {
  try {
    const data = await fetchAPI('/use-cases', {}, {
      populate: ['features', 'sub_categories'],
      sort: 'name:asc',
    });
    return data.data;
  } catch (error) {
    console.error('Error fetching use cases:', error);
    return [];
  }
}

/**
 * Fetch a single use case by slug
 */
export async function getUseCaseBySlug(slug: string) {
  try {
    const data = await fetchAPI('/use-cases', {}, {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ['features', 'sub_categories'],
    });
    return data.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching use case ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch a single sub-category by slug
 */
export async function getSubCategoryBySlug(slug: string) {
  try {
    const data = await fetchAPI('/sub-categories', {}, {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: '*',
    });
    return data.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching sub-category ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch all features
 */
export async function getFeatures() {
  try {
    const data = await fetchAPI('/features', {}, {
      populate: '*',
      sort: 'order:asc',
    });
    return data.data;
  } catch (error) {
    console.error('Error fetching features:', error);
    return [];
  }
}

/**
 * Fetch features for a specific category
 */
export async function getFeaturesByCategory(categoryId: number) {
  try {
    const data = await fetchAPI('/features', {}, {
      filters: {
        category: {
          id: {
            $eq: categoryId,
          },
        },
      },
      populate: '*',
      sort: 'order:asc',
    });
    return data.data;
  } catch (error) {
    console.error(`Error fetching features for category ${categoryId}:`, error);
    return [];
  }
}

// Type definitions for better TypeScript support
export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface HomePageData {
  hero_title: string;
  hero_subtitle: string;
  canva_embed_url?: string;
  challenge_title: string;
  challenge_subtitle?: string;
  solution_title: string;
  solution_subtitle?: string;
  how_it_works_title: string;
}

export interface FeatureData {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface UseCaseData {
  name: string;
  slug: string;
  title: string;
  description: string;
  hero_title?: string;
  hero_description?: string;
  icon: string;
  features?: StrapiData<FeatureData>[];
  sub_categories?: StrapiData<SubCategoryData>[];
}

export interface SubCategoryData {
  name: string;
  slug: string;
  title: string;
  description?: string;
  icon?: string;
  content?: string;
}
