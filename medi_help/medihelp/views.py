from django.shortcuts import render
from django.http import JsonResponse # use for get json resposes.
from .models import CustomUser #import model
from django.contrib.auth import authenticate, login
import secrets
from django.utils import timezone
from django.shortcuts import redirect
from .forms import *
from .aimodel import *
import requests



def generate_session_key(length=32):
    """
    Generate a random session key of specified length.
    """
    return secrets.token_hex(length)

# Create your views here.
# index page view
def index(request):
    return render(request, 'index.html')

#login view
def logins(request):
    return render(request, 'login.html')

def signup(request): # signup page view
    return render(request, 'signup.html')


def login_form_validate(request):
    print(request)
    print(request.user)
    print(request.user.is_authenticated)
    if request.method == 'POST':
        username = request.POST.get('mail')
        password = request.POST.get('password')

        print(username, password)
        
        # Authenticate user against the database
        user = authenticate(request, email=username, password=password)
        
        if user is not None:
            # Credentials are valid
            login(request, user)  # Authenticate the user
            
            # Create a new session or update existing session
            session_key = request.session.session_key
            if not session_key:
                request.session.create()
                session_key = generate_session_key()

            # Set expiration date for the session
            request.session.set_expiry(timezone.timedelta(hours=1))
            #return JsonResponse({'success': True, 'is_authenticated': True, 'session_key': session_key})
            return redirect('/dashboard/?session_key={}'.format(session_key))
        else:
            # Credentials are not valid
            return JsonResponse({'success': False, 'message': 'Invalid username or password'}, status=400)
        
def validate_signup(request):
    if request.method == 'POST':
        # Extract form data
        first_name = request.POST.get('f_name')
        last_name = request.POST.get('l_name')
        email = request.POST.get('mail')
        profession = request.POST.get('profession')
        country = request.POST.get('country')
        mobile_number = request.POST.get('number')
        password = request.POST.get('password')
        password1 = request.POST.get('password1')

        # Perform validation (Example: Check if passwords match)
        if password != password1:
            return JsonResponse({'success': False, 'message': 'Passwords do not match'}, status=400)
        else:
            # Create new user instance
            user = CustomUser.objects.create_user(
                email=email,
                first_name=first_name,
                last_name=last_name,
                country=country,
                profession = profession,
                number = mobile_number,
                password=password
            )
            # Optionally, you can perform additional actions here, such as sending a welcome email
            # or logging the user in automatically.

            # Return success response
            return JsonResponse({'success': True})
        
def view_users(request):
    # Fetch all registered users from the database
    users = CustomUser.objects.all()

    # Render a template with the list of users
    return render(request, 'users.html', {'users': users})

def dashboard(request):
    session_key = request.GET.get('session_key')
    return render(request, 'dashboard/index.html',{'session_key': session_key})

def check(request):
    session_key = request.GET.get('session_key')
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            # Handle file upload
            uploaded_file = request.FILES['file']
            validate_image(uploaded_file)
            data = []

            index , value, cleaned_data = check_image(uploaded_file)
            for i in range(len(cleaned_data)):
                if i == index:
                    data.append(value)
                else :
                    data.append(0)

            return render(request, 'dashboard/prediction.html',{'session_key': session_key, 'data':data, 'labels':cleaned_data,'index':index})
        else:
            print('form not valied')
            return render(request, 'dashboard/index.html',{'session_key': session_key})
    else:
        print("method not post")
        return render(request, 'dashboard/index.html',{'session_key': session_key})

def predict(request):
    session_key = request.GET.get('session_key')
    return render(request,'dashboard/prediction.html',{'session_key': session_key})



def map_view(request):

    # Sample doctor data with hospital locations in Sri Lanka
    doctors_data = [
        {'name': 'Dr. John Doe', 'specialization': 'Cardiologist', 'hospital': 'National Hospital of Sri Lanka', 'latitude': 6.9271, 'longitude': 79.8612},  # Colombo
        {'name': 'Dr. Jane Smith', 'specialization': 'Dermatologist', 'hospital': 'Teaching Hospital Karapitiya', 'latitude': 7.8731, 'longitude': 80.7718},  # Kandy
        {'name': 'Dr. David Brown', 'specialization': 'Pediatrician', 'hospital': 'Nawaloka Hospital', 'latitude': 6.0535, 'longitude': 80.2209},  # Galle
        {'name': 'Dr. Emily Johnson', 'specialization': 'Orthopedic Surgeon', 'hospital': 'Asiri Surgical Hospital', 'latitude': 6.9344, 'longitude': 79.8533},  # Negombo
        {'name': 'Dr. Michael Williams', 'specialization': 'Ophthalmologist', 'hospital': 'Colombo South Teaching Hospital', 'latitude': 7.2429, 'longitude': 80.5937},  # Kurunegala
        {'name': 'Dr. Sarah Garcia', 'specialization': 'Neurologist', 'hospital': 'Kandy General Hospital', 'latitude': 6.0359, 'longitude': 80.2170},  # Matara
        {'name': 'Dr. Kevin Martinez', 'specialization': 'Gynecologist', 'hospital': 'Asiri Central Hospital', 'latitude': 7.2906, 'longitude': 80.6337},  # Anuradhapura
        {'name': 'Dr. Laura Taylor', 'specialization': 'Psychiatrist', 'hospital': 'Durdans Hospital', 'latitude': 7.2955, 'longitude': 80.6350},  # Polonnaruwa
        {'name': 'Dr. Daniel Clark', 'specialization': 'Endocrinologist', 'hospital': 'Asiri Hospital Matara', 'latitude': 6.8957, 'longitude': 79.8567},  # Mount Lavinia
        {'name': 'Dr. Amanda Lee', 'specialization': 'Dentist', 'hospital': 'Hemas Hospital Wattala', 'latitude': 6.7969, 'longitude': 79.9013},  # Dehiwala-Mount Lavinia
    ]
    return render(request, 'dashboard/map.html', {'doctors_data': doctors_data})

def contact(request):
    session_key = request.GET.get('session_key')
    return render(request, 'dashboard/contactus.html',{'session_key': session_key})

def about(request):
    session_key = request.GET.get('session_key')
    return render(request, 'dashboard/aboutus.html',{'session_key': session_key})