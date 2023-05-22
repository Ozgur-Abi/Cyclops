import os
import numpy as np
import cv2
from PIL import Image
import PIL

global startID
startID = 2
dircnt = 0

for b, d, f in os.walk('training-data'):
    for di in d:
        dircnt += 1
scale_factor = 1.2 if dircnt < 2 else 1.15


def capture_face_frame(video_path):
    # Load the Haar Cascade classifier for face detection
    face_cascade = cv2.CascadeClassifier('opencv-files/lbpcascade_frontalface.xml')

    # Load the video file
    video_capture = cv2.VideoCapture(video_path)

    while True:
        # Read each frame of the video
        ret, frame = video_capture.read()

        # Convert the frame to grayscale for face detection
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect faces in the current frame
        faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        if len(faces) > 0:
            # Return the frame with the detected face
            return frame

        # Exit the loop if no faces are found
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the video capture object
    video_capture.release()

    # Return None if no faces are found
    return None


def detect_face(img):

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    face_cascade = cv2.CascadeClassifier('opencv-files/lbpcascade_frontalface.xml')

    faces = face_cascade.detectMultiScale(gray, scaleFactor=scale_factor, minNeighbors=5);
    
    if (len(faces) == 0):
        return None, None
    
    (x, y, w, h) = faces[0]
    
    return gray[y:y+w, x:x+h], faces[0]


def prepare_training_data(data_folder_path):
    
    dirs = os.listdir(data_folder_path)
    
    faces = []
    labels = []
    
    for dir_name in dirs:
        
        if not dir_name.startswith("s"):
            continue;
            
        label = int(dir_name.replace("s", ""))
        
        subject_dir_path = data_folder_path + "/" + dir_name
        
        subject_images_names = os.listdir(subject_dir_path)
        
        for image_name in subject_images_names:
            
            if image_name.startswith("."):
                continue;
            
            image_path = subject_dir_path + "/" + image_name

            image = cv2.imread(image_path)
            
            #cv2.imshow("Training on image...", cv2.resize(image, (400, 500)))
            #cv2.waitKey(100)
            
            face, rect = detect_face(image)
            
            if face is not None:
                faces.append(face)
                labels.append(label)
            
    cv2.destroyAllWindows()
    cv2.waitKey(1)
    cv2.destroyAllWindows()
    
    return faces, labels



def draw_rectangle(img, rect):
    (x, y, w, h) = rect
    cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)
    
def draw_text(img, text, x, y):
    cv2.putText(img, text, (x, y), cv2.FONT_HERSHEY_PLAIN, 1.5, (0, 255, 0), 2)


def predict(test_img):
    img = test_img.copy()
    face, rect = detect_face(img)

    try:
        label, confidence = face_recognizer.predict(face)

    except:
        print("face not recognized, saving the image")
        path = r'training-data/s' + str(startID)
        os.makedirs(path)
        path = os.path.join(path, "image.jpg")
        print("saving image to:", path)
        cv2.imwrite(path, img)

        return

    label_text = subjects[label]

    draw_rectangle(img, rect)
    draw_text(img, label_text, rect[0], rect[1]-5)

    return img, label_text

print("Preparing data...")
faces, labels = prepare_training_data("training-data")
print("Data prepared")

print("Total faces: ", len(faces))
print("Total labels: ", len(labels))


#create our LBPH face recognizer
face_recognizer = cv2.face.LBPHFaceRecognizer_create()

#or use EigenFaceRecognizer by replacing above line with
#face_recognizer = cv2.face.EigenFaceRecognizer_create()

#or use FisherFaceRecognizer by replacing above line with
#face_recognizer = cv2.face.FisherFaceRecognizer_create()


#train our face recognizer of our training faces
face_recognizer.train(faces, np.array(labels))

subjects = [""]
dirs = os.listdir("training-data")
for dir_name in dirs:

    if not dir_name.startswith("s"):
        continue;

    label = dir_name.replace("s", "")

    subjects.append(label)


print("Predicting images...")

video_path = r"test-data/ihsan_entering_1.mp4"
face_image = capture_face_frame(video_path)

if face_image is not None:
    cv2.imshow("Face Image", face_image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    predicted_img1, id = predict(face_image)
else:
    print("No faces found in the video.")

cv2.waitKey(0)

if predicted_img1 is not None:
    print("Prediction complete, printing results")
    cv2.imshow(subjects[1], predicted_img1)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    cv2.waitKey(1)
    cv2.destroyAllWindows()

try:
    #!!! SEND id to backend
    print("Info sent to database")

except RuntimeError:
    print("Insertion failed.")

print("end")