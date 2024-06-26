precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform float tunnelShape;
uniform float ribWidth;
uniform float ribCurve;

float tunnel(vec3 p)
{
	return cos(p.x)+cos(p.y*1.5)+cos(p.z)+cos(p.y*tunnelShape)*.15;
}

float ribbon(vec3 p)
{
	return length(max(abs(p-vec3(cos(p.z*ribCurve)*.3,-.5+cos(p.z)*.2,.0))-vec3(ribWidth,.02,time+3.),vec3(.0)));
}

float scene(vec3 p)
{
	return min(tunnel(p),ribbon(p));
}

vec3 getNormal(vec3 p)
{
	vec3 eps=vec3(.1,0,0);
	return normalize(vec3(scene(p+eps.xyy),scene(p+eps.yxy),scene(p+eps.yyx)));
}

void main( void )
{
	vec2 v = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;
	v.x *= resolution.x/resolution.y;

	vec4 color = vec4(0.0);
	vec3 org   = vec3(sin(time)*.5,cos(time*.5)*.25+.25,time);
	vec3 dir   = normalize(vec3(v.x*1.6,v.y,1.0));
	vec3 p     = org,pp;
	float d    = .0;

	//First raymarching
	for(int i=0;i<64;i++)
	{
	  	d = scene(p);
		p += d*dir;
	}
	pp = p;
	float f=length(p-org)*0.02;

	//Second raymarching (reflection)
	dir=reflect(dir,getNormal(p));
	p+=dir;
	for(int i=0;i<32;i++)
	{
		d = scene(p);
	 	p += d*dir;
	}
	color = max(dot(getNormal(p),vec3(.1,.1,.0)), .0) + vec4(.3,cos(time*.5)*.5+.5,sin(time*.5)*.5+.5,1.)*min(length(p-org)*.04, 1.);

	//Ribbon Color
	if(tunnel(pp)>ribbon(pp))
		color = mix(color, vec4(cos(time*.3)*.5+.5,cos(time*.2)*.5+.5,sin(time*.3)*.5+.5,1.),.3);

	//Final Color
	vec4 fcolor = ((color+vec4(f))+(1.-min(pp.y+1.9,1.))*vec4(1.,.8,.7,1.))*min(100.*.5,1.);
	gl_FragColor = vec4(fcolor.xyz,1.0);
}
