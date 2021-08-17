# wacom
``` sh
 $ xsetwacom --set "Wacom Bamboo 16FG 4x5 Finger touch" ScrollDistance 50  # change scrolling speed
 $ xsetwacom --set "Wacom Bamboo 16FG 4x5 Finger touch" Gesture off        # disable multitouch gestures
 $ xsetwacom --set "Wacom Bamboo 16FG 4x5 Finger touch" Touch off          # disable touch
```  

 我的设备

Wacom Intuos5 touch M Pad pad   	id: 19	type: PAD      ( 左边键盘区) 
Wacom Intuos5 touch M Pen stylus	id: 20	type: STYLUS  (笔尖)  
Wacom Intuos5 touch M Pen eraser	id: 21	type: ERASER   (橡皮差) 
Wacom Intuos5 touch M Pen cursor	id: 22	type: CURSOR   (光标) 
Wacom Intuos5 touch M Finger touch	id: 23	type: TOUCH   (手指触控区) 


1. xsetwacom --set "Wacom Intuos5 touch M Finger touch" Touch off          # disable touch  (关闭手指触控)
2. xsetwacom --set "Wacom Intuos5 touch M Pad pad" Button 1 'key a'   #映射按键,映射到中间的圆点
xsetwacom --set "Wacom Intuos5 touch M Pad pad" Button 2 'key b'   #映射按键,映射不到

3. xsetwacom --set 20 MapToOutput "DP-0"  # 映射到单独的一个显示器
xinput map-to-output 20 DP-0   # 这个有用,可能有引号什么原因

## turn Wacom Touch off.
xsetwacom --set "Wacom Intuos5 touch M Finger touch" TOUCH off

## Turn Wacom Ring off.
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'AbsWheelUp' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'AbsWheelDown' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'AbsWheel2Up' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'AbsWheel2Down' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'RelWheelUp' 'button 0'
xsetwacom --set 'Wacom Intuos5 touch M Pen pad' 'RelWheelDown' 'button 0'

## Turn Wacom ExpressKeys off.
Note: Buttons 4 -7 are not adjustable.
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 1 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 2 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 3 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 8 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 9 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 10 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 11 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 12 "button 0"
xsetwacom -s --set "Wacom Intuos5 touch M Pen pad" Button 13 "button 0"

# 声音处理

显示设备 
cat /proc/asound/cards

kill 进程
pulseaudio -k 

重启 
pulseaudio -D
# audio recording
Run sudo alsamixer and turn off mic to reduce the noise
Run alsamixer to double check pulse setup
Make sure correct device is selected in audacity
Restart audacity and test

运行sudo alsamixer并关闭麦克风以减少噪音。
运行alsamixer来仔细检查脉冲设置
确保在 audacity 中选择了正确的设备
重新启动audacity并测试
