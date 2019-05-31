#!/usr/bin/env bash
cd ../adm-tickets
npm start &
cd ../back
python manage.py runserver
