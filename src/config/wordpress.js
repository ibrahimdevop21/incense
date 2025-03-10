export const WORDPRESS_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL || 'http://localhost:8000/graphql';

export const WP_QUERIES = {
  GET_ALL_CATEGORIES: `
    query GetMenuCategories {
      menuCategories {
        nodes {
          id
          name
          slug
        }
      }
    }
  `,
  GET_MENU_ITEMS: `
    query GetMenuItems {
      menuItems {
        nodes {
          id
          menuItemFields {
            nameEn
            price
            ingredients
            image {
              sourceUrl
              altText
            }
          }
          menuCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `,
  GET_MENU_ITEMS_BY_CATEGORY: `
    query GetMenuItemsByCategory($categorySlug: String!) {
      menuItems(where: {taxQuery: {taxArray: [{taxonomy: MENUCATEGORY, operator: IN, terms: [$categorySlug], field: SLUG}]}}) {
        nodes {
          id
          menuItemFields {
            nameEn
            price
            ingredients
            image {
              sourceUrl
              altText
            }
          }
          menuCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `
};
