(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{5579:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8500,23)),Promise.resolve().then(r.t.bind(r,8437,23)),Promise.resolve().then(r.bind(r,2595)),Promise.resolve().then(r.bind(r,2463)),Promise.resolve().then(r.bind(r,6516)),Promise.resolve().then(r.bind(r,9326)),Promise.resolve().then(r.bind(r,8490))},6516:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var a=r(5155),s=r(2115),n=r(5772),i=r(5911),o=r(3018),l=r(8638),c=r(5269),u=r(9625),d=r(1463);function m({scrollProgress:e,introProgress:t,imageUrl:r="/okna-center-demo/_next/static/media/vladivostok-real-window.385d2c3a.jpg"}){let n=(0,s.useRef)(null),i=(0,s.useRef)({x:0,y:0,targetX:0,targetY:0}),o=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{let a,s,l=n.current;if(!l)return;o.current=window.innerWidth<768;let m=new c.Z58,A=new c.qUd(-1,1,1,-1,0,1);try{(a=new u.JeP({powerPreference:"high-performance",antialias:!0,alpha:!1})).setPixelRatio(Math.min(window.devicePixelRatio,o.current?1.5:2)),a.setSize(l.clientWidth,l.clientHeight),l.appendChild(a.domElement)}catch{console.warn("WebGL initialization failed, using CSS fallback");return}let x=new c.Tap,p=r.startsWith("/")?r:`${d.env.NEXT_PUBLIC_BASE_PATH||""}${r}`,v=x.load(p,e=>{e.minFilter=c.k6q,e.generateMipmaps=!1,h&&(h.uniforms.uTexture.value=e,h.uniforms.uHasTexture.value=1)}),f=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,g=`
      uniform sampler2D uTexture;
      uniform float uHasTexture;
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uScroll;
      uniform float uIntro;
      uniform vec2 uResolution;
      uniform vec2 uImageRes;
      uniform float uIsMobile;
      varying vec2 vUv;

      // Cover scaling math to preserve aspect ratio without stretching
      vec2 getCoverUv(vec2 uv, vec2 res, vec2 texRes) {
        float screenRatio = res.x / res.y;
        float imageRatio = texRes.x / texRes.y;
        vec2 newUv = uv;
        if (screenRatio > imageRatio) {
          float scale = screenRatio / imageRatio;
          newUv.y = (uv.y - 0.5) / scale + 0.5;
        } else {
          float scale = imageRatio / screenRatio;
          newUv.x = (uv.x - 0.5) / scale + 0.5;
        }
        return newUv;
      }

      void main() {
        vec2 baseUv = getCoverUv(vUv, uResolution, uImageRes);

        // Natural depth approximation:
        // Sky (top) is far depth (~0.1), Golden Horn Bridge (center) is mid depth (~0.5), bottom is near (~0.9)
        float depth = clamp(baseUv.y * 1.1 - 0.1, 0.05, 0.95);

        // Living subtle camera breathing & depth parallax
        float breathX = sin(uTime * 0.4) * 0.003;
        float breathY = cos(uTime * 0.3) * 0.002;
        
        vec2 parallax = uMouse * (depth * 0.025 + 0.005) + vec2(breathX, breathY);

        // Scroll zoom transition (camera floating into the city)
        float zoom = 1.0 - (uScroll * 0.15) - ((1.0 - uIntro) * 0.04);
        vec2 centeredUv = (baseUv - 0.5) * zoom + 0.5;
        
        // Displaced UV with chromatic aberration on glass highlights
        vec2 displacedUv = centeredUv - parallax;
        
        float rOffset = 0.0015 * (1.0 - depth) * length(uMouse);
        vec4 colR = texture2D(uTexture, displacedUv + vec2(rOffset, 0.0));
        vec4 colG = texture2D(uTexture, displacedUv);
        vec4 colB = texture2D(uTexture, displacedUv - vec2(rOffset, 0.0));
        
        vec4 color = vec4(colR.r, colG.g, colB.b, 1.0);

        // Atmospheric maritime haze & golden twilight bloom
        float haze = sin(vUv.x * 3.0 + uTime * 0.2) * 0.02 + sin(vUv.y * 2.0 - uTime * 0.15) * 0.02;
        vec3 hazeColor = vec3(0.7, 0.9, 1.0);
        
        // Gentle living mist over bay water
        color.rgb = mix(color.rgb, hazeColor, haze * (1.0 - depth) * 0.35 * uIntro);

        // Glass reflection sheen passing subtly
        float reflection = smoothstep(0.3, 0.7, sin(vUv.x * 2.0 - vUv.y * 1.5 + uTime * 0.15 + uMouse.x * 2.0));
        color.rgb += vec3(0.06, 0.12, 0.18) * reflection * depth;

        // Intro fade & contrast polish
        color.rgb = color.rgb * (0.85 + uIntro * 0.2);

        gl_FragColor = color;
      }
    `,h=new c.BKk({vertexShader:f,fragmentShader:g,uniforms:{uTexture:{value:v},uHasTexture:{value:0},uMouse:{value:new c.I9Y(0,0)},uTime:{value:0},uScroll:{value:0},uIntro:{value:0},uResolution:{value:new c.I9Y(l.clientWidth,l.clientHeight)},uImageRes:{value:new c.I9Y(1920,1080)},uIsMobile:{value:+!!o.current}},depthWrite:!1,depthTest:!1}),b=new c.bdM(2,2),w=new c.eaF(b,h);m.add(w);let y=e=>{if(o.current)return;let t=l.getBoundingClientRect(),r=(e.clientX-t.left)/t.width*2-1,a=-((e.clientY-t.top)/t.height*2-1);i.current.targetX=r,i.current.targetY=a};window.addEventListener("mousemove",y,{passive:!0});let j=()=>{if(!l||!a)return;let e=l.clientWidth,t=l.clientHeight;o.current=e<768,a.setSize(e,t),a.setPixelRatio(Math.min(window.devicePixelRatio,o.current?1.5:2)),h.uniforms.uResolution.value.set(e,t),h.uniforms.uIsMobile.value=+!!o.current};window.addEventListener("resize",j,{passive:!0});let R=new c.zD7,E=()=>{let r=R.getElapsedTime();i.current.x+=(i.current.targetX-i.current.x)*.05,i.current.y+=(i.current.targetY-i.current.y)*.05,h.uniforms.uMouse.value.set(i.current.x,i.current.y),h.uniforms.uTime.value=r,h.uniforms.uScroll.value=e.current?.current??0,h.uniforms.uIntro.value=t.current?.current??0,a.render(m,A),s=requestAnimationFrame(E)};return E(),()=>{cancelAnimationFrame(s),window.removeEventListener("mousemove",y),window.removeEventListener("resize",j),a&&(a.dispose(),l.contains(a.domElement)&&l.removeChild(a.domElement)),b.dispose(),h.dispose(),v.dispose()}},[r,t,e]),(0,a.jsx)("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-10",style:{overflow:"hidden"}})}var A=r(8795);function x(){let e=(0,s.useRef)(null),t=(0,s.useRef)(null),r=(0,s.useRef)(null),o=(0,s.useRef)(null),c=(0,s.useRef)({current:0}),u=(0,s.useRef)({current:0});return(0,l.L)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){u.current.current=1,t.current&&i.Ay.set(t.current,{opacity:1,y:0});return}let a=i.Ay.timeline({defaults:{ease:"power3.out"}});i.Ay.set(t.current,{opacity:0,y:25}),i.Ay.set(r.current,{opacity:.4,xPercent:-15}),a.to(u.current,{current:1,duration:2.4,ease:"power2.inOut"}).to(r.current,{opacity:.2,xPercent:0,duration:2,ease:"power2.out"},"-=1.8").to(t.current,{opacity:1,y:0,duration:1.2,ease:"power3.out"},"-=1.0"),i.Ay.timeline({scrollTrigger:{trigger:e.current,start:"top top",end:"+=140%",scrub:1,pin:!0,anticipatePin:1}}).to(t.current,{opacity:0,y:-40,ease:"power1.out",duration:.45},0).to(c.current,{current:1,ease:"power1.inOut",duration:1},0).to(o.current,{opacity:.95,ease:"power2.in",duration:.5},.5)},{scope:e}),(0,a.jsxs)("div",{ref:e,className:"relative w-full h-[100dvh] overflow-hidden bg-[#020509] select-none",children:[(0,a.jsx)("div",{className:"absolute inset-0 w-full h-full origin-center opacity-40",children:(0,a.jsx)(n.default,{src:A.A,alt:"Владивосток Золотой мост панорама",fill:!0,priority:!0,placeholder:"blur",className:"object-cover object-center md:object-[center_42%]"})}),(0,a.jsx)(m,{scrollProgress:c,introProgress:u,imageUrl:A.A.src}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/35 to-transparent w-full md:w-3/5 z-20 pointer-events-none"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/85 via-slate-950/40 to-transparent z-20 pointer-events-none"}),(0,a.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent z-20 pointer-events-none"}),(0,a.jsx)("div",{ref:r,className:"absolute inset-0 pointer-events-none z-22 bg-gradient-to-tr from-white/10 via-cyan-400/5 to-transparent transform -skew-x-12"}),(0,a.jsx)("div",{ref:o,className:"absolute inset-0 pointer-events-none z-25 bg-gradient-to-b from-transparent via-slate-950/60 to-[#03070f] opacity-0"}),(0,a.jsx)("div",{ref:t,className:"relative z-30 flex flex-col justify-center w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 pb-16",children:(0,a.jsxs)("div",{className:"max-w-xl lg:max-w-2xl flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 self-start px-3.5 py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs font-mono text-cyan-300 border border-cyan-400/30 rounded-full bg-slate-950/80 backdrop-blur-xl uppercase tracking-widest shadow-xl",children:[(0,a.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),(0,a.jsx)("span",{children:"Живой Владивосток \xb7 WebGL Depth Map \xb7 с 2004 г."})]}),(0,a.jsxs)("h1",{className:"text-3xl sm:text-5xl md:text-6xl lg:text-[74px] xl:text-[82px] font-extrabold text-white tracking-tight leading-[0.98] md:leading-[0.95] mb-4 sm:mb-5 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]",children:[(0,a.jsx)("span",{children:"ОСТЕКЛЕНИЕ"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"font-light text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-cyan-300",children:"В ЖИВОМ ОБЪЕМЕ"})]}),(0,a.jsx)("p",{className:"text-sm sm:text-base md:text-lg text-slate-200 font-light mb-2.5 drop-shadow leading-relaxed max-w-lg",children:"Панорамное, фасадное и теплое остекление квартир, коттеджей и видовых балконов под ключ."}),(0,a.jsx)("p",{className:"text-[11px] sm:text-xs md:text-xs font-mono text-cyan-200/80 uppercase tracking-widest mb-6 sm:mb-8 drop-shadow",children:"ПВХ \xb7 Алюминий ALUTECH \xb7 Балконы под ключ \xb7 Фасады"}),(0,a.jsxs)("div",{className:"flex flex-row flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8",children:[(0,a.jsx)("a",{href:"#contact",className:"px-7 py-3.5 sm:px-8 sm:py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all duration-300 uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] cursor-pointer text-center",children:"Рассчитать стоимость"}),(0,a.jsx)("a",{href:"#projects",className:"px-7 py-3.5 sm:px-8 sm:py-4 bg-slate-900/70 hover:bg-slate-900/95 text-white border border-white/20 backdrop-blur-xl rounded-full font-medium transition-all duration-300 uppercase tracking-wider text-xs hover:border-white/40 cursor-pointer text-center",children:"Смотреть проекты"})]}),(0,a.jsxs)("div",{className:"pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-slate-400 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5 text-slate-300",children:[(0,a.jsx)("span",{className:"text-cyan-400 font-bold text-xs sm:text-sm",children:"22"})," ГОДА В ПРИМОРЬЕ"]}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"LIVING DEPTH SCENE"]}),(0,a.jsxs)("div",{className:"hidden sm:flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"МОРСКАЯ ЗАЩИТА"]})]})]})})]})}i.Ay.registerPlugin(o.u)},8795:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a={src:"/okna-center-demo/_next/static/media/vladivostok-real-window.385d2c3a.jpg",height:768,width:1376,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAjxX/xAAaEAACAgMAAAAAAAAAAAAAAAABAgADBBJB/9oACAEBAAE/AKcq4Mo27P/EABkRAAEFAAAAAAAAAAAAAAAAAAMAAhIykf/aAAgBAgEBPwAhCSu7V//EABgRAQADAQAAAAAAAAAAAAAAAAIAETKR/9oACAEDAQE/AABWDyf/2Q==",blurWidth:8,blurHeight:4}}},e=>{e.O(0,[592,831,367,500,718,175,441,794,358],()=>e(e.s=5579)),_N_E=e.O()}]);