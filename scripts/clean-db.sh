#!/bin/bash

# Stop and remove the Docker containers
docker-compose down

# Check if the volume exists and then remove it
VOLUME_NAME="postgres_data"
if docker volume ls -q | grep -w "$VOLUME_NAME" > /dev/null; then
  docker volume rm "$VOLUME_NAME"
  echo "Volume '$VOLUME_NAME' deleted successfully."
else
  echo "Volume '$VOLUME_NAME' does not exist."
fi

echo "Database and data have been deleted successfully."