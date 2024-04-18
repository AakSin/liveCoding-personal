// NEED TO COPY AND PASTE THIS INTO CONSOLE OR LOAD IN SEPARATE SCRIPT
p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'WEBGL'})
shader = p5.loadShader("/Users/aakarshsingh/Documents/CS\ Projects/liveCoding-class/Class_Examples/shaders/basic.vert", "/Users/aakarshsingh/Documents/CS\ Projects/liveCoding-personal/shaders/ribbon.frag ");

osc(()=>(2)).out()
hush()

console.log(cc[0])

// need to set the pixel density
p5.pixelDensity(1);
p5.draw = ()=>{
    shader.setUniform("time", time*cc[3]*2);
    shader.setUniform("resolution",[width, height]);
    shader.setUniform("tunnelShape",ccActual[0]);
    shader.setUniform("ribWidth",cc[1]);
    shader.setUniform("ribCurve",ccActual[2]);
    p5.shader(shader);
    p5.rect(0, 0, width, height);
}
p5.hide();
s0.init({src: p5.canvas})
src(s0).out(o0)
render(o0)
