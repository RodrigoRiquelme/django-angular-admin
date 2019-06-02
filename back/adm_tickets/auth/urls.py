from django.conf.urls import url
from adm_tickets.auth.views import Logout

urlpatterns = [
    url(r'^logout/', Logout.as_view()),
]
