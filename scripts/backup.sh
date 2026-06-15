#!/bin/bash
# backup.sh - Script to backup the local MySQL database

echo "Backing up database..."

DB_NAME="irrigaflow"
DB_USER="root"
DB_PASS="password"
BACKUP_DIR="./backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME > $BACKUP_DIR/${DB_NAME}_backup_${DATE}.sql

echo "Backup completed successfully!"
