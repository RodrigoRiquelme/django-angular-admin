from rest_framework import viewsets
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from adm_tickets.ticket.models import Ticket
from adm_tickets.ticket.serializers import TicketSerializer


@permission_classes((IsAuthenticated,))
class TicketsViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
