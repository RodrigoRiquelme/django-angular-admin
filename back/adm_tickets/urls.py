from django.conf.urls import url
from django.contrib import admin
from django.views.generic.base import TemplateView
from adm_tickets.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^getData/', get_data),
    url(r'^.*', TemplateView.as_view(template_name="home.html"), name="home")
]