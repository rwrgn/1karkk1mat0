for(C=c.getContext`2d`,c.style.background=`#fff`,c.style.position=`fixed`,I=[c.style.left=t=u=0,1,2,-1,22,17,30,30,31,36,0,1,2],
c.height=1080,o=4096,M=Math.random,b=[],z=[],i=0;i<o;)b.push({l:0}),z.push({y:Math.PI*2**I[i],x:.4*(i>2&&i<10)+.4-(i<5)*(i%3)/8,
v:8+8*(3==i++)});onload=(t=>{E=new AudioContext,F=E.createScriptProcessor(o/2,0,1),F.connect(E.destination),F.onaudioprocess=l}),
l=(e=>{for(D=e.outputBuffer.getChannelData(0),i=o/2;i>0;i--)s=`1771771`.charCodeAt(8*t%8)*(1+(t>32)+.4*(t>44)+.4*((t>32)*(t-32)/8|
0))*t%2/5+.1*M()*(t%.125<.1)+.2*M()*(t>12)*(1-t%.5),t>113&&(s=.1*M()),D[o/2-i]=s,t+=1/48000;for(r=z[u],x=t<4?300*t:1200,
y=510+480*Math.sin(t%(8-1.72*(t>29))*r.y)*r.x,t>r.v&&(z[++u].v+=t),c.width=1920,C.scale(2,2),C.fillStyle=`hsla(0,0%,0%,${(t-92)/8})`,
C.fillText(`1karkk1mat0=#r`,760,268),i=t<20?200*t|0:o-1;i>0;i--){for(a=b[i],--a.l<0&&(a.x=x+40*M()-20,a.y=y+40*M()-20,
a.m=8*M()-4+16*(t>4),a.n=8*M()-4,a.s=2**(2+4*M()|0),a.r=10*M(),a.l=200*M(),a.c=t>32),C.setTransform(r=1+(t<24&&i>2276)*(1-t%.5*3),
0,0,r,a.x+a.s,a.y+a.s),C.rotate(a.r*t),C.fillStyle=`hsla(${i%64-6*((t>44)*a.y/36+t+30)},100%,${i%2*(t>75?t-25:50*a.c)}%,
${a.l--/192})`,j=0;j<i%3+1;j++)C.fillRect(g=-a.s/2+(f=j*a.s/4),g,k=a.s-2*f,k);a.x-=a.m,a.y-=a.n}})
