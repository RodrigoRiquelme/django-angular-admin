from django.conf.urls import url, include
from rest_framework import routers

from adm_tickets.ticket.views import TicketsViewSet

router = routers.DefaultRouter()
router.register(r'ticket', TicketsViewSet)


urlpatterns = [
    url(r'^', include(router.urls))
]