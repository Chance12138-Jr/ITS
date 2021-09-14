import sensor, image, time

from pid import PID


red_threshold  = (13, 49, 18, 61, 6, 47)

pan_pid = PID(p=0.07, i=0, imax=90) #离线识别或者禁用图像传输
tilt_pid = PID(p=0.05, i=0, imax=90)


sensor.reset()
sensor.set_pixformat(sensor.RGB565) #颜色设置
sensor.set_framesize(sensor.QQVGA)
sensor.skip_frames(10)
sensor.set_auto_whitebal(False)
clock = time.clock() #FPS

def find_max(blobs):
    max_size=0
    for blob in blobs:
        if blob[2]*blob[3] > max_size:
            max_blob=blob
            max_size = blob[2]*blob[3]
    return max_blob


while(True):
    clock.tick()
    img = sensor.snapshot() # 获取图片

    blobs = img.find_blobs([red_threshold])
    if blobs:
        max_blob = find_max(blobs)
        pan_error = max_blob.cx()-img.width()/2
        tilt_error = max_blob.cy()-img.height()/2

        print("pan_error: ", pan_error)

        img.draw_rectangle(max_blob.rect()) # 正方形框
        img.draw_cross(max_blob.cx(), max_blob.cy()) # xy轴坐标

        pan_output=pan_pid.get_pid(pan_error,1)/2
        tilt_output=tilt_pid.get_pid(tilt_error,1)
        print("pan_output",pan_output)
