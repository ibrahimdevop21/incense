import { WORDPRESS_API_URL, WP_QUERIES } from '../config/wordpress';

// Simple cache implementation
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function fetchAPI(query, { variables } = {}, useCache = true) {
  const cacheKey = JSON.stringify({ query, variables });
  
  if (useCache && cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
    cache.delete(cacheKey);
  }

  try {
    const headers = { 'Content-Type': 'application/json' };
    
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      throw new Error(json.errors[0].message);
    }

    if (useCache) {
      cache.set(cacheKey, {
        data: json.data,
        timestamp: Date.now()
      });
    }

    return json.data;
  } catch (error) {
    console.error('Error fetching WordPress data:', error);
    throw new Error(`Failed to fetch API: ${error.message}`);
  }
}

export async function getMenuCategories() {
  try {
    const data = await fetchAPI(WP_QUERIES.GET_ALL_CATEGORIES);
    return data?.menuCategories?.nodes || [];
  } catch (error) {
    console.error('Error fetching menu categories:', error);
    return [];
  }
}

export async function getMenuItems(categorySlug = null) {
  try {
    const data = await fetchAPI(WP_QUERIES.GET_MENU_ITEMS);
    let items = data?.menuItems?.nodes || [];
    
    if (categorySlug) {
      items = items.filter(item => 
        item.menuCategories.nodes.some(cat => cat.slug === categorySlug)
      );
    }
    
    return items;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }
}

export function organizeMenuByCategory(menuItems, categories) {
  const menuByCategory = {};
  
  // Initialize categories with empty arrays
  categories.forEach(category => {
    menuByCategory[category.slug] = {
      name: category.name,
      description: category.description,
      items: []
    };
  });

  // Sort items into categories
  menuItems.forEach(item => {
    item.menuCategories.nodes.forEach(category => {
      if (menuByCategory[category.slug]) {
        menuByCategory[category.slug].items.push({
          ...item,
          price: parseFloat(item.menuItemFields?.price || 0),
          isVegetarian: Boolean(item.menuItemFields?.isVegetarian),
          isSpecial: Boolean(item.menuItemFields?.isSpecial),
          spicyLevel: parseInt(item.menuItemFields?.spicyLevel || 0)
        });
      }
    });
  });

  // Sort items by price within each category
  Object.values(menuByCategory).forEach(category => {
    category.items.sort((a, b) => a.price - b.price);
  });

  return menuByCategory;
}
