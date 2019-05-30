from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from rest_framework import routers

from adm_tickets.views import *

router = routers.DefaultRouter()
router.register(r'tickets', TicketsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^admin/', admin.site.urls),
    #url(r'^.*', TemplateView.as_view(template_name="home.html"), name="home")
]