import requests
from django.template import loader
from django.conf import settings
from django.http import JsonResponse, HttpResponse


# Create your views here.

def main(request):
    template = loader.get_template('weather.html')
    return HttpResponse(template.render())

def get_weather_data(request):
    city = request.GET.get('city')
    api_key = settings.WEATHER_API_KEY.strip()

    if not city:
        return JsonResponse({'error': 'City is required'}, status=400)
    
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"

    try:
        response = requests.get(url)
        data = response.json()
        return JsonResponse(data)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)