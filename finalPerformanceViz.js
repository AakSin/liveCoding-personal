Pt 1

Stewie Griffin appears first in our performance in black and white to trick the viewer into thinking we’re going to do a sentimental piece. 


src(s1)
  .thresh(()=>Math.sin(time)*0.1 + 0.75)
.out()

src(s1)
  .thresh(()=>Math.sin(time)*0.1 + 0.75)
  .modulate(voronoi(2).pixelate(20))
.out()

src(s1)
  .thresh(()=>Math.sin(time)*0.1 + 0.75)
  .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
  .out(o0)

We then switch it up with some crazy colors and a hidden drake feature.

src(s1)
  .saturate(10)
  .scale(()=>Math.ceil(Math.sin(time*75)+1))
  .diff(src(o0).modulatePixelate(noise(2).pixelate(20)))
  .blend(src(s2), ()=>Math.sin(time)*0.25+0.5)
  .out(o0)

Pt 2

We then transition to the girls want girls double drake scammed by nirvana twice type beat using some text and bouncy visuals.

createHeadline(s2, "Drake SCAMMED by Nirvana Tourism TWICE")
s0.initVideo("https://media.tenor.com/ZL90yPv4JigAAAPo/drake-zesty.mp4")
s1.initVideo("https://media.tenor.com/Sx89WcS_zvkAAAPo/dance-drake.mp4")
val = 0
update = () => {
  if(val < 1){
    val += 0.05
  }
}
src(s0)
  .blend(src(s1), ()=>val*(Math.sin(time/1.5)*0.5+0.5))
  .color(1, 0.5, ()=>Math.sin(time)/2+1.5)
.out()

src(s0)
  .blend(src(s1), ()=>Math.sin(time/1.5)*0.5+0.5)
  .color(1, 0.5, ()=>Math.sin(time)/2+1.5)
  .modulatePixelate(noise(2).pixelate(20), 2000)
  .scale(()=>(Math.sin(time*10)*0.1)+1.1)
  .layer(src(s2).scrollX(()=>time/20))
.out()


Pt 3

We transition to the second Drake song in the performance, using a combination of sped up videos to overstimulate the viewers.

s0.initVideo("https://api-f.streamable.com/api/v1/videos/gol1zn/mp4")

fade = 1;
update = () => {
  if (fade > 0){
    fade -= 0.005;
  }
}
src(s0)
  .scale(1.25)
  .saturate(10)
  .brightness(-0.25)
  .layer(src(s1))
  .layer(
    solid(0,0,0, ()=>fade)
  )
.out(o0)

src(s0)
  .scale(1.25)
  .saturate(10)
  .diff(src(o0).modulatePixelate(noise(100).pixelate(20), 25000))
  .brightness(-0.25)
  .layer(src(s1))
.out(o0)
s0.src.playbackRate = 2.5
To play videos, we use the following class. NOTE: this class doesn’t create a hydra source so makes sure to use the deleteInstance() method to delete it.

FloatingVid = class {
  constructor(canvasW, canvasH, url) {
    this.p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'P2D'})
    this.canvas = this.p5.createCanvas(canvasW, canvasH);
    this.video = this.p5.createVideo(url);
    this.video.play();
    this.video.loop();
    this.video.volume(0)
  }
  setDraw(func){
    this.p5.draw = func
  }
  restartVideo(){
    this.video.stop();
    this.video.play();
  }
  hideVideo(){
    this.video.hide();
  }
  showVideo(){
    this.video.show();
  }
  deleteInstance(){
    this.p5.remove();
  }
}

Pt 4

We interrupt the hyper craziness with some chill news. The saturate(0.25) and modulatePixelate make the video look a little more vintage.

s0.initImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png")
s2.initVideo("https://media.tenor.com/hP6ji3Lk89UAAAPo/wendy-rieger-news-anchor.mp4")
src(s0)
  .modulate(voronoi(20).pixelate(20))
  .out()

// we interrupt
s2.src.playbackRate = 1.5
fade = 1;
update = () => {
  if (fade > 0){
    fade -= 0.0025;
  }
}
src(s0)
  .modulate(voronoi(20).pixelate(20))
  .blend(src(s2)
  .saturate(0.25)
  .modulatePixelate(noise(100,100).pixelate(200, 200), 5000)
, ()=>1-fade)
.out()

src(s2)
  .saturate(0.25)
  // .repeat(3)
  // .modulate(voronoi(20).pixelate(20))
  .modulatePixelate(noise(100,100).pixelate(200, 200), 5000)
.out()

let scroll = 0
s2.src.playbackRate = 0.5
src(s2)
.saturate(0.25)
.repeat(3)
.modulate(noise(2).thresh(()=>Math.sin(time)*0.25 - 0.25))
// .scrollX(()=>scroll)
// .modulateScale(shape(99, 0.5, 0.7))
.modulatePixelate(noise(100,100).pixelate(200, 200), 5000)
.out()
update = () => {
  scroll += 0.001
}

Pt 5.

We keep up the chill vibes with a Cowboy Bebop edit, retaining the vintage feel from the previous song. We make sure to end it on 𝑺𝑬𝑬 𝒀𝑶𝑼 𝑺𝑷𝑨𝑪𝑬 𝑪𝑶𝑾𝑩𝑶𝒀, in the same way the anime episodes do.

s1.initVideo("https://media.tenor.com/zBSZER_aGuQAAAPo/cowboy-bebop-scifi.mp4")

fade = -1
update = () => {
  if(fade < 0){
    fade += 0.0025
  }
}
src(s2)
.saturate(0.25)
.repeat(3)
.modulate(noise(2).thresh(()=>Math.sin(time)*0.25 - 0.25))
.scrollX(()=>scroll)
.modulateScale(shape(99, 0.5, 0.7))
.modulatePixelate(noise(100,100).pixelate(200, 200), 5000)
  .blend(
      src(s1)
      .modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
      .thresh(0.25)
      .blend(
         src(s1).modulatePixelate(voronoi(200).pixelate(200, 200), 2500),
        0.5)
    .brightness(()=>fade)
    , 
()=>fade+1)
.out(o0)
s1.src.playbackRate = 0.75

shown = 1
update = () => {
  if(shown > 0.5){
    shown -= 0.0025
  }
}
src(s1)
.luma(0.7)
.repeat(3)
.mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*2.0052))
.scrollY(()=>time/20)
.layer(
  src(s1)
  .luma(0.7)
  .repeat(3)
  .mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*-2.0052))
  .scrollY(()=>time/-20)
)
.modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
.layer(
  src(s1)
  .modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
  .thresh(0.25)
  .blend(
     src(s1).modulatePixelate(voronoi(200).pixelate(200, 200), 2500),
    0.5)
  .mask(shape(2,()=>shown,0).rotate(Math.PI/2))
)
.out()

src(s1)
  .thresh(0.7)
  .repeat(3)
  .mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*2.0052))
  .scrollY(()=>time/20)
  .layer(
    src(s1)
    .thresh(0.7)
    .repeat(3)
    .mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*-2.0052))
    .scrollY(()=>time/-20)
  )
  .modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
  .layer(
    src(s1)
    .brightness(-0.5)
    .modulate(voronoi(20).pixelate(20))
    .modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
    .thresh(0.25)
    .blend(
       src(s1)
      .modulate(voronoi(20).pixelate(20))
      .modulatePixelate(voronoi(200).pixelate(200, 200), 2500),
      0.5)
    .mask(shape(2,0.5,0).rotate(Math.PI/2))
  )
.out()


memeText = document.createElement('canvas')
memeTextCtx = memeText.getContext('2d')
memeTextCtx.canvas.width  = window.innerWidth;
memeTextCtx.canvas.height = window.innerHeight;
memeTextCtx.font = '3rem impact'
memeTextCtx.fillStyle = "white";
memeTextCtx.fillText("𝑺𝑬𝑬 𝒀𝑶𝑼 𝑺𝑷𝑨𝑪𝑬 𝑪𝑶𝑾𝑩𝑶𝒀...", window.innerWidth-650, window.innerHeight - 50)   
s3.init({ src: memeText, dynamic: true })
br = 0
update = () => {
  if(br > -0.85){
    br -= 0.01
  }
}
src(s1)
  .thresh(0.7)
  .repeat(3)
  .mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*2.0052))
  .scrollY(()=>time/20)
  .layer(
    src(s1)
    .thresh(0.7)
    .repeat(3)
    .mask(shape(2,0.4,0).rotate(Math.PI/2).scrollX(Math.PI*-2.0052))
    .scrollY(()=>time/-20)
  )
  .modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
  .layer(
    src(s1)
    .brightness(-0.5)
    .modulate(voronoi(20).pixelate(20))
    .modulatePixelate(voronoi(200).pixelate(200, 200), 2500)
    .thresh(0.25)
    .blend(
       src(s1)
      .modulate(voronoi(20).pixelate(20))
      .modulatePixelate(voronoi(200).pixelate(200, 200), 2500),
      0.5)
    .mask(shape(2,0.5,0).rotate(Math.PI/2))
  )
  .layer(src(s3).brightness(()=>-0.15 + br*-1))
  .brightness(()=>br)
.out(o0)
src(o0).out(o1)


Pt 5.5.
We fake out the audience using Looney Tunes, which reintroduces us to the craziness from previous parts.

s7.initVideo("https://media.tenor.com/Xog-njZu2GoAAAPo/looney-tunes.mp4")

s7.src.playbackRate = 0.5
t = 1
update = () => {
  if(t > 0.6){
    t -= 0.0025
  }
}
src(s7).thresh(()=>t).blend(o1, ()=>t).out()


Pt 6. 

The final crazy part of the performance keeps ramping up with dancing goku, hypnosis, and minecraft. This combination goes on until the viewer can barely tell what’s happening, which concludes the craziness of the performance

show = 0
update = () => {
  if(show < 1){
    show += 0.01
  }
}
s0.src.playbackRate = 4
s2.src.playbackRate = 4
src(s7).thresh(0.6).layer(
  src(s2)
    .saturate(3)
    // .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
    .brightness(0.25)
, ()=>show)
.out()

memeText = document.createElement('canvas')
memeTextCtx = memeText.getContext('2d')
memeTextCtx.canvas.width  = window.innerWidth;
memeTextCtx.canvas.height = window.innerHeight;
memeTextCtx.font = '3rem impact'
memeTextCtx.fillStyle = "black";
memeTextCtx.fillText("YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3...", 0, window.innerHeight - 50)   
memeTextCtx.fillText("YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3...", 0, 75)   
s6.init({ src: memeText, dynamic: true })
s5.initVideo("https://media.tenor.com/UUjijDDQ6Q0AAAPo/hysterical-laughing-hypnosis.mp4")
src(s2)
  .blend(src(s5), 0.25)
  .saturate(3)
  .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
  .brightness(0.25)
  .layer(src(s6).scrollX(()=>time/20))
.out()

src(s0)
.blend(src(s5), 0.15)
.saturate(3)
.layer(
  src(s2)
  .saturate(3)
  .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
  .brightness(0.25)
  .luma(0.6)
  .mask(shape(2,0.4,1).rotate(Math.PI/2))
)
.pixelate(200,200)
.layer(src(s6).scrollX(()=>time/20))
.out(o0)


// drop here
src(s0)
.blend(src(s5), 0.15)
.saturate(3)
.layer(
  src(s2)
  .saturate(3)
  .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
  .brightness(0.25)
  .luma(0.6)
  .mask(shape(2,0.4,1).rotate(Math.PI/2))
)
.pixelate(200,200)
.layer(src(s6).scrollX(()=>time/20))
.pixelate(100,100)
.out(o0)

Pt 7.

In the previous part, we begin loading in the shaders we’ll use. In accordance with the music, we start off the shaders slow and sparse but then increase the density, make it evil, and keep the audience engaged.

s3.init({src: p5.canvas})
fade = 0.25
update = () => {
  if(fade < 1){
    fade += 0.005
  }
}
src(s0)
.blend(src(s5), 0.15)
.saturate(3)
.layer(
  src(s2)
  .saturate(3)
  .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
  .brightness(0.25)
  .luma(0.6)
  .mask(shape(2,0.4,1).rotate(Math.PI/2))
)
.pixelate(200,200)
.layer(src(s6).scrollX(()=>time/20))
.pixelate(100,100)
.blend(src(s3), ()=>fade)
  .out()

// 2) jb vocal + hihats + ambient piano 
curr_density = 1
p5.draw = ()=>{
  curr_density -= 0.01
    shader.setUniform("time", time);
    shader.setUniform("resolution", [width, height]);
  // from 1 to 0.25
    shader.setUniform("tubeDensity", Math.max(curr_density, 0.25)); // <-- on vocal
    shader.setUniform("parallaxFlip", 2);
    shader.setUniform("tubeShaping", 0.2);
    shader.setUniform("colorG", 0.15);
    shader.setUniform("mistDensity",10);
    p5.shader(shader);
    p5.rect(0, 0, width, height);
}

// run drums (evil mode)
density = 10
p5.draw = ()=>{
  density-=0.5
  curr_density -= 0.01
    shader.setUniform("time", time);
    shader.setUniform("resolution", [width, height]);
  // from 1 to 0.25
    shader.setUniform("tubeDensity", 0.25); // <-- on vocal
    shader.setUniform("parallaxFlip", 2);
    shader.setUniform("tubeShaping", 0.2);
    shader.setUniform("colorG", 0.15);
    shader.setUniform("mistDensity",Math.max(density, 5));
    p5.shader(shader);
    p5.rect(0, 0, width, height);
}
fade = 0
update = () => {
  if(fade < 1){
    fade += 0.01
  }
}
src(s3)
  .diff(src(s3).modulate(noise(2)))
  .brightness(0.1)
  .blend(src(s3), ()=>1-fade)
.out()

Pt 8. 

Finally, we begin putting Playboi Carti into the tunnels and begin removing the tunnel to end our performance on a cute note.

s2.initVideo("https://media.tenor.com/vnisLXL1C30AAAPo/playboi-carti-smile.mp4")
// 8. carti -> remove tunnel
fade = 0
update = () => {
  if(fade < 1){
    fade += 0.001
  }
}
src(s3)
  .diff(src(s3).modulate(noise(2)))
  .brightness(0.1)
  .blend(src(s2).scrollX(()=>time/20).saturate(2.5).layer(src(s3).luma(0.5))
   , ()=>fade)
.out(o0)

fade=1
lum = 0.5
update = () => {
  if (lum < 0.8){
    lum += 0.005
  }
}
src(s3)
  .diff(src(s3).modulate(noise(2)))
  .brightness(0.1)
  .blend(src(s2).scrollX(()=>time/20).saturate(2.5).layer(src(s3).luma(()=>lum))
   , ()=>fade)
.out(o0)

Pt 9. 

We cut the video and AI Drake comments about his favorite D3 food.
