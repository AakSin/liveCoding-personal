// NEED TO COPY AND PASTE THIS INTO CONSOLE OR LOAD IN SEPARATE SCRIPT
p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'WEBGL'})
shader = p5.loadShader("/Users/aakarshsingh/Documents/CS\ Projects/liveCoding-class/Class_Examples/shaders/basic.vert", "/Users/aakarshsingh/Documents/CS\ Projects/liveCoding-personal/shaders/tunnel.frag ");

osc(()=>(2)).out()
hush()

console.log(cc[0])

// need to set the pixel density
p5.pixelDensity(1);
p5.draw = ()=>{
    shader.setUniform("time", time*cc[4]);
    shader.setUniform("resolution",[width, height]);
    shader.setUniform("tubeDensity",cc[0]);
    shader.setUniform("parallaxFlip",cc[1]);
    shader.setUniform("tubeShaping",cc[2]);
    shader.setUniform("colorG",cc[3]);
    shader.setUniform("mistDensity",cc[5]*40.);
    p5.shader(shader);
    p5.rect(0, 0, width, height);
}
p5.hide();
s0.init({src: p5.canvas})
src(s0).out(o0)
render(o0)


(src(o3).layer((src(o0).mask(src(o0).thresh(0.95,0.4).invert())))).out(o2)
render(o2)


src(o2).mult(osc(0.5,0.2)).out(o1)
render(o1)

s1.initVideo("https://cdn-cf-east.streamable.com/video/mp4/nkoxge.mp4?Expires=1710008674297&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=PzDFsxzxXfI8LoZxHTaSaqWpvFSXhvFF-k6yjAEmhIE0VzgCBvBsRzfkSHGDzFOdi-qOej3pFYK2j4~bVMaMsgtn7I7QqWocT6EDSO6u7w3MlQSl~aBUQ1XEeGGQZOIipWW5CIrtJ1OvFS3N~VRCmALpiqjx319KYFXgegrqxS7a4JT4GtkHRxWLSR7Q3tXiRbGzqtI7~iYpwegMcKFkIF0dwuH03IjB2fvEyYBZSfA1R2Oz9EwCCorG-lm0D9RE5G0n6BSyFrt22gsqyRufDM9iELlYtgoHGfy9WPFbiNyFquSSg7PgB0oxKaFDH0-L8F061WQPcnZS4DPjNPuJaQ__")
src(s1).out(o1)
src(o1).modulateScale(osc(8,0.1)).out(o2)
src(o2).modulateScale(src(o1).luma(()=>(cc[0]))).hue(()=>(cc[1])).out(o3)
src(o3).modulateHue(o1,()=>(cc[2])*16).blend(o1,0.05).out(o3)
src(o0).blend(o3,()=>(cc[6])).out(o2)
render(o2)
