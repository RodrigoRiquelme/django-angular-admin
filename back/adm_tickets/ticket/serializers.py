
from rest_framework import serializers
from adm_tickets.ticket.models import Ticket


class TicketSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ticket
        fields = ('id', 'title', 'description', 'status', 'created_at')
