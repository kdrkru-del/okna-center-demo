(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{1793:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8500,23)),Promise.resolve().then(r.t.bind(r,8437,23)),Promise.resolve().then(r.bind(r,2595)),Promise.resolve().then(r.bind(r,2463)),Promise.resolve().then(r.bind(r,7655)),Promise.resolve().then(r.bind(r,9326)),Promise.resolve().then(r.bind(r,8490))},7655:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var a=r(5155),s=r(2115),n=r(5772),i=r(5911),l=r(3018),o=r(8638),c=r(5269),u=r(9625),x=r(1463);function m({scrollProgress:e,introProgress:t,imageUrl:r="/okna-center-demo/_next/static/media/vladivostok-real-window.385d2c3a.jpg"}){let n=(0,s.useRef)(null),i=(0,s.useRef)({x:0,y:0,targetX:0,targetY:0}),l=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{let a,s,o=n.current;if(!o)return;l.current=window.innerWidth<768;let m=new c.Z58,d=new c.qUd(-1,1,1,-1,0,1);try{(a=new u.JeP({powerPreference:"high-performance",antialias:!0,alpha:!1})).setPixelRatio(Math.min(window.devicePixelRatio,l.current?1.5:2)),a.setSize(o.clientWidth,o.clientHeight),o.appendChild(a.domElement)}catch{console.warn("WebGL initialization failed, falling back to CSS");return}let h=new c.Tap,p=r.startsWith("/")?r:`${x.env.NEXT_PUBLIC_BASE_PATH||""}${r}`,f=h.load(p,e=>{e.minFilter=c.k6q,e.generateMipmaps=!1,A&&(A.uniforms.uTexture.value=e,A.uniforms.uHasTexture.value=1)}),g=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,v=`
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

      // Pseudo-random noise for volumetric dust motes
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
        // Camera panning horizontally across the panoramic glazing on scroll
        float cameraPan = (uScroll - 0.5) * 0.12;
        vec2 shiftedUv = vUv + vec2(cameraPan, 0.0);
        vec2 baseUv = getCoverUv(shiftedUv, uResolution, uImageRes);

        // Natural depth calculation
        float depth = clamp(baseUv.y * 1.1 - 0.05, 0.05, 0.95);

        // Interactive subtle perspective tilt
        vec2 parallax = uMouse * (depth * 0.02 + 0.005);
        vec2 finalUv = baseUv - parallax;

        // Sample scenic city view
        vec4 sceneColor = texture2D(uTexture, finalUv);

        // Initial darkness & progressive light entrance (Intro 0.0 -> 1.0)
        float lightIntensity = smoothstep(0.05, 1.0, uIntro);

        // Dynamic Time-of-Day Temperature shift with scroll:
        // uScroll = 0.0 (Cool architectural morning) -> 0.35 (Crisp daylight) -> 0.7 (Warm golden hour) -> 1.0 (Evening city twilight)
        vec3 morningTint = vec3(0.85, 0.95, 1.05);
        vec3 dayTint     = vec3(1.0, 1.0, 1.0);
        vec3 goldenTint  = vec3(1.08, 0.98, 0.88);
        vec3 twilightTint = vec3(0.88, 0.92, 1.08);

        vec3 currentTint = mix(
          mix(morningTint, dayTint, smoothstep(0.0, 0.35, uScroll)),
          mix(goldenTint, twilightTint, smoothstep(0.7, 1.0, uScroll)),
          smoothstep(0.35, 0.7, uScroll)
        );

        // Base color graded with light entrance
        vec3 color = sceneColor.rgb * currentTint;

        // =========================================================================
        // VOLUMETRIC LIGHT SHAFT (Diagonal architectural beam passing through glass)
        // =========================================================================
        // Calculate diagonal light shaft direction (top-right to bottom-left)
        float beamPos = (vUv.x * 0.7 + vUv.y * 0.5) - (0.4 + uScroll * 0.2);
        float beamWidth = 0.35 + sin(uTime * 0.2) * 0.02;
        float beamMask = smoothstep(beamWidth, 0.0, abs(beamPos));

        // Volumetric dust motes floating within the light shaft
        vec2 dustUv = vUv * 8.0 + vec2(uTime * 0.05, -uTime * 0.08);
        float dust = noise(dustUv) * noise(dustUv * 2.0 + 1.5);
        float dustMotes = smoothstep(0.45, 0.85, dust) * beamMask * 0.4;

        // Light shaft color (warm architectural radiance)
        vec3 beamColor = mix(vec3(0.9, 0.95, 1.0), vec3(1.0, 0.92, 0.82), smoothstep(0.3, 0.8, uScroll));
        vec3 volumetricLight = (beamColor * beamMask * 0.3 + beamColor * dustMotes) * lightIntensity;

        color += volumetricLight;

        // =========================================================================
        // POLISHED FLOOR FRESNEL REFLECTION (Interior Floor Sheen)
        // =========================================================================
        float floorMask = smoothstep(0.65, 0.98, vUv.y);
        vec2 floorReflectUv = vec2(finalUv.x, 1.0 - (finalUv.y * 0.4));
        vec4 floorReflection = texture2D(uTexture, floorReflectUv);
        
        vec3 floorColor = floorReflection.rgb * vec3(0.3, 0.4, 0.5) * floorMask * lightIntensity * 0.45;
        color += floorColor;

        // =========================================================================
        // SUBTLE GLASS FRESNEL REFLECTION & EDGE HIGHLIGHT
        // =========================================================================
        float glassSheen = smoothstep(0.2, 0.8, sin(vUv.x * 1.5 - vUv.y * 0.8 + uTime * 0.15 + uMouse.x));
        color += vec3(0.04, 0.08, 0.12) * glassSheen * lightIntensity;

        // Dark initial state multiplication: starts almost dark, fills with light
        float startDarkness = mix(0.12, 1.0, lightIntensity);
        color *= startDarkness;

        gl_FragColor = vec4(color, 1.0);
      }
    `,A=new c.BKk({vertexShader:g,fragmentShader:v,uniforms:{uTexture:{value:f},uHasTexture:{value:0},uMouse:{value:new c.I9Y(0,0)},uTime:{value:0},uScroll:{value:0},uIntro:{value:0},uResolution:{value:new c.I9Y(o.clientWidth,o.clientHeight)},uImageRes:{value:new c.I9Y(1920,1080)},uIsMobile:{value:+!!l.current}},depthWrite:!1,depthTest:!1}),b=new c.bdM(2,2),w=new c.eaF(b,A);m.add(w);let y=e=>{if(l.current)return;let t=o.getBoundingClientRect(),r=(e.clientX-t.left)/t.width*2-1,a=-((e.clientY-t.top)/t.height*2-1);i.current.targetX=r,i.current.targetY=a};window.addEventListener("mousemove",y,{passive:!0});let j=()=>{if(!o||!a)return;let e=o.clientWidth,t=o.clientHeight;l.current=e<768,a.setSize(e,t),a.setPixelRatio(Math.min(window.devicePixelRatio,l.current?1.5:2)),A.uniforms.uResolution.value.set(e,t),A.uniforms.uIsMobile.value=+!!l.current};window.addEventListener("resize",j,{passive:!0});let N=new c.zD7,R=()=>{let r=N.getElapsedTime();i.current.x+=(i.current.targetX-i.current.x)*.04,i.current.y+=(i.current.targetY-i.current.y)*.04,A.uniforms.uMouse.value.set(i.current.x,i.current.y),A.uniforms.uTime.value=r,A.uniforms.uScroll.value=e.current?.current??0,A.uniforms.uIntro.value=t.current?.current??0,a.render(m,d),s=requestAnimationFrame(R)};return R(),()=>{cancelAnimationFrame(s),window.removeEventListener("mousemove",y),window.removeEventListener("resize",j),a&&(a.dispose(),o.contains(a.domElement)&&o.removeChild(a.domElement)),b.dispose(),A.dispose(),f.dispose()}},[r,t,e]),(0,a.jsx)("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-10",style:{overflow:"hidden"}})}var d=r(8795);function h(){let e=(0,s.useRef)(null),t=(0,s.useRef)(null),r=(0,s.useRef)(null),l=(0,s.useRef)(null),c=(0,s.useRef)(null),u=(0,s.useRef)(null),x=(0,s.useRef)(null),h=(0,s.useRef)(null);(0,s.useRef)(null);let p=(0,s.useRef)({current:0}),f=(0,s.useRef)({current:0});return(0,o.L)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){f.current.current=1,t.current&&i.Ay.set(t.current,{opacity:1,y:0});return}let a=i.Ay.timeline({defaults:{ease:"power3.out"}});i.Ay.set(t.current,{opacity:0,y:30}),i.Ay.set(r.current,{opacity:0,y:40}),i.Ay.set(l.current,{opacity:0,y:40}),i.Ay.set(c.current,{opacity:0,y:40}),i.Ay.set(u.current,{opacity:0,y:40}),i.Ay.set(x.current,{opacity:0}),a.to(f.current,{current:1,duration:2.8,ease:"power2.inOut"}).to(t.current,{opacity:1,y:0,duration:1.4,ease:"power3.out"},"-=1.2");let s=i.Ay.timeline({scrollTrigger:{trigger:e.current,start:"top top",end:"+=380%",scrub:1,pin:!0,anticipatePin:1}});s.to(p.current,{current:1,ease:"none",duration:4},0),h.current&&s.to(h.current,{scaleX:1,ease:"none",duration:4},0),s.to(t.current,{opacity:0,y:-40,duration:.6,ease:"power2.in"},.2).to(r.current,{opacity:1,y:0,duration:.6,ease:"power2.out"},.7).to(r.current,{opacity:0,y:-30,duration:.5,ease:"power2.in"},1.4),s.to(l.current,{opacity:1,y:0,duration:.6,ease:"power2.out"},1.6).to(l.current,{opacity:0,y:-30,duration:.5,ease:"power2.in"},2.3),s.to(c.current,{opacity:1,y:0,duration:.6,ease:"power2.out"},2.5).to(c.current,{opacity:0,y:-30,duration:.5,ease:"power2.in"},3.1),s.to(u.current,{opacity:1,y:0,duration:.6,ease:"power2.out"},3.3).to(x.current,{opacity:1,duration:.6,ease:"power2.out"},3.4)},{scope:e}),(0,a.jsxs)("div",{ref:e,className:"relative w-full h-[100dvh] overflow-hidden bg-[#020408] select-none",children:[(0,a.jsx)("div",{className:"absolute inset-0 w-full h-full origin-center opacity-30",children:(0,a.jsx)(n.default,{src:d.A,alt:"Архитектура света Владивосток",fill:!0,priority:!0,placeholder:"blur",className:"object-cover object-center"})}),(0,a.jsx)(m,{scrollProgress:p,introProgress:f,imageUrl:d.A.src}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent w-full md:w-3/5 z-20 pointer-events-none"}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/90 via-slate-950/30 to-transparent z-20 pointer-events-none"}),(0,a.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-20 pointer-events-none"}),(0,a.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cyan-950/20 via-slate-950/10 to-transparent z-21 pointer-events-none border-t border-white/5"}),(0,a.jsxs)("div",{className:"relative z-30 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center",children:[(0,a.jsxs)("div",{ref:t,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-2xl lg:max-w-3xl pt-24 pb-16 pointer-events-auto",children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 self-start px-3.5 py-1.5 mb-6 text-[10px] sm:text-xs font-mono text-cyan-300 border border-cyan-400/30 rounded-full bg-slate-950/80 backdrop-blur-xl uppercase tracking-widest shadow-xl",children:[(0,a.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),(0,a.jsx)("span",{children:"Architecture of Light \xb7 Окна Центр"})]}),(0,a.jsxs)("h1",{className:"text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extralight text-white tracking-tight leading-[0.96] mb-6 drop-shadow-[0_16px_32px_rgba(0,0,0,0.95)]",children:[(0,a.jsx)("span",{className:"block font-normal",children:"Свет."}),(0,a.jsx)("span",{className:"block font-light text-slate-200",children:"Вид."}),(0,a.jsx)("span",{className:"block font-extralight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-cyan-300",children:"Пространство."})]}),(0,a.jsx)("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 font-light mb-8 max-w-lg leading-relaxed drop-shadow",children:"Остекление любой сложности во Владивостоке с 2004 года. Фабричное производство, панорамные конструкции, защита от морского климата."}),(0,a.jsxs)("div",{className:"flex flex-row flex-wrap items-center gap-4 mb-8",children:[(0,a.jsx)("a",{href:"#contact",className:"px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all duration-300 uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] cursor-pointer",children:"Рассчитать проект"}),(0,a.jsx)("a",{href:"#projects",className:"px-8 py-4 bg-slate-900/70 hover:bg-slate-900/95 text-white border border-white/20 backdrop-blur-xl rounded-full font-medium transition-all duration-300 uppercase tracking-wider text-xs hover:border-white/40 cursor-pointer",children:"Смотреть работы"})]}),(0,a.jsx)("div",{className:"flex items-center gap-6 text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-widest",children:(0,a.jsx)("span",{children:"↓ Листайте вниз для исследования архитектуры"})})]}),(0,a.jsxs)("div",{ref:r,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-xl lg:max-w-2xl pt-24 pb-16 pointer-events-auto",children:[(0,a.jsx)("span",{className:"font-mono text-cyan-400 text-sm tracking-widest uppercase mb-2",children:"01 / Направления"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-light text-white mb-4 tracking-tight leading-tight",children:"Остекление квартир"}),(0,a.jsx)("p",{className:"text-base sm:text-xl text-cyan-200 font-light mb-3",children:"Окна в пол и балконные блоки"}),(0,a.jsx)("p",{className:"text-sm text-slate-300 font-light leading-relaxed mb-6",children:"Многокамерные системы Funke (Германия) и KBE с энергоэффективными стеклопакетами. Абсолютная шумоизоляция и сохранение тепла даже при сильном ветре с бухты."}),(0,a.jsx)("div",{className:"flex items-center gap-4",children:(0,a.jsx)("a",{href:"#prices",className:"text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors border-b border-cyan-400/40 pb-1",children:"Узнать стоимость от 14 000 ₽ →"})})]}),(0,a.jsxs)("div",{ref:l,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-xl lg:max-w-2xl pt-24 pb-16 pointer-events-auto",children:[(0,a.jsx)("span",{className:"font-mono text-cyan-400 text-sm tracking-widest uppercase mb-2",children:"02 / Направления"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-light text-white mb-4 tracking-tight leading-tight",children:"Частные дома и коттеджи"}),(0,a.jsx)("p",{className:"text-base sm:text-xl text-cyan-200 font-light mb-3",children:"Панорамное и нестандартное остекление"}),(0,a.jsx)("p",{className:"text-sm text-slate-300 font-light leading-relaxed mb-6",children:"Раздвижные порталы Patio, крупноформатные витражи ALUTECH, ламинация под дерево и архитектурная тонировка для загородных резиденций Приморья."}),(0,a.jsx)("div",{className:"flex items-center gap-4",children:(0,a.jsx)("a",{href:"#contact",className:"text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors border-b border-cyan-400/40 pb-1",children:"Индивидуальный расчет проекта →"})})]}),(0,a.jsxs)("div",{ref:c,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-xl lg:max-w-2xl pt-24 pb-16 pointer-events-auto",children:[(0,a.jsx)("span",{className:"font-mono text-cyan-400 text-sm tracking-widest uppercase mb-2",children:"03 / Направления"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-light text-white mb-4 tracking-tight leading-tight",children:"Балконы и лоджии"}),(0,a.jsx)("p",{className:"text-base sm:text-xl text-cyan-200 font-light mb-3",children:"Теплый контур и отделка под ключ"}),(0,a.jsx)("p",{className:"text-sm text-slate-300 font-light leading-relaxed mb-6",children:"Превращение балкона в видовой кабинет или лаунж-зону. Фасадные японские панели \xabХаньи\xbb, утепление пола, встроенная электрика и рулонные евро-жалюзи \xabЗебра\xbb."}),(0,a.jsx)("div",{className:"flex items-center gap-4",children:(0,a.jsx)("a",{href:"#prices",className:"text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors border-b border-cyan-400/40 pb-1",children:"Лоджии под ключ от 55 000 ₽ →"})})]}),(0,a.jsxs)("div",{ref:u,className:"absolute inset-0 px-6 sm:px-10 lg:px-12 flex flex-col justify-center max-w-xl lg:max-w-2xl pt-24 pb-16 pointer-events-auto",children:[(0,a.jsx)("span",{className:"font-mono text-cyan-400 text-sm tracking-widest uppercase mb-2",children:"04 / Направления"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-light text-white mb-4 tracking-tight leading-tight",children:"Фасады и бизнес"}),(0,a.jsx)("p",{className:"text-base sm:text-xl text-cyan-200 font-light mb-3",children:"Алюминиевые витражи ALUTECH"}),(0,a.jsx)("p",{className:"text-sm text-slate-300 font-light leading-relaxed mb-6",children:"Стоечно-ригельные системы, входные группы, огнестойкие конструкции и доставка готовых рам с жесткой обрешеткой по всему Дальнему Востоку."}),(0,a.jsx)("div",{ref:x,className:"p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-xl mb-6 shadow-2xl",children:(0,a.jsx)("p",{className:"text-xs sm:text-sm text-cyan-300 font-mono leading-relaxed",children:"\xabВаш вид меняется. Хорошее остекление остаётся незаметным.\xbb"})}),(0,a.jsx)("div",{className:"flex items-center gap-4",children:(0,a.jsx)("a",{href:"#contact",className:"px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full text-xs uppercase tracking-wider transition-colors",children:"Оставить заявку на замер 0 ₽ →"})})]})]}),(0,a.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-1 bg-white/10 z-40",children:(0,a.jsx)("div",{ref:h,className:"h-full w-full bg-gradient-to-r from-cyan-400 to-blue-500 origin-left scale-x-0"})})]})}i.Ay.registerPlugin(l.u)},8795:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a={src:"/okna-center-demo/_next/static/media/vladivostok-real-window.385d2c3a.jpg",height:768,width:1376,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAjxX/xAAaEAACAgMAAAAAAAAAAAAAAAABAgADBBJB/9oACAEBAAE/AKcq4Mo27P/EABkRAAEFAAAAAAAAAAAAAAAAAAMAAhIykf/aAAgBAgEBPwAhCSu7V//EABgRAQADAQAAAAAAAAAAAAAAAAIAETKR/9oACAEDAQE/AABWDyf/2Q==",blurWidth:8,blurHeight:4}}},e=>{e.O(0,[592,831,367,500,718,175,441,794,358],()=>e(e.s=1793)),_N_E=e.O()}]);