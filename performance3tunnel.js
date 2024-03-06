// NEED TO COPY AND PASTE THIS INTO CONSOLE OR LOAD IN SEPARATE SCRIPT
p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'WEBGL'})
shader = p5.loadShader("/Users/aakarshsingh/Documents/CS\ Projects/liveCoding-class/Class_Examples/shaders/basic.vert", "/Users/aakarshsingh/Documents/CS\ Projects/liveCoding-personal/shaders/tunnel.frag ");

osc(()=>(ccActual[0])).out()
hush()

console.log(cc[0])

// need to set the pixel density
p5.pixelDensity(1);
p5.draw = ()=>{
    shader.setUniform("time", time*0.3);
    shader.setUniform("resolution", [width, height]);
    shader.setUniform("c0",cc[0]*1);
    shader.setUniform("c1",cc[1]);
    shader.setUniform("c2",cc[2]);
    p5.shader(shader);
    p5.rect(0, 0, width, height);
}
p5.hide();
s0.init({src: p5.canvas})
src(s0).out()
render(o0)
