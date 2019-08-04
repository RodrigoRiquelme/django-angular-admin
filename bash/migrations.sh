#!/usr/bin/env bash
cd ../back
python manage.py makemigrations
python manage.py migrate --run-syncdb
cd -