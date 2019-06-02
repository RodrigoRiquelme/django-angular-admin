from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from adm_tickets.ticket.models import Ticket
from adm_tickets.ticket.serializers import TicketSerializer


class TicketsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
