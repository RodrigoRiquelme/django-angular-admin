from django.db import models
from django.contrib.auth.models import AbstractUser
from aenum import Enum


class TicketStates(Enum):
    OPEN = "Abierto"
    PENDING = "Pendiente"
    IN_PROCESS = "En Proceso"
    CLOSED = "Resuelto y cerrado"


class User(AbstractUser):
    pass


class Ticket(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    state = models.CharField(max_length=10, choices=TicketStates)
    created_at = models.DateTimeField(auto_now=True)
