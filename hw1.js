s0.initVideo("https://cdn-cf-east.streamable.com/video/mp4/rkmu88.mp4?Expires=1707044729475&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=R4~YtP39LQVQ9PgfyykQhPfDzB9QHcAMuacyJJQjazA0xuk0By1BKB4DykDgyCFhDZlopznbZhJRrW5X9uXyhtQHD5Ee6qF1b-q1V8SKNwTHiCXNZZS4EZ~0GC-42WhQnPD1GEauMekoui9tLrEPqQbFEMfsCcXtKr~A1XocA~83arjHcxZO3fnUMZ8d1kftbBgKbQXf47DbsnC6VovO-4gIF1XDYOX1VdVY9jw-1NnqFSFj21-IU2Jkt6adkqBjw2NaWNzZ6JojbpJVuXzDbqwr5ebMBvQ3K7-wjeJ-jh5wq8390aYBRB8yjZ4K8fOScaOrJ60AsT~Dyh57LNPWSA__")

src(s0).out(o0)
render(o0)

src(s0).modulatePixelate(src(s0).pixelate(8,8),512,8).out(o0)

src(s0).modulatePixelate(src(s0).pixelate(8,8),(Math.sin(time*256)+1)*128).out(o0)

src(s0).modulatePixelate(src(s0).pixelate(Math.sin(time*100)*4,Math.tan(time*100)*4),128).out(o0)

src(s0).out(o0)

osc(10,0.1,1).modulate(noise(2,0),0.5).out(o1)

// src(o2).modulate(src(o1).add(solid(1,1),-0.5),0.01).blend(s0,0.2).out(o2)
src(o2).modulate(src(o1).add(solid(1,1),-0.5),0.05).blend(s0,0.2).out(o2)
render(o2)


shape(4,0).out(o2)
src(o2).modulate(src(o1).add(solid(1,1),-0.5),0.04).blend(s0,Math.sin(time*5)+2.25).out(o2)
render(o2)

hush()
