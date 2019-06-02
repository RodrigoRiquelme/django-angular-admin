from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from adm_tickets.ticket.views import TicketsViewSet

router = routers.DefaultRouter()
router.register(r'tickets', TicketsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^auth/login/', obtain_auth_token)
]

urlpatterns += [
    url(r'^api/', include('adm_tickets.ticket.urls')),
    url(r'^auth/', include('adm_tickets.auth.urls'))
]
