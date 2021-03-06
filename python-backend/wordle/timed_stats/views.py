from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TimedSerializer
from accounts.models import User

class timedView(APIView):
    def post(self, request):
        data = request.data
        user = data['username']

        print(data)

        user_data = {
            'user': user,
            'word': data['word'],
            'time': data['time'],
            'attempts': data['attempts'],
            'success': data['success'],
            'difficulty': data['difficulty']
        }

        serializer = TimedSerializer(data=user_data)
        serializer.is_valid(raise_exception=False)

        serializer.save(user_data)
        return Response(user_data, status=201)

