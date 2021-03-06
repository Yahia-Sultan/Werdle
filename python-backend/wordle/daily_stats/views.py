from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import DailySerializer
from accounts.models import User
from django.db import connection

class dailyView(APIView):
    def post(self, request):
        print('INSIDE VIEW')

        data = request.data

        user = data['username']

        user_data = {
            'user': user,
            'word': data['word'],
            'attempts': data['attempts'],
            'success': data['success'],
            'difficulty': data['difficulty']
        }

        print(user_data)

        serializer = DailySerializer(data=user_data)
        serializer.is_valid(raise_exception=False)
        serializer.save(user_data)
        return Response(user_data, status=201)