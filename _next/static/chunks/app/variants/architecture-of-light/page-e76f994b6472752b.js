(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{1793:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,8500,23)),Promise.resolve().then(s.t.bind(s,8437,23)),Promise.resolve().then(s.bind(s,2595)),Promise.resolve().then(s.bind(s,2463)),Promise.resolve().then(s.bind(s,7655)),Promise.resolve().then(s.bind(s,9326)),Promise.resolve().then(s.bind(s,8490))},7655:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var a=s(5155),r=s(2115),n=s(5772),l=s(5911),i=s(3018),o=s(8638),c=s(5269),m=s(9625),u=s(1463);function x({scrollProgress:e,introProgress:t,imageUrl:s="/okna-center-demo/_next/static/media/vladivostok-real-window.385d2c3a.jpg"}){let n=(0,r.useRef)(null),l=(0,r.useRef)({x:0,y:0,targetX:0,targetY:0}),i=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let a,r,o=n.current;if(!o)return;i.current=window.innerWidth<768;let x=new c.Z58,d=new c.qUd(-1,1,1,-1,0,1);try{(a=new m.JeP({powerPreference:"high-performance",antialias:!0,alpha:!1})).setPixelRatio(Math.min(window.devicePixelRatio,i.current?1.5:2)),a.setSize(o.clientWidth,o.clientHeight),o.appendChild(a.domElement)}catch{console.warn("WebGL initialization failed, using CSS fallback");return}let p=new c.Tap,h=s.startsWith("/")?s:`${u.env.NEXT_PUBLIC_BASE_PATH||""}${s}`,v=p.load(h,e=>{e.minFilter=c.k6q,e.magFilter=c.k6q,e.wrapS=c.ghU,e.wrapT=c.ghU,e.generateMipmaps=!1,A&&(A.uniforms.uTexture.value=e,A.uniforms.uHasTexture.value=1)}),f=`
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

      // Robust aspect ratio cover calculation
      vec2 getCoverUv(vec2 uv, vec2 screenRes, vec2 texRes) {
        float sRatio = screenRes.x / screenRes.y;
        float tRatio = texRes.x / texRes.y;
        vec2 newUv = uv;
        if (sRatio > tRatio) {
          float scale = sRatio / tRatio;
          newUv.y = (uv.y - 0.5) / scale + 0.5;
        } else {
          float scale = tRatio / sRatio;
          newUv.x = (uv.x - 0.5) / scale + 0.5;
        }
        return newUv;
      }

      // Procedural noise for air particles
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                   mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }

      void main() {
        // Zoom factor to eliminate any out-of-bounds edge stretching
        float zoom = 1.16;
        float maxPan = 0.06;
        float cameraPan = (uScroll - 0.5) * maxPan;
        
        vec2 centeredUv = (vUv - 0.5) / zoom + 0.5 + vec2(cameraPan, 0.0);
        vec2 baseUv = getCoverUv(centeredUv, uResolution, uImageRes);

        // Safe clamp to ensure pristine edges
        baseUv = clamp(baseUv, 0.002, 0.998);

        // Depth parallax
        float depth = clamp(baseUv.y * 1.1 - 0.05, 0.05, 0.95);
        vec2 parallax = uMouse * (depth * 0.015 + 0.004);
        vec2 finalUv = clamp(baseUv - parallax, 0.001, 0.999);

        // Sample scenic city view
        vec4 sceneColor = texture2D(uTexture, finalUv);

        // Progressive light entrance (Intro 0.0 -> 1.0)
        float lightIntensity = smoothstep(0.02, 1.0, uIntro);

        // Dynamic Time-of-Day Temperature shift with scroll
        vec3 morningTint  = vec3(0.88, 0.96, 1.06);
        vec3 dayTint      = vec3(1.0, 1.0, 1.0);
        vec3 goldenTint   = vec3(1.06, 0.97, 0.88);
        vec3 twilightTint = vec3(0.92, 0.95, 1.05);

        vec3 currentTint = mix(
          mix(morningTint, dayTint, smoothstep(0.0, 0.35, uScroll)),
          mix(goldenTint, twilightTint, smoothstep(0.7, 1.0, uScroll)),
          smoothstep(0.35, 0.7, uScroll)
        );

        vec3 color = sceneColor.rgb * currentTint;

        // =========================================================================
        // VOLUMETRIC LIGHT SHAFT
        // =========================================================================
        float beamPos = (vUv.x * 0.65 + vUv.y * 0.45) - (0.42 + uScroll * 0.15);
        float beamWidth = 0.38 + sin(uTime * 0.2) * 0.02;
        float beamMask = smoothstep(beamWidth, 0.0, abs(beamPos));

        // Atmospheric dust particles in light ray
        vec2 dustUv = vUv * 7.0 + vec2(uTime * 0.04, -uTime * 0.06);
        float dust = noise(dustUv) * noise(dustUv * 1.8 + 1.2);
        float dustMotes = smoothstep(0.48, 0.82, dust) * beamMask * 0.35;

        vec3 beamColor = mix(vec3(0.92, 0.96, 1.0), vec3(1.0, 0.94, 0.85), smoothstep(0.3, 0.8, uScroll));
        vec3 volumetricLight = (beamColor * beamMask * 0.28 + beamColor * dustMotes) * lightIntensity;
        color += volumetricLight;

        // =========================================================================
        // POLISHED FLOOR REFLECTION SHEEN
        // =========================================================================
        float floorMask = smoothstep(0.68, 0.98, vUv.y);
        vec2 floorReflectUv = vec2(finalUv.x, clamp(1.0 - (finalUv.y * 0.38), 0.001, 0.999));
        vec4 floorReflection = texture2D(uTexture, floorReflectUv);
        vec3 floorColor = floorReflection.rgb * vec3(0.35, 0.45, 0.55) * floorMask * lightIntensity * 0.4;
        color += floorColor;

        // Start from atmospheric darkness and open with pure light
        float startDarkness = mix(0.15, 1.0, lightIntensity);
        color *= startDarkness;

        gl_FragColor = vec4(color, 1.0);
      }
    `,A=new c.BKk({vertexShader:f,fragmentShader:g,uniforms:{uTexture:{value:v},uHasTexture:{value:0},uMouse:{value:new c.I9Y(0,0)},uTime:{value:0},uScroll:{value:0},uIntro:{value:0},uResolution:{value:new c.I9Y(o.clientWidth,o.clientHeight)},uImageRes:{value:new c.I9Y(1920,1080)},uIsMobile:{value:+!!i.current}},depthWrite:!1,depthTest:!1}),b=new c.bdM(2,2),w=new c.eaF(b,A);x.add(w);let y=e=>{if(i.current)return;let t=o.getBoundingClientRect(),s=(e.clientX-t.left)/t.width*2-1,a=-((e.clientY-t.top)/t.height*2-1);l.current.targetX=s,l.current.targetY=a};window.addEventListener("mousemove",y,{passive:!0});let j=()=>{if(!o||!a)return;let e=o.clientWidth,t=o.clientHeight;i.current=e<768,a.setSize(e,t),a.setPixelRatio(Math.min(window.devicePixelRatio,i.current?1.5:2)),A.uniforms.uResolution.value.set(e,t),A.uniforms.uIsMobile.value=+!!i.current};window.addEventListener("resize",j,{passive:!0});let N=new c.zD7,R=()=>{let s=N.getElapsedTime();l.current.x+=(l.current.targetX-l.current.x)*.04,l.current.y+=(l.current.targetY-l.current.y)*.04,A.uniforms.uMouse.value.set(l.current.x,l.current.y),A.uniforms.uTime.value=s,A.uniforms.uScroll.value=e.current?.current??0,A.uniforms.uIntro.value=t.current?.current??0,a.render(x,d),r=requestAnimationFrame(R)};return R(),()=>{cancelAnimationFrame(r),window.removeEventListener("mousemove",y),window.removeEventListener("resize",j),a&&(a.dispose(),o.contains(a.domElement)&&o.removeChild(a.domElement)),b.dispose(),A.dispose(),v.dispose()}},[s,t,e]),(0,a.jsx)("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-10",style:{overflow:"hidden"}})}var d=s(8795);function p(){let e=(0,r.useRef)(null),t=(0,r.useRef)(null),s=(0,r.useRef)(null),i=(0,r.useRef)(null),c=(0,r.useRef)(null),m=(0,r.useRef)(null),u=(0,r.useRef)(null),p=(0,r.useRef)({current:0}),h=(0,r.useRef)({current:0});return(0,o.L)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){h.current.current=1,t.current&&l.Ay.set(t.current,{autoAlpha:1,y:0});return}l.Ay.set(t.current,{autoAlpha:0,y:25}),l.Ay.set([s.current,i.current,c.current,m.current],{autoAlpha:0,y:35,pointerEvents:"none"}),l.Ay.timeline({defaults:{ease:"power3.out"}}).to(h.current,{current:1,duration:2.6,ease:"power2.inOut"}).to(t.current,{autoAlpha:1,y:0,duration:1.2,ease:"power3.out"},"-=1.0");let a=l.Ay.timeline({scrollTrigger:{trigger:e.current,start:"top top",end:"+=380%",scrub:.8,pin:!0,anticipatePin:1}});a.to(p.current,{current:1,ease:"none",duration:4},0),u.current&&a.to(u.current,{scaleX:1,ease:"none",duration:4},0),a.to(t.current,{autoAlpha:0,y:-35,duration:.4,ease:"power2.in"},.2),a.to(s.current,{autoAlpha:1,y:0,duration:.4,ease:"power2.out"},.6).to(s.current,{autoAlpha:0,y:-30,duration:.4,ease:"power2.in"},1.2),a.to(i.current,{autoAlpha:1,y:0,duration:.4,ease:"power2.out"},1.4).to(i.current,{autoAlpha:0,y:-30,duration:.4,ease:"power2.in"},2),a.to(c.current,{autoAlpha:1,y:0,duration:.4,ease:"power2.out"},2.2).to(c.current,{autoAlpha:0,y:-30,duration:.4,ease:"power2.in"},2.8),a.to(m.current,{autoAlpha:1,y:0,duration:.5,ease:"power2.out"},3)},{scope:e}),(0,a.jsxs)("div",{ref:e,className:"relative w-full h-[100dvh] overflow-hidden bg-[#020408] select-none",children:[(0,a.jsx)("div",{className:"absolute inset-0 w-full h-full origin-center opacity-25",children:(0,a.jsx)(n.default,{src:d.A,alt:"Архитектура света Владивосток",fill:!0,priority:!0,placeholder:"blur",className:"object-cover object-center"})}),(0,a.jsx)(x,{scrollProgress:p,introProgress:h,imageUrl:d.A.src}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/45 to-transparent w-full md:w-3/5 z-20 pointer-events-none"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-950/95 via-slate-950/30 to-transparent z-20 pointer-events-none"}),(0,a.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent z-20 pointer-events-none"}),(0,a.jsxs)("div",{className:"relative z-30 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center pointer-events-none",children:[(0,a.jsxs)("div",{ref:t,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-2xl lg:max-w-3xl pt-24 pb-16 pointer-events-auto opacity-0 invisible",children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 self-start px-3.5 py-1.5 mb-5 sm:mb-6 text-[10px] sm:text-xs font-mono text-cyan-300 border border-cyan-400/30 rounded-full bg-slate-950/85 backdrop-blur-xl uppercase tracking-widest shadow-xl",children:[(0,a.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),(0,a.jsx)("span",{children:"Architecture of Light \xb7 Окна Центр"})]}),(0,a.jsxs)("h1",{className:"text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extralight text-white tracking-tight leading-[0.96] mb-5 sm:mb-6 drop-shadow-[0_16px_32px_rgba(0,0,0,0.95)]",children:[(0,a.jsx)("span",{className:"block font-normal",children:"Свет."}),(0,a.jsx)("span",{className:"block font-light text-slate-200",children:"Вид."}),(0,a.jsx)("span",{className:"block font-extralight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-cyan-300",children:"Пространство."})]}),(0,a.jsx)("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 font-light mb-7 sm:mb-8 max-w-lg leading-relaxed drop-shadow",children:"Остекление любой сложности во Владивостоке с 2004 года. Фабричное производство, панорамные конструкции, защита от приморских тайфунов."}),(0,a.jsxs)("div",{className:"flex flex-row flex-wrap items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8",children:[(0,a.jsx)("a",{href:"#contact",className:"px-7 py-3.5 sm:px-8 sm:py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all duration-300 uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] cursor-pointer text-center",children:"Рассчитать проект"}),(0,a.jsx)("a",{href:"#projects",className:"px-7 py-3.5 sm:px-8 sm:py-4 bg-slate-900/70 hover:bg-slate-900/95 text-white border border-white/20 backdrop-blur-xl rounded-full font-medium transition-all duration-300 uppercase tracking-wider text-xs hover:border-white/40 cursor-pointer text-center",children:"Смотреть работы"})]}),(0,a.jsx)("div",{className:"flex items-center gap-6 text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-widest",children:(0,a.jsx)("span",{children:"↓ Листайте вниз для исследования направлений"})})]}),(0,a.jsxs)("div",{ref:s,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-xl lg:max-w-2xl pt-24 pb-16 pointer-events-auto opacity-0 invisible",children:[(0,a.jsx)("span",{className:"font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3",children:"01 / Направления"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-light text-white mb-3 sm:mb-4 tracking-tight leading-tight",children:"Остекление квартир"}),(0,a.jsx)("p",{className:"text-sm sm:text-lg text-cyan-200 font-light mb-3 sm:mb-4",children:"Окна в пол и балконные блоки"}),(0,a.jsx)("p",{className:"text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6 sm:mb-8 max-w-lg",children:"Многокамерные системы Funke (Германия) и KBE с энергоэффективными стеклопакетами. Абсолютная шумоизоляция и сохранение тепла при ветре с залива."}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"#prices",className:"inline-flex items-center text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors border-b border-cyan-400/40 pb-1",children:"Узнать стоимость от 14 000 ₽ →"})})]}),(0,a.jsxs)("div",{ref:i,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-xl lg:max-w-2xl pt-24 pb-16 pointer-events-auto opacity-0 invisible",children:[(0,a.jsx)("span",{className:"font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3",children:"02 / Направления"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-light text-white mb-3 sm:mb-4 tracking-tight leading-tight",children:"Частные дома и коттеджи"}),(0,a.jsx)("p",{className:"text-sm sm:text-lg text-cyan-200 font-light mb-3 sm:mb-4",children:"Панорамное и нестандартное остекление"}),(0,a.jsx)("p",{className:"text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6 sm:mb-8 max-w-lg",children:"Раздвижные порталы Patio, крупноформатные витражи ALUTECH, ламинация под дерево и архитектурная тонировка для загородных резиденций Приморья."}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"#contact",className:"inline-flex items-center text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors border-b border-cyan-400/40 pb-1",children:"Индивидуальный расчет проекта →"})})]}),(0,a.jsxs)("div",{ref:c,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-xl lg:max-w-2xl pt-24 pb-16 pointer-events-auto opacity-0 invisible",children:[(0,a.jsx)("span",{className:"font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3",children:"03 / Направления"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-light text-white mb-3 sm:mb-4 tracking-tight leading-tight",children:"Балконы и лоджии"}),(0,a.jsx)("p",{className:"text-sm sm:text-lg text-cyan-200 font-light mb-3 sm:mb-4",children:"Теплый контур и отделка под ключ"}),(0,a.jsx)("p",{className:"text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6 sm:mb-8 max-w-lg",children:"Превращение балкона в видовой кабинет или лаунж-зону. Фасадные японские панели \xabХаньи\xbb, утепление пола, встроенная электрика и рулонные евро-жалюзи \xabЗебра\xbb."}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"#prices",className:"inline-flex items-center text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors border-b border-cyan-400/40 pb-1",children:"Лоджии под ключ от 55 000 ₽ →"})})]}),(0,a.jsxs)("div",{ref:m,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-xl lg:max-w-2xl pt-24 pb-16 pointer-events-auto opacity-0 invisible",children:[(0,a.jsx)("span",{className:"font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3",children:"04 / Направления"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-light text-white mb-3 sm:mb-4 tracking-tight leading-tight",children:"Фасады и бизнес"}),(0,a.jsx)("p",{className:"text-sm sm:text-lg text-cyan-200 font-light mb-3 sm:mb-4",children:"Алюминиевые витражи ALUTECH"}),(0,a.jsx)("p",{className:"text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6 max-w-lg",children:"Стоечно-ригельные системы, входные группы, огнестойкие конструкции и доставка готовых рам с жесткой обрешеткой по всему Дальнему Востоку."}),(0,a.jsx)("div",{className:"p-4 sm:p-5 rounded-2xl bg-slate-950/85 border border-cyan-500/30 backdrop-blur-xl mb-6 shadow-2xl max-w-md",children:(0,a.jsx)("p",{className:"text-xs sm:text-sm text-cyan-300 font-mono leading-relaxed",children:"\xabВаш вид меняется. Хорошее остекление остаётся незаметным.\xbb"})}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"#contact",className:"inline-flex items-center px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full text-xs uppercase tracking-wider transition-colors shadow-lg shadow-cyan-500/25 cursor-pointer",children:"Оставить заявку на замер 0 ₽ →"})})]})]}),(0,a.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-1 bg-white/10 z-40",children:(0,a.jsx)("div",{ref:u,className:"h-full w-full bg-gradient-to-r from-amber-300 via-cyan-400 to-blue-500 origin-left scale-x-0"})})]})}l.Ay.registerPlugin(i.u)},8795:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a={src:"/okna-center-demo/_next/static/media/vladivostok-real-window.385d2c3a.jpg",height:768,width:1376,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAjxX/xAAaEAACAgMAAAAAAAAAAAAAAAABAgADBBJB/9oACAEBAAE/AKcq4Mo27P/EABkRAAEFAAAAAAAAAAAAAAAAAAMAAhIykf/aAAgBAgEBPwAhCSu7V//EABgRAQADAQAAAAAAAAAAAAAAAAIAETKR/9oACAEDAQE/AABWDyf/2Q==",blurWidth:8,blurHeight:4}}},e=>{e.O(0,[592,831,367,500,718,175,441,794,358],()=>e(e.s=1793)),_N_E=e.O()}]);