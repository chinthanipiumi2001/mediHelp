from keras.models import load_model
import cv2
import numpy as np
import os
import tempfile

def check_image(uploaded_file):
    # Disable scientific notation for clarity
    np.set_printoptions(suppress=True)

    # Load the model
    model = load_model("D:\Medi-help\medi_help\medihelp\keras_model.h5", compile=False)

    # Load the labels
    class_names = open("D:\Medi-help\medi_help\medihelp\labels.txt", "r").readlines()

    # Create a temporary file to save the uploaded image
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(uploaded_file.read())
        temp_file_path = temp_file.name

    # Read the image file
    image = cv2.imread(temp_file_path)

    # Resize the image to (224, 224) pixels
    image = cv2.resize(image, (224, 224), interpolation=cv2.INTER_AREA)

    # Make the image a numpy array and reshape it to the model's input shape
    image = np.asarray(image, dtype=np.float32).reshape(1, 224, 224, 3)

    # Normalize the image array
    image = (image / 127.5) - 1

    classes = class_names

    # Predict the model
    prediction = model.predict(image)
    index = np.argmax(prediction)
    class_name = class_names[index]
    confidence_score = prediction[0][index]
    value = str(np.round(confidence_score * 100))[:-2]
    
    cleaned_data = [entry.strip() for entry in classes]
    print(index)
    print(value)
    print(cleaned_data)

    # Print prediction and confidence score
    print("Class:", class_name[2:], end="")
    print("Confidence Score:", str(np.round(confidence_score * 100))[:-2], "%")

    # Clean up temporary file
    os.unlink(temp_file_path)

    return index , value, cleaned_data
