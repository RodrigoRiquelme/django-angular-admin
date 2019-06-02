from django.contrib import admin

from adm_tickets.ticket.models import Ticket


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'status', 'created_at')
