from django.db import models

TICKET_STATUS = (
    ('OPEN', 'Abierto'),
    ('PENDING', 'Pendiete'),
    ('IN_PROCESS', 'En Proceso'),
    ('CLOSED', 'Resuelto y cerrado')
)


class Ticket(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=TICKET_STATUS)
    created_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Ticket"
        verbose_name_plural = "Tickets"

    def __unicode__(self):
        return self.title
