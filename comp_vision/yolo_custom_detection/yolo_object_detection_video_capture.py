import cv2
import numpy as np
import pymysql
import datetime

# Load Yolo
net = cv2.dnn.readNet("yolov3_training_last.weights", "yolov3_testing.cfg")

# Name custom object
classes = ["head"]

# video path
video_path = "restaurant footage.mp4"

# Database connection
conn = pymysql.connect(
    host='db-mysql-fra1-20737-do-user-12533753-0.b.db.ondigitalocean.com',
    port=25060,
    user='doadmin',
    password='AVNS_TyP_aTfi4c5egU12ZLl',
    db='cyclops',
    cursorclass=pymysql.cursors.DictCursor
)

layer_names = net.getLayerNames()
output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers()]
colors = np.random.uniform(0, 255, size=(len(classes), 3))

#capture frames
cap = cv2.VideoCapture(video_path)

#capture check
if not cap.isOpened():
    print("Error opening video stream or file")

frame_counter = 0
hourly_people_count = np.array([])
# loop through all the images
while cap.isOpened():

    # Loading image
    ret, img = cap.read()
    img = cv2.resize(img, None, fx=0.4, fy=0.4)
    height, width, channels = img.shape

    # Detecting objects
    blob = cv2.dnn.blobFromImage(img, 0.00392, (416, 416), (0, 0, 0), True, crop=False)

    net.setInput(blob)
    outs = net.forward(output_layers)

    # Showing information on the screen
    class_ids = []
    confidences = []
    boxes = []
    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]
            if confidence > 0.3:
                # Object detected
                #print(class_id)
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)

                # Rectangle coordinates
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)

                boxes.append([x, y, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)

    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
    #print(indexes)

    if frame_counter % 3600 == 0:
        hourly_people_count = np.append(hourly_people_count, np.array([len(indexes)]))

    frame_counter += 1

    if frame_counter == 3600 * 60:
        average_hourly_ppl_count = np.average(hourly_people_count)
        print(average_hourly_ppl_count)
        #SAVE average_hourly_ppl_count TO DATABASE
        try:
            with conn.cursor() as cursor:
                # Create a new record
                day_and_time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                sql = "INSERT INTO customer_count (customer_count, date) VALUES (%s, %s)"
                record = ((int(average_hourly_ppl_count)), day_and_time)
                cursor.execute(sql, record)

                # Commit changes
                conn.commit()

                print("Record inserted successfully")
        except(RuntimeError):
            print("Insertion failed.")

        frame_counter = 0
        hourly_people_count = np.array()

    font = cv2.FONT_HERSHEY_PLAIN
    for i in range(len(boxes)):
        if i in indexes:
            x, y, w, h = boxes[i]
            label = str(classes[class_ids[i]])
            color = colors[class_ids[i]]
            cv2.rectangle(img, (x, y), (x + w, y + h), color, 2)
            #cv2.putText(img, label, (x, y + 30), font, 3, color, 2)


    #cv2.imshow("Image", img)
    #key = cv2.waitKey(0)

cv2.destroyAllWindows()
conn.close()