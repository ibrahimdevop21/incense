#!/bin/bash

# Download and install WP-CLI
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp

# Install and activate WPGraphQL
wp plugin install wp-graphql --activate --allow-root

# Install and activate ACF (Advanced Custom Fields)
wp plugin install advanced-custom-fields --activate --allow-root

# Activate our custom plugin
wp plugin activate restaurant-menu-manager --allow-root
