from django.db import models
from django.contrib.auth.models import AbstractUser
from aenum import Enum


class TicketStatus(Enum):
    OPEN = "Abierto"
    PENDING = "Pendiente"
    IN_PROCESS = "En Proceso"
    CLOSED = "Resuelto y cerrado"



class Ticket(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    status = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now=True)
