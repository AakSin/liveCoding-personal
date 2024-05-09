{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 ArialMT;\f1\froman\fcharset0 Times-Roman;\f2\fnil\fcharset0 STIXGeneral-Regular;
}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red16\green60\blue192;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c6667\c33333\c80000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs29\fsmilli14667 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Pt 1
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Stewie Griffin appears first in our performance in black and white to trick the viewer into thinking we\'92re going to do a sentimental piece.\'a0
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.thresh(()=>Math.sin(time)*0.1 + 0.75)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.thresh(()=>Math.sin(time)*0.1 + 0.75)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulate(voronoi(2).pixelate(20))
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.thresh(()=>Math.sin(time)*0.1 + 0.75)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.out(o0)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 We then switch it up with some crazy colors and a hidden drake feature.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(10)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.scale(()=>Math.ceil(Math.sin(time*75)+1))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(o0).modulatePixelate(noise(2).pixelate(20)))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(src(s2), ()=>Math.sin(time)*0.25+0.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.out(o0)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Pt 2
\f1\fs24 \
\

\f0\fs29\fsmilli14667 We then transition to the girls want girls double drake scammed by nirvana twice type beat using some text and bouncy visuals.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 createHeadline(s2, "Drake SCAMMED by Nirvana Tourism TWICE")
\f1\fs24 \

\f0\fs29\fsmilli14667 s0.initVideo("https://media.tenor.com/ZL90yPv4JigAAAPo/drake-zesty.mp4")
\f1\fs24 \

\f0\fs29\fsmilli14667 s1.initVideo("https://media.tenor.com/Sx89WcS_zvkAAAPo/dance-drake.mp4")
\f1\fs24 \

\f0\fs29\fsmilli14667 val = 0
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(val < 1)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0val += 0.05
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(src(s1), ()=>val*(Math.sin(time/1.5)*0.5+0.5))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.color(1, 0.5, ()=>Math.sin(time)/2+1.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(src(s1), ()=>Math.sin(time/1.5)*0.5+0.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.color(1, 0.5, ()=>Math.sin(time)/2+1.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulatePixelate(noise(2).pixelate(20), 2000)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.scale(()=>(Math.sin(time*10)*0.1)+1.1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(src(s2).scrollX(()=>time/20))
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 Pt 3
\f1\fs24 \
\

\f0\fs29\fsmilli14667 We transition to the second Drake song in the performance, using a combination of sped up videos to overstimulate the viewers.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 s0.initVideo("https://api-f.streamable.com/api/v1/videos/gol1zn/mp4")
\f1\fs24 \
\

\f0\fs29\fsmilli14667 fade = 1;
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if (fade > 0)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0fade -= 0.005;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.scale(1.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(10)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(-0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(src(s1))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0solid(0,0,0, ()=>fade)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out(o0)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.scale(1.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(10)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(o0).modulatePixelate(noise(100).pixelate(20), 25000))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(-0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(src(s1))
\f1\fs24 \

\f0\fs29\fsmilli14667 .out(o0)
\f1\fs24 \

\f0\fs29\fsmilli14667 s0.src.playbackRate = 2.5
\f1\fs24 \

\f0\fs29\fsmilli14667 To play videos, we use the following class. NOTE: this class doesn\'92t create a hydra source so makes sure to use the deleteInstance() method to delete it.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 FloatingVid = class \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0constructor(canvasW, canvasH, url) \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.p5 = new P5(\{width: window.innerWidth, height:window.innerHeight, mode: 'P2D'\})
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.canvas = this.p5.createCanvas(canvasW, canvasH);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.video = this.p5.createVideo(url);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.video.play();
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.video.loop();
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.video.volume(0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0setDraw(func)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.p5.draw = func
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0restartVideo()\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.video.stop();
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.video.play();
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0hideVideo()\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.video.hide();
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0showVideo()\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.video.show();
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0deleteInstance()\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0this.p5.remove();
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Pt 4
\f1\fs24 \
\

\f0\fs29\fsmilli14667 We interrupt the hyper craziness with some chill news. The saturate(0.25) and modulatePixelate make the video look a little more vintage.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 s0.initImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png")
\f1\fs24 \

\f0\fs29\fsmilli14667 s2.initVideo("{\field{\*\fldinst{HYPERLINK "https://media.tenor.com/hP6ji3Lk89UAAAPo/wendy-rieger-news-anchor.mp4"}}{\fldrslt \cf3 \ul \ulc3 \strokec3 https://media.tenor.com/hP6ji3Lk89UAAAPo/wendy-rieger-news-anchor.mp4}}")
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulate(voronoi(20).pixelate(20))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 // we interrupt
\f1\fs24 \

\f0\fs29\fsmilli14667 s2.src.playbackRate = 1.5
\f1\fs24 \

\f0\fs29\fsmilli14667 fade = 1;
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if (fade > 0)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0fade -= 0.0025;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulate(voronoi(20).pixelate(20))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulatePixelate(noise(100,100).pixelate(200, 200), 5000)
\f1\fs24 \

\f0\fs29\fsmilli14667 , ()=>1-fade)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0// .repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0// .modulate(voronoi(20).pixelate(20))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulatePixelate(noise(100,100).pixelate(200, 200), 5000)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 let scroll = 0
\f1\fs24 \

\f0\fs29\fsmilli14667 s2.src.playbackRate = 0.5
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 .saturate(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 .repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 .modulate(noise(2).thresh(()=>Math.sin(time)*0.25 - 0.25))
\f1\fs24 \

\f0\fs29\fsmilli14667 // .scrollX(()=>scroll)
\f1\fs24 \

\f0\fs29\fsmilli14667 // .modulateScale(shape(99, 0.5, 0.7))
\f1\fs24 \

\f0\fs29\fsmilli14667 .modulatePixelate(noise(100,100).pixelate(200, 200), 5000)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0scroll += 0.001
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Pt 5.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 We keep up the chill vibes with a Cowboy Bebop edit, retaining the vintage feel from the previous song. We make sure to end it on 
\f2 \uc0\u55349 \u56442 \u55349 \u56428 \u55349 \u56428 
\f0  
\f2 \uc0\u55349 \u56448 \u55349 \u56438 \u55349 \u56444 
\f0  
\f2 \uc0\u55349 \u56442 \u55349 \u56439 \u55349 \u56424 \u55349 \u56426 \u55349 \u56428 
\f0  
\f2 \uc0\u55349 \u56426 \u55349 \u56438 \u55349 \u56446 \u55349 \u56425 \u55349 \u56438 \u55349 \u56448 
\f0 , in the same way the anime episodes do.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 s1.initVideo("https://media.tenor.com/zBSZER_aGuQAAAPo/cowboy-bebop-scifi.mp4")
\f1\fs24 \
\

\f0\fs29\fsmilli14667 fade = -1
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(fade < 0)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0fade += 0.0025
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 .saturate(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 .repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 .modulate(noise(2).thresh(()=>Math.sin(time)*0.25 - 0.25))
\f1\fs24 \

\f0\fs29\fsmilli14667 .scrollX(()=>scroll)
\f1\fs24 \

\f0\fs29\fsmilli14667 .modulateScale(shape(99, 0.5, 0.7))
\f1\fs24 \

\f0\fs29\fsmilli14667 .modulatePixelate(noise(100,100).pixelate(200, 200), 5000)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0.modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0.thresh(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0.blend(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0src(s1).modulatePixelate(voronoi(200).pixelate(200, 200), 2500),
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a00.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.brightness(()=>fade)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0,\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 ()=>fade+1)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out(o0)
\f1\fs24 \

\f0\fs29\fsmilli14667 s1.src.playbackRate = 0.75
\f1\fs24 \
\

\f0\fs29\fsmilli14667 shown = 1
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(shown > 0.5)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shown -= 0.0025
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 .luma(0.7)
\f1\fs24 \

\f0\fs29\fsmilli14667 .repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 .mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*2.0052))
\f1\fs24 \

\f0\fs29\fsmilli14667 .scrollY(()=>time/20)
\f1\fs24 \

\f0\fs29\fsmilli14667 .layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.luma(0.7)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*-2.0052))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.scrollY(()=>time/-20)
\f1\fs24 \

\f0\fs29\fsmilli14667 )
\f1\fs24 \

\f0\fs29\fsmilli14667 .modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
\f1\fs24 \

\f0\fs29\fsmilli14667 .layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.thresh(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0src(s1).modulatePixelate(voronoi(200).pixelate(200, 200), 2500),
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a00.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.mask(shape(2,()=>shown,0).rotate(Math.PI/2))
\f1\fs24 \

\f0\fs29\fsmilli14667 )
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.thresh(0.7)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*2.0052))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.scrollY(()=>time/20)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.thresh(0.7)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*-2.0052))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.scrollY(()=>time/-20)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.brightness(-0.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.modulate(voronoi(20).pixelate(20))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.thresh(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.blend(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0.modulate(voronoi(20).pixelate(20))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0.modulatePixelate(voronoi(200).pixelate(200, 200), 2500),
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a00.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.mask(shape(2,0.5,0).rotate(Math.PI/2))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 memeText = document.createElement('canvas')
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx = memeText.getContext('2d')
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.canvas.width\'a0 = window.innerWidth;
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.canvas.height = window.innerHeight;
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.font = '3rem impact'
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.fillStyle = "white";
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.fillText("
\f2 \uc0\u55349 \u56442 \u55349 \u56428 \u55349 \u56428 
\f0  
\f2 \uc0\u55349 \u56448 \u55349 \u56438 \u55349 \u56444 
\f0  
\f2 \uc0\u55349 \u56442 \u55349 \u56439 \u55349 \u56424 \u55349 \u56426 \u55349 \u56428 
\f0  
\f2 \uc0\u55349 \u56426 \u55349 \u56438 \u55349 \u56446 \u55349 \u56425 \u55349 \u56438 \u55349 \u56448 
\f0 ...", window.innerWidth-650, window.innerHeight - 50)\'a0\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 s3.init(\{ src: memeText, dynamic: true \})
\f1\fs24 \

\f0\fs29\fsmilli14667 br = 0
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(br > -0.85)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0br -= 0.01
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.thresh(0.7)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*2.0052))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.scrollY(()=>time/20)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.thresh(0.7)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.repeat(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*-2.0052))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.scrollY(()=>time/-20)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.brightness(-0.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.modulate(voronoi(20).pixelate(20))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.thresh(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.blend(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0\'a0src(s1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0.modulate(voronoi(20).pixelate(20))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a0.modulatePixelate(voronoi(200).pixelate(200, 200), 2500),
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0\'a0\'a00.5)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.mask(shape(2,0.5,0).rotate(Math.PI/2))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(src(s3).brightness(()=>-0.15 + br*-1))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(()=>br)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out(o0)
\f1\fs24 \

\f0\fs29\fsmilli14667 src(o0).out(o1)
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 Pt 5.5.
\f1\fs24 \

\f0\fs29\fsmilli14667 We fake out the audience using Looney Tunes, which reintroduces us to the craziness from previous parts.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 s7.initVideo("https://media.tenor.com/Xog-njZu2GoAAAPo/looney-tunes.mp4")
\f1\fs24 \
\

\f0\fs29\fsmilli14667 s7.src.playbackRate = 0.5
\f1\fs24 \

\f0\fs29\fsmilli14667 t = 1
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(t > 0.6)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0t -= 0.0025
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s7).thresh(()=>t).blend(o1, ()=>t).out()
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 Pt 6.\'a0
\f1\fs24 \
\

\f0\fs29\fsmilli14667 The final crazy part of the performance keeps ramping up with dancing goku, hypnosis, and minecraft. This combination goes on until the viewer can barely tell what\'92s happening, which concludes the craziness of the performance
\f1\fs24 \
\

\f0\fs29\fsmilli14667 show = 0
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(show < 1)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0show += 0.01
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 s0.src.playbackRate = 4
\f1\fs24 \

\f0\fs29\fsmilli14667 s2.src.playbackRate = 4
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s7).thresh(0.6).layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.saturate(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0// .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0.brightness(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 , ()=>show)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 memeText = document.createElement('canvas')
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx = memeText.getContext('2d')
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.canvas.width\'a0 = window.innerWidth;
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.canvas.height = window.innerHeight;
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.font = '3rem impact'
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.fillStyle = "black";
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.fillText("YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3...", 0, window.innerHeight - 50)\'a0\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 memeTextCtx.fillText("YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3...", 0, 75)\'a0\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 s6.init(\{ src: memeText, dynamic: true \})
\f1\fs24 \

\f0\fs29\fsmilli14667 s5.initVideo("https://media.tenor.com/UUjijDDQ6Q0AAAPo/hysterical-laughing-hypnosis.mp4")
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(src(s5), 0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.layer(src(s6).scrollX(()=>time/20))
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 .blend(src(s5), 0.15)
\f1\fs24 \

\f0\fs29\fsmilli14667 .saturate(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 .layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.luma(0.6)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.mask(shape(2,0.4,1).rotate(Math.PI/2))
\f1\fs24 \

\f0\fs29\fsmilli14667 )
\f1\fs24 \

\f0\fs29\fsmilli14667 .pixelate(200,200)
\f1\fs24 \

\f0\fs29\fsmilli14667 .layer(src(s6).scrollX(()=>time/20))
\f1\fs24 \

\f0\fs29\fsmilli14667 .out(o0)
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 // drop here
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 .blend(src(s5), 0.15)
\f1\fs24 \

\f0\fs29\fsmilli14667 .saturate(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 .layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.luma(0.6)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.mask(shape(2,0.4,1).rotate(Math.PI/2))
\f1\fs24 \

\f0\fs29\fsmilli14667 )
\f1\fs24 \

\f0\fs29\fsmilli14667 .pixelate(200,200)
\f1\fs24 \

\f0\fs29\fsmilli14667 .layer(src(s6).scrollX(()=>time/20))
\f1\fs24 \

\f0\fs29\fsmilli14667 .pixelate(100,100)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out(o0)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Pt 7.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 In the previous part, we begin loading in the shaders we\'92ll use. In accordance with the music, we start off the shaders slow and sparse but then increase the density, make it evil, and keep the audience engaged.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 s3.init(\{src: p5.canvas\})
\f1\fs24 \

\f0\fs29\fsmilli14667 fade = 0.25
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(fade < 1)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0fade += 0.005
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s0)
\f1\fs24 \

\f0\fs29\fsmilli14667 .blend(src(s5), 0.15)
\f1\fs24 \

\f0\fs29\fsmilli14667 .saturate(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 .layer(
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0src(s2)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.saturate(3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(0.25)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.luma(0.6)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.mask(shape(2,0.4,1).rotate(Math.PI/2))
\f1\fs24 \

\f0\fs29\fsmilli14667 )
\f1\fs24 \

\f0\fs29\fsmilli14667 .pixelate(200,200)
\f1\fs24 \

\f0\fs29\fsmilli14667 .layer(src(s6).scrollX(()=>time/20))
\f1\fs24 \

\f0\fs29\fsmilli14667 .pixelate(100,100)
\f1\fs24 \

\f0\fs29\fsmilli14667 .blend(src(s3), ()=>fade)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 // 2) jb vocal + hihats + ambient piano\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 curr_density = 1
\f1\fs24 \

\f0\fs29\fsmilli14667 p5.draw = ()=>\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0curr_density -= 0.01
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("time", time);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("resolution", [width, height]);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0// from 1 to 0.25
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("tubeDensity", Math.max(curr_density, 0.25)); // <-- on vocal
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("parallaxFlip", 2);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("tubeShaping", 0.2);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("colorG", 0.15);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("mistDensity",10);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0p5.shader(shader);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0p5.rect(0, 0, width, height);
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \
\

\f0\fs29\fsmilli14667 // run drums (evil mode)
\f1\fs24 \

\f0\fs29\fsmilli14667 density = 10
\f1\fs24 \

\f0\fs29\fsmilli14667 p5.draw = ()=>\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0density-=0.5
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0curr_density -= 0.01
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("time", time);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("resolution", [width, height]);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0// from 1 to 0.25
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("tubeDensity", 0.25); // <-- on vocal
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("parallaxFlip", 2);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("tubeShaping", 0.2);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("colorG", 0.15);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0shader.setUniform("mistDensity",Math.max(density, 5));
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0p5.shader(shader);
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0p5.rect(0, 0, width, height);
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 fade = 0
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(fade < 1)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0fade += 0.01
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(s3).modulate(noise(2)))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(0.1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(src(s3), ()=>1-fade)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out()
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Pt 8.\'a0
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Finally, we begin putting Playboi Carti into the tunnels and begin removing the tunnel to end our performance on a cute note.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 s2.initVideo("https://media.tenor.com/vnisLXL1C30AAAPo/playboi-carti-smile.mp4")
\f1\fs24 \

\f0\fs29\fsmilli14667 // 8. carti -> remove tunnel
\f1\fs24 \

\f0\fs29\fsmilli14667 fade = 0
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if(fade < 1)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0fade += 0.001
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(s3).modulate(noise(2)))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(0.1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(src(s2).scrollX(()=>time/20).saturate(2.5).layer(src(s3).luma(0.5))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0, ()=>fade)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out(o0)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 fade=1
\f1\fs24 \

\f0\fs29\fsmilli14667 lum = 0.5
\f1\fs24 \

\f0\fs29\fsmilli14667 update = () => \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0if (lum < 0.8)\{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0\'a0lum += 0.005
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\}
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \

\f0\fs29\fsmilli14667 src(s3)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.diff(src(s3).modulate(noise(2)))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.brightness(0.1)
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0.blend(src(s2).scrollX(()=>time/20).saturate(2.5).layer(src(s3).luma(()=>lum))
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0, ()=>fade)
\f1\fs24 \

\f0\fs29\fsmilli14667 .out(o0)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Pt 9.\'a0
\f1\fs24 \
\

\f0\fs29\fsmilli14667 We cut the video and AI Drake comments about his favorite D3 food.
\f1\fs24 \
}