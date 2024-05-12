from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # index page path
    path('login/', views.logins, name='login'), # login page path
    path('signup/',views.signup, name = 'signup'), #login page path(landing page)
    path('validate-login/', views.login_form_validate, name = 'validate_login'), # login form validate
    path('validate-signup/', views.validate_signup, name='validate_signup'),
    path('view-users/', views.view_users, name='view_users'),
    path('dashboard/', views.dashboard, name='dashboard'), # dashboard url 
    path('check/',views.check, name='check'), #image check
    path('predict/', views.predict, name='predict'), #prediction
    path('map/', views.map_view, name='map'),
    path('contact/',views.contact, name = 'contact'),#contact us page url
    path('about/',views.about, name = 'about'),#contact us page url
]