#!/usr/bin/env bash
cd ..
python makemigrations
python manage.py migrate --run-syncdb