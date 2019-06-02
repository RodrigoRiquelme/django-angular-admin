from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers

from adm_tickets.ticket.views import TicketsViewSet

router = routers.DefaultRouter()
router.register(r'tickets', TicketsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^admin/', admin.site.urls),
]

urlpatterns += [
    url(r'^api/', include('adm_tickets.ticket.urls'))
]
