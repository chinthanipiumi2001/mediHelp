# forms.py
from django import forms
from django.core.exceptions import ValidationError
import os

def validate_image(value):
    valid_extensions = ['.jpg', '.jpeg', '.png', '.gif']  # Add more extensions if needed
    ext = os.path.splitext(value.name)[1]  # Get the file extension
    if ext.lower() not in valid_extensions:
        raise ValidationError('Only image files are allowed.')

class FileUploadForm(forms.Form):
    file = forms.FileField()