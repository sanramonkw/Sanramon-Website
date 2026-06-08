const G = 'stroke="#C9A96E"';
const GF = 'fill="none" xmlns="http://www.w3.org/2000/svg"';

function svgAmbient() {
  return `<g fill="none" stroke="#C9A96E" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="46" cy="110" r="22" stroke-width=".65" stroke-opacity=".16" style="animation:pulse-s 5s ease-in-out infinite"/>
  <circle cx="46" cy="110" r="7" stroke-width=".7" stroke-opacity=".24"/>
  <circle cx="46" cy="110" r="2" fill="#C9A96E" fill-opacity=".3" stroke="none"/>
  <line x1="24" y1="110" x2="68" y2="110" stroke-width=".5" stroke-opacity=".16"/>
  <line x1="46" y1="88" x2="46" y2="132" stroke-width=".5" stroke-opacity=".16"/>
  <path d="M308 72 A50 50 0 0 1 356 120" stroke-width=".6" stroke-opacity=".15"/>
  <path d="M320 72 A38 38 0 0 1 356 108" stroke-width=".45" stroke-opacity=".1"/>
  <circle cx="308" cy="72" r="2.5" fill="#C9A96E" fill-opacity=".3" stroke="none" style="animation:float1 5s .5s ease-in-out infinite"/>
  <path d="M336 280 L344 292 L336 304 L328 292Z" stroke-width=".7" stroke-opacity=".18" style="animation:float3 7s 1.5s ease-in-out infinite"/>
  <line x1="18" y1="398" x2="34" y2="398" stroke-width=".6" stroke-opacity=".22"/>
  <line x1="18" y1="384" x2="18" y2="400" stroke-width=".6" stroke-opacity=".22"/>
  <line x1="338" y1="62" x2="354" y2="62" stroke-width=".6" stroke-opacity=".2"/>
  <line x1="354" y1="48" x2="354" y2="64" stroke-width=".6" stroke-opacity=".2"/>
  <line x1="18" y1="60" x2="34" y2="60" stroke-width=".5" stroke-opacity=".15"/>
  <line x1="18" y1="46" x2="18" y2="62" stroke-width=".5" stroke-opacity=".15"/>
  <line x1="326" y1="398" x2="342" y2="398" stroke-width=".5" stroke-opacity=".15"/>
  <line x1="342" y1="384" x2="342" y2="400" stroke-width=".5" stroke-opacity=".15"/>
  <circle cx="326" cy="190" r="1.8" fill="#C9A96E" fill-opacity=".25" stroke="none" style="animation:float2 6s 2s ease-in-out infinite"/>
  <circle cx="26" cy="250" r="1.8" fill="#C9A96E" fill-opacity=".2" stroke="none" style="animation:float1 5.5s 1s ease-in-out infinite"/>
  <circle cx="340" cy="344" r="1.5" fill="#C9A96E" fill-opacity=".18" stroke="none" style="animation:float3 7s ease-in-out infinite"/>
  <circle cx="180" cy="88" r="1.5" fill="#C9A96E" fill-opacity=".14" stroke="none" style="animation:pulse-s 4.5s 3s ease-in-out infinite"/>
</g>`;
}

function svgOilGas() {
  return `<svg viewBox="0 0 360 460" ${GF}>
<g ${G} stroke-linecap="round" stroke-linejoin="round">
  <g style="transform-origin:180px 310px;animation:float1 7s ease-in-out infinite">
    <rect x="86" y="376" width="188" height="10" rx="2" stroke-width="1.4" stroke-opacity=".88"/>
    <path d="M148 376 L200 218 L252 376" stroke-width="1.5" stroke-opacity=".92"/>
    <line x1="158" y1="344" x2="242" y2="344" stroke-width=".9" stroke-opacity=".52"/>
    <line x1="165" y1="307" x2="235" y2="307" stroke-width=".9" stroke-opacity=".48"/>
    <line x1="173" y1="272" x2="227" y2="272" stroke-width=".9" stroke-opacity=".44"/>
    <line x1="182" y1="240" x2="218" y2="240" stroke-width=".9" stroke-opacity=".38"/>
    <line x1="158" y1="307" x2="173" y2="344" stroke-width=".6" stroke-opacity=".26"/>
    <line x1="242" y1="307" x2="227" y2="344" stroke-width=".6" stroke-opacity=".26"/>
    <line x1="165" y1="272" x2="182" y2="307" stroke-width=".6" stroke-opacity=".22"/>
    <line x1="235" y1="272" x2="218" y2="307" stroke-width=".6" stroke-opacity=".22"/>
    <rect x="194" y="212" width="12" height="8" rx="2" stroke-width="1.1" stroke-opacity=".78"/>
    <rect x="216" y="350" width="54" height="28" rx="2" stroke-width="1.2" stroke-opacity=".78"/>
    <line x1="234" y1="350" x2="234" y2="378" stroke-width=".7" stroke-opacity=".3"/>
    <line x1="216" y1="362" x2="270" y2="362" stroke-width=".7" stroke-opacity=".3"/>
    <line x1="254" y1="350" x2="254" y2="332" stroke-width="1.1" stroke-opacity=".58"/>
    <ellipse cx="254" cy="331" rx="4" ry="2" stroke-width="1" stroke-opacity=".45"/>
    <rect x="72" y="352" width="22" height="26" rx="2" stroke-width="1.1" stroke-opacity=".62"/>
    <line x1="83" y1="352" x2="83" y2="378" stroke-width=".7" stroke-opacity=".3"/>
  </g>
  <g style="transform-origin:200px 222px;animation:rock 3.8s ease-in-out infinite">
    <rect x="94" y="218" width="212" height="8" rx="3" stroke-width="1.5" stroke-opacity=".92"/>
    <path d="M94 222 Q77 226 73 242 Q69 260 83 265 Q97 269 105 254 Q109 244 104 232" stroke-width="1.4" stroke-opacity=".88"/>
    <line x1="79" y1="265" x2="79" y2="353" stroke-width="1.2" stroke-opacity=".65"/>
    <path d="M306 216 Q328 221 330 238 Q332 257 320 263 Q308 269 298 257 Q290 246 294 232 Q298 220 306 216Z" stroke-width="1.3" stroke-opacity=".86"/>
    <circle cx="200" cy="222" r="5" stroke-width="1.2" stroke-opacity=".7"/>
    <circle cx="200" cy="222" r="2" stroke-width="1" stroke-opacity=".5"/>
  </g>
  <g style="animation:float2 5.5s 1.2s ease-in-out infinite">
    <rect x="30" y="335" width="42" height="53" rx="5" stroke-width="1.1" stroke-opacity=".6"/>
    <ellipse cx="51" cy="335" rx="21" ry="5.5" stroke-width="1" stroke-opacity=".56"/>
    <ellipse cx="51" cy="388" rx="21" ry="5.5" stroke-width="1" stroke-opacity=".56"/>
    <line x1="30" y1="354" x2="72" y2="354" stroke-width=".7" stroke-opacity=".3"/>
    <line x1="30" y1="370" x2="72" y2="370" stroke-width=".7" stroke-opacity=".3"/>
  </g>
  <circle cx="322" cy="148" r="34" stroke-width=".8" stroke-opacity=".14" style="animation:pulse-s 5.5s ease-in-out infinite"/>
  <circle cx="38" cy="168" r="20" stroke-width=".8" stroke-opacity=".12" style="animation:pulse-s 7s 1.8s ease-in-out infinite"/>
  <circle cx="320" cy="380" r="16" stroke-width=".8" stroke-opacity=".1" style="animation:pulse-s 4.5s 2.5s ease-in-out infinite"/>
</g>${svgAmbient()}</svg>`;
}

function svgFoodBev() {
  return `<svg viewBox="0 0 360 460" ${GF}>
<g ${G} stroke-linecap="round" stroke-linejoin="round">
  <g style="transform-origin:163px 300px;animation:float1 5.5s ease-in-out infinite">
    <ellipse cx="163" cy="374" rx="94" ry="10" stroke-width="1" stroke-opacity=".52"/>
    <ellipse cx="163" cy="368" rx="92" ry="14" stroke-width="1.2" stroke-opacity=".78"/>
    <ellipse cx="163" cy="364" rx="78" ry="9" stroke-width=".8" stroke-opacity=".4"/>
    <path d="M73 364 Q74 268 163 244 Q252 268 253 364" stroke-width="1.6" stroke-opacity=".92"/>
    <ellipse cx="163" cy="364" rx="90" ry="12" stroke-width="1.3" stroke-opacity=".82"/>
    <path d="M88 336 Q163 348 238 336" stroke-width=".8" stroke-opacity=".3"/>
    <path d="M154 244 Q154 228 163 224 Q172 228 172 244" stroke-width="1.2" stroke-opacity=".75"/>
    <circle cx="163" cy="220" r="8" stroke-width="1.3" stroke-opacity=".82"/>
    <circle cx="163" cy="220" r="3.5" stroke-width="1" stroke-opacity=".55"/>
    <line x1="141" y1="278" x2="141" y2="285" stroke-width="1" stroke-opacity=".35"/>
    <line x1="163" y1="268" x2="163" y2="276" stroke-width="1" stroke-opacity=".32"/>
    <line x1="185" y1="278" x2="185" y2="285" stroke-width="1" stroke-opacity=".3"/>
  </g>
  <g style="transform-origin:284px 295px;animation:float2 6s .6s ease-in-out infinite">
    <rect x="274" y="168" width="20" height="16" rx="3" stroke-width="1.2" stroke-opacity=".78"/>
    <rect x="277" y="184" width="14" height="38" rx="1" stroke-width="1.1" stroke-opacity=".75"/>
    <path d="M277 222 Q268 240 266 270 L266 374 Q266 388 284 388 Q302 388 302 374 L302 270 Q300 240 291 222 Z" stroke-width="1.5" stroke-opacity=".9"/>
    <rect x="269" y="294" width="30" height="54" rx="2" stroke-width=".8" stroke-opacity=".32"/>
    <line x1="272" y1="312" x2="296" y2="312" stroke-width=".6" stroke-opacity=".24"/>
    <line x1="272" y1="325" x2="296" y2="325" stroke-width=".6" stroke-opacity=".2"/>
    <ellipse cx="284" cy="390" rx="19" ry="5" stroke-width="1" stroke-opacity=".5"/>
  </g>
  <circle cx="44" cy="162" r="28" stroke-width=".8" stroke-opacity=".13" style="animation:pulse-s 6s ease-in-out infinite"/>
  <circle cx="320" cy="168" r="22" stroke-width=".8" stroke-opacity=".11" style="animation:pulse-s 5.5s 1s ease-in-out infinite"/>
  <circle cx="316" cy="388" r="16" stroke-width=".8" stroke-opacity=".1" style="animation:pulse-s 4.5s 2s ease-in-out infinite"/>
</g>${svgAmbient()}</svg>`;
}

function svgCafe() {
  return `<svg viewBox="0 0 360 460" ${GF}>
<g ${G} stroke-linecap="round" stroke-linejoin="round">
  <g style="transform-origin:175px 300px;animation:float1 5s ease-in-out infinite">
    <rect x="90" y="200" width="170" height="160" rx="22" stroke-width="1.6" stroke-opacity=".9"/>
    <path d="M260 240 Q295 240 295 265 Q295 290 260 290" stroke-width="1.4" stroke-opacity=".8"/>
    <ellipse cx="175" cy="372" rx="90" ry="14" stroke-width="1.2" stroke-opacity=".7"/>
    <ellipse cx="175" cy="365" rx="72" ry="8" stroke-width=".9" stroke-opacity=".45"/>
    <line x1="90" y1="245" x2="260" y2="245" stroke-width=".8" stroke-opacity=".3"/>
  </g>
  <path d="M150 195 Q146 172 154 148 Q162 126 150 108" stroke-width="1.3" stroke-opacity=".7" style="animation:steam 3.2s 0s ease-in-out infinite"/>
  <path d="M175 193 Q171 166 179 138 Q187 112 175 90" stroke-width="1.3" stroke-opacity=".6" style="animation:steam 3.2s .9s ease-in-out infinite"/>
  <path d="M200 195 Q196 170 204 144 Q212 120 200 100" stroke-width="1.3" stroke-opacity=".5" style="animation:steam 3.2s 1.7s ease-in-out infinite"/>
  <circle cx="320" cy="170" r="46" stroke-width=".9" stroke-opacity=".2" style="animation:pulse-s 6s ease-in-out infinite"/>
  <circle cx="320" cy="170" r="26" stroke-width=".8" stroke-opacity=".3" style="animation:pulse-s 6s .5s ease-in-out infinite"/>
  <circle cx="38" cy="300" r="32" stroke-width=".9" stroke-opacity=".18" style="animation:pulse-s 7s 1.2s ease-in-out infinite"/>
  <circle cx="310" cy="380" r="18" stroke-width=".8" stroke-opacity=".14" style="animation:pulse-s 4.5s 2s ease-in-out infinite"/>
  <circle cx="50" cy="160" r="12" stroke-width=".8" stroke-opacity=".22" style="animation:float2 5s 1s ease-in-out infinite"/>
</g>${svgAmbient()}</svg>`;
}

function svgBeauty() {
  return `<svg viewBox="0 0 360 460" ${GF}>
<g ${G} stroke-linecap="round" stroke-linejoin="round">
  <g style="transform-origin:148px 260px;animation:float1 6s ease-in-out infinite">
    <ellipse cx="148" cy="218" rx="68" ry="82" stroke-width="1.5" stroke-opacity=".88"/>
    <ellipse cx="148" cy="218" rx="58" ry="72" stroke-width=".8" stroke-opacity=".35"/>
    <line x1="120" y1="190" x2="130" y2="178" stroke-width=".9" stroke-opacity=".38"/>
    <line x1="128" y1="186" x2="140" y2="172" stroke-width=".9" stroke-opacity=".3"/>
    <line x1="137" y1="183" x2="149" y2="170" stroke-width=".9" stroke-opacity=".24"/>
    <path d="M140 300 Q138 310 138 318" stroke-width="1.3" stroke-opacity=".72"/>
    <path d="M156 300 Q158 310 158 318" stroke-width="1.3" stroke-opacity=".72"/>
    <rect x="136" y="317" width="24" height="64" rx="12" stroke-width="1.4" stroke-opacity=".85"/>
    <line x1="141" y1="336" x2="159" y2="336" stroke-width=".7" stroke-opacity=".3"/>
    <line x1="141" y1="350" x2="159" y2="350" stroke-width=".7" stroke-opacity=".26"/>
    <ellipse cx="148" cy="383" rx="14" ry="4" stroke-width="1" stroke-opacity=".44"/>
  </g>
  <g style="transform-origin:258px 305px;animation:float2 5s .8s ease-in-out infinite">
    <rect x="244" y="290" width="28" height="54" rx="4" stroke-width="1.2" stroke-opacity=".78"/>
    <ellipse cx="258" cy="344" rx="14" ry="3.5" stroke-width="1" stroke-opacity=".52"/>
    <path d="M244 290 L244 265 Q244 250 258 246 Q272 250 272 265 L272 290" stroke-width="1.3" stroke-opacity=".82"/>
    <path d="M247 270 Q258 248 272 266" stroke-width=".8" stroke-opacity=".36"/>
    <line x1="244" y1="278" x2="272" y2="278" stroke-width=".7" stroke-opacity=".28"/>
    <ellipse cx="258" cy="377" rx="14" ry="4" stroke-width="1" stroke-opacity=".4"/>
  </g>
  <g style="transform-origin:74px 278px;animation:float3 5.5s 1.2s ease-in-out infinite">
    <rect x="67" y="312" width="14" height="86" rx="7" stroke-width="1.2" stroke-opacity=".74"/>
    <rect x="65" y="298" width="18" height="17" rx="2" stroke-width="1.2" stroke-opacity=".82"/>
    <path d="M65 298 Q57 272 62 244 Q66 222 74 215 Q82 222 86 244 Q91 272 83 298 Z" stroke-width="1.4" stroke-opacity=".88"/>
    <line x1="70" y1="270" x2="78" y2="262" stroke-width=".7" stroke-opacity=".28"/>
    <line x1="68" y1="254" x2="80" y2="244" stroke-width=".7" stroke-opacity=".24"/>
    <ellipse cx="74" cy="400" rx="8" ry="3" stroke-width="1" stroke-opacity=".36"/>
  </g>
  <circle cx="312" cy="142" r="30" stroke-width=".8" stroke-opacity=".13" style="animation:pulse-s 5.5s ease-in-out infinite"/>
  <circle cx="330" cy="312" r="20" stroke-width=".8" stroke-opacity=".1" style="animation:pulse-s 6s 1.5s ease-in-out infinite"/>
  <circle cx="42" cy="170" r="18" stroke-width=".8" stroke-opacity=".11" style="animation:pulse-s 7s 2s ease-in-out infinite"/>
</g>${svgAmbient()}</svg>`;
}

function svgInterior() {
  return `<svg viewBox="0 0 360 460" ${GF}>
<g ${G} stroke-linecap="round" stroke-linejoin="round">
  <g style="transform-origin:180px 260px;animation:float2 6s ease-in-out infinite">
    <path d="M90 240 L180 145 L270 240" stroke-width="1.5" stroke-opacity=".9"/>
    <rect x="90" y="240" width="180" height="155" rx="1" stroke-width="1.5" stroke-opacity=".88"/>
    <line x1="90" y1="240" x2="90" y2="395" stroke-width="1.5" stroke-opacity=".88"/>
    <line x1="270" y1="240" x2="270" y2="395" stroke-width="1.5" stroke-opacity=".88"/>
    <rect x="106" y="268" width="44" height="44" rx="2" stroke-width="1.1" stroke-opacity=".6"/>
    <line x1="128" y1="268" x2="128" y2="312" stroke-width=".7" stroke-opacity=".4"/>
    <line x1="106" y1="290" x2="150" y2="290" stroke-width=".7" stroke-opacity=".4"/>
    <rect x="210" y="268" width="44" height="44" rx="2" stroke-width="1.1" stroke-opacity=".6"/>
    <line x1="232" y1="268" x2="232" y2="312" stroke-width=".7" stroke-opacity=".4"/>
    <line x1="210" y1="290" x2="254" y2="290" stroke-width=".7" stroke-opacity=".4"/>
    <rect x="152" y="322" width="56" height="73" rx="3" stroke-width="1.2" stroke-opacity=".7"/>
    <line x1="180" y1="322" x2="180" y2="395" stroke-width=".8" stroke-opacity=".4"/>
    <circle cx="180" cy="358" r="5" stroke-width="1" stroke-opacity=".6"/>
  </g>
  <g style="animation:rot-ccw 22s linear infinite;transform-origin:310px 150px">
    <circle cx="310" cy="150" r="28" stroke-width=".8" stroke-opacity=".25"/>
    <line x1="310" y1="122" x2="310" y2="178" stroke-width=".7" stroke-opacity=".2"/>
    <line x1="282" y1="150" x2="338" y2="150" stroke-width=".7" stroke-opacity=".2"/>
    <circle cx="310" cy="150" r="5" stroke-width="1" stroke-opacity=".4"/>
  </g>
  <line x1="36" y1="120" x2="80" y2="420" stroke-width=".8" stroke-opacity=".18" style="animation:float3 8s ease-in-out infinite"/>
  <line x1="26" y1="390" x2="86" y2="140" stroke-width=".7" stroke-opacity=".12" style="animation:float3 8s .5s ease-in-out infinite"/>
  <rect x="32" y="200" width="22" height="22" stroke-width=".8" stroke-opacity=".25" style="animation:float2 5s 1s ease-in-out infinite"/>
  <circle cx="46" cy="330" r="16" stroke-width=".8" stroke-opacity=".16" style="animation:pulse-s 5s 2s ease-in-out infinite"/>
  <circle cx="322" cy="350" r="24" stroke-width=".8" stroke-opacity=".13" style="animation:pulse-s 6s 1s ease-in-out infinite"/>
</g>${svgAmbient()}</svg>`;
}

function svgProducts() {
  return `<svg viewBox="0 0 360 460" ${GF}>
<g ${G} stroke-linecap="round" stroke-linejoin="round">
  <line x1="50" y1="382" x2="310" y2="382" stroke-width="1.4" stroke-opacity=".62"/>
  <g style="transform-origin:105px 310px;animation:float1 5.5s ease-in-out infinite">
    <path d="M88 382 L88 300 Q88 294 95 290 L95 264 Q95 258 105 258 Q115 258 115 264 L115 290 Q122 294 122 300 L122 382 Z" stroke-width="1.4" stroke-opacity=".9"/>
    <line x1="88" y1="300" x2="122" y2="300" stroke-width=".8" stroke-opacity=".35"/>
    <line x1="95" y1="268" x2="115" y2="268" stroke-width=".8" stroke-opacity=".35"/>
    <rect x="98" y="244" width="14" height="15" rx="3" stroke-width="1.2" stroke-opacity=".78"/>
    <rect x="91" y="312" width="28" height="50" rx="2" stroke-width=".8" stroke-opacity=".32"/>
    <line x1="94" y1="324" x2="116" y2="324" stroke-width=".6" stroke-opacity=".24"/>
    <line x1="94" y1="334" x2="116" y2="334" stroke-width=".6" stroke-opacity=".2"/>
  </g>
  <g style="transform-origin:180px 300px;animation:float2 6s .5s ease-in-out infinite">
    <rect x="148" y="262" width="64" height="120" rx="4" stroke-width="1.5" stroke-opacity=".92"/>
    <ellipse cx="180" cy="262" rx="32" ry="8" stroke-width="1.3" stroke-opacity=".88"/>
    <ellipse cx="180" cy="382" rx="32" ry="8" stroke-width="1.1" stroke-opacity=".72"/>
    <line x1="148" y1="292" x2="212" y2="292" stroke-width=".8" stroke-opacity=".32"/>
    <line x1="148" y1="352" x2="212" y2="352" stroke-width=".8" stroke-opacity=".32"/>
    <line x1="157" y1="312" x2="203" y2="312" stroke-width=".7" stroke-opacity=".28"/>
    <line x1="157" y1="324" x2="203" y2="324" stroke-width=".7" stroke-opacity=".24"/>
    <line x1="157" y1="336" x2="196" y2="336" stroke-width=".7" stroke-opacity=".2"/>
    <ellipse cx="180" cy="254" rx="32" ry="8" stroke-width="1.2" stroke-opacity=".75"/>
    <ellipse cx="180" cy="250" rx="26" ry="6" stroke-width=".9" stroke-opacity=".55"/>
  </g>
  <g style="transform-origin:263px 315px;animation:float3 5s 1s ease-in-out infinite">
    <rect x="232" y="264" width="62" height="118" rx="2" stroke-width="1.4" stroke-opacity=".9"/>
    <path d="M232 264 L244 250 L306 250 L294 264" stroke-width="1.2" stroke-opacity=".82"/>
    <line x1="269" y1="250" x2="263" y2="264" stroke-width=".9" stroke-opacity=".45"/>
    <path d="M294 264 L306 250 L306 362 L294 382" stroke-width="1.1" stroke-opacity=".75"/>
    <line x1="232" y1="300" x2="294" y2="300" stroke-width=".8" stroke-opacity=".32"/>
    <line x1="232" y1="342" x2="294" y2="342" stroke-width=".8" stroke-opacity=".28"/>
    <rect x="240" y="306" width="46" height="28" rx="1" stroke-width=".7" stroke-opacity=".3"/>
    <line x1="245" y1="310" x2="245" y2="330" stroke-width=".7" stroke-opacity=".28"/>
    <line x1="249" y1="310" x2="249" y2="330" stroke-width=".5" stroke-opacity=".2"/>
    <line x1="252" y1="310" x2="252" y2="330" stroke-width=".8" stroke-opacity=".28"/>
    <line x1="256" y1="310" x2="256" y2="330" stroke-width=".5" stroke-opacity=".2"/>
    <line x1="259" y1="310" x2="259" y2="330" stroke-width=".7" stroke-opacity=".25"/>
    <line x1="263" y1="310" x2="263" y2="330" stroke-width=".5" stroke-opacity=".2"/>
    <line x1="266" y1="310" x2="266" y2="330" stroke-width=".8" stroke-opacity=".26"/>
    <line x1="270" y1="310" x2="270" y2="330" stroke-width=".5" stroke-opacity=".2"/>
    <line x1="274" y1="310" x2="274" y2="330" stroke-width=".7" stroke-opacity=".25"/>
    <line x1="278" y1="310" x2="278" y2="330" stroke-width=".8" stroke-opacity=".26"/>
  </g>
  <circle cx="55" cy="150" r="28" stroke-width=".8" stroke-opacity=".14" style="animation:pulse-s 6s ease-in-out infinite"/>
  <circle cx="320" cy="160" r="22" stroke-width=".8" stroke-opacity=".12" style="animation:pulse-s 5.5s 1s ease-in-out infinite"/>
  <circle cx="320" cy="395" r="16" stroke-width=".8" stroke-opacity=".1" style="animation:pulse-s 4s 2s ease-in-out infinite"/>
</g>${svgAmbient()}</svg>`;
}

const SECTOR_KEYS = ['home.sector.oilGas', 'home.sector.food', 'home.sector.cafe', 'home.sector.beauty', 'home.sector.interior', 'home.sector.products'];
const SECTORS = [
  { key: SECTOR_KEYS[0], name: 'Oil &amp; Gas',       svg: svgOilGas()   },
  { key: SECTOR_KEYS[1], name: 'Food &amp; Beverages', svg: svgFoodBev()  },
  { key: SECTOR_KEYS[2], name: 'Café &amp; Restaurants', svg: svgCafe()  },
  { key: SECTOR_KEYS[3], name: 'Beauty Products',     svg: svgBeauty()   },
  { key: SECTOR_KEYS[4], name: 'Interior Design',     svg: svgInterior() },
  { key: SECTOR_KEYS[5], name: 'Products',            svg: svgProducts() }
];

function sectorLabel(idx) {
  const s = SECTORS[idx];
  if (window.SR_I18N && window.SR_I18N.getLang() === 'ar') {
    const ar = window.SR_I18N.t(s.key);
    if (ar) return ar;
  }
  return s.name;
}

const visEl   = document.getElementById('h-vis');
const nameEl  = document.getElementById('hs-name');
const dotsEl  = document.getElementById('h-dots-nav');
const bgNumEl = document.getElementById('h-bg-num');
let active = 0, paused = false, timer = null;

// Build dots
SECTORS.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'h-dot' + (i === 0 ? ' active' : '');
  d.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(d);
});

function goTo(idx) {
  if (idx === active) return;
  visEl.classList.add('out');
  nameEl.style.opacity = '0';
  setTimeout(() => {
    active = idx;
    visEl.innerHTML = SECTORS[idx].svg;
    nameEl.innerHTML = sectorLabel(idx);
    if (bgNumEl) bgNumEl.textContent = String(idx + 1).padStart(2, '0');
    document.querySelectorAll('.h-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    requestAnimationFrame(() => requestAnimationFrame(() => {
      visEl.classList.remove('out');
      nameEl.style.opacity = '1';
      nameEl.style.transform = 'translateY(0)';
    }));
  }, 500);
}

function advance() { if (!paused) goTo((active + 1) % SECTORS.length); }

// Init
visEl.innerHTML = SECTORS[0].svg;
nameEl.innerHTML = sectorLabel(0);
if (bgNumEl) bgNumEl.textContent = '01';
nameEl.style.transition = 'opacity .5s ease, transform .5s ease';
timer = setInterval(advance, 5500);

const heroEl = document.querySelector('.hero');
heroEl.addEventListener('mouseenter', () => { paused = true; });
heroEl.addEventListener('mouseleave', () => { paused = false; });

// Clone brand logos once for seamless marquee (HTML keeps a single set)
document.querySelectorAll('.brand-row').forEach((row) => {
  [...row.children].forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    row.appendChild(clone);
  });
});

document.addEventListener('langchange', (e) => {
  if (nameEl) nameEl.innerHTML = sectorLabel(active);
});