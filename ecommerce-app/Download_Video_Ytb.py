from pytube import YouTube
link = input("Enter the url of video")
try:
    video =YouTube(link)
    stream = video.streams.get_highest_resolution()
    stream.dowload()
except:
    print("error in something")    

    