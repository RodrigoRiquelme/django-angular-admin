from rest_framework import viewsets

from adm_tickets.ticket.models import Ticket
from adm_tickets.ticket.serializers import TicketSerializer


class TicketsViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
