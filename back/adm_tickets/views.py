from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse

from adm_tickets.models import Ticket
from adm_tickets.serializers import TicketSerializer

from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def get_data(request):
    data = Ticket.objects.all()
    if request.method == 'GET':
        serializer = TicketSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)
