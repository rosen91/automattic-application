#!/bin/bash

chown -R www-data:www-data /var/www/html/wp-content/uploads
docker-entrypoint.sh apache2-foreground