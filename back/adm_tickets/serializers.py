
from rest_framework import serializers
from adm_tickets.models import Ticket


class TicketSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ticket
        fields = ('title', 'description', 'status', 'created_at')
