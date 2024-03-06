s0.initVideo("https://cdn-cf-east.streamable.com/video/mp4/k58pxa.mp4?Expires=1708856653372&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=epUyDhdWRKnaMEqeUc6qgbHI-jpaBrHxqJSgc5KfxFqZ2qS2k~y87Uw1W6Bs7CP67h6jhezGlgNi4GDNBda72vqiuoC91rPG1loRTRNiGdw~4vXxajDw8vgD9KMgCXMeJhA8MDkt0UaAfo6rcfc9D6mRmy~SLOTXcnbIMgE436lPHIyGtcDNYnocX5Q-HflaAdD-oMuYf846Q5WvhHB14O0N0Z9-51wmbk-RzTzeUnfeL3ol4yHEWRcGW54JgkFKvZ7YBixDwduQhkF9svHgj1sPUgVlBtqJbrUL6XqoH78sFSURguBcK9dPJMX0bU7fWjrXONTIUh0kllxnL4yyKg__")
src(s0).out(o0)
render(o0)

solid().out(o3)
render(o0)
//three values, two used for noise and added together, and the third for luma

src(o0).modulateScale(osc(8,0.1)).out(o1)
render(o1)

src(o1).modulateScale(src(o0).luma(()=>(cc[0]))).hue(()=>(cc[1])).out(o2)
render(o2)

src(o3).modulateHue(o2,()=>(cc[2])*16).blend(o0,0.05).out(o3)
render(o3)

src(o3).modulate(o0).blend(o0,1).repeat(()=>(cc[1])*10,()=>(cc[1])*10).out(o3)

shape(4,0.5).out(o3)
osc(10,0,1).modulate(noise(2,0),0.5).hue(-0.1).out(o3)
src(o3).modulateHue(o2,8).blend(o0,0.05).out(o3)
src(o2).luma(0.3,0.3).mult(o2).out(o3)
render()

shape(4,0.5).out(o0)
osc(10,0,1).modulate(noise(2,0.002),0.5).hue(-0.1).out(o1)
src(o2).modulateHue(o1,8).blend(o0,0.01).out(o2)
src(o2).luma(0.5).mult(o1).out(o3)
render()
