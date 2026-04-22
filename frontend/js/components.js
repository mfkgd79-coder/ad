// js/components.js
// ============================================
// PASTE YOUR UI ELEMENTS HERE - They will auto-appear
// Categories available: buttons, checkboxes, cards, inputs, forms, 
// tooltips, toggle-switches, radio-buttons, loaders, patterns
// ============================================

const components = [
  // ========== BUTTONS ==========
  {
    name: "neon zigzag",
    category: "buttons",
    html: '<!-- From Uiverse.io by gharsh11032000 --> <button class="button">Button </button>',
    css: `  /* From Uiverse.io by gharsh11032000 */ 
.button {
  position: relative;
  width: 120px;
  height: 40px;
  background-color: #000;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -4px;
  top: -1px;
  margin: auto;
  width: 128px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.button:hover::after {
  filter: blur(30px);
}

.button:hover::before {
  transform: rotate(-180deg);
}

.button:active::before {
  scale: 0.7;
}
    
`,
  }, {
    name: "Purple Gradient Button",
    category: "patterns",
    html: ` <div class="main">
  <div class="card">
    <svg
      fill-rule="nonzero"
      height="30px"
      width="30px"
      viewBox="0,0,256,256"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      class="instagram"
    >
      <g
        style="mix-blend-mode: normal"
        text-anchor="none"
        font-size="none"
        font-weight="none"
        font-family="none"
        stroke-dashoffset="0"
        stroke-dasharray=""
        stroke-miterlimit="10"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-width="1"
        stroke="none"
        fill-rule="nonzero"
      >
        <g transform="scale(8,8)">
          <path
            d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"
          ></path>
        </g>
      </g>
    </svg>
  </div>
  <div class="card">
    <svg
      height="30px"
      width="30px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class="twitter"
    >
      <path
        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
      ></path>
    </svg>
  </div>
  <div class="card">
    <svg
      height="30px"
      width="30px"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      class="dribble"
    >
      <path
        d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"
      ></path>
      <path
        d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
        fill="#ea4c89"
      ></path>
      <path
        d="M28.352 36.914c0 0-3.032-21.087-15.63-34.292M1.269 17.848c0 0 24.2 2.117 32.075-11.102M7.804 34.152c0 0 8.624-19.807 31.058-12.194"
        stroke-miterlimit="10"
        stroke="#ea4c89"
        fill="none"
      ></path>
    </svg>
  </div>
  <div class="card">
    <svg
      height="30px"
      width="30px"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      class="codepen"
    >
      <path
        d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z"
      ></path>
    </svg>
  </div>
  <div class="card">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      height="23px"
      width="23px"
      class="uiverse"
    >
      <path
        fill="url(#paint0_linear_501_142)"
        d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"
      ></path>
      <path
        fill="url(#paint1_linear_501_142)"
        d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"
      ></path>
      <path
        fill="url(#paint2_linear_501_142)"
        d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"
      ></path>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="87.6201"
          x2="96.1684"
          y1="0"
          x1="0"
          id="paint0_linear_501_142"
        >
          <stop stop-color="#BF66FF"></stop>
          <stop stop-color="#6248FF" offset="0.510417"></stop>
          <stop stop-color="#00DDEB" offset="1"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="87.6201"
          x2="96.1684"
          y1="0"
          x1="0"
          id="paint1_linear_501_142"
        >
          <stop stop-color="#BF66FF"></stop>
          <stop stop-color="#6248FF" offset="0.510417"></stop>
          <stop stop-color="#00DDEB" offset="1"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="87.6201"
          x2="96.1684"
          y1="0"
          x1="0"
          id="paint2_linear_501_142"
        >
          <stop stop-color="#BF66FF"></stop>
          <stop stop-color="#6248FF" offset="0.510417"></stop>
          <stop stop-color="#00DDEB" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="card">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="30px"
      height="30px"
      class="discord"
    >
      <path
        d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"
      ></path>
    </svg>
  </div>
  <div class="card">
    <svg
      height="30px"
      width="30px"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      class="github"
    >
      <path
        d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
      ></path>
    </svg>
  </div>
  <div class="card">
    <svg
      height="30px"
      width="30px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class="telegram"
    >
      <path d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
      <path
        d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
        fill="#fff"
      ></path>
      <path
        d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
        fill="#b0bec5"
      ></path>
      <path
        d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
        fill="#cfd8dc"
      ></path>
    </svg>
  </div>
  <div class="card">
    <svg
      xml:space="preserve"
      viewBox="0 0 256 256"
      height="30"
      width="30"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      class="reddit"
    >
      <defs></defs>
      <g
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        style="stroke: none; border-radius:50%; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
      >
        <circle
          transform="matrix(1 0 0 1 0 0)"
          style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
          r="45"
          cy="45"
          cx="45"
        ></circle>
        <path
          stroke-linecap="round"
          transform="matrix(1 0 0 1 0 0)"
          style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
          d="M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z"
        ></path>
      </g>
    </svg>
  </div>
  <p class="text">HOVER<br /><br />FOR<br /><br />SOCIAL</p>
  <div class="main_back"></div>
</div>`,
    css: ` */ 
.main_back {
  position: absolute;
  border-radius: 10px;
  transform: rotate(90deg);
  width: 11em;
  height: 11em;
  background: linear-gradient(270deg, #03a9f4, #cc39a4, #ffb5d2);
  z-index: -2;
  box-shadow: inset 0px 0px 180px 5px #ffffff;
}

.main {
  display: flex;
  flex-wrap: wrap;
  width: 14em;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
    0.2s background-image ease-in-out;
  background: rgba(255, 255, 255, 0.596);
  backdrop-filter: blur(5px);
  border: 1px solid transparent;
  -webkit-backdrop-filter: blur(5px);
}

.card .instagram {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #cc39a4;
}

.card:nth-child(2) {
  border-radius: 0px;
}

.card:nth-child(2) .twitter {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #03a9f4;
}

.card:nth-child(3) {
  border-top-right-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(3) .dribble {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #ffb5d2;
}

.card:nth-child(4) {
  border-radius: 0px;
}

.card:nth-child(4) .codepen {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: black;
}

.card:nth-child(5) {
  border-radius: 0px;
}

.card:nth-child(5) .uiverse {
  position: absolute;
  margin-left: 0.2em;
  margin-top: 0.2em;
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.card:nth-child(6) {
  border-radius: 0px;
}

.card:nth-child(6) .discord {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #8c9eff;
}

.card:nth-child(7) {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(7) .github {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: black;
}

.card:nth-child(8) {
  border-radius: 0px;
}

.card:nth-child(8) .telegram {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #29b6f6;
}

.card:nth-child(9) {
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(9) .reddit {
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.main:hover {
  width: 14em;
  cursor: pointer;
}

.main:hover .main_back {
  opacity: 0;
}

.main:hover .card {
  margin: 0.2em;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
}

.main:hover .card:nth-child(5) {
  border: transparent;
}

.main:hover .text {
  opacity: 0;
  z-index: -3;
}

.main:hover .instagram {
  opacity: 1;
}

.main:hover .twitter {
  opacity: 1;
}

.main:hover .dribble {
  opacity: 1;
}

.main:hover .codepen {
  opacity: 1;
}

.main:hover .uiverse {
  opacity: 1;
}

.main:hover .discord {
  opacity: 1;
}

.main:hover .github {
  opacity: 1;
}

.main:hover .telegram {
  opacity: 1;
}

.main:hover .reddit {
  opacity: 1;
}

.card:nth-child(1):hover {
  background-color: #cc39a4;
}

.card:nth-child(1):hover .instagram {
  fill: white;
}

.card:nth-child(2):hover {
  background-color: #03a9f4;
}

.card:nth-child(2):hover .twitter {
  fill: white;
}

.card:nth-child(3):hover {
  background-color: #ffb5d2;
}

.card:nth-child(3):hover .dribble {
  fill: white;
}

.card:nth-child(4):hover {
  background-color: #1e1f26;
}

.card:nth-child(4):hover .codepen {
  fill: white;
}

.card:nth-child(5):hover {
  animation: backgroundIMG 0.1s;
  animation-fill-mode: forwards;
}

.card:nth-child(5):hover .uiverse #paint0_linear_501_142 stop {
  stop-color: white;
}

.card:nth-child(5):hover .uiverse #paint1_linear_501_142 stop {
  stop-color: white;
}

.card:nth-child(5):hover .uiverse #paint2_linear_501_142 stop {
  stop-color: white;
}

@keyframes backgroundIMG {
  100% {
    background-image: linear-gradient(#bf66ff, #6248ff, #00ddeb);
  }
}

.card:nth-child(6):hover {
  background-color: #8c9eff;
}

.card:nth-child(6):hover .discord {
  fill: white;
}

.card:nth-child(7):hover {
  background-color: black;
}

.card:nth-child(7):hover .github {
  fill: white;
}

.card:nth-child(8):hover {
  background-color: #29b6f6;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(1) {
  fill: white;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(2) {
  fill: #29b6f6;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(3) {
  fill: #29b6f6;
}

.card:nth-child(9):hover {
  background-color: rgb(255, 69, 0);
}

.card:nth-child(9) .reddit > g circle {
  fill: rgb(255, 69, 0);
}

.card:nth-child(9) .reddit > g path {
  fill: white;
}

.text {
  position: absolute;
  font-size: 0.7em;
  transition: 0.4s ease-in-out;
  color: black;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.33em;
  z-index: 3;
}`
  }, {
    name: "upgrade Button",
    category: "buttons",
    html: `<button class="upgrade-btn">Upgrade</button>`,
    css: `.upgrade-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 215px;
  height: 40px;
  background: #0bdd12;
  box-shadow: 0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
  border-radius: 7px;
  border: 0;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.upgrade-btn:hover {
  background-color: #07b90d;
}`
  },

  {
    name: "Glow Button",
    category: "buttons",
    html: `<button class="btn-glow">hover me</button>`,
    css: `.btn-glow {
  background: #2a2550;
  border: 2px solid #8f7ae6;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 60px;
  transition: 0.2s;
  cursor: pointer;
}

.btn-glow:hover {
  box-shadow: 0 0 25px #b29eff;
  background: #3f3590;
}`
  },

  {
    name: "3D Button",
    category: "buttons",
    html: `<button class="btn-3d">press me</button>`,
    css: `.btn-3d {
  background: #4b3d94;
  border: none;
  border-bottom: 6px solid #2d2560;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 40px;
  transition: 0.1s;
  cursor: pointer;
}

.btn-3d:active {
  border-bottom-width: 2px;
  transform: translateY(4px);
}`
  },
   {
    name: "Green Gradient Button",
    category: "buttons",
    html: `<button class="btn">Hover me</button>`,
    css: `/* From Uiverse.io by joe-watson-sbf */ 
.btn {
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #ffedd3;
  text-transform: uppercase;
  position: relative;
  transition: 0.5s ease;
  cursor: pointer;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #ffc506;
  transition: 0.5s ease;
}

.btn:hover {
  color: #1e1e2b;
  transition-delay: 0.5s;
}

.btn:hover::before {
  width: 100%;
}

.btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #ffc506;
  transition: 0.4s ease;
  z-index: -1;
}

.btn:hover::after {
  height: 100%;
  transition-delay: 0.4s;
  color: aliceblue;
}
`
  },

  // ========== CHECKBOXES ==========
  {
    name: "Neon Checkbox",
    category: "checkboxes",
    html: `<label class="neon-checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
  Accept terms
</label>`,
    css: `.neon-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.neon-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  height: 20px;
  width: 20px;
  background: #1f1b41;
  border: 2px solid #7a68d0;
  border-radius: 6px;
  transition: 0.2s;
}

.neon-checkbox:hover input ~ .checkmark {
  background: #2a2550;
  border-color: #a388ff;
}

.neon-checkbox input:checked ~ .checkmark {
  background: #6b5ace;
  border-color: #b09eff;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.neon-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.neon-checkbox .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}`
  },

  // ========== CARDS ==========
  {
    name: "Premium Modal Card",
    category: "cards",
    html: `<div class="modal-card">
  <div class="banner"></div>
  <span class="title">Unlock Premium</span>
  <span class="description">Upgrade now and get access to all premium features</span>
  <div class="tab-container">
    <button class="tab tab--1">Monthly</button>
    <button class="tab tab--2">Yearly</button>
    <span class="indicator"></span>
  </div>
  <div class="benefits">
    <span>What's included</span>
    <ul>
      <li><i class="fa-regular fa-circle-check" style="color: #0bdd12;"></i> <span>Everything from the free plan</span></li>
      <li><i class="fa-regular fa-circle-check" style="color: #0bdd12;"></i> <span>Access to all premium features</span></li>
      <li><i class="fa-regular fa-circle-check" style="color: #0bdd12;"></i> <span>Weekly live sessions</span></li>
    </ul>
  </div>
  <div class="card-footer">
    <span class="price"><sup>$</sup>12<span><sub>/month</sub></span></span>
    <button class="upgrade-btn">Upgrade now</button>
  </div>
</div>`,
    css: `.modal-card {
  width: 450px;
  background: linear-gradient(180deg, #DCF9E0 0%, #FFFFFF 30.21%);
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.banner {
  width: 100%;
  height: 30px;
  margin: 0;
  background-size: 100%;
  background-repeat: no-repeat;
}

.title {
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #2B2B2F;
  margin-bottom: 15px;
  display: block;
}

.description {
  max-width: 80%;
  margin: auto;
  font-weight: 600;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #5F5D6B;
}

.tab-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  padding: 2px;
  background-color: #ebebec;
  border-radius: 9px;
  margin: 10px 20px 0px 20px;
}

.indicator {
  content: "";
  width: 50%;
  height: 28px;
  background: #FFFFFF;
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 9;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  transition: all 0.2s ease-out;
}

.tab {
  width: 50%;
  height: 28px;
  position: relative;
  z-index: 99;
  background-color: transparent;
  border: 0;
  outline: none;
  flex: none;
  align-self: stretch;
  flex-grow: 1;
  cursor: pointer;
  font-weight: 500;
}

.tab--1:hover ~ .indicator {
  left: 2px;
}

.tab--2:hover ~ .indicator {
  left: calc(50% - 2px);
}

.benefits {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.benefits > span {
  font-size: 15px;
  color: #2B2B2F;
  font-weight: 700;
}

.benefits ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits ul li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.benefits ul li span {
  font-weight: 600;
  font-size: 12px;
  color: #5F5D6B;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #ebebec;
}

.price {
  position: relative;
  font-size: 32px;
  color: #2B2B2F;
  font-weight: 900;
}

.price sup {
  font-size: 13px;
}

.price sub {
  width: fit-content;
  position: absolute;
  font-size: 11px;
  color: #5F5D6B;
  bottom: 5px;
  display: inline-block;
}`
  },

  // ========== INPUTS ==========
  {
    name: "Minimal Input",
    category: "inputs",
    html: `<input class="minimal-input" placeholder="Type something...">`,
    css: `.minimal-input {
  background: #1f1b41;
  border: 1px solid #5e51a5;
  border-radius: 60px;
  padding: 1rem 1.5rem;
  color: white;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  transition: 0.2s;
}

.minimal-input:focus {
  border-color: #b59eff;
  outline: none;
  box-shadow: 0 0 15px rgba(181, 158, 255, 0.3);
}

.minimal-input::placeholder {
  color: #7a6db0;
}`
  },

  // ========== FORMS ==========
  {
    name: "Royal Blue Form",
    category: "forms",
    html: `<form class="blue-form">
  <p class="form-title">Register</p>
  <p class="form-message">Signup now and get full access to our app.</p>
  <div class="flex-row">
    <label>
      <input class="form-input" type="text" placeholder="" required="">
      <span>Firstname</span>
    </label>
    <label>
      <input class="form-input" type="text" placeholder="" required="">
      <span>Lastname</span>
    </label>
  </div>  
  <label>
    <input class="form-input" type="email" placeholder="" required="">
    <span>Email</span>
  </label> 
  <label>
    <input class="form-input" type="password" placeholder="" required="">
    <span>Password</span>
  </label>
  <label>
    <input class="form-input" type="password" placeholder="" required="">
    <span>Confirm password</span>
  </label>
  <button class="form-submit">Submit</button>
  <p class="signin-link">Already have an account? <a href="#">Sign in</a></p>
</form>`,
    css: `.blue-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}

.form-title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin: 0;
}

.form-title::before,
.form-title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.form-title::before {
  width: 18px;
  height: 18px;
}

.form-title::after {
  width: 18px;
  height: 18px;
  animation: formPulse 1s linear infinite;
}

.form-message,
.signin-link {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.signin-link {
  text-align: center;
}

.signin-link a {
  color: royalblue;
  text-decoration: none;
}

.signin-link a:hover {
  text-decoration: underline royalblue;
}

.flex-row {
  display: flex;
  width: 100%;
  gap: 6px;
}

.blue-form label {
  position: relative;
}

.blue-form label .form-input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.blue-form label .form-input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.blue-form label .form-input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.blue-form label .form-input:focus + span,
.blue-form label .form-input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.blue-form label .form-input:valid + span {
  color: green;
}

.form-submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transition: 0.3s ease;
  cursor: pointer;
}

.form-submit:hover {
  background-color: rgb(56, 90, 194);
}

@keyframes formPulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}`
  },

  // ========== TOOLTIPS ==========
  {
    name: "Neon Tooltip",
    category: "tooltips",
    html: `<div class="tooltip-container">
  <span class="tooltip-trigger">Hover me</span>
  <span class="tooltip-content">This is a neon tooltip!</span>
</div>`,
    css: `.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-trigger {
  background: #2a2550;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 40px;
  cursor: pointer;
  border: 1px solid #7a68d0;
}

.tooltip-content {
  visibility: hidden;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #1f1b41;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 20px;
  white-space: nowrap;
  border: 1px solid #a388ff;
  box-shadow: 0 0 20px #6b5ace;
  opacity: 0;
  transition: 0.2s;
  z-index: 10;
}

.tooltip-content::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: #a388ff transparent transparent transparent;
}

.tooltip-container:hover .tooltip-content {
  visibility: visible;
  opacity: 1;
  bottom: 140%;
}`
  },

  // ========== TOGGLE SWITCHES ==========
  {
    name: "Neon Toggle",
    category: "toggle-switches",
    html: `<label class="neon-toggle">
  <input type="checkbox">
  <span class="toggle-slider"></span>
  Enable notifications
</label>`,
    css: `.neon-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.neon-toggle input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background: #312c58;
  border-radius: 34px;
  transition: 0.2s;
  border: 1px solid #5e4fa8;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 2px;
  background: #a388ff;
  border-radius: 50%;
  transition: 0.2s;
}

.neon-toggle input:checked + .toggle-slider {
  background: #3c3470;
  border-color: #b09eff;
}

.neon-toggle input:checked + .toggle-slider:before {
  transform: translateX(26px);
  background: #ffffff;
}`
  },

  // ========== RADIO BUTTONS ==========
  {
    name: "Neon Radio",
    category: "radio-buttons",
    html: `<div class="radio-group">
  <label class="neon-radio">
    <input type="radio" name="radio-group" checked>
    <span class="radio-custom"></span>
    Option 1
  </label>
  <label class="neon-radio">
    <input type="radio" name="radio-group">
    <span class="radio-custom"></span>
    Option 2
  </label>
</div>`,
    css: `.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.neon-radio {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.neon-radio input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-custom {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #1f1b41;
  border: 2px solid #7a68d0;
  border-radius: 50%;
  transition: 0.2s;
}

.neon-radio:hover .radio-custom {
  background: #2a2550;
  border-color: #a388ff;
}

.neon-radio input:checked + .radio-custom {
  background: #6b5ace;
  border-color: #b09eff;
}

.radio-custom:after {
  content: "";
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
}

.neon-radio input:checked + .radio-custom:after {
  display: block;
}`
  },

  // ========== LOADERS ==========
  {
    name: "Dots Loader",
    category: "loaders",
    html: `<div class="dots-loader">
  <div></div>
  <div></div>
  <div></div>
</div>`,
    css: `.dots-loader {
  display: flex;
  gap: 8px;
}

.dots-loader div {
  width: 12px;
  height: 12px;
  background: #b39eff;
  border-radius: 50%;
  animation: dotsPulse 0.8s infinite;
}

.dots-loader div:nth-child(2) {
  animation-delay: 0.2s;
}

.dots-loader div:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dotsPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}`
  },

  {
    name: "Spinner Loader",
    category: "loaders",
    html: `<div class="spinner-loader"></div>`,
    css: `.spinner-loader {
  width: 40px;
  height: 40px;
  border: 4px solid #312b60;
  border-top-color: #b09eff;
  border-radius: 50%;
  animation: spinnerRotate 0.8s infinite linear;
}

@keyframes spinnerRotate {
  to {
    transform: rotate(360deg);
  }
}`
  },

  // ========== PATTERNS ==========
  {
    name: "Grid Pattern",
    category: "patterns",
    html: `<div class="grid-pattern">
  <div class="grid-dot"></div>
  <div class="grid-dot"></div>
  <div class="grid-dot"></div>
  <div class="grid-dot"></div>
  <div class="grid-dot"></div>
  <div class="grid-dot"></div>
  <div class="grid-dot"></div>
  <div class="grid-dot"></div>
  <div class="grid-dot"></div>
</div>`,
    css: `.grid-pattern {
  display: grid;
  grid-template-columns: repeat(3, 30px);
  gap: 15px;
  background: #1f1b41;
  padding: 20px;
  border-radius: 20px;
}

.grid-dot {
  width: 30px;
  height: 30px;
  background: #b39eff;
  border-radius: 50%;
  opacity: 0.6;
  transition: 0.2s;
}

.grid-dot:hover {
  opacity: 1;
  transform: scale(1.2);
  background: #d4bfff;
}`
  },{
    category: "buttons",
    html : `
<button>
    Hover Me
</button>`,
css : `
button {
  background-color: white;
  color: black;
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
}

button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
};

button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
};`,
  },{
    category: "patterns",
    html: `<html>
    <head></head>
    <body>
    <div class="container">
    </div>
  </body>
</html>`,
    css: `
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-repeat: repeat;
  background-position: 50% 50%;
  background:
    conic-gradient(from -296deg at 100% 59%, #aa79d5 0 133deg, #fff0 0 100%) 50%/198px
      168px,
    conic-gradient(from -296deg at 85% 67%, #4c2b87 0 134.5deg, #fff0 0 100%)
      50%/198px 168px,
    conic-gradient(from -296deg at 68% 77%, #aa79d5 0 137deg, #fff0 0 100%) 50%/198px
      168px,
    conic-gradient(from -296deg at 55% 85%, #4c2b87 0 150deg, #fff0 0 100%) 50%/198px
      168px,
    conic-gradient(from -248deg at 38% 77%, #aa79d5 0 97deg, #fff0 0 100%) 50%/198px
      168px,
    conic-gradient(from -248deg at 15% 66%, #4c2b87 0 95deg, #fff0 0 100%) 50%/198px
      168px,
    conic-gradient(
        from 207deg at 15% 66%,
        #aa79d5 0 84deg,
        #cfa5f1 0 138deg,
        #fff0 0 100%
      )
      50%/198px 168px,
    conic-gradient(
        from 23deg at 85% 12%,
        #aa79d5 0 34deg,
        #cfa5f1 0 136deg,
        #fff0 0 100%
      )
      50%/198px 168px,
    conic-gradient(
        from 22deg at 66% 27%,
        #4c2b87 0 34deg,
        #673ab7 0 128deg,
        #fff0 0 100%
      )
      50%/198px 168px,
    conic-gradient(
        from 17deg at 50% 40%,
        #aa79d5 0 39deg,
        #cfa5f1 0 133deg,
        #fff0 0 100%
      )
      50%/198px 168px,
    conic-gradient(
        from 31deg at 33% 26%,
        #4c2b87 0 94deg,
        #673ab7 0 125deg,
        #fff0 0 100%
      )
      50%/198px 168px,
    conic-gradient(
        from -57deg at 19% 15%,
        #4c2b87 0 90deg,
        #aa79d5 0 181deg,
        #cfa5f1 0 217deg,
        #673ab7 0 360deg,
        #fff0 0 100%
      )
      50%/198px 168px;
}
`
  },  {
    category: "buttons",
    html: `<button class="cta">
  <span>Contact Us &nbsp;</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>`,
    css: `/* From Webify by 0x-Sarthak  - Tags: button, hover, rounded, animated, hover button */
.cta {
  position: relative;
  margin: auto;
  padding: 11.5px 18px;
  transition: all 0.2s ease;
  border: 3px solid #552da8;
  border-radius: 50px;
  background: #552da8;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  border-radius: 50px;
  background: white;
  width: 45px;
  height: 45px;
  transition: all 0.8s ease;
}

.cta span {
  position: relative;
  font-family: Montserrat;
  font-size: 18px;
  color: white;
  font-weight: 400;
  letter-spacing: 0.05em;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: white;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.5s ease;
}

.cta:hover:before {
  width: 100%;
  background: #1c1c1c;
}

.cta:hover svg {
  transform: translateX(0);
  transition: all 2s ease;
}

.cta:active {
  transform: scale(0.95);
  transition: all 2s ease;
}`
  },
  {
    category: "buttons",
    html: `<!-- From Webify by 0x3ther  - Tags: simple, button, social media, hover button, tailwind, tailwindcss -->
<div class="flex items-center justify-center h-full">
  <button
    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    Facebook
  </button>
  <button
    class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    YouTube
  </button>
  <button
    class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    Twitter
  </button>
  <button
    class="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    Instagram
  </button>
</div>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<!-- From Webify by 0x3ther  - Tags: icon, animation, button, navigation, hover effect, tailwindbutton, tailwindcss -->
<div class="flex items-center gap-2">
  <button
    class="relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-[#F5F5F5] h-9 rounded-md px-3 group"
  >
    <svg
      class="lucide lucide-arrow-left"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 19-7-7 7-7"></path>
      <path d="M19 12H5"></path>
    </svg>
    <span class="origin-left scale-0 transition-transform group-hover:scale-100"
      >Back</span
    >
  </button>
  <button
    class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 rounded-md px-3"
  >
    <svg
      class="lucide lucide-rocket text-cyan-500 dark:text-cyan-400"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="#06B6D4"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      ></path>
      <path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      ></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
    Dashboard
  </button>
  <button
    class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 rounded-md px-3"
  >
    <svg
      class="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="#60A5FA"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
      ></path>
      <path d="M18 14h-8"></path>
      <path d="M15 18h-5"></path>
      <path d="M10 6h8v4h-8V6Z"></path>
    </svg>
    Articles
  </button>
  <button
    class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FACC14] h-9 rounded-md px-3"
  >
    <svg
      class="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="#FACC14"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
      ></path>
      <path d="M15 3v6h6"></path>
    </svg>
    Notes
  </button>
  <button
    class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FB923C] h-9 rounded-md px-3"
  >
    <svg
      class="lucide lucide-star text-orange-400 dark:text-orange-600"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="#FB923C"
      fill="#FB923C"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
    Reviews
  </button>
</div>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<a class="brutalist-button" href="/">
  <div class="ms-logo">
    <div class="ms-logo-square"></div>
    <div class="ms-logo-square"></div>
    <div class="ms-logo-square"></div>
    <div class="ms-logo-square"></div>
  </div>
  <div class="button-text">
    <span>Get it from</span>
    <span>Microsoft</span>
  </div>
</a>`,
    css: `/* From Webify by 0xnihilism  - Tags: button, microsoft, animated, brutalism, brutalist, glare effect */
.brutalist-button {
  display: flex;
  align-items: center;
  width: 169px;
  height: 60px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: bold;
  border: 3px solid #fff;
  outline: 3px solid #000;
  box-shadow: 6px 6px 0 #00a4ef;
  transition: all 0.1s ease-out;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.brutalist-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  z-index: 1;
  transition: none;
  /* Initially hide the pseudo-element */
  opacity: 0;
}

@keyframes slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.brutalist-button:hover::before {
  /* Show the pseudo-element on hover */
  opacity: 1;
  animation: slide 2s infinite;
}

.brutalist-button:hover {
  transform: translate(-4px, -4px);
  box-shadow: 10px 10px 0 #000;
  background-color: #000;
  color: #fff;
}

@keyframes slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.brutalist-button:active {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0 #00a4ef;
  background-color: #fff;
  color: #000;
  border-color: #000;
}

/* Rest of the CSS remains the same */

.ms-logo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  width: 26px;
  height: 26px;
  margin-right: 8px;
  flex-shrink: 0;
  transition: transform 0.2s ease-out;
  position: relative;
  z-index: 1;
}

.brutalist-button:hover .ms-logo {
  transform: rotate(-10deg) scale(1.1);
}

.brutalist-button:active .ms-logo {
  transform: rotate(10deg) scale(0.9);
}

.ms-logo-square {
  width: 100%;
  height: 100%;
}

.ms-logo-square:nth-child(1) {
  background-color: #f25022;
}
.ms-logo-square:nth-child(2) {
  background-color: #7fba00;
}
.ms-logo-square:nth-child(3) {
  background-color: #00a4ef;
}
.ms-logo-square:nth-child(4) {
  background-color: #ffb900;
}

.button-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  transition: transform 0.2s ease-out;
  position: relative;
  z-index: 1;
}

.brutalist-button:hover .button-text {
  transform: skew(-5deg);
}

.brutalist-button:active .button-text {
  transform: skew(5deg);
}

.button-text span:first-child {
  font-size: 11px;
  text-transform: uppercase;
}

.button-text span:last-child {
  font-size: 16px;
  text-transform: uppercase;
}`
  },
  {
    category: "buttons",
    html: `<a href="/" class="brutalist-button">
  <div class="content-wrapper">
    <div class="claude-logo">
      <span class="starburst">✷</span>
    </div>
    <div class="button-text">
      <span>Powered By</span>
      <span>Claude 3.5</span>
    </div>
  </div>
</a>`,
    css: `/* From Webify by 0xnihilism  - Tags: button, microsoft, animated, brutalism, brutalist, glare effect */
.brutalist-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3d19c;
  border: 3px solid #000000;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  position: relative;
  box-shadow: 4px 4px 0px #000000;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 166px;
  height: 150px;
}

.brutalist-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000000;
}

.brutalist-button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #000000;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-delay: 0.8s;
}

.claude-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #eb6c22;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    margin-bottom 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-delay: 0.8s;
  transform: rotate(0deg) scale(1);
}

.starburst {
  font-size: 48px;
  color: #ffffff;
  line-height: 1;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-delay: 0.8s;
}

.button-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  text-align: center;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-delay: 0.8s;
}

.button-text span:first-child {
  font-size: 14px;
  font-weight: normal;
}

.button-text span:last-child {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.brutalist-button:hover .content-wrapper {
  transform: translateY(-10px);
}

@keyframes slow-spin {
  from {
    transform: rotate(0deg) scale(0.8);
  }
  to {
    transform: rotate(360deg) scale(0.8);
  }
}

.brutalist-button:hover .claude-logo {
  animation: slow-spin 12s linear infinite;
  margin-bottom: 5px;
}

.brutalist-button:not(:hover) .claude-logo {
  transform: rotate(0deg) scale(1);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    margin-bottom 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 0;
}

.brutalist-button:hover .starburst {
  font-size: 38px;
}

.brutalist-button:hover .button-text {
  opacity: 1;
  max-height: 50px;
  margin-top: 2px;
}

.brutalist-button:not(:hover) .content-wrapper,
.brutalist-button:not(:hover) .starburst,
.brutalist-button:not(:hover) .button-text {
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-delay: 0s;
}

.brutalist-button::before,
.brutalist-button::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background-color: rgba(200, 183, 128, 0.7);
  border-radius: 50%;
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
  z-index: 1;
}

.brutalist-button::before {
  left: -20px;
  transform: translate(-50%, -50%);
}

.brutalist-button::after {
  right: -20px;
  transform: translate(50%, -50%);
}

.brutalist-button:hover::before {
  animation: criss-cross-left 0.8s both;
  animation-direction: alternate;
  opacity: 1;
}

.brutalist-button:hover::after {
  animation: criss-cross-right 0.8s both;
  animation-direction: alternate;
  opacity: 1;
}

@keyframes criss-cross-left {
  0% {
    left: -20px;
  }
  50% {
    left: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    left: 50%;
    width: 375px;
    height: 375px;
  }
}

@keyframes criss-cross-right {
  0% {
    right: -20px;
  }
  50% {
    right: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    right: 50%;
    width: 375px;
    height: 375px;
  }
}

.brutalist-button:hover .button-text {
  color: #ffffff;
}

.brutalist-button:hover .button-text span:last-child {
  color: #4e432d;
}`
  },
  {
    category: "buttons",
    html: `<div class="button-container">
  <a href="/" class="brutalist-button openai button-1">
    <div class="openai-logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="openai-icon"
      >
        <path
          fill="#10A37F"
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5907 8.3829 14.6108 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
        ></path>
      </svg>
    </div>
    <div class="button-text">
      <span>Powered By</span>
      <span>GPT-Omni</span>
    </div>
  </a>
</div>`,
    css: `/* From Webify by 0xnihilism  - Tags: button, button hover effect , brutalism, minimalism, openai */
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Common styles for both buttons */
.brutalist-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 142px;
  height: 142px;
  color: #e5dede;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Styles for the first button */
.button-1 {
  background-color: #063525;
  border: 3px solid #42c498;
  border-radius: 12px;
  box-shadow: 4px 4px 1px #000000;
}

.button-1:hover {
  background-color: #1a5c46;
  border-color: #030504;
  transform: translate(-6px, -6px) rotate(1deg);
  box-shadow: 10px 10px 0 #000000, 15px 15px 20px rgba(64, 164, 122, 0.2);
}

.button-1::before,
.button-1::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: 0.6s;
}

.button-1::before {
  left: -100%;
}
.button-1::after {
  left: 100%;
}

.button-1:hover::before {
  animation: swipeRight 1.5s infinite;
}
.button-1:hover::after {
  animation: swipeLeft 1.5s infinite;
}

@keyframes swipeRight {
  100% {
    transform: translateX(200%) skew(-45deg);
  }
}

@keyframes swipeLeft {
  100% {
    transform: translateX(-200%) skew(-45deg);
  }
}

/* Hover effects */
.brutalist-button:hover .openai-logo {
  transform: translateY(-10px);
}

.brutalist-button:hover .openai-icon {
  width: 40px;
  height: 40px;
}

.bruta.brutalist-button:hover .openai-text {
  opacity: 1;
  max-height: 60px;
  margin-top: 8px;
}

/* Styles for the OpenAI logo and text */
.openai-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 3;
}

.openai-icon {
  width: 64px;
  height: 64px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.openai-text {
  font-size: 24px;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.button-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  text-align: center;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 3;
}

.button-text span:first-child {
  font-size: 12px;
  font-weight: normal;
}

.button-text span:last-child {
  font-size: 16px;
}

/* Hover effects */
.brutalist-button:hover .openai-logo {
  transform: translateY(-10px);
}

.brutalist-button:hover .openai-icon {
  width: 40px;
  height: 40px;
}

.brutalist-button:hover .button-text,
.brutalist-button:hover .openai-text {
  opacity: 1;
  max-height: 60px;
  margin-top: 8px;
}

/* Animation for the OpenAI logo */
@keyframes spin-and-zoom {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.brutalist-button:hover .openai-icon {
  animation: spin-and-zoom 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
}

.brutalist-button:hover .openai-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.brutalist-button:active .openai-icon,
.brutalist-button:active .openai-text,
.brutalist-button:active .button-text {
  transform: scale(0.95);
}`
  },
  {
    category: "buttons",
    html: `<div class="button-container">
  <a href="/" class="brutalist-button openai">
    <div class="openai-logo">
      <svg
        class="openai-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5907 8.3829 14.6108 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          fill="#10A37F"
        ></path>
      </svg>
    </div>
    <div class="button-text">
      <span>Powered By</span>
      <span>GPT-Omni</span>
    </div>
  </a>
</div>`,
    css: `/* From Webify by 0xnihilism  - Tags: button, button hover effect , brutalism, template, minimalism, openai */
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px; /* Adjust this value to increase or decrease space between buttons */
  padding: 20px;
}

.brutalist-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #000000;
  border-radius: 12px;
  padding: 0;
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  position: relative;
  box-shadow: 4px 4px 0px #000000;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 130px;
  width: 130px;
  cursor: pointer;
}

.brutalist-button.openai {
  background-color: #356854;
}

.brutalist-button::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -150%;
  width: 300%;
  height: 300%;
  border-radius: 50%;
  transform: translateX(-50%) scale(0);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
}

.brutalist-button.openai::before {
  background-color: #316b58;
}

.brutalist-button.claude::before {
  background-color: #e3d19c;
}

.brutalist-button:hover::before {
  transform: translateX(-50%) scale(1);
}

.brutalist-button:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0px #000000;
}

.brutalist-button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #000000;
}

.openai-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.openai-logo {
  align-items: center;
  justify-content: center;
  background-color: #0f1715; /* OpenAI's green color */
  border-radius: 50%; /* This creates the circular background */
}

.openai-icon {
  width: 54px;
  height: 54px;
  fill: #ffffff; /* White color for the SVG */
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.brutalist-button:hover .openai-logo {
  animation: spin 5s linear infinite;
  width: 50px;
  height: 50px;
  top: 28%;
}

.brutalist-button:hover .openai-icon {
  transform: scale(0.6);
}

.button-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  z-index: 2;
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;
}

.button-text span:first-child {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
}

.button-text span:last-child {
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #ffffff;
}

.brutalist-button:hover .button-text {
  opacity: 1;
  transform: translateY(0);
}

.brutalist-button.openai:hover .button-text {
  color: #d3d3d3;
}

.brutalist-button.openai:hover .button-text span:last-child {
  color: #d6cbbf;
}

@media (hover: hover) and (pointer: fine) {
  .brutalist-button:hover {
    transform: translate(-4px, -4px);
    box-shadow: 8px 8px 0px #000000;
  }
}`
  },
  {
    category: "buttons",
    html: `<button class="Btn">Click Me</button>`,
    css: `/* From Webify by 1osm - Tags: button */
/* Button 1 */
.Btn {
  width: 150px;
  height: 50px;
  background-color: transparent;
  color: white;
  font-weight: bold;
  border-width: 2px;
  border-color: #FF5858;
  border-radius: 20px;
  transition: all 0.3s;
}

.Btn:hover {
  transform: translateY(-10px);
  background-color: #FF5858;
}

.Btn::after {
  transform: translateY(0);
}`
  },
  {
    category: "buttons",
    html: `<button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
  <p class="Click">Click</p>
  <p class="OnHover">Thanks</p>

</button>`,
    css: `/* From Webify by 1osm - Tags: button */
button {
  width: 130px;
  height: 45px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-width: 10px;
  background: linear-gradient(to right, #5f6d7c, #456b8b, #49a6fc);
  border: none;
  letter-spacing: 0.05em;
  border-radius: 10px;
}

button svg {
  height: 40px;
  width: 60px;
  transform: translate(-30px,3px) rotate(90deg);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)
}

button .Click {
  transform: translate(20px,-33px);
  font-size: 20px;
  transition: 0.3s cubic-bezier(0.76, 0, 0.24, 1)
}

button .OnHover {
  transform: translate(-15px,-56px);
  font-size: 20px;
  opacity: 0%;
  transition: 0.3s cubic-bezier(0.76, 0, 0.24, 1)
}

button:hover svg {
  transform: translate(40px,3px) rotate(90deg);
}

button:hover .Click {
  opacity: 0%;
}

button:hover .OnHover {
  opacity: 100%;
}`
  },
  {
    category: "buttons",
    html: `<button>
  GLITCH
</button>`,
    css: `/* From Webify by 212004ALJI - Tags: button, glitch */
button,button::after {
  padding: 10px 50px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: transparent;
  position: relative;
}

button::after {
  --move1: inset(50% 50% 50% 50%);
  --move2: inset(31% 0 40% 0);
  --move3: inset(39% 0 15% 0);
  --move4: inset(45% 0 40% 0);
  --move5: inset(45% 0 6% 0);
  --move6: inset(14% 0 61% 0);
  clip-path: var(--move1);
  content: 'GLITCH';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
}

button:hover::after {
  animation: glitch_4011 1s;
  text-shadow: 10 10px 10px black;
  animation-timing-function: steps(2, end);
  text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #E94BE8;
  background-color: transparent;
  border: 3px solid rgb(0, 255, 213);
}

button:hover {
  text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #E94BE8;
}

button:hover {
  background-color: transparent;
  border: 1px solid rgb(0, 255, 213);
  box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);
}

@keyframes glitch_4011 {
  0% {
    clip-path: var(--move1);
    transform: translate(0px,-10px);
  }

  10% {
    clip-path: var(--move2);
    transform: translate(-10px,10px);
  }

  20% {
    clip-path: var(--move3);
    transform: translate(10px,0px);
  }

  30% {
    clip-path: var(--move4);
    transform: translate(-10px,10px);
  }

  40% {
    clip-path: var(--move5);
    transform: translate(10px,-10px);
  }

  50% {
    clip-path: var(--move6);
    transform: translate(-10px,10px);
  }

  60% {
    clip-path: var(--move1);
    transform: translate(10px,-10px);
  }

  70% {
    clip-path: var(--move3);
    transform: translate(-10px,10px);
  }

  80% {
    clip-path: var(--move2);
    transform: translate(10px,-10px);
  }

  90% {
    clip-path: var(--move4);
    transform: translate(-10px,10px);
  }

  100% {
    clip-path: var(--move1);
    transform: translate(0);
  }
}`
  },
  {
    category: "buttons",
    html: `<button>
  INPUT
</button>`,
    css: `/* From Webify by 212004ALJI - Tags: button */
button {
  /* padding: 5px 10px; */
  height: 50px;
  width: 100px;
  font-size: 20px;
  position: relative;
  border: navajowhite;
  background-color: #222;
  color: aliceblue;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 2px 2px 2px red;
}

button::before {
  content: '';
  height: 10px;
  width: 30px;
  position: absolute;
  background-image: linear-gradient(45deg, salmon,red);
  left: -10px;
  top: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
}

button:hover::before {
  height: 100px;
  width: 100px;
}

button:hover {
  border-radius: 5px;
}`
  },
  {
    category: "buttons",
    html: `<button>
  <p class="icon_shadow">HAYABUSA
<svg fill-rule="nonzero" height="40px" width="40px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#ff206e"><g transform="scale(5.12,5.12)"><path d="M9.00586,0c-0.26622,-0.00153 -0.52207,0.10314 -0.71087,0.29084c-0.1888,0.1877 -0.29497,0.44293 -0.29499,0.70916c0,0 -0.00031,2.83655 0.64063,6.42578c0.61624,3.45096 1.81717,7.63635 4.30078,10.82617c-0.03223,0.09658 -0.07,0.1913 -0.09375,0.29102c-0.51237,2.15694 -2.24793,7.75515 -3.67969,9.90234c-0.1714,0.25672 -0.21465,0.5782 -0.11719,0.87109c0.45954,1.38222 1.56103,3.62778 3.01758,6.31836c-0.01566,0.04013 -0.0287,0.08123 -0.03906,0.12305c-0.86684,3.46737 -4.47656,5.34766 -4.47656,5.34766c-0.38199,0.19127 -0.60031,0.60406 -0.54342,1.02745c0.05689,0.42339 0.37644,0.7639 0.79537,0.84755c0,0 4.31619,0.94287 7.71289,-1.3125c0.91656,1.52521 1.87104,3.06527 2.83594,4.55469c0.65113,1.06549 1.71842,1.81101 2.94141,2.05664c0.00065,0 0.0013,0 0.00195,0l3.50781,0.70117c0.12894,0.02568 0.26168,0.02568 0.39062,0l3.50781,-0.70117c1.22163,-0.24407 2.28615,-0.98944 2.9375,-2.05078c0.98284,-1.49004 1.95099,-3.02074 2.87695,-4.53516c3.39115,2.22499 7.67773,1.28711 7.67773,1.28711c0.41893,-0.08365 0.73848,-0.42416 0.79537,-0.84755c0.05689,-0.42339 -0.16143,-0.83618 -0.54342,-1.02745c0,0 -3.60972,-1.88028 -4.47656,-5.34766c-0.00187,-0.00718 -0.00383,-0.01434 -0.00586,-0.02148c1.46264,-2.68934 2.55988,-4.95683 2.99609,-6.45703c0.08216,-0.2834 0.03499,-0.58862 -0.12891,-0.83398c-1.43176,-2.1472 -3.1673,-7.74433 -3.67969,-9.90039c-0.0239,-0.10033 -0.06127,-0.19575 -0.09375,-0.29297c2.48361,-3.18982 3.68454,-7.37521 4.30078,-10.82617c0.64093,-3.58924 0.64063,-6.42578 0.64063,-6.42578c0.00009,-0.27036 -0.10929,-0.52924 -0.3032,-0.71764c-0.19392,-0.1884 -0.45584,-0.29025 -0.72609,-0.28236c-0.36819,0.01085 -0.70062,0.22321 -0.86523,0.55273c0,0 -1.22717,2.45223 -3.06836,5.27539c-1.83801,2.81828 -4.33608,5.97912 -6.53906,7.30664c-0.01664,-0.01026 -0.03357,-0.02003 -0.05078,-0.0293l-4,-2c-0.23724,-0.11863 -0.5119,-0.13815 -0.76353,-0.05427c-0.25164,0.08388 -0.45965,0.26429 -0.57826,0.50153l-0.10547,0.21094l-0.10547,-0.21094c-0.16817,-0.33628 -0.51075,-0.54982 -0.88672,-0.55273c-0.15789,-0.00126 -0.31384,0.03488 -0.45508,0.10547l-4,2c-0.01721,0.00927 -0.03414,0.01904 -0.05078,0.0293c-2.20298,-1.32752 -4.70105,-4.48836 -6.53906,-7.30664c-1.84119,-2.82316 -3.06836,-5.27539 -3.06836,-5.27539c-0.16849,-0.3369 -0.51199,-0.55055 -0.88867,-0.55273zM10.44922,5.48047c0.40281,0.67844 0.33529,0.67075 0.83789,1.44141c1.72202,2.64044 3.92494,5.59777 6.39063,7.38477l-3.50195,2.25781c-1.92627,-2.72329 -3.0125,-6.38833 -3.56641,-9.49023c-0.15981,-0.89493 -0.07317,-0.83633 -0.16016,-1.59375zM39.55078,5.48047c-0.08698,0.75742 -0.00035,0.69882 -0.16016,1.59375c-0.55406,3.10275 -1.64109,6.76867 -3.56836,9.49219l-3.50195,-2.25781c2.46659,-1.78682 4.67004,-4.74549 6.39258,-7.38672c0.5026,-0.77065 0.43508,-0.76296 0.83789,-1.44141zM27.05469,13.64453l2.44922,1.22461l5.24023,3.37891c0.22849,0.20156 0.3928,0.46551 0.46289,0.75977c0.5267,2.2163 1.97899,7.09786 3.70508,9.98047c-0.41087,1.29136 -1.51905,3.66685 -3.10156,6.52734c-0.11737,0.21216 -0.25142,0.44161 -0.37305,0.6582c-0.01256,0.00818 -0.02493,0.01665 -0.03711,0.02539l-2.72266,2.04297c-0.65602,0.49221 -1.4544,0.75781 -2.27539,0.75781h-0.2832c-0.95071,0 -1.87171,0.40914 -2.49414,1.1543c-0.67926,0.81273 -1.96214,1.8457 -2.625,1.8457c-0.66286,0 -1.94574,-1.03297 -2.625,-1.8457c-0.00065,-0.00065 -0.0013,-0.0013 -0.00195,-0.00195c-0.623,-0.7441 -1.54204,-1.15234 -2.49219,-1.15234h-0.2832c-0.82099,0 -1.61937,-0.2656 -2.27539,-0.75781l-2.5957,-1.94727c-0.15289,-0.27378 -0.33972,-0.58094 -0.48633,-0.84766c-1.57979,-2.87411 -2.7014,-5.22715 -3.14648,-6.46875c1.72375,-2.88394 3.17302,-7.75751 3.69922,-9.97266c0.07009,-0.29424 0.23442,-0.55626 0.46289,-0.75781l5.24024,-3.37891l2.41211,-1.20508c-0.17792,0.99687 -0.619,1.95257 -1.23828,2.91016c-1.033,1.622 -2.63797,3.33278 -2.66797,5.42578c-0.054,1.329 0.94872,2.75319 1.76172,3.49219c1.081,0.994 1.65347,2.07444 1.85547,3.52344c0.056,0.429 0.72267,0.41637 0.76367,-0.01562c0.268,-1.571 -0.38119,-3.37231 -1.36719,-4.57031c-2.357,-2.458 -0.04634,-4.32659 1.47266,-6.68359c0.5319,-0.8034 1.01497,-1.75086 1.28711,-2.77344c0.1517,0.03525 0.30954,0.03458 0.46094,-0.00195c0.35062,1.17299 0.9477,2.34876 1.27344,2.77734c1.519,2.357 3.82966,4.22459 1.47266,6.68359c-0.986,1.198 -1.63519,2.99736 -1.36719,4.56836c0.037,0.431 0.70567,0.44562 0.76367,0.01563c0.203,-1.448 0.77447,-2.52944 1.85547,-3.52344c0.489,-0.522 1.13328,-1.14213 1.48828,-2.07813c1.36175,-3.76223 -3.13108,-6.34958 -3.66797,-9.76953zM14.02148,24.43555c-0.28236,-0.0058 -0.554,0.10805 -0.74785,0.31343c-0.19385,0.20538 -0.29182,0.48315 -0.26973,0.7647c0,0 0.10863,1.46594 0.60156,3.09375c0.49293,1.62781 1.34722,3.59721 3.26758,4.32813c0.99298,0.37769 2.03753,0.34296 2.87305,0.26758c0.83552,-0.07538 1.48438,-0.23047 1.48438,-0.23047c0.26102,-0.06188 0.48624,-0.22602 0.62507,-0.45557c0.13883,-0.22954 0.17962,-0.50523 0.11321,-0.76514c0,0 -0.67774,-2.64234 -3.34375,-3.95703c-1.86724,-0.92051 -3.89258,-3.03906 -3.89258,-3.03906c-0.18388,-0.19856 -0.44038,-0.31413 -0.71094,-0.32031zM35.94727,24.4375c-0.2593,0.01386 -0.50305,0.12802 -0.67969,0.31836c0,0 -2.02534,2.11855 -3.89258,3.03906c-2.66601,1.3147 -3.34375,3.95703 -3.34375,3.95703c-0.06641,0.25991 -0.02562,0.5356 0.11321,0.76514c0.13883,0.22954 0.36405,0.39369 0.62507,0.45557c0,0 0.64886,0.15509 1.48438,0.23047c0.83552,0.07538 1.88006,0.11011 2.87305,-0.26758c1.92036,-0.73091 2.77464,-2.70031 3.26758,-4.32812c0.49293,-1.62781 0.60156,-3.09375 0.60156,-3.09375c0.02227,-0.28685 -0.08007,-0.56939 -0.28088,-0.77543c-0.20081,-0.20604 -0.48062,-0.31562 -0.76795,-0.30074zM15.53125,28.05469c0.68725,0.54202 1.36291,1.11611 2.20898,1.5332c0.89522,0.44146 1.43599,1.07873 1.78125,1.61914c-0.67935,0.05639 -1.49476,0.02582 -1.9375,-0.14258c-0.87935,-0.33469 -1.63087,-1.63351 -2.05273,-3.00977zM34.46875,28.05469c-0.42186,1.37626 -1.17338,2.67507 -2.05273,3.00977c-0.44274,0.1684 -1.25815,0.19897 -1.9375,0.14258c0.34526,-0.54041 0.88603,-1.17768 1.78125,-1.61914c0.84608,-0.4171 1.52174,-0.99118 2.20898,-1.5332zM27.99219,33.98633c-0.40904,-0.00235 -0.77828,0.24463 -0.93227,0.62358c-0.15399,0.37895 -0.06169,0.81348 0.23305,1.09712c0.29454,0.29454 0.30273,0.48463 0.31836,0.52344c-0.04939,0.01724 -0.07535,0.04102 -0.25391,0.04102c-0.20398,0.00033 -0.40298,0.06303 -0.57031,0.17969l-1.26953,0.88086c-0.325,0.22538 -0.71016,0.22538 -1.03516,0l-1.26953,-0.88086c-0.16733,-0.11666 -0.36633,-0.17935 -0.57031,-0.17969c-0.17855,0 -0.20452,-0.02378 -0.25391,-0.04102c0.01563,-0.03881 0.02382,-0.2289 0.31836,-0.52344c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273c-0.65827,0.65827 -1.10429,1.48152 -0.91602,2.41602c0.09414,0.46725 0.40294,0.92546 0.82422,1.19336c0.27576,0.17536 0.61685,0.19088 0.94336,0.24219l1.19727,0.83008c0.993,0.68862 2.3234,0.68862 3.31641,0l1.19727,-0.83008c0.32651,-0.05131 0.6676,-0.06683 0.94336,-0.24219c0.42128,-0.2679 0.73008,-0.72611 0.82422,-1.19336c0.18827,-0.93449 -0.25774,-1.75774 -0.91602,-2.41602c-0.18714,-0.19448 -0.44495,-0.30507 -0.71484,-0.30664zM13.35352,37.92188c0.37242,0.65914 0.75112,1.32264 1.15039,2.00586c-1.10139,0.73582 -2.40406,1.03593 -3.54492,1.14258c0.85618,-0.7877 1.75413,-1.82683 2.39453,-3.14844zM36.69336,38.01172c0.63728,1.27795 1.51135,2.28918 2.34766,3.05859c-1.12109,-0.1048 -2.39911,-0.39549 -3.48828,-1.10352c0.39398,-0.66374 0.77367,-1.31354 1.14063,-1.95508zM17.21094,40.41211c0.75295,0.34535 1.54863,0.58789 2.38672,0.58789h0.2832c0.37786,0 0.72803,0.16165 0.95898,0.4375c0.4435,0.53063 1.0736,1.23111 1.86523,1.77344c-0.67877,0.0717 -1.43942,0.09054 -2.00781,0.18359c-0.9398,0.15372 -1.86873,-0.28465 -2.36328,-1.10937zM32.63867,40.49219l-1.19336,1.90625c-0.52279,0.83632 -1.49107,1.24907 -2.45703,1.04883c-0.49569,-0.10254 -1.17427,-0.11834 -1.76172,-0.19727c0.8235,-0.54705 1.47803,-1.26937 1.93359,-1.81445c0.22957,-0.27484 0.5797,-0.43555 0.95898,-0.43555h0.2832c0.78054,0 1.52637,-0.20718 2.23633,-0.50781zM25,45c1.25356,0 2.55018,0.19239 3.58398,0.40625c0.37725,0.0782 0.75597,0.09392 1.12891,0.07227c-0.35918,0.42637 -0.84664,0.72726 -1.40039,0.83789c0,0.00065 0,0.0013 0,0.00195l-3.3125,0.66211l-3.31055,-0.66211h-0.00195c-0.58016,-0.11692 -1.08502,-0.44352 -1.44727,-0.90234c0.25811,0.0054 0.5181,-0.00611 0.7793,-0.04883c1.15191,-0.18858 2.62598,-0.36719 3.98047,-0.36719z"></path></g></g></svg></p>
</button>`,
    css: `/* From Webify by 212004ALJI - Tags: button */
button {
  --color2: #ff206e;
  padding: 15px 30px;
  border-radius: 18px;
  border: 1px solid #282828;
  background-color: #212121;
  box-shadow: inset 2px 2px 5px rgb(22, 22, 22);
  position: relative;
  overflow: hidden;
}

button::after {
  content: '';
  height: 30px;
  width: 60px;
  position: absolute;
  box-shadow: 0 0 20px 10px var(--color2);
  bottom: -45px;
  left: 21%;
  transition: 0.4s 0.3s;
}

button svg {
  --move2: inset(31% 0 40% 0);
  --move3: inset(39% 0 15% 0);
  --move4: inset(45% 0 40% 0);
  --move5: inset(45% 0 6% 0);
  --move6: inset(14% 0 61% 0);
  --move7: inset(0 0 0 0);
  clip-path: inset(50% 50% 50% 50%);
  margin-left: 5px;
  transition: 0.4s;
}

button:hover svg {
  clip-path: var(--move7);
  animation: glitch_4011 0.4s;
  animation-timing-function: steps(2, end);
}

button:hover:after {
  bottom: -40px;
  width: 100px;
}

button .icon_shadow {
  display: flex;
  align-items: center;
  transition: 0.4s;
  color: var(--color2);
  font-weight: bold;
  filter: drop-shadow(0 0 10px var(--color2));
}

button:hover .icon_shadow {
  filter: drop-shadow(0 0 10px var(--color2));
}

@keyframes glitch_4011 {
  0% {
    clip-path: var(--move1);
    transform: translate(0px,-10px);
  }

  10% {
    clip-path: var(--move2);
    transform: translate(-10px,10px);
  }

  20% {
    clip-path: var(--move3);
    transform: translate(10px,0px);
  }

  30% {
    clip-path: var(--move4);
    transform: translate(-10px,10px);
  }

  40% {
    clip-path: var(--move5);
    transform: translate(10px,-10px);
  }

  50% {
    clip-path: var(--move6);
    transform: translate(-10px,10px);
  }

  60% {
    clip-path: var(--move1);
    transform: translate(10px,-10px);
  }

  70% {
    clip-path: var(--move3);
    transform: translate(-10px,10px);
  }

  80% {
    clip-path: var(--move2);
    transform: translate(10px,-10px);
  }

  90% {
    clip-path: var(--move4);
    transform: translate(-10px,10px);
  }

  100% {
    transform: translate(0);
  }
}`
  },
  {
    category: "buttons",
    html: `<button>This is a button :)</button>`,
    css: `/* From Webify by 2Fl00rian6 - Tags: button */
button {
 background-color: rgb(20, 87, 244);
 border: 1px solid rgb(20, 87, 244);
 padding: 12px 20px;
 border-radius: 7px;
 transition: .3s;
 color: #fff;
}

button:hover {
 border: 1px solid rgb(20, 87, 244);
 background-color: transparent;
 color: rgb(20, 87, 244);
}

button:focus {
 box-shadow: 0px 0px 0px 5px rgba(20, 87, 244, 0.37), 0px 0px 0px 10px rgba(20, 87, 244, 0.38);
 outline: none;
}`
  },
  {
    category: "buttons",
    html: `<button class="button"></button>`,
    css: `/* From Webify by 3bdel3ziz-T  - Tags: button, hover, smooth, dark, code, hover button, button hover effect , 2d button */
.button,
.button::before {
  box-sizing: border-box;
  --col-orange: #d17842;
  --col-white: #fff;
  --col-dark: #212121;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  fill: var(--col-white);
  color: var(--col-white);

  color: var(col-dark);
  font-family: "arial";
}
.button {
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  background: var(--col-orange);
  padding: 8px 50px;
  position: relative;
  transition: all 200ms;
  border-radius: 25px;
  z-index: 99;
}

.button:hover {
  border-color: transparent;
  color: var(--col-dark);
  background: transparent;
}

.button::before {
  height: fit-content;
  content: "great work🥳";
  position: absolute;
  left: 40px;
  width: 0;
  overflow: hidden;
  transition: all 550ms;
  text-wrap: nowrap;
  z-index: -1;
}

.button:hover::before {
  width: 135px;
  color: var(--col-white);
}

.button::after {
  content: "hover me";
  position: relative;
}

.button:hover::after {
  display: none;
}`
  },
  {
    category: "buttons",
    html: `<div class="notification">
  <div class="bell-container">
    <div class="bell"></div>
  </div>
</div>`,
    css: `/* From Webify by 3bdel3ziz-T  - Tags: icon, animation, notification, button, rotate, light&dark, hover effect, hover button */
/*making bell shape with one div */
.bell {
  border: 2.17px solid white;
  border-radius: 10px 10px 0 0;
  width: 15px;
  height: 17px;
  background: transparent;
  display: block;
  position: relative;
  top: -3px;
}
.bell::before,
.bell::after {
  content: "";
  background: white;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 2.17px;
}
.bell::before {
  top: 100%;
  width: 20px;
}
.bell::after {
  top: calc(100% + 4px);
  width: 7px;
}
/*container main styling*/
.notification {
  background: transparent;
  border: none;
  padding: 15px 15px;
  border-radius: 50px;
  cursor: pointer;
  transition: 300ms;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
/*notifications number with before*/
.notification::before {
  content: "1";
  color: white;
  font-size: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
/*container background hover effect*/
.notification:hover {
  background: rgba(170, 170, 170, 0.062);
}
/*container animations*/
.notification:hover > .bell-container {
  animation: bell-animation 650ms ease-out 0s 1 normal both;
}
/*bell ring and scale animation*/
@keyframes bell-animation {
  20% {
    transform: rotate(15deg);
  }

  40% {
    transform: rotate(-15deg);
    scale: 1.1;
  }
  60% {
    transform: rotate(10deg);
    scale: 1.1;
  }
  80% {
    transform: rotate(-10deg);
  }
  0%,
  100% {
    transform: rotate(0deg);
  }
}`
  },
  {
    category: "buttons",
    html: `<button alt="BECOME A MEMBER">
  <i>B</i>
  <i>E</i>
  <i>C</i>
  <i>O</i>
  <i>M</i>
  <i>E</i>
  <i>&nbsp;</i>
  <i>A</i>
  <i>&nbsp;</i>
  <i>M</i>
  <i>E</i>
  <i>M</i>
  <i>B</i>
  <i>E</i>
  <i>R</i>
</button>`,
    css: `/* From Webify by A3zra - Tags: button, 3d cool effect, 3d hover */
button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
  padding: 0 20px;
  font-size: 18px;
  text-transform: uppercase;
  border: 0;
  background-color: #E15331;
  border-radius: 12px;
  overflow: hidden;
  transition: 31ms cubic-bezier(.5, .7, .4, 1);
  width: 300px;
}

button:before {
  content: attr(alt);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  font-size: 15px;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
  opacity: 1;
}

button:active {
  box-shadow: none;
  transform: translateY(7px);
  transition: 35ms cubic-bezier(.5, .7, .4, 1);
}

button:hover:before {
  transition: all .0s;
  transform: translateY(100%);
  opacity: 0;
  color: #E15331;
}

button i {
  color: white;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 4px;
  font-style: normal;
  transition: all 2s ease;
  transform: translateY(-20px);
  opacity: 0;
}

button:hover i {
  transition: all .2s ease;
  transform: translateY(0px);
  opacity: 1;
}

button:hover i:nth-child(1) {
  transition-delay: 0.045s;
}

button:hover i:nth-child(2) {
  transition-delay: calc(0.045s * 3);
}

button:hover i:nth-child(3) {
  transition-delay: calc(0.045s * 4);
}

button:hover i:nth-child(4) {
  transition-delay: calc(0.045s * 5);
}

button:hover i:nth-child(6) {
  transition-delay: calc(0.045s * 6);
}

button:hover i:nth-child(7) {
  transition-delay: calc(0.045s * 7);
}

button:hover i:nth-child(8) {
  transition-delay: calc(0.045s * 8);
}

button:hover i:nth-child(9) {
  transition-delay: calc(0.045s * 9);
}

button:hover i:nth-child(10) {
  transition-delay: calc(0.045s * 10);
}`
  },
  {
    category: "buttons",
    html: `<!-- From Webify by AKAspidey01  - Tags: simple, animation, button, #button, tailwind, button hover effect  -->
<button
  class="relative border-2 border-black group hover:border-green-500 w-12 h-12 duration-500 overflow-hidden"
  type="button"
>
  <p
    class="font-Manrope text-3xl h-full w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0"
  >
    ×
  </p>
  <span
    class="absolute w-full h-full bg-green-500 rotate-45 group-hover:top-9 duration-500 top-12 left-0"
  ></span>
  <span
    class="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:left-9 duration-500 left-12"
  ></span>
  <span
    class="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:right-9 duration-500 right-12"
  ></span>
  <span
    class="absolute w-full h-full bg-green-500 rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"
  ></span>
</button>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<button class="button">
  <div class="button-inner-curve">
    <div class="icon">
      <svg
        class=""
        xml:space="preserve"
        style="enable-background:new 0 0 512 512"
        viewBox="0 0 24 24"
        y="0"
        x="0"
        height="20"
        width="20"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g fill="#000">
            <path
              class=""
              data-original="#000000"
              opacity="1"
              fill="#000000"
              d="M14.22 21.63c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58s1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81zM7.64 7.03c-2.78.93-3.77 2.03-3.77 2.75 0 .72.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77s1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22z"
            ></path>
            <path
              class=""
              data-original="#000000"
              opacity="1"
              fill="#000000"
              d="M10.11 14.4c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <p>Send Message</p>
  </div>
</button>`,
    css: `/* From Webify by AKAspidey01  - Tags: neumorphism, flashy, button */
.button {
  cursor: pointer;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 5px 5px 21px #bababa, -5px -5px 21px #ffffff;
  padding: 5px 5px;
  border-radius: 12px;
  border: 1px solid #000000bc;
}
.button-inner-curve {
  border-radius: 50px;
  background: #e0e0e0;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: inset 5px 5px 15px #bababa, inset -5px -5px 15px #ffffff;
  display: flex;
  padding: 12px 15px 10px 15px;
  align-items: center;
  justify-content: center;
  gap: 5px;
}`
  },
  {
    category: "buttons",
    html: `<!-- From Webify by AKAspidey01 - Tags: simple, button, hover button -->
<button class="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
  <span class="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">Magic !</span>
  <span class="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span class="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<div class="main-section">
  <button class="first-button"> Hover Me </button>
  <button class="second-button"> <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ffd300" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add To Cart</button>
</div>`,
    css: `/* From Webify by AKAspidey01 - Tags: button, add */
.first-button {
  background: rgb(115, 15, 209);
  color: #fff;
  border: none;
  font-weight: 700;
  font-size: 1em;
  min-height: 60px;
  width: 200px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.6s;
}

.main-section {
  display: flex;
  flex-direction: column;
  height: 60px;
  overflow: hidden;
  align-items: flex-start;
}

.main-section:hover .second-button , .main-section:hover .first-button {
  transform: translateY(-60px);
}

.second-button {
  background: rgb(209, 15, 57);
  color: #fff;
  border: none;
  font-weight: 700;
  font-size: 1em;
  min-height: 60px;
  width: 200px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.6s;
}`
  },
  {
    category: "buttons",
    html: `<!-- From Webify by AKAspidey01  - Tags: simple, animation, button, hover effect, tailwindcss -->
<button
  type="button"
  class="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
>
  <div
    class="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
  >
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000000"
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
      ></path>
      <path
        fill="#000000"
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
      ></path>
    </svg>
  </div>
  <p class="translate-x-2">Go Back</p>
</button>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<!-- From Webify by AKAspidey01  - Tags: flashy, icon, social, button, hover effect -->
<div class="flex items-center gap-4">
  <div class="social-button">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full"
      >
        <svg
          fill="none"
          viewBox="0 0 22 22"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
          <path
            d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
      </div>
    </button>
  </div>
  <div class="social-button">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
      >
        <svg
          fill="none"
          viewBox="0 0 22 22"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8115 9.3155L20.8253 0H18.9263L11.9679 8.08852L6.41015 0H0L8.40433 12.2313L0 22H1.89914L9.24745 13.4583L15.1168 22H21.5269L12.811 9.3155H12.8115ZM10.2103 12.339L9.35878 11.1211L2.58343 1.42964H5.5004L10.9682 9.25094L11.8197 10.4689L18.9272 20.6354H16.0102L10.2103 12.3395V12.339Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
      </div>
    </button>
  </div>
  <div class="social-button">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
      >
        <svg
          fill="none"
          viewBox="0 0 13 22"
          height="22"
          width="13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.71289 22H4.1898C3.60134 22 3.12262 21.5213 3.12262 20.9328V12.9863H1.06717C0.478672 12.9863 0 12.5074 0 11.9191V8.514C0 7.9255 0.478672 7.44683 1.06717 7.44683H3.12262V5.74166C3.12262 4.05092 3.6535 2.6125 4.65773 1.58207C5.6665 0.546992 7.07627 0 8.7346 0L11.4214 0.00438281C12.0089 0.00537109 12.4868 0.484086 12.4868 1.07151V4.23311C12.4868 4.82157 12.0083 5.30028 11.4199 5.30028L9.61091 5.30093C9.05919 5.30093 8.91868 5.41153 8.88864 5.44543C8.83914 5.50172 8.78023 5.66062 8.78023 6.09954V7.4467H11.284C11.4725 7.4467 11.6551 7.49319 11.812 7.58076C12.1506 7.76995 12.3611 8.12762 12.3611 8.51417L12.3597 11.9193C12.3597 12.5074 11.881 12.9861 11.2926 12.9861H8.78019V20.9328C8.78023 21.5213 8.30139 22 7.71289 22ZM4.41233 20.7103H7.49031V12.4089C7.49031 12.016 7.81009 11.6964 8.20282 11.6964H11.07L11.0712 8.73662H8.20265C7.80991 8.73662 7.49031 8.41706 7.49031 8.02411V6.09959C7.49031 5.59573 7.54153 5.0227 7.92185 4.59198C8.38144 4.07133 9.10568 4.01126 9.61056 4.01126L11.1971 4.01057V1.29375L8.73357 1.28975C6.06848 1.28975 4.41238 2.99574 4.41238 5.7417V8.02407C4.41238 8.4168 4.09277 8.73658 3.7 8.73658H1.28975V11.6964H3.7C4.09277 11.6964 4.41238 12.016 4.41238 12.4089L4.41233 20.7103Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
      </div>
    </button>
  </div>
  <div class="social-button">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
      >
        <svg
          fill="none"
          viewBox="0 0 30 22"
          height="22"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9945 9.70081L12.5775 6.18974C12.2085 5.98783 11.7724 5.99538 11.4108 6.20965C11.0489 6.42415 10.833 6.80311 10.833 7.22372V14.1857C10.833 14.6043 11.0476 14.9826 11.407 15.1973C11.5947 15.3094 11.8028 15.3657 12.0113 15.3657C12.2064 15.3654 12.3984 15.3166 12.57 15.2237L18.9872 11.7731C19.1742 11.6726 19.3305 11.5235 19.4397 11.3415C19.5489 11.1596 19.6069 10.9515 19.6077 10.7393C19.6086 10.527 19.552 10.3184 19.4441 10.1356C19.3362 9.95283 19.1808 9.80259 18.9945 9.70081ZM12.5352 13.3099V8.10662L17.3312 10.7308L12.5352 13.3099Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
          <path
            d="M28.8325 5.19239L28.8312 5.17912C28.8065 4.94533 28.5617 2.86581 27.5508 1.80806C26.3822 0.56396 25.0574 0.412829 24.4203 0.340384C24.3722 0.335071 24.3241 0.329304 24.276 0.323081L24.2253 0.317805C20.3854 0.0385769 14.5862 0.000453846 14.5282 0.000226923L14.5231 0L14.518 0.000226923C14.4599 0.000453846 8.66074 0.0385769 4.7862 0.317805L4.73503 0.323081C4.69379 0.328641 4.64834 0.333747 4.59893 0.339533C3.96916 0.412149 2.65857 0.563563 1.48674 1.8526C0.523851 2.89905 0.245531 4.93404 0.216938 5.16272L0.213648 5.19239C0.204968 5.28969 0 7.60572 0 9.93077V12.1042C0 14.4293 0.204968 16.7453 0.213648 16.8428L0.21518 16.8574C0.239801 17.0875 0.484424 19.1289 1.49071 20.1871C2.58947 21.3895 3.97869 21.5486 4.72595 21.6341C4.84407 21.6476 4.94578 21.6592 5.01511 21.6714L5.08228 21.6807C7.29943 21.8916 14.2509 21.9955 14.5456 21.9998L14.5545 22L14.5634 21.9998C14.6214 21.9995 20.4204 21.9614 24.2604 21.6822L24.3111 21.6769C24.3597 21.6705 24.4142 21.6647 24.474 21.6585C25.1003 21.592 26.4037 21.454 27.5594 20.1823C28.5223 19.1358 28.8008 17.1007 28.8292 16.8723L28.8325 16.8426C28.8412 16.7451 29.0464 14.4293 29.0464 12.1042V9.93077C29.0461 7.60566 28.8412 5.28991 28.8325 5.19239ZM27.344 12.1042C27.344 14.2563 27.1561 16.4725 27.1383 16.6759C27.0661 17.2364 26.7724 18.5239 26.3033 19.0338C25.58 19.8296 24.837 19.9085 24.2945 19.9659C24.234 19.9721 24.1736 19.9789 24.1132 19.9863C20.3991 20.2549 14.8189 20.296 14.5619 20.2976C14.2736 20.2934 7.42372 20.1886 5.2742 19.989C5.16403 19.971 5.04501 19.9572 4.91963 19.9431C4.2834 19.8702 3.41247 19.7704 2.74282 19.0338L2.72705 19.017C2.26611 18.5368 1.98092 17.3328 1.90842 16.6826C1.89492 16.5288 1.70215 14.2864 1.70215 12.1042V9.93077C1.70215 7.78124 1.88964 5.56738 1.9078 5.35975C1.99403 4.69957 2.29317 3.49007 2.74282 3.00117C3.48826 2.18124 4.27432 2.09041 4.7942 2.03034C4.84384 2.02455 4.89013 2.01927 4.93291 2.01371C8.70107 1.74379 14.3214 1.70368 14.5231 1.70215C14.7247 1.70345 20.3431 1.74379 24.0778 2.01371C24.1236 2.0195 24.1737 2.02523 24.2275 2.03147C24.7623 2.0924 25.5705 2.18459 26.3122 2.9757L26.319 2.98301C26.78 3.46324 27.0652 4.68828 27.1376 5.35152C27.1505 5.4967 27.344 7.74397 27.344 9.93077V12.1042Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
      </div>
    </button>
  </div>
</div>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<!-- From Webify by AKAspidey01 - Tags: animation, button, transition, hover effect, premium -->
<button class="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
  <span class="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">Blink</span>
  <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
  <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
  
    <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
  <span class="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
</button>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<button class="button">
  <div class="similar-line line-1"></div>
  <div class="similar-line line-2"></div>
  <div class="similar-line line-3"></div>
</button>`,
    css: `/* From Webify by AKAspidey01  - Tags: simple, flashy, animation, button, hover, smooth, hover effect, button hover effect  */
.button {
  cursor: pointer;
  position: relative;
  width: 5em;
  height: 4em;
  border: none;
  background: rgb(248, 66, 42);
  padding: 0.5em;
  display: flex;
  justify-content: center;
  gap: 0.7em;
  flex-direction: column;
  transition-duration: 0.5s;
}
.button:hover {
  background: rgb(7, 142, 253);
}
.similar-line {
  height: 0.2em;
  background: #fff;
  border-radius: 1em;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.line-1 {
  width: 40%;
}
.line-2 {
  width: 70%;
}
.line-3 {
  width: 90%;
}
.button:hover .line-1 {
  width: 90%;
}
.button:hover .line-2 {
  width: 70%;
}
.button:hover .line-3 {
  width: 40%;
}`
  },
  {
    category: "buttons",
    html: `<button class="button">
  <p class="button-text">Read More</p> <p class="iconer"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></p>  
</button>`,
    css: `/* From Webify by AKAspidey01 - Tags: button, arrow */
.button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 10px;
  border: none;
  overflow: hidden;
  background: rgb(164, 46, 194);
  color: #fff;
}

.button-text {
  transform: translateX(15px);
  font-size: 1.5em;
  font-weight: 700;
  transition-duration: 0.3s;
}

.iconer {
  transform: translateY(35px);
  transition-duration: 0.3s;
}

.button:hover .button-text {
  transform: translateX(0px);
}

.button:hover .iconer {
  transform: translateY(0px);
}`
  },
  {
    category: "buttons",
    html: `<button>
  Button
</button>`,
    css: `/* From Webify by AKHILJITH-VN - Tags: button */
button {
  height: auto;
  width: auto;
  text-align: justify;
  background: linear-gradient(30deg,rgb(32, 252, 252),rgb(101, 101, 255)
    ,rgb(254, 183, 196),rgb(224, 17, 224));
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 8px;
  box-shadow: 2px 4px 6px #25d0e3;
  transition: all 0.5s ease;
}

button:hover {
  background: linear-gradient(30deg,rgb(224, 17, 224), pink, rgb(60, 60, 255), rgb(32, 252, 252));
  box-shadow: 2px 4px 6px #a8097e;
}`
  },
  {
    category: "buttons",
    html: `<button> Click here </button>`,
    css: `/* From Webify by Adir-SL - Tags: pink, button, toy */
button {
  --fontSize: 2rem;
  --button: 356, 80%;
  --buttonColor: hsl(var(--button), 70%);
  --sideColor: hsl(var(--button), 40%);
  --text: hsl(var(--button), 30%);
  --bgColor: #e8e8e8;
  position: relative;
  font-size: 0;
  font-family: sans-serif;
  transition: all 300ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  border-radius: 999px;
  padding: calc(var(--fontSize) / 2);
  height: calc(var(--fontSize) * 2);
  min-width: calc(var(--fontSize) * 2);
  line-height: calc(var(--fontSize) * 0.75);
  border: none;
  outline: none;
  background-color: var(--buttonColor);
  transform: rotate(-25deg);
  color: var(--text);
  white-space: nowrap;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  box-shadow: calc(var(--fontSize) / -25) calc(var(--fontSize) / 25) calc(var(--fontSize) / 25) #ffffffbb inset, calc(var(--fontSize) / -25) calc(var(--fontSize) / -50) calc(var(--fontSize) / 25) #ffffff88 inset,
    0 0 calc(var(--fontSize) / 5) #0f004a77 inset, 0 0 0 calc(var(--fontSize) / 3.6) var(--buttonColor) inset,
    0 0 calc(var(--fontSize) / 6.25) calc(var(--fontSize) / 3.125) #0f004a44 inset, calc(var(--fontSize) / -25) calc(var(--fontSize) / 12.5) 0 var(--sideColor),
    calc(var(--fontSize) / -8.33) calc(var(--fontSize) / 12.5) calc(var(--fontSize) / 6.25) #0f004a44, calc(var(--fontSize) / -16.666) calc(var(--fontSize) / 12.5) calc(var(--fontSize) / 25) #0f004a66;
}

button:hover {
  transform: rotate(0);
  overflow: visible;
  font-size: var(--fontSize);
}

button::before,
button::after {
  content: ": ";
  font-family: serif;
  font-weight: bold;
  text-shadow: calc(var(--fontSize) / 25) 0 0 var(--sideColor), 0 0 calc(var(--fontSize) / 12.5) #0f004a55,
    calc(var(--fontSize) / 50) 0 0 var(--sideColor), calc(var(--fontSize) / 50) calc(var(--fontSize) / -50) 0 var(--sideColor);
  color: var(--bgColor);
  font-size: var(--fontSize);
}`
  },
  {
    category: "buttons",
    html: `<div class="printer">
    <div class="paper">
        <svg viewBox="0 0 8 8" class="svg">
            <path fill="#0077FF" d="M6.28951 1.3867C6.91292 0.809799 7.00842 0 7.00842 0C7.00842 0 6.45246 0.602112 5.54326 0.602112C4.82505 0.602112 4.27655 0.596787 4.07703 0.595012L3.99644 0.594302C1.94904 0.594302 0.290039 2.25224 0.290039 4.29715C0.290039 6.34206 1.94975 8 3.99644 8C6.04312 8 7.70284 6.34206 7.70284 4.29715C7.70347 3.73662 7.57647 3.18331 7.33147 2.67916C7.08647 2.17502 6.7299 1.73327 6.2888 1.38741L6.28951 1.3867ZM3.99679 6.532C2.76133 6.532 1.75875 5.53084 1.75875 4.29609C1.75875 3.06133 2.76097 2.06018 3.99679 2.06018C4.06423 2.06014 4.13163 2.06311 4.1988 2.06905L4.2414 2.07367C4.25028 2.07438 4.26057 2.0758 4.27406 2.07651C4.81533 2.1436 5.31342 2.40616 5.67465 2.81479C6.03589 3.22342 6.23536 3.74997 6.23554 4.29538C6.23554 5.53084 5.23439 6.532 3.9975 6.532H3.99679Z"></path>
            <path fill="#0055BB" d="M6.756 1.82386C6.19293 2.09 5.58359 2.24445 4.96173 2.27864C4.74513 2.17453 4.51296 2.10653 4.27441 2.07734C4.4718 2.09225 5.16906 2.07947 5.90892 1.66374C6.04642 1.58672 6.1743 1.49364 6.28986 1.38647C6.45751 1.51849 6.61346 1.6647 6.756 1.8235V1.82386Z"></path>
        </svg>
    </div>
    <div class="dot"></div>
    <div class="output">
        <div class="paper-out"></div>
    </div>
</div>`,
    css: `/* From Webify by Admin12121 - Tags: button, hover, hover effect */
.printer {
  --border: #00104b;
  --background: #fff;
  cursor: pointer;
  width: 32px;
  height: 18px;
  position: relative;
}

.printer:before, .printer:after {
  content: "";
  position: absolute;
  box-shadow: inset 0 0 0 2px var(--border);
  background: var(--background);
}

.printer:before {
  left: 0;
  right: 0;
  bottom: 0;
  height: 14px;
  border-radius: 3px;
  z-index: 2;
}

.printer:after {
  width: 26px;
  height: 6px;
  top: 0;
  left: 3px;
  border-radius: 3px 3px 0 0;
}

.printer .dot {
  width: 24px;
  height: 2px;
  border-radius: 1px;
  left: 4px;
  bottom: 4px;
  z-index: 4;
  position: absolute;
  background: var(--border);
}

.printer .dot:before, .printer .dot:after {
  content: "";
  position: absolute;
  background: var(--border);
  border-radius: 1px;
  height: 2px;
}

.printer .dot:before {
  width: 2px;
  right: 0;
  top: -5px;
}

.printer .dot:after {
  width: 4px;
  right: 3px;
  top: -5px;
}

.printer .paper {
  position: absolute;
  z-index: 1;
  width: 18px;
  height: 20px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 2px var(--border);
  background: var(--background);
  left: 7px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  transform: perspective(40px) translateY(0) rotateX(4deg) translateZ(0);
  -webkit-animation: paper 1.2s ease infinite;
  animation: paper 1.2s ease infinite;
  -webkit-animation-play-state: var(--state, running);
  animation-play-state: var(--state, running);
}

.printer .paper .svg {
  display: block;
  width: 8px;
  height: 8px;
  margin-top: 4px;
}

.printer .output {
  width: 32px;
  height: 24px;
  pointer-events: none;
  top: 13px;
  left: 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
}

.printer .output .paper-out {
  position: absolute;
  z-index: 1;
  width: 18px;
  height: 20px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 2px var(--border);
  background: var(--background);
  left: 7px;
  bottom: 0;
  transform: perspective(40px) rotateX(40deg) translateY(-12px) translateZ(6px);
  -webkit-animation: paper-out 1.2s ease infinite;
  animation: paper-out 1.2s ease infinite;
  -webkit-animation-play-state: var(--state, running);
  animation-play-state: var(--state, running);
}

.printer .output .paper-out:before {
  content: "";
  position: absolute;
  left: 3px;
  top: 4px;
  right: 3px;
  height: 2px;
  border-radius: 1px;
  opacity: 0.5;
  background: var(--border);
  box-shadow: 0 3px 0 var(--border), 0 6px 0 var(--border);
}

.printer:not(:hover) {
  --state: paused;
}

@-webkit-keyframes paper {
  50% {
    transform: translateY(10px) translateZ(0);
  }
}

@keyframes paper {
  50% {
    transform: translateY(10px) translateZ(0);
  }
}

@-webkit-keyframes paper-out {
  50% {
    transform: perspective(40px) rotateX(30deg) translateY(-4px) translateZ(6px);
  }
}

@keyframes paper-out {
  50% {
    transform: perspective(40px) rotateX(30deg) translateY(-4px) translateZ(6px);
  }
}`
  },
  {
    category: "buttons",
    html: `<button class="bin">🗑</button>
<div class="div">
  <small>
    <i></i>
  </small>
</div>`,
    css: `/* From Webify by Admin12121 - Tags: delete, animated, 3d button */
.bin {
  --black: #000000;
  --binbg: #e6e6e6;
  --width: 40px;
  --height: 50px;
  background-image: repeating-linear-gradient(to right, transparent, transparent 5px, var(--black) 5px, var(--black) 7px, transparent 7px);
  background-size: 11px calc(var(--height) / 2);
  background-position: 2px center;
  background-repeat: repeat-x;
  margin: auto;
  position: relative;
  background-color: var(--binbg);
  border: 0;
  color: transparent;
  width: var(--width);
  height: var(--height);
  border: 2px solid var(--black);
  border-radius: 0 0 6px 6px;
}

.bin::after, .bin::before {
  content: "";
  position: absolute;
  transform-origin: left bottom;
  transition: 200ms ease-in-out;
  border-width: 2px;
  border-style: solid;
  margin: auto;
  right: 0;
}

.bin::after {
  left: -4px;
  top: -5px;
  height: 7px;
  width: var(--width);
  border: 2px solid var(--black);
  background-color: var(--binbg);
  border-radius: 5px 5px 0 0;
}

.bin::before {
  top: -8px;
  height: 2px;
  width: 10px;
  border-color: var(--black) var(--black) transparent var(--black);
  left: 0;
}

.bin:focus, .bin:active {
  outline: none;
  cursor: none;
}

.bin:focus::before, .bin:focus::after, .bin:active::before, .bin:active::after {
  transform-origin: left bottom;
  transform: rotate(-45deg);
}

.bin:focus::before, .bin:active::before {
  top: -18px;
  left: -23px;
  right: 3px;
}

.bin:focus ~ .div, .bin:active ~ .div {
  cursor: none;
  z-index: 1;
}

.bin:focus ~ .div:hover, .bin:active ~ .div:hover {
  cursor: none;
}

.bin:focus ~ .overlay, .bin:active ~ .overlay {
  pointer-events: inherit;
  z-index: 2;
  cursor: none;
}

.bin:focus ~ .div > small, .bin:active ~ .div > small {
  opacity: 1;
  animation: throw 300ms 30ms cubic-bezier(0.215, 0.61, 0.355, 0.3) forwards;
}

.div:focus, .div:active, .div:hover {
  z-index: 1;
  cursor: none;
}

.div > small {
  position: absolute;
  width: 20px;
  height: 16px;
  left: 0;
  right: -58px;
  margin: auto;
  top: 27px;
  bottom: 0;
  border-left: 1px solid black;
  opacity: 0;
}

.div > small::before, .div > small::after {
  content: "";
  position: absolute;
  width: 1px;
  border-right: 1px solid black;
}

.div > small::before {
  height: 17px;
  transform: rotate(-42deg);
  top: -3px;
  right: 13px;
}

.div > small::after {
  height: 4px;
  transform: rotate(-112deg);
  top: 18px;
  right: 11px;
}

.div > small > i::before, .div > small > i::after {
  content: "";
  position: absolute;
  border-top: 1px solid black;
}

.div > small > i::before {
  border-left: 1px solid black;
  width: 4px;
  bottom: -4px;
  height: 4px;
  transform: rotate(66deg);
}

.div > small > i::after {
  border-right: 1px solid black;
  width: 5px;
  bottom: -2px;
  height: 5px;
  transform: rotate(-114deg);
  right: 6px;
}

@keyframes throw {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, -30px) rotate(-10deg);
  }

  60% {
    transform: translate(0, -40px) rotate(-30deg);
  }

  70% {
    transform: translate(-5px, -50px) rotate(-40deg) scale(1);
    opacity: 1;
  }

  80% {
    transform: translate(-10px, -60px) rotate(-60deg) scale(0.9);
    opacity: 1;
  }

  90% {
    transform: translate(-20px, -50px) rotate(-100deg) scale(0.5);
    opacity: 0.8;
  }

  100% {
    transform: translate(-30px, -20px) rotate(-80deg) scale(0.4);
    opacity: 0;
  }
}`
  },
  {
    category: "buttons",
    html: `<button class="button">
  Button
</button>`,
    css: `/* From Webify by Afacanc38 - Tags: skeuomorphism, minimalist, black, button, dark, cool btn */
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 2px;
  background: #424242;
  color: white;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, .1) inset,
    0 0 0 1px rgba(0, 0, 0, .7),
    0 -1px 0 0 rgba(0, 0, 0, .7) inset,
    0 1px 2px 1px rgba(0, 0, 0, .6);
  cursor: pointer;
  transition: 50ms ease-out;
  font-weight: 600;
}

.button:hover, .button:focus, .button:focus-visible {
  background: #353535;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, .05) inset,
    0 0 0 1px rgba(0, 0, 0, .7),
    0 -1px 0 0 rgba(0, 0, 0, .7) inset,
    0 1px 2px 1px rgba(0, 0, 0, .6);
  border: none;
  outline: none;
}

.button:active {
  background: #181818;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .7) inset,
    0 1px 0 0 rgba(255, 255, 255, .05),
    0 1px 2px 1px rgba(0, 0, 0, .6) inset;
}`
  },
  {
    category: "buttons",
    html: `<button> Button
</button>`,
    css: `/* From Webify by AhSiber - Tags: simple, minimalist, button */
button {
 border: 1px solid seagreen;
 border-radius: 5px;
 background: rgb(255, 255, 255);
 color: seagreen;
 font-style: italic;
 padding: 10px;
 padding-right: 14px;
 padding-left: 12px;
 font-size: 17px;
}

button:hover {
 background-color: seagreen;
 color: white;
 border: 1px solid  seagreen;
}`
  },
  {
    category: "buttons",
    html: `<button>
  <span class="text">
      Hover Me!
  </span>
  <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" class="star"><path fill="currentcolor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
  <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" class="moon"><path fill="currentcolor" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg>
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="meteor"><path fill="currentcolor" d="M493.7 .9L299.4 75.6l2.3-29.3c1-12.8-12.8-21.5-24-15.1L101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L480.8 234.3c6.5-11.1-2.2-25-15.1-24l-29.3 2.3L511.1 18.3c.6-1.5 .9-3.2 .9-4.8C512 6 506 0 498.5 0c-1.7 0-3.3 .3-4.8 .9zM192 192a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"></path></svg>
</button>`,
    css: `/* From Webify by Ahemtan - Tags: button */
button {
  position: relative;
  background: #6a92ef;
  color: white;
  padding: .9rem 2.20rem;
  border-radius: 2rem;
  transition: .5s;
  border: none;
}

button::after {
  content: '';
  width: 80%;
  height: 40%;
  background: linear-gradient(80deg, hsl(217, 77%, 71%) 10%, hsl(218, 76%, 84%) 48%);
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  margin: 0 auto;
  border-radius: 2rem;
  filter: blur(8px);
  z-index: -9;
  opacity: 0;
  transition: opacity .4s;
}

.text {
  position: relative;
  z-index: 10;
}

button svg {
  position: absolute;
  inset: 0;
  margin: auto;
  pointer-events: none;
  transition: .6s;
  opacity: 0;
}

svg.star {
  width: 18px;
  transform: translate(-25px, -6px) rotate(55deg);
  filter: blur(.4px);
  color: hsl(210, 40%, 47%);
}

svg.moon {
  width: 18px;
  transform: translate(7px, -14) rotate(80deg);
  filter: blur(.5px);
  color: hsl(210, 40%, 47%);
}

svg.meteor {
  width: 16px;
  transform: translate(34px, -4px) rotate(-45deg);
  filter: blur(.4px);
  color: hsl(210, 40%, 47%);
}

button:active {
  color: #ffffff;
  transform: scale(1.2);
}

button:hover::after {
  opacity: 1;
}

button:hover {
  transform: scale(1.3);
}

button:hover svg {
  opacity: 1;
}

button:hover svg.star {
  transform: translate(-55px, -20px) rotate(55deg) scale(1.8);
}

button:hover svg.moon {
  transform: translate(50px, -32px) rotate(0deg) scale(1.4);
}

button:hover svg.meteor {
  transform: translate(28px, 30px) rotate(260deg) scale(2);
}`
  },
  {
    category: "buttons",
    html: `<button class="buttonDownload">Upload</button>`,
    css: `/* From Webify by AkashKobal - Tags: button */
.buttonDownload {
  display: inline-block;
  position: relative;
  padding: 10px 25px;
  background-color: #4CC713;
  color: white;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 0.9em;
  text-align: center;
  text-indent: 15px;
  border: none;
  border-radius: 2em;
  font-weight: bold;
}

.buttonDownload:hover {
  background-color: #1a60a2;
  color: white;
}

.buttonDownload:before, .buttonDownload:after {
  content: ' ';
  display: block;
  position: absolute;
  left: 15px;
  top: 52%;
}

.buttonDownload:before {
  width: 10px;
  height: 2px;
  border-style: solid;
  border-width: 0 2px 2px;
}

.buttonDownload:after {
  width: 0;
  height: 0;
  margin-left: 3px;
  margin-top: -7px;
  border-style: solid;
  border-width: 4px 4px 0 4px;
  border-color: transparent;
  border-top-color: inherit;
  animation: downloadArrow 1s linear infinite;
  animation-play-state: paused;
}

.buttonDownload:hover:before {
  border-color: #bdd3ef;
}

.buttonDownload:hover:after {
  border-top-color: #eff1f7;
  animation-play-state: running;
}

@keyframes downloadArrow {
  0% {
    margin-top: -7px;
    opacity: 1;
  }

  0.001% {
    margin-top: -15px;
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }

  100% {
    margin-top: 0;
    opacity: 0.4;
  }
}`
  },
  {
    category: "buttons",
    html: `<button>
  <span> Button
  </span>
</button>`,
    css: `/* From Webify by Ali-Tahmazi99 - Tags: button */
/* From Webify by @Ali-Tahmazi99 */
button {
 display: inline-block;
 width: 150px;
 height: 50px;
 border-radius: 10px;
 border: 1px solid #03045e;
 position: relative;
 overflow: hidden;
 transition: all 0.5s ease-in;
 z-index: 1;
}

button::before,
button::after {
 content: '';
 position: absolute;
 top: 0;
 width: 0;
 height: 100%;
 transform: skew(15deg);
 transition: all 0.5s;
 overflow: hidden;
 z-index: -1;
}

button::before {
 left: -10px;
 background: #240046;
}

button::after {
 right: -10px;
 background: #5a189a;
}

button:hover::before,
button:hover::after {
 width: 58%;
}

button:hover span {
 color: #e0aaff;
 transition: 0.3s;
}

button span {
 color: #03045e;
 font-size: 18px;
 transition: all 0.3s ease-in;
}`
  },
  {
    category: "buttons",
    html: `<button class="btn">
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span class="text">Generate</span>
</button>`,
    css: `/* From Webify by AlimurtuzaCodes - Tags: gradient, button, stars, css effect, css button, generate */
.btn {
  border: none;
  width: 15em;
  height: 5em;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #1C1A1C;
  cursor: pointer;
  transition: all 450ms ease-in-out;
}

.sparkle {
  fill: #AAAAAA;
  transition: all 800ms ease;
}

.text {
  font-weight: 600;
  color: #AAAAAA;
  font-size: medium;
}

.btn:hover {
  background: linear-gradient(0deg,#A47CF3,#683FEA);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
  inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
  0px 0px 0px 4px rgba(255, 255, 255, 0.2),
  0px 0px 180px 0px #9917FF;
  transform: translateY(-2px);
}

.btn:hover .text {
  color: white;
}

.btn:hover .sparkle {
  fill: white;
  transform: scale(1.2);
}`
  },
  {
    category: "buttons",
    html: `<!-- From Webify by AlimurtuzaCodes - Tags: button, rounded button, hover button, css button, tailwind, tailwindbutton -->
<button class="bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer relative group hover:bg-[#333] transition duration-300 ease-in hover:-translate-x-2 hover:translate-y-2">
  <h1 class="group-hover:text-white text-[#333] font-bold">SUBMIT</h1>
  <div class="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10">
  <div class="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10">
</div></div></button>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<!-- From Webify by AlimurtuzaCodes - Tags: button, color, tailwind -->
<button class="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
 <span class="font-medium text-[#333] group-hover:text-white">Hover me</span>
</button>`,
    css: ``
  },
  {
    category: "buttons",
    html: `<button class="btn-donate">
    Donate now
</button>`,
    css: `/* From Webify by Allyhere - Tags: button, css effect, hoverme */
.btn-donate {
  --clr-font-main: hsla(0 0% 20% / 100);
  --btn-bg-1: hsla(194 100% 69% / 1);
  --btn-bg-2: hsla(217 100% 56% / 1);
  --btn-bg-color: hsla(360 100% 100% / 1);
  --radii: 0.5em;
  cursor: pointer;
  padding: 0.9em 1.4em;
  min-width: 120px;
  min-height: 44px;
  font-size: var(--size, 1rem);
  font-family: "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
  transition: 0.8s;
  background-size: 280% auto;
  background-image: linear-gradient(325deg, var(--btn-bg-2) 0%, var(--btn-bg-1) 55%, var(--btn-bg-2) 90%);
  border: none;
  border-radius: var(--radii);
  color: var(--btn-bg-color);
  box-shadow: 0px 0px 20px rgba(71, 184, 255, 0.5), 0px 5px 5px -1px rgba(58, 125, 233, 0.25), inset 4px 4px 8px rgba(175, 230, 255, 0.5), inset -4px -4px 8px rgba(19, 95, 216, 0.35);
}

.btn-donate:hover {
  background-position: right top;
}

.btn-donate:is(:focus, :focus-visible, :active) {
  outline: none;
  box-shadow: 0 0 0 3px var(--btn-bg-color), 0 0 0 6px var(--btn-bg-2);
}

@media (prefers-reduced-motion: reduce) {
  .btn-donate {
    transition: linear;
  }
}`
  },
  {
    category: "buttons",
    html: `<div class="svg-wrapper">
  <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
    <rect class="shape" height="60" width="190"></rect>
    </svg>
    <div class="text">Subscribe</div>
</div>`,
    css: `/* From Webify by AmIt-DasIT - Tags: button, add, btn */
.svg-wrapper {
  position: relative;
  width: 190px;
  height: 60px;
  text-align: center;
  cursor: pointer;
}

.shape {
  stroke-dasharray: 100 300;
  stroke-dashoffset: -297;
  fill: transparent;
  stroke: rgb(220, 20, 60);
  stroke-width: 5px;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
}

.text {
  font-size: 22px;
  top: -52px;
  position: relative;
  font-weight: 600;
  color: white;
}

.svg-wrapper:hover .shape {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}

.svg-wrapper:hover {
  background-color: rgba(220, 20, 60, 0.2);
  transition: 1s;
}`
  },
  {
    category: "buttons",
    html: `<div class="box">
  <div class="arrow right"></div>
  <div class="text">Learn More</div>
</div>`,
    css: `/* From Webify by AmIt-DasIT - Tags: button */
.box {
  width: 45px;
  height: 45px;
  background: #5cda5c;
  border-radius: 25px;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
}

.box:hover {
  width: 160px;
  background: linear-gradient(to right, #26d526, yellow);
}

.box:hover .arrow {
  display: none;
}

.box .text {
  display: none;
}

.box:hover .text {
  display: flex;
  font-size: 16px;
  font-weight: 550;
  color: black;
  letter-spacing: 0.6px;
  animation: anima 0.6s ease;
}

@keyframes anima {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.box:active {
  background: linear-gradient(to right, rgb(38, 213, 38, 0.8), rgba(255, 255, 0, 0.8));
}`
  },
  {
    category: "buttons",
    html: `<button class="button">
  Click me
</button>`,
    css: `/* From Webify by Amikas - Tags: button */
.button {
  background-color: #333;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 17px;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  background-color: rgb(128, 95, 247);
}

.button:active {
  transform: translateY(0.5em);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}`
  },,{
    category:"cards",
    html:`<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div id="card">
      <div class="card-content">
        <div class="card-glare"></div>
        <div class="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        <p id="prompt">HOVER ME</p>
        <div class="title">CYBER<br />CARD</div>
        <div class="glowing-elements">
          <div class="glow-1"></div>
          <div class="glow-2"></div>
          <div class="glow-3"></div>
        </div>
        <div class="subtitle">
          <span>INTERACTIVE</span>
          <span class="highlight">3D EFFECT</span>
        </div>
        <div class="card-particles">
          <span></span><span></span><span></span> <span></span><span></span
          ><span></span>
        </div>
        <div class="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="scan-line"></div>
      </div>
    </div>
  </div>
</div>
`,
    css:`.container {
  position: relative;
  width: 190px;
  height: 254px;
  transition: 200ms;
}

.container:active {
  width: 180px;
  height: 245px;
}

#card {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 700ms;
  background: linear-gradient(45deg, #1a1a1a, #262626);
  border: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  box-shadow:
    0 0 20px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(0, 0, 0, 0.2);
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
}

#prompt {
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  transition: 300ms ease-in-out;
  position: absolute;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.title {
  opacity: 0;
  transition: 300ms ease-in-out;
  position: absolute;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 4px;
  text-align: center;
  width: 100%;
  padding-top: 20px;
  background: linear-gradient(45deg, #00ffaa, #00a2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
  text-shadow:
    0 0 10px rgba(92, 103, 255, 0.5),
    0 0 20px rgba(92, 103, 255, 0.3);
}

.subtitle {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  letter-spacing: 2px;
  transform: translateY(30px);
  color: rgba(255, 255, 255, 0.6);
}

.highlight {
  color: #00ffaa;
  margin-left: 5px;
  background: linear-gradient(90deg, #5c67ff, #ad51ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.glowing-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.glow-1,
.glow-2,
.glow-3 {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 170, 0.3) 0%,
    rgba(0, 255, 170, 0) 70%
  );
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow-1 {
  top: -20px;
  left: -20px;
}
.glow-2 {
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
}
.glow-3 {
  bottom: -20px;
  left: 30%;
}

.card-particles span {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #00ffaa;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Hover effects */
.tracker:hover ~ #card .title {
  opacity: 1;
  transform: translateY(-10px);
}

.tracker:hover ~ #card .glowing-elements div {
  opacity: 1;
}

.tracker:hover ~ #card .card-particles span {
  animation: particleFloat 2s infinite;
}

@keyframes particleFloat {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
    opacity: 0;
  }
}

/* Particle positions */
.card-particles span:nth-child(1) {
  --x: 1;
  --y: -1;
  top: 40%;
  left: 20%;
}
.card-particles span:nth-child(2) {
  --x: -1;
  --y: -1;
  top: 60%;
  right: 20%;
}
.card-particles span:nth-child(3) {
  --x: 0.5;
  --y: 1;
  top: 20%;
  left: 40%;
}
.card-particles span:nth-child(4) {
  --x: -0.5;
  --y: 1;
  top: 80%;
  right: 40%;
}
.card-particles span:nth-child(5) {
  --x: 1;
  --y: 0.5;
  top: 30%;
  left: 60%;
}
.card-particles span:nth-child(6) {
  --x: -1;
  --y: 0.5;
  top: 70%;
  right: 60%;
}

#card::before {
  content: "";
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 170, 0.1) 0%,
    rgba(0, 162, 255, 0.05) 50%,
    transparent 100%
  );
  filter: blur(20px);
  opacity: 0;
  width: 150%;
  height: 150%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

.tracker:hover ~ #card::before {
  opacity: 1;
}

.tracker {
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
}

.tracker:hover {
  cursor: pointer;
}

.tracker:hover ~ #card #prompt {
  opacity: 0;
}

.tracker:hover ~ #card {
  transition: 300ms;
  filter: brightness(1.1);
}

.container:hover #card::before {
  transition: 200ms;
  content: "";
  opacity: 80%;
}

.canvas {
  perspective: 800px;
  inset: 0;
  z-index: 200;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "tr-1 tr-2 tr-3 tr-4 tr-5"
    "tr-6 tr-7 tr-8 tr-9 tr-10"
    "tr-11 tr-12 tr-13 tr-14 tr-15"
    "tr-16 tr-17 tr-18 tr-19 tr-20"
    "tr-21 tr-22 tr-23 tr-24 tr-25";
}

.tr-1 {
  grid-area: tr-1;
}

.tr-2 {
  grid-area: tr-2;
}

.tr-3 {
  grid-area: tr-3;
}

.tr-4 {
  grid-area: tr-4;
}

.tr-5 {
  grid-area: tr-5;
}

.tr-6 {
  grid-area: tr-6;
}

.tr-7 {
  grid-area: tr-7;
}

.tr-8 {
  grid-area: tr-8;
}

.tr-9 {
  grid-area: tr-9;
}

.tr-10 {
  grid-area: tr-10;
}

.tr-11 {
  grid-area: tr-11;
}

.tr-12 {
  grid-area: tr-12;
}

.tr-13 {
  grid-area: tr-13;
}

.tr-14 {
  grid-area: tr-14;
}

.tr-15 {
  grid-area: tr-15;
}

.tr-16 {
  grid-area: tr-16;
}

.tr-17 {
  grid-area: tr-17;
}

.tr-18 {
  grid-area: tr-18;
}

.tr-19 {
  grid-area: tr-19;
}

.tr-20 {
  grid-area: tr-20;
}

.tr-21 {
  grid-area: tr-21;
}

.tr-22 {
  grid-area: tr-22;
}

.tr-23 {
  grid-area: tr-23;
}

.tr-24 {
  grid-area: tr-24;
}

.tr-25 {
  grid-area: tr-25;
}

.tr-1:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-2:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-3:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
}

.tr-4:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
}

.tr-5:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
}

.tr-6:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-7:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-8:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
}

.tr-9:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
}

.tr-10:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
}

.tr-11:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-12:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-13:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.tr-14:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
}

.tr-15:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
}

.tr-16:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-17:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-18:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
}

.tr-19:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
}

.tr-20:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
}

.tr-21:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-22:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-23:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
}

.tr-24:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
}

.tr-25:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
}

.noselect {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently
									supported by Chrome, Edge, Opera and Firefox */
}

.card-glare {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.05) 45%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  transition: opacity 300ms;
}

.cyber-lines span {
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(92, 103, 255, 0.2),
    transparent
  );
}

.cyber-lines span:nth-child(1) {
  top: 20%;
  left: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: left;
  animation: lineGrow 3s linear infinite;
}

.cyber-lines span:nth-child(2) {
  top: 40%;
  right: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: right;
  animation: lineGrow 3s linear infinite 1s;
}

.cyber-lines span:nth-child(3) {
  top: 60%;
  left: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: left;
  animation: lineGrow 3s linear infinite 2s;
}

.cyber-lines span:nth-child(4) {
  top: 80%;
  right: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: right;
  animation: lineGrow 3s linear infinite 1.5s;
}

.corner-elements span {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(92, 103, 255, 0.3);
}

.corner-elements span:nth-child(1) {
  top: 10px;
  left: 10px;
  border-right: 0;
  border-bottom: 0;
}

.corner-elements span:nth-child(2) {
  top: 10px;
  right: 10px;
  border-left: 0;
  border-bottom: 0;
}

.corner-elements span:nth-child(3) {
  bottom: 10px;
  left: 10px;
  border-right: 0;
  border-top: 0;
}

.corner-elements span:nth-child(4) {
  bottom: 10px;
  right: 10px;
  border-left: 0;
  border-top: 0;
}

.scan-line {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(92, 103, 255, 0.1),
    transparent
  );
  transform: translateY(-100%);
  animation: scanMove 2s linear infinite;
}

@keyframes lineGrow {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}

@keyframes scanMove {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

/* Modyfikacja istniejących styli */
#card:hover .card-glare {
  opacity: 1;
}

.corner-elements span {
  transition: all 0.3s ease;
}

#card:hover .corner-elements span {
  border-color: rgba(92, 103, 255, 0.8);
  box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
}
`
  },{
    category:"cards",
    html:`<div class="main">
  <div class="card">
    <div class="fl">
      <div class="fullscreen">
        <svg class="fullscreen_svg" viewBox="0 0 100 100"><path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z"></path></svg>
      </div>
    </div>
    <div class="card_content">
      <button>Code to Infinity!</button>
    </div>
    <div class="card_back"></div>
  </div>
  <div class="data">
    <div class="img">
      <svg viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke-linecap="butt" fill="none" stroke-width="2.00">
      <path d="M 14.06 0.00
        Q 13.33 4.09 13.93 7.52
        A 1.04 1.02 -78.7 0 0 14.37 8.19
        L 32.87 20.19" stroke="#59afb1"></path>
      <path d="M 32.87 20.19
        L 42.25 26.79" stroke="#4fa6a8"></path>
      <path d="M 42.25 26.79
        C 41.40 28.26 24.14 34.92 21.32 36.20" stroke="#69cbc0"></path>
      <path d="M 21.32 36.20
        Q 15.81 38.21 11.00 41.21" stroke="#6fcdbb"></path>
      <path d="M 11.00 41.21
        L 9.75 40.96" stroke="#5ec8ab"></path>
      <path d="M 9.75 40.96
        Q 5.99 37.71 1.71 35.19
        A 1.00 1.00 0.0 0 0 0.22 35.85
        L 0.00 36.94" stroke="#5cae9e"></path>
      <path d="M 79.95 6.12
        L 62.46 11.32" stroke="#3190a6"></path>
      <path d="M 62.46 11.32
        Q 47.42 14.67 32.87 20.19" stroke="#3a96a3"></path>
      <path d="M 80.00 11.06
        L 64.50 17.46" stroke="#22a3be"></path>
      <path d="M 64.50 17.46
        L 62.46 11.32" stroke="#28879d"></path>
      <path d="M 64.50 17.46
        L 43.00 26.96" stroke="#2ba9bb"></path>
      <path d="M 43.00 26.96
        L 42.25 26.79" stroke="#4ab2b2"></path>
      <path d="M 80.00 52.31
        Q 71.64 45.91 62.46 40.67" stroke="#45ced3"></path>
      <path d="M 62.46 40.67
        Q 62.43 36.88 58.50 36.79" stroke="#13636e"></path>
      <path d="M 58.50 36.79
        Q 50.07 32.95 43.00 26.96" stroke="#45ced3"></path>
      <path d="M 58.50 36.79
        Q 55.85 40.04 56.86 44.07
        C 57.53 46.71 60.02 47.68 61.77 45.19
        Q 61.91 44.99 61.94 44.74
        L 62.46 40.67" stroke="#326b65"></path>
      <path d="M 40.81 79.86
        Q 46.22 74.94 52.34 70.94
        A 1.00 1.00 0.0 0 0 52.39 69.30
        Q 44.74 63.65 43.10 62.62
        Q 34.11 56.98 32.50 55.79" stroke="#59d4b5"></path>
      <path d="M 32.50 55.79
        C 36.74 55.42 30.64 48.79 29.79 47.81
        C 27.54 45.21 26.34 42.09 24.05 39.44
        Q 22.66 37.82 21.32 36.20" stroke="#6ad8c5"></path>
      <path d="M 48.75 39.07
        A 2.30 2.30 0.0 0 0 46.45 36.77
        L 46.05 36.77
        A 2.30 2.30 0.0 0 0 43.75 39.07
        L 43.75 44.21
        A 2.30 2.30 0.0 0 0 46.05 46.51
        L 46.45 46.51
        A 2.30 2.30 0.0 0 0 48.75 44.21
        L 48.75 39.07" stroke="#326b65"></path>
      <path d="M 58.63 54.41
        C 54.90 57.18 50.72 56.87 46.91 54.39
        A 1.00 0.99 51.9 0 0 46.04 54.28
        C 42.37 55.52 43.88 58.13 46.28 59.41
        Q 53.38 63.20 60.15 58.94
        C 62.54 57.43 62.47 54.80 59.41 54.23
        A 1.00 1.00 0.0 0 0 58.63 54.41" stroke="#326b65"></path>
      <path d="M 9.75 40.96
        Q 5.15 43.50 0.05 44.46" stroke="#4bb793"></path>
      <path d="M 32.50 55.79
        L 11.00 41.21" stroke="#5fd6b0"></path>
      <path d="M 11.19 80.00
        Q 12.51 79.61 11.57 78.67
        Q 5.99 73.11 1.70 65.70
        C 1.28 64.97 0.74 64.76 0.00 65.19" stroke="#48d08e"></path>
      </g>
      <path d="M 0.00 0.00
        L 14.06 0.00
        Q 13.33 4.09 13.93 7.52
        A 1.04 1.02 -78.7 0 0 14.37 8.19
        L 32.87 20.19
        L 42.25 26.79
        C 41.40 28.26 24.14 34.92 21.32 36.20
        Q 15.81 38.21 11.00 41.21
        L 9.75 40.96
        Q 5.99 37.71 1.71 35.19
        A 1.00 1.00 0.0 0 0 0.22 35.85
        L 0.00 36.94
        L 0.00 0.00
        Z" fill="#6ebfb6"></path>
      <path d="M 14.06 0.00
        L 80.00 0.00
        L 79.95 6.12
        L 62.46 11.32
        Q 47.42 14.67 32.87 20.19
        L 14.37 8.19
        A 1.04 1.02 -78.7 0 1 13.93 7.52
        Q 13.33 4.09 14.06 0.00
        Z" fill="#439eac"></path>
      <path d="M 79.95 6.12
        L 80.00 11.06
        L 64.50 17.46
        L 62.46 11.32
        L 79.95 6.12
        Z" fill="#1f81a0"></path>
      <path d="M 62.46 11.32
        L 64.50 17.46
        L 43.00 26.96
        L 42.25 26.79
        L 32.87 20.19
        Q 47.42 14.67 62.46 11.32
        Z" fill="#308d99"></path>
      <path d="M 80.00 11.06
        L 80.00 52.31
        Q 71.64 45.91 62.46 40.67
        Q 62.43 36.88 58.50 36.79
        Q 50.07 32.95 43.00 26.96
        L 64.50 17.46
        L 80.00 11.06
        Z" fill="#25c5dc"></path>
      <path d="M 42.25 26.79
        L 43.00 26.96
        Q 50.07 32.95 58.50 36.79
        Q 55.85 40.04 56.86 44.07
        C 57.53 46.71 60.02 47.68 61.77 45.19
        Q 61.91 44.99 61.94 44.74
        L 62.46 40.67
        Q 71.64 45.91 80.00 52.31
        L 80.00 80.00
        L 40.81 79.86
        Q 46.22 74.94 52.34 70.94
        A 1.00 1.00 0.0 0 0 52.39 69.30
        Q 44.74 63.65 43.10 62.62
        Q 34.11 56.98 32.50 55.79
        C 36.74 55.42 30.64 48.79 29.79 47.81
        C 27.54 45.21 26.34 42.09 24.05 39.44
        Q 22.66 37.82 21.32 36.20
        C 24.14 34.92 41.40 28.26 42.25 26.79
        Z
        M 48.75 39.07
        A 2.30 2.30 0.0 0 0 46.45 36.77
        L 46.05 36.77
        A 2.30 2.30 0.0 0 0 43.75 39.07
        L 43.75 44.21
        A 2.30 2.30 0.0 0 0 46.05 46.51
        L 46.45 46.51
        A 2.30 2.30 0.0 0 0 48.75 44.21
        L 48.75 39.07
        Z
        M 58.63 54.41
        C 54.90 57.18 50.72 56.87 46.91 54.39
        A 1.00 0.99 51.9 0 0 46.04 54.28
        C 42.37 55.52 43.88 58.13 46.28 59.41
        Q 53.38 63.20 60.15 58.94
        C 62.54 57.43 62.47 54.80 59.41 54.23
        A 1.00 1.00 0.0 0 0 58.63 54.41
        Z" fill="#64d6ca"></path>
      <path d="M 9.75 40.96
        Q 5.15 43.50 0.05 44.46
        L 0.00 36.94
        L 0.22 35.85
        A 1.00 1.00 0.0 0 1 1.71 35.19
        Q 5.99 37.71 9.75 40.96
        Z" fill="#499c85"></path>
      <path d="M 21.32 36.20
        Q 22.66 37.82 24.05 39.44
        C 26.34 42.09 27.54 45.21 29.79 47.81
        C 30.64 48.79 36.74 55.42 32.50 55.79
        L 11.00 41.21
        Q 15.81 38.21 21.32 36.20
        Z" fill="#70dac0"></path>
      <rect rx="2.30" height="9.74" width="5.00" y="36.77" x="43.75" fill="#000000"></rect>
      <path d="M 58.50 36.79
        Q 62.43 36.88 62.46 40.67
        L 61.94 44.74
        Q 61.91 44.99 61.77 45.19
        C 60.02 47.68 57.53 46.71 56.86 44.07
        Q 55.85 40.04 58.50 36.79
        Z" fill="#000000"></path>
      <path d="M 9.75 40.96
        L 11.00 41.21
        L 32.50 55.79
        Q 34.11 56.98 43.10 62.62
        Q 44.74 63.65 52.39 69.30
        A 1.00 1.00 0.0 0 1 52.34 70.94
        Q 46.22 74.94 40.81 79.86
        L 11.19 80.00
        Q 12.51 79.61 11.57 78.67
        Q 5.99 73.11 1.70 65.70
        C 1.28 64.97 0.74 64.76 0.00 65.19
        L 0.05 44.46
        Q 5.15 43.50 9.75 40.96
        Z" fill="#4dd1a0"></path>
      <path d="M 46.91 54.39
        C 50.72 56.87 54.90 57.18 58.63 54.41
        A 1.00 1.00 0.0 0 1 59.41 54.23
        C 62.47 54.80 62.54 57.43 60.15 58.94
        Q 53.38 63.20 46.28 59.41
        C 43.88 58.13 42.37 55.52 46.04 54.28
        A 1.00 0.99 51.9 0 1 46.91 54.39
        Z" fill="#000000"></path>
      <path d="M 11.19 80.00
        L 0.00 80.00
        L 0.00 65.19
        C 0.74 64.76 1.28 64.97 1.70 65.70
        Q 5.99 73.11 11.57 78.67
        Q 12.51 79.61 11.19 80.00
        Z" fill="#43ce7c"></path>
      </svg>
    </div>
    <div class="text">
      <div class="text_m">CSS Gradient Button</div>
      <div class="text_s">Praashoo7</div>
    </div>
  </div>
  <div class="btns">
    <div class="likes">
      <svg viewBox="-2 0 105 92" class="likes_svg"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path></svg><span class="likes_text">22</span>
    </div>
    <div class="comments">
      <svg title="Comment" viewBox="-405.9 238 56.3 54.8" class="comments_svg"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"></path></svg><span class="comments_text">12</span>
    </div>
    <div class="views">
      <svg title="Views" viewBox="0 0 30.5 16.5" class="views_svg"><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path></svg><span class="views_text">332</span>
    </div>
  </div>
</div>`,
    css:`.card {
  width: 15em;
  height: 10em;
  background: linear-gradient(270deg, #ce68d9, #45c6db, #45db79);
  background-size: 800% 800%;
  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
  transition: .4s ease-in-out;
  border-radius: 7px;
  cursor: pointer;
}

.fl {
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transition: .2s ease-in-out;
}

.fl:hover .fullscreen {
  scale: 1.2;
}

.fl:hover .fullscreen_svg {
  fill: white;
}

.fullscreen {
  width: 1.5em;
  height: 1.5em;
  border-radius: 5px;
  background-color: #727890;
  margin: 1em;
  margin-right: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s ease-in-out;
  box-shadow: 2px 2px 6px rgba(0,0,0,.4);
}

.fullscreen_svg {
  width: 15px;
  height: 15px;
  fill: rgb(177, 176, 176);
  transition: .2s ease-in-out;
}

.card_back {
  position: absolute;
  width: 15em;
  height: 13em;
  background-color: rgba(30, 31, 38, 0.575);
  border-radius: 7px;
  margin-top: -4.7em;
  margin-left: 0.7em;
  transition: .2s ease-in-out;
  z-index: -1;
}

.main:hover .card_back {
  margin-top: -5.9em;
  margin-left: 0em;
  scale: 1.1;
  height: 15.25em;
  cursor: pointer;
}

.main:hover .fl {
  opacity: 1;
  cursor: pointer;
  margin-right: 0.5em;
}

.data {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
}

.img {
  width: 2.25em;
  height: 2.25em;
  background-color: #252525;
  border-radius: 5px;
  overflow: hidden;
}

.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.5em;
  font-family: Montserrat;
  color: white;
}

.text_m {
  font-weight: bold;
  font-size: 0.9em;
}

.text_s {
  font-size: 0.7em;
}

.btns {
  display: flex;
  gap: 0.5em;
  transition: .2s ease-in-out;
}

.likes {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: .2s ease-in-out;
}

.likes_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.likes_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.likes:hover {
  background-color: #5A5F73;
  cursor: pointer;
}

.comments {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: .24s ease-in-out;
}

.comments_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.comments_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.comments:hover {
  background-color: #5A5F73;
  cursor: pointer;
}

.views {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: .28s ease-in-out;
}

.views_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.views_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.views:hover {
  background-color: #5A5F73;
  cursor: pointer;
}

.main:hover .likes {
  margin-top: 0.5em;
  opacity: 1;
}

.main:hover .comments {
  margin-top: 0.5em;
  opacity: 1;
}

.main:hover .views {
  margin-top: 0.5em;
  opacity: 1;
}



/* The Main Switch */

.card_content {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 0.8em;
  width: 14em;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 0.8em;
  align-self: center;
  outline: none;
  font-weight: bold;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  transition: .4s ease-in-out;
}

button::after {
  content: "(Hold Me)";
  opacity: 0;
  position: absolute;
}

button::before {
  content: "∞";
  font-size: 3.5em;
  position: absolute;
  opacity: 0;
  left: 1.6em;
  top: -0.36em;
  transition: .4s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: black;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

button:hover::after {
  position: relative;
  opacity: 1;
  font-size: 0.7em;
}

@keyframes AnimationName {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

button:active {
  scale: 1.1;
  opacity: 1;
  color: transparent;
  background: linear-gradient(90deg, #ce68d9, #45c6db, #45db79, #9f45b0, #e54ed0, #ffe4f2);
  background-size: 800% 800%;
  -webkit-animation: AnimationName 1s ease infinite;
  -moz-animation: AnimationName 1s ease infinite;
  animation: AnimationName 1s ease infinite;
}

button:active::before {
  color: white;
  opacity: 1;
}`
  },{
    category:"cards",
    html:`<div class="card">
    <div class="card__img"><svg xmlns="http://www.w3.org/2000/svg" width="100%"><rect fill="#ffffff" width="540" height="450"></rect><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)"><stop offset="0" stop-color="#ffffff"></stop><stop offset="1" stop-color="#FC726E"></stop></linearGradient><pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900"><g fill-opacity="0.5"><polygon fill="#444" points="90 150 0 300 180 300"></polygon><polygon points="90 150 180 0 0 0"></polygon><polygon fill="#AAA" points="270 150 360 0 180 0"></polygon><polygon fill="#DDD" points="450 150 360 300 540 300"></polygon><polygon fill="#999" points="450 150 540 0 360 0"></polygon><polygon points="630 150 540 300 720 300"></polygon><polygon fill="#DDD" points="630 150 720 0 540 0"></polygon><polygon fill="#444" points="810 150 720 300 900 300"></polygon><polygon fill="#FFF" points="810 150 900 0 720 0"></polygon><polygon fill="#DDD" points="990 150 900 300 1080 300"></polygon><polygon fill="#444" points="990 150 1080 0 900 0"></polygon><polygon fill="#DDD" points="90 450 0 600 180 600"></polygon><polygon points="90 450 180 300 0 300"></polygon><polygon fill="#666" points="270 450 180 600 360 600"></polygon><polygon fill="#AAA" points="270 450 360 300 180 300"></polygon><polygon fill="#DDD" points="450 450 360 600 540 600"></polygon><polygon fill="#999" points="450 450 540 300 360 300"></polygon><polygon fill="#999" points="630 450 540 600 720 600"></polygon><polygon fill="#FFF" points="630 450 720 300 540 300"></polygon><polygon points="810 450 720 600 900 600"></polygon><polygon fill="#DDD" points="810 450 900 300 720 300"></polygon><polygon fill="#AAA" points="990 450 900 600 1080 600"></polygon><polygon fill="#444" points="990 450 1080 300 900 300"></polygon><polygon fill="#222" points="90 750 0 900 180 900"></polygon><polygon points="270 750 180 900 360 900"></polygon><polygon fill="#DDD" points="270 750 360 600 180 600"></polygon><polygon points="450 750 540 600 360 600"></polygon><polygon points="630 750 540 900 720 900"></polygon><polygon fill="#444" points="630 750 720 600 540 600"></polygon><polygon fill="#AAA" points="810 750 720 900 900 900"></polygon><polygon fill="#666" points="810 750 900 600 720 600"></polygon><polygon fill="#999" points="990 750 900 900 1080 900"></polygon><polygon fill="#999" points="180 0 90 150 270 150"></polygon><polygon fill="#444" points="360 0 270 150 450 150"></polygon><polygon fill="#FFF" points="540 0 450 150 630 150"></polygon><polygon points="900 0 810 150 990 150"></polygon><polygon fill="#222" points="0 300 -90 450 90 450"></polygon><polygon fill="#FFF" points="0 300 90 150 -90 150"></polygon><polygon fill="#FFF" points="180 300 90 450 270 450"></polygon><polygon fill="#666" points="180 300 270 150 90 150"></polygon><polygon fill="#222" points="360 300 270 450 450 450"></polygon><polygon fill="#FFF" points="360 300 450 150 270 150"></polygon><polygon fill="#444" points="540 300 450 450 630 450"></polygon><polygon fill="#222" points="540 300 630 150 450 150"></polygon><polygon fill="#AAA" points="720 300 630 450 810 450"></polygon><polygon fill="#666" points="720 300 810 150 630 150"></polygon><polygon fill="#FFF" points="900 300 810 450 990 450"></polygon><polygon fill="#999" points="900 300 990 150 810 150"></polygon><polygon points="0 600 -90 750 90 750"></polygon><polygon fill="#666" points="0 600 90 450 -90 450"></polygon><polygon fill="#AAA" points="180 600 90 750 270 750"></polygon><polygon fill="#444" points="180 600 270 450 90 450"></polygon><polygon fill="#444" points="360 600 270 750 450 750"></polygon><polygon fill="#999" points="360 600 450 450 270 450"></polygon><polygon fill="#666" points="540 600 630 450 450 450"></polygon><polygon fill="#222" points="720 600 630 750 810 750"></polygon><polygon fill="#FFF" points="900 600 810 750 990 750"></polygon><polygon fill="#222" points="900 600 990 450 810 450"></polygon><polygon fill="#DDD" points="0 900 90 750 -90 750"></polygon><polygon fill="#444" points="180 900 270 750 90 750"></polygon><polygon fill="#FFF" points="360 900 450 750 270 750"></polygon><polygon fill="#AAA" points="540 900 630 750 450 750"></polygon><polygon fill="#FFF" points="720 900 810 750 630 750"></polygon><polygon fill="#222" points="900 900 990 750 810 750"></polygon><polygon fill="#222" points="1080 300 990 450 1170 450"></polygon><polygon fill="#FFF" points="1080 300 1170 150 990 150"></polygon><polygon points="1080 600 990 750 1170 750"></polygon><polygon fill="#666" points="1080 600 1170 450 990 450"></polygon><polygon fill="#DDD" points="1080 900 1170 750 990 750"></polygon></g></pattern></defs><rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect><rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect></svg></div>
    <div class="card__avatar"><svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" fill="#ff8475" r="60"></circle><circle cx="64" cy="64" fill="#f85565" opacity=".4" r="48"></circle><path d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1 -6 6h-52a6 6 0 0 1 -6-6v-41a32 32 0 0 1 32-32z" fill="#7f3838"></path><path d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1 -4.45 4.45h-41.1a4.45 4.45 0 0 1 -4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z" fill="#393c54" opacity=".4"></path><circle cx="89" cy="65" fill="#fbc0aa" r="7"></circle><path d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z" fill="#4bc190"></path><path d="m45 110 5.55 2.92-2.55 8.92a60.14 60.14 0 0 0 9 1.74v-27.08l-12.38 10.25a2 2 0 0 0 .38 3.25z" fill="#356cb6" opacity=".3"></path><path d="m71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z" fill="#356cb6" opacity=".3"></path><path d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z" fill="#fff"></path><path d="m64 88.75v9.75" fill="none" stroke="#fbc0aa" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"></path><circle cx="39" cy="65" fill="#fbc0aa" r="7"></circle><path d="m64 91a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z" fill="#ffd8c9"></path><path d="m91.49 51.12v-4.72c0-14.95-11.71-27.61-26.66-28a27.51 27.51 0 0 0 -28.32 27.42v5.33a2 2 0 0 0 2 2h6.81a8 8 0 0 0 6.5-3.33l4.94-6.88a18.45 18.45 0 0 1 1.37 1.63 22.84 22.84 0 0 0 17.87 8.58h13.45a2 2 0 0 0 2.04-2.03z" fill="#bc5b57"></path><path d="m62.76 36.94c4.24 8.74 10.71 10.21 16.09 10.21h5" style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"></path><path d="m71 35c2.52 5.22 6.39 6.09 9.6 6.09h3" style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"></path><circle cx="76" cy="62.28" fill="#515570" r="3"></circle><circle cx="52" cy="62.28" fill="#515570" r="3"></circle><ellipse cx="50.42" cy="69.67" fill="#f85565" opacity=".1" rx="4.58" ry="2.98"></ellipse><ellipse cx="77.58" cy="69.67" fill="#f85565" opacity=".1" rx="4.58" ry="2.98"></ellipse><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m64 67v4" stroke="#fbc0aa" stroke-width="4"></path><path d="m55 56h-9.25" opacity=".2" stroke="#515570" stroke-width="2"></path><path d="m82 56h-9.25" opacity=".2" stroke="#515570" stroke-width="2"></path></g><path d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z" fill="#f85565" opacity=".4"></path><path d="m65.07 78.93-.55.55a.73.73 0 0 1 -1 0l-.55-.55c-1.14-1.14-2.93-.93-4.27.47l-1.7 1.6h14l-1.66-1.6c-1.34-1.4-3.13-1.61-4.27-.47z" fill="#f85565"></path></svg></div>
    <div class="card__title">User</div>
    <div class="card__subtitle">Web Development</div>
    <div class="card__wrapper">
        <button class="card__btn">Button</button>
        <button class="card__btn card__btn-solid">Button</button>
    </div>
</div>`,
    css:`.card {
  --main-color: #000;
  --submain-color: #78858F;
  --bg-color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  width: 300px;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--bg-color);
}

.card__img {
  height: 192px;
  width: 100%;
}

.card__img svg {
  height: 100%;
  border-radius: 20px 20px 0 0;
}

.card__avatar {
  position: absolute;
  width: 114px;
  height: 114px;
  background: var(--bg-color);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 57px);
}

.card__avatar svg {
  width: 100px;
  height: 100px;
}

.card__title {
  margin-top: 60px;
  font-weight: 500;
  font-size: 18px;
  color: var(--main-color);
}

.card__subtitle {
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  color: var(--submain-color);
}

.card__btn {
  margin-top: 15px;
  width: 76px;
  height: 31px;
  border: 2px solid var(--main-color);
  border-radius: 4px;
  font-weight: 700;
  font-size: 11px;
  color: var(--main-color);
  background: var(--bg-color);
  text-transform: uppercase;
  transition: all 0.3s;
}

.card__btn-solid {
  background: var(--main-color);
  color: var(--bg-color);
}

.card__btn:hover {
  background: var(--main-color);
  color: var(--bg-color);
}

.card__btn-solid:hover {
  background: var(--bg-color);
  color: var(--main-color);
}`
  },{
    category:"cards",
    html:`<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div class="tracker tr-10"></div>
    <div class="tracker tr-11"></div>
    <div class="tracker tr-12"></div>
    <div class="tracker tr-13"></div>
    <div class="tracker tr-14"></div>
    <div class="tracker tr-15"></div>
    <div class="tracker tr-16"></div>
    <div class="tracker tr-17"></div>
    <div class="tracker tr-18"></div>
    <div class="tracker tr-19"></div>
    <div class="tracker tr-20"></div>
    <div class="tracker tr-21"></div>
    <div class="tracker tr-22"></div>
    <div class="tracker tr-23"></div>
    <div class="tracker tr-24"></div>
    <div class="tracker tr-25"></div>
    <div id="card">
    <p id="prompt">HOVER OVER :D</p>
      <div class="title">look mom,<br>no JS</div>
      <div class="subtitle">
        mouse hover tracker
      </div>
      
    </div>
  </div>
</div>`,
    css:`.container {
  position: relative;
  width: 190px;
  height: 254px;
  transition: 200ms;
}

.container:active {
  width: 180px;
  height: 245px;
}

#card {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 700ms;
  background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
}

.subtitle {
  transform: translateY(160px);
  color: rgb(134, 110, 221);
  text-align: center;
  width: 100%;
}

.title {
  opacity: 0;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out-out;
  transition-delay: 100ms;
  position: absolute;
  font-size: x-large;
  font-weight: bold;
  color: white;
}

.tracker:hover ~ #card .title {
  opacity: 1;
}

#prompt {
  bottom: 8px;
  left: 12px;
  z-index: 20;
  font-size: 20px;
  font-weight: bold;
  transition: 300ms ease-in-out-out;
  position: absolute;
  max-width: 110px;
  color: rgb(255, 255, 255);
}

.tracker {
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
}

.tracker:hover {
  cursor: pointer;
}

.tracker:hover ~ #card #prompt {
  opacity: 0;
}

.tracker:hover ~ #card {
  transition: 300ms;
  filter: brightness(1.1);
}

.container:hover #card::before {
  transition: 200ms;
  content: '';
  opacity: 80%;
}

.canvas {
  perspective: 800px;
  inset: 0;
  z-index: 200;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5"
    "tr-6 tr-7 tr-8 tr-9 tr-10"
    "tr-11 tr-12 tr-13 tr-14 tr-15"
    "tr-16 tr-17 tr-18 tr-19 tr-20"
    "tr-21 tr-22 tr-23 tr-24 tr-25";
}

#card::before {
  content: '';
  background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
  filter: blur(2rem);
  opacity: 30%;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  transition: 200ms;
}

.tr-1 {
  grid-area: tr-1;
}

.tr-2 {
  grid-area: tr-2;
}

.tr-3 {
  grid-area: tr-3;
}

.tr-4 {
  grid-area: tr-4;
}

.tr-5 {
  grid-area: tr-5;
}

.tr-6 {
  grid-area: tr-6;
}

.tr-7 {
  grid-area: tr-7;
}

.tr-8 {
  grid-area: tr-8;
}

.tr-9 {
  grid-area: tr-9;
}

.tr-10 {
  grid-area: tr-10;
}

.tr-11 {
  grid-area: tr-11;
}

.tr-12 {
  grid-area: tr-12;
}

.tr-13 {
  grid-area: tr-13;
}

.tr-14 {
  grid-area: tr-14;
}

.tr-15 {
  grid-area: tr-15;
}

.tr-16 {
  grid-area: tr-16;
}

.tr-17 {
  grid-area: tr-17;
}

.tr-18 {
  grid-area: tr-18;
}

.tr-19 {
  grid-area: tr-19;
}

.tr-20 {
  grid-area: tr-20;
}

.tr-21 {
  grid-area: tr-21;
}

.tr-22 {
  grid-area: tr-22;
}

.tr-23 {
  grid-area: tr-23;
}

.tr-24 {
  grid-area: tr-24;
}

.tr-25 {
  grid-area: tr-25;
}

.tr-1:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-2:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-3:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
}

.tr-4:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
}

.tr-5:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
}

.tr-6:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-7:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-8:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
}

.tr-9:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
}

.tr-10:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
}

.tr-11:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-12:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-13:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.tr-14:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
}

.tr-15:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
}

.tr-16:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-17:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-18:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
}

.tr-19:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
}

.tr-20:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
}

.tr-21:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
}

.tr-22:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
}

.tr-23:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
}

.tr-24:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
}

.tr-25:hover ~ #card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
}

.noselect {
  -webkit-touch-callout: none;
   /* iOS Safari */
  -webkit-user-select: none;
   /* Safari */
   /* Konqueror HTML */
  -moz-user-select: none;
   /* Old versions of Firefox */
  -ms-user-select: none;
   /* Internet Explorer/Edge */
  user-select: none;
   /* Non-prefixed version, currently
									supported by Chrome, Edge, Opera and Firefox */
}`
  },{
    category:"cards",
    html:`<div class="card">
  <div class="background">
  </div>
  <div class="logo">
   Socials
  </div>

  <a href="#"><div class="box box1"><span class="icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="svg">
        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
      </svg></span></div></a>

  <a href="##"><div class="box box2"> <span class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="svg">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
      </svg></span></div></a>

  <a href="###"><div class="box box3"><span class="icon"><svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" class="svg">
        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
      </svg></span></div></a>

  <div class="box box4"></div>
</div>`,
    css:`.card {
  position: relative;
  width: 200px;
  height: 200px;
  background: lightgrey;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 1s ease-in-out;
  border: 2px solid rgb(255, 255, 255);
}

.background {
  position: absolute;
  inset: 0;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.logo {
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  transition: all 0.6s ease-in-out;
  font-size: 1.3em;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 3px;
}

.logo .logo-svg {
  fill: white;
  width: 30px;
  height: 30px;
}

.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.icon .svg {
  fill: rgba(255, 255, 255, 0.797);
  width: 100%;
  transition: all 0.5s ease-in-out;
}

.box {
  position: absolute;
  padding: 10px;
  text-align: right;
  background: rgba(255, 255, 255, 0.389);
  border-top: 2px solid rgb(255, 255, 255);
  border-right: 1px solid white;
  border-radius: 10% 13% 42% 0%/10% 12% 75% 0%;
  box-shadow: rgba(100, 100, 111, 0.364) -7px 7px 29px 0px;
  transform-origin: bottom left;
  transition: all 1s ease-in-out;
}

.box::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.box:hover .svg {
  fill: white;
}

.box1 {
  width: 70%;
  height: 70%;
  bottom: -70%;
  left: -70%;
}

.box1::before {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #ff53d4 60%, #62c2fe 90%);
}

.box1:hover::before {
  opacity: 1;
}

.box1:hover .icon .svg {
  filter: drop-shadow(0 0 5px white);
}

.box2 {
  width: 50%;
  height: 50%;
  bottom: -50%;
  left: -50%;
  transition-delay: 0.2s;
}

.box2::before {
  background: radial-gradient(circle at 30% 107%, #91e9ff 0%, #00ACEE 90%);
}

.box2:hover::before {
  opacity: 1;
}

.box2:hover .icon .svg {
  filter: drop-shadow(0 0 5px white);
}

.box3 {
  width: 30%;
  height: 30%;
  bottom: -30%;
  left: -30%;
  transition-delay: 0.4s;
}

.box3::before {
  background: radial-gradient(circle at 30% 107%, #969fff 0%, #b349ff 90%);
}

.box3:hover::before {
  opacity: 1;
}

.box3:hover .icon .svg {
  filter: drop-shadow(0 0 5px white);
}

.box4 {
  width: 10%;
  height: 10%;
  bottom: -10%;
  left: -10%;
  transition-delay: 0.6s;
}

.card:hover {
  transform: scale(1.1);
}

.card:hover .box {
  bottom: -1px;
  left: -1px;
}

.card:hover .logo {
  transform: translate(70px, -52px);
  letter-spacing: 0px;
}`
  },{
    category:"cards",
    html:`<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>`,
    css:`.flip-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
     rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
}

.flip-card-back {
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
     bisque 40%, rgb(255, 185, 160) 78%);
  color: white;
  transform: rotateY(180deg);
}`
  },{
    category:"cards",
    html:`<div class="card">
  <div class="card-info">
    <p class="title">Magic Card</p>
  </div>
</div>`,
    css:`.card {
  --background: linear-gradient(to right, #74ebd5 0%, #acb6e5 100%);
  width: 190px;
  height: 254px;
  padding: 5px;
  border-radius: 1rem;
  overflow: visible;
  background: #74ebd5;
  background: var(--background);
  position: relative;
  z-index: 1;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  z-index: -1;
}

.card::before {
  background: linear-gradient(to bottom right, #f6d365 0%, #fda085 100%);
  transform: rotate(2deg);
}

.card::after {
  background: linear-gradient(to top right, #84fab0 0%, #8fd3f4 100%);
  transform: rotate(-2deg);
}

.card-info {
  --color: #292b2c;
  background: var(--color);
  color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  border-radius: 0.7rem;
  position: relative;
  z-index: 2;
}

.card .title {
  font-weight: bold;
  letter-spacing: 0.1em;
}

.card:hover::before,
.card:hover::after {
  opacity: 0;
}

.card:hover .card-info {
  color: #74ebd5;
  transition: color 1s;
}
`
  },{
    category:"cards",
    html:`<div class="card"> 
  <button type="button" class="dismiss">×</button> 
  <div class="header"> 
    <div class="image">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#000000" d="M20 7L9.00004 18L3.99994 13"></path> </g></svg>
      </div> 
      <div class="content">
         <span class="title">Order validated</span> 
         <p class="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p> 
         </div> 
         <div class="actions">
            <button type="button" class="history">History</button> 
            <button type="button" class="track">Track my package</button> 
            </div> 
            </div> 
            </div>`,
    css:`.card {
  overflow: hidden;
  position: relative;
  text-align: left;
  border-radius: 0.5rem;
  max-width: 290px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: #fff;
}

.dismiss {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: black;
  border: 2px solid #D1D5DB;
  font-size: 1rem;
  font-weight: 300;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  transition: .3s ease;
}

.dismiss:hover {
  background-color: #ee0d0d;
  border: 2px solid #ee0d0d;
  color: #fff;
}

.header {
  padding: 1.25rem 1rem 1rem 1rem;
}

.image {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2feee;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  animation: animate .6s linear alternate-reverse infinite;
  transition: .6s ease;
}

.image svg {
  color: #0afa2a;
  width: 2rem;
  height: 2rem;
}

.content {
  margin-top: 0.75rem;
  text-align: center;
}

.title {
  color: #066e29;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.message {
  margin-top: 0.5rem;
  color: #595b5f;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.actions {
  margin: 0.75rem 1rem;
}

.history {
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: #1aa06d;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.track {
  display: inline-flex;
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  color: #242525;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #D1D5DB;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

@keyframes animate {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.09);
  }
}`
  },{
    category:"cards",
    html:`<div class="card">
  <div class="card-info">
    <p class="title">Magic Card</p>
  </div>
</div>
`,
    css:`.card {
  --background: linear-gradient(to right, #74ebd5 0%, #acb6e5 100%);
  width: 190px;
  height: 254px;
  padding: 5px;
  border-radius: 1rem;
  overflow: visible;
  background: #74ebd5;
  background: var(--background);
  position: relative;
  z-index: 1;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  z-index: -1;
}

.card::before {
  background: linear-gradient(to bottom right, #f6d365 0%, #fda085 100%);
  transform: rotate(2deg);
}

.card::after {
  background: linear-gradient(to top right, #84fab0 0%, #8fd3f4 100%);
  transform: rotate(-2deg);
}

.card-info {
  --color: #292b2c;
  background: var(--color);
  color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  border-radius: 0.7rem;
  position: relative;
  z-index: 2;
}

.card .title {
  font-weight: bold;
  letter-spacing: 0.1em;
}

.card:hover::before,
.card:hover::after {
  opacity: 0;
}

.card:hover .card-info {
  color: #74ebd5;
  transition: color 1s;
}
`
  },{
    category:"cards",
    html:`<div class="map-container">
  <svg viewBox="0 0 500 500" class="map-background">
    <rect style="fill: #f5f0e5" width="500" height="500"></rect>
    <path
      style="fill: #90daee"
      d="M0,367.82c5.83-4.39,14.42-10.16,25.59-15.34,4.52-2.09,43.19-19.51,79.55-11.93,36.1,7.52,35.75,32.55,78.41,60.23,46.34,30.06,109.47,41.21,123.32,22.1,11.95-16.49-22.61-41.92-13.66-84.6,4.85-23.1,22.33-50.71,47.73-58.52,42.42-13.05,78.83,39.45,102.84,23.86,15.81-10.26.01-32.87,22.73-74.43,5.8-10.62,11.65-21.15,11.93-36.93.28-15.69-5.63-26.64-7.95-32.39-6.66-16.45-6.21-45.15,28.84-98.55.23,146.23.46,292.46.69,438.69H0v-132.18Z"
    ></path>
  </svg>
  <div class="map-cities">
    <div style="--x: 5; --y: 67;" class="map-city">
      <div class="map-city__label">
        <span data-icon="🏖️" class="map-city__sign">Beach city</span>
      </div>
    </div>
    <div style="--x: 32; --y: 32;" class="map-city">
      <div class="map-city__label">
        <span data-icon="🌷" class="map-city__sign anim anim-grow"
          >Flower city</span
        >
      </div>
    </div>
    <div style="--x: 58; --y: 83;" class="map-city">
      <div class="map-city__label">
        <span data-icon="🏄" class="map-city__sign anim anim-slidein"
          >Surf city</span
        >
      </div>
    </div>
    <div style="--x: 65; --y: 22;" class="map-city">
      <div class="map-city__label">
        <span data-icon="🏛️" class="map-city__sign">Capital city</span>
      </div>
    </div>
    <div style="--x: 87; --y: 58;" class="map-city">
      <div class="map-city__label">
        <span data-icon="🎢" class="map-city__sign">Funland</span>
      </div>
    </div>
    <div style="--x: 94; --y: 38;" class="map-city">
      <div class="map-city__label">
        <span data-icon="🌊" class="map-city__sign anim anim-slidein"
          >Coast city</span
        >
      </div>
    </div>
  </div>
</div>`,
    css:`/*************/
/* Variables */
/*************/

.map-container {
  --city-radius: 2rem;
  --city-sign-color-back: #00c080;
  --city-sign-color-font: #fff;
  --city-pin-size-font: 1.2rem;
}

/**********/
/* Styles */
/**********/

/* Container */
.map-container {
  border-radius: 0.5em;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  line-height: 1;
  min-width: 15rem;
  position: relative;
  width: 50%;
  aspect-ratio: 1;
}

/* Map - Background */
.map-background {
  border-radius: inherit;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

/* Map - Cities */
.map-cities {
  width: 100%;
}
.map-city {
  border-radius: var(--city-radius);
  left: calc(var(--x) * 1% - var(--city-radius));
  padding: var(--city-radius);
  position: absolute;
  top: calc(var(--y) * 1% - var(--city-radius));
}
.map-city::after,
.map-city::before {
  font-size: var(--city-pin-size-font);
}
.map-city::before {
  content: "•";
  left: calc(-50% + var(--city-radius));
  position: absolute;
  top: calc(-0.65em + var(--city-radius));
  text-align: center;
  text-shadow: 0 1px 1px #000;
  width: 100%;
}
.map-city::after {
  clip-path: inset(-0.5em 0 0 0);
  content: "📍";
  left: calc(-50% + var(--city-radius));
  position: absolute;
  top: calc(-1em + var(--city-radius));
  text-align: center;
  transition: all 300ms ease-out;
  width: 100%;
  z-index: var(--y);
}

/* Map - Sign */
.map-city__label {
  display: none;
  left: calc(-5em + 50%);
  position: absolute;
  text-align: center;
  width: 10em;
  z-index: 999;
}
.map-city__sign {
  align-items: center;
  background-color: var(--city-sign-color-back);
  border-radius: 0.2rem;
  border: 0.15em solid var(--city-sign-color-font);
  box-shadow: 0 0 3px #000;
  color: var(--city-sign-color-font);
  column-gap: 0.3em;
  display: flex;
  font-weight: 700;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
  padding: 0.4em 0.6em 0.4em 0.3em;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  width: max-content;
}
.map-city__sign::before {
  content: attr(data-icon);
}

/************/
/* Tracking */
/************/

/* Map - Cities */
.map-city:hover::after {
  clip-path: inset(-0.5em 0 0.5em 0);
  transform: translateY(0.5em);
}

/* Map - Sign */
.map-city:hover .map-city__label {
  animation: fadein 300ms forwards ease-out;
  display: block;
}

.map-city:hover .map-city__sign.anim::before {
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}
.map-city:hover .map-city__sign.anim-grow::before {
  animation-name: grow;
  animation-timing-function: ease-in;
}
.map-city:hover .map-city__sign.anim-slidein::before {
  animation-name: slidein;
  animation-timing-function: ease-out;
}

/**************/
/* Animations */
/**************/

/* Fade in from top */
@keyframes fadein {
  0% {
    opacity: 0;
    top: calc(var(--city-radius));
  }

  100% {
    opacity: 1;
    top: calc(var(--city-radius) + var(--city-pin-size-font) / 2);
  }
}

/* Grow from the ground */
@keyframes grow {
  0% {
    transform: translate(0, 200%);
  }

  10% {
    transform: translate(5%, 180%);
  }

  20% {
    transform: translate(-10%, 160%);
  }

  30% {
    transform: translate(15%, 140%);
  }

  40% {
    transform: translate(-5%, 120%);
  }

  50% {
    transform: translate(10%, 100%);
  }

  60% {
    transform: translate(-15%, 80%);
  }

  70% {
    transform: translate(5%, 60%);
  }

  80% {
    transform: translate(0, 40%);
  }

  90% {
    transform: translate(0, 20%);
  }

  100% {
    transform: translate(0, 0);
  }
}

/* Slide in from left */
@keyframes slidein {
  0% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(0);
  }
}
`
  },{
    category:"cards",
    html:`<div class="container-items">
  <button
    class="item-color"
    style="--color: #e11d48"
    aria-color="#e11d48"
  ></button>
  <button
    class="item-color"
    style="--color: #f472b6"
    aria-color="#f472b6"
  ></button>
  <button
    class="item-color"
    style="--color: #fb923c"
    aria-color="#fb923c"
  ></button>
  <button
    class="item-color"
    style="--color: #facc15"
    aria-color="#facc15"
  ></button>
  <button
    class="item-color"
    style="--color: #84cc16"
    aria-color="#84cc16"
  ></button>
  <button
    class="item-color"
    style="--color: #10b981"
    aria-color="#10b981"
  ></button>
  <button
    class="item-color"
    style="--color: #0ea5e9"
    aria-color="#0ea5e9"
  ></button>
  <button
    class="item-color"
    style="--color: #3b82f6"
    aria-color="#3b82f6"
  ></button>
  <button
    class="item-color"
    style="--color: #8b5cf6"
    aria-color="#8b5cf6"
  ></button>
  <button
    class="item-color"
    style="--color: #a78bfa"
    aria-color="#a78bfa"
  ></button>
</div>
`,
    css:`.container-items {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.item-color {
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 40px;
  border: none;
  outline: none;
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    inset: 0;
    width: 40px;
    height: 40px;
    background-color: var(--color);
    border-radius: 6px;
    transform: scale(1.2);
    pointer-events: none;
    transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  }

  &::before {
    position: absolute;
    content: attr(aria-color);
    left: 65%;
    bottom: 52px;
    font-size: 8px;
    line-height: 12px;
    transform: translateX(-50%);
    padding: 2px 0.25rem;
    background-color: #ffffff;
    border-radius: 6px;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  }

  &:hover {
    transform: scale(1.5);
    z-index: 99999;

    &::before {
      opacity: 1;
      visibility: visible;
    }
  }

  &:active::after {
    transform: scale(1.1);
  }

  &:focus::before {
    content: "✅Copy";
  }
}

.item-color:hover + * {
  transform: scale(1.3);
  z-index: 9999;
}

.item-color:hover + * + * {
  transform: scale(1.15);
  z-index: 999;
}

.item-color:has(+ *:hover) {
  transform: scale(1.3);
  z-index: 9999;
}

.item-color:has(+ * + *:hover) {
  transform: scale(1.15);
  z-index: 999;
}
`
  },{
    category:"cards",
    html:`<div class="container">
  <div class="palette">
    <div class="color"><span>264653</span></div>
    <div class="color"><span>2A9D8F</span></div>
    <div class="color"><span>E9C46A</span></div>
    <div class="color"><span>F4A261</span></div>
    <div class="color"><span>E76F51</span></div>
  </div>
  <div id="stats">
    <span>53421 saves</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"></path>
    </svg>
  </div>
</div>`,
    css:`.container {
  height: 200px;
  width: 350px;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 10px 20px #dbdbdb;
  font-family: sans-serif;
}

.palette {
  display: flex;
  height: 86%;
  width: 100%;
}

.color {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  transition: flex 0.1s linear;
}

.color span {
  opacity: 0;
  transition: opacity 0.1s linear;
}

.color:nth-child(1) {
  background: #264653;
}

.color:nth-child(2) {
  background: #2a9d8f;
}

.color:nth-child(3) {
  background: #e9c46a;
}

.color:nth-child(4) {
  background: #f4a261;
}

.color:nth-child(5) {
  background: #e76f51;
}

.color:hover {
  flex: 2;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.color:hover span {
  opacity: 1;
}

#stats {
  height: 14%;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  box-sizing: border-box;
  color: #bebebe;
}

#stats svg {
  fill: #bebebe;
  transform: scale(1.2);
}`
  },{
    category:"cards",
    html:`<div class="card"></div>`,
    css:`.card {
  width: 200px;
  height: 250px;
  border: none;
  border-radius: 10px;
  background: radial-gradient(ellipse farthest-side at 76% 77%, rgba(245, 228, 212, 0.25) 4%, rgba(255, 255, 255, 0) calc(4% + 1px)), radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%), linear-gradient(135deg, #ff0000 0%, #000036 100%), radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%), linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%);
  background-blend-mode: normal, normal, screen, overlay, normal;
  box-shadow: 0px 0px 10px 1px #000000;
}`
  },{
    category:"cards",
    html:`<div class="card">
  <div class="card-content">
    <div class="card-top">
      <span class="card-title">01.</span>
      <p>Lightning.</p>
    </div>
    <div class="card-bottom">
      <p>Hover Me?</p>
      <svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path></svg>
    </div>
  </div>
  <div class="card-image">
    <svg width="48" viewBox="0 -960 960 960" height="48" xmlns="http://www.w3.org/2000/svg"><path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z"></path></svg>
  </div>
</div>`,
    css:`.card {
  width: 320px;
  background: #fff480;
  color: black;
  position: relative;
  border-radius: 2.5em;
  padding: 2em;
  transition: transform 0.4s ease;
}

.card .card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5em;
  height: 100%;
  transition: transform 0.4s ease;
}

.card .card-top, .card .card-bottom {
  display: flex;
  justify-content: space-between;
}

.card .card-top p, .card .card-top .card-title, .card .card-bottom p, .card .card-bottom .card-title {
  margin: 0;
}

.card .card-title {
  font-weight: bold;
}

.card .card-top p, .card .card-bottom p {
  font-weight: 600;
}

.card .card-bottom {
  align-items: flex-end;
}

.card .card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.card .card-image svg {
  width: 4em;
  height: 4em;
  transition: transform 0.4s ease;
}

.card:hover {
  cursor: pointer;
  transform: scale(0.97);
}

.card:hover .card-content {
  transform: scale(0.96);
}

.card:hover .card-image svg {
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.9);
}`
  },{
    category:"cards",
    html:`<div class="center">
  <div class="design">
    <div class="circle-1 center color-border">
      <div class="circle-2 center color-border">
        <div class="circle-3 center color-border">
          <div class="circle-4 center color-border">
            <div class="circle-5"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="mountain-1 shape shadow"></div>
    <div class="mountain-2 shape"></div>
    <div class="mountain-3 shape shadow"></div>
  </div>
</div>
`,
    css:`.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.design {
  height: 200px;
  width: 200px;
  border-radius: 40px;
  background: rgb(255, 11, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 11, 0, 1) 13%,
    rgba(255, 158, 0, 1) 100%
  );
  position: relative;
  overflow: hidden;
}

.color-border {
  border-radius: 50%;
  background-color: #ffffff20;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
}
.circle-1 {
  height: 220px;
  width: 220px;
  position: absolute;
  right: -50px;
  top: -50px;
}
.circle-2 {
  height: 180px;
  width: 180px;
}
.circle-3 {
  height: 140px;
  width: 140px;
}
.circle-4 {
  height: 105px;
  width: 105px;
}
.circle-5 {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #ffffff;
}

.shape {
  height: 200px;
  width: 200px;
  background-color: #484848;
  transform: rotate(45deg);
  position: absolute;
}
.shadow {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
}
.mountain-1 {
  z-index: 1;
  bottom: -100px;
  left: -100px;
}
.mountain-2 {
  bottom: -110px;
  left: -30px;
}
.mountain-3 {
  z-index: 2;
  bottom: -150px;
  left: 90px;
}
`
  },{
    category:"cards",
    html:`<div class="card">
  <ul>
    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="">
        <svg
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
          class="svg"
        >
          <path
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path></svg
      ></a>
      <div class="text">Facebook</div>
    </li>
    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="">
        <svg
          class="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          ></path>
        </svg>
      </a>
      <div class="text">Twitter</div>
    </li>
    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="">
        <svg
          class="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          ></path>
        </svg>
      </a>
      <div class="text">Instagram</div>
    </li>
  </ul>
</div>
`,
    css:`.card {
  max-width: fit-content;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  backdrop-filter: blur(15px);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
    inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
  transition: 0.5s;
}

.card:hover {
  animation: ease-out 5s;
  background: rgba(173, 173, 173, 0.05);
}

.card ul {
  padding: 1rem;
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.card ul li {
  cursor: pointer;
}

.svg {
  transition: all 0.3s;
  /* if you find some problems change w - h : 30px*/
  padding: 1rem;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  color: rgb(255, 174, 0);
  fill: currentColor;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
}

.text {
  opacity: 0;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.3s;
  color: rgb(255, 174, 0);
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 9999;
  box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
    -10px 0 1px rgba(153, 153, 153, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
}

/*isometric prooyection*/
.iso-pro {
  transition: 0.5s;
}
.iso-pro:hover a > .svg {
  transform: translate(15px, -15px);
  border-radius: 100%;
}

.iso-pro:hover .text {
  opacity: 1;
  transform: translate(25px, -2px) skew(-5deg);
}

.iso-pro:hover .svg {
  transform: translate(5px, -5px);
}

.iso-pro span {
  opacity: 0;
  position: absolute;
  color: #1877f2;
  border-color: #1877f2;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
  border-radius: 50%;
  transition: all 0.3s;
  height: 60px;
  width: 60px;
}

.iso-pro:hover span {
  opacity: 1;
}

.iso-pro:hover span:nth-child(1) {
  opacity: 0.2;
}

.iso-pro:hover span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}

.iso-pro:hover span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}
`
  },{
    category:"cards",
    html:`<article class="card">
  <section class="card__hero">
    <header class="card__hero-header">
      <span>$150/hr</span>
      <div class="card__icon">
        <svg
          height="20"
          width="20"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
    </header>

    <p class="card__job-title">Senior Backend Engineer</p>
  </section>

  <footer class="card__footer">
    <div class="card__job-summary">
      <div class="card__job-icon">
        <svg
          height="35"
          width="28"
          viewBox="0 0 250 250"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285F4"
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          ></path>
          <path
            fill="#34A853"
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          ></path>
          <path
            fill="#FBBC05"
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          ></path>
          <path
            fill="#EB4335"
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          ></path>
        </svg>
      </div>
      <div class="card__job">
        <p class="card__job-title">
          Senior Backend <br />
          Engineer
        </p>
      </div>
    </div>

    <button class="card__btn">view</button>
  </footer>
</article>
`,
    css:`.card {
  margin: auto;
  width: min(300px, 100%);
  background-color: #fefefe;
  border-radius: 1rem;
  padding: 0.5rem;
  color: #141417;
}
.card__hero {
  background-color: #fef4e2;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 1.5rem;
  font-size: 0.875rem;
}
.card__hero .card__job-title {
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 600;
  padding-right: 2rem;
}
.card__hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1rem;
  font-weight: 700;
}
.card__footer {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0.75rem;
  row-gap: 1rem;
  font-weight: 700;
  font-size: 0.875rem;
}
@media (min-width: 340px) {
  .card__footer {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}
.card__job-summary {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.75rem;
}
.card__btn {
  width: 100%;
  font-weight: 400;
  border: none;
  display: block;
  cursor: pointer;
  text-align: center;
  padding: 0.5rem 1.25rem;
  border-radius: 1rem;
  background-color: #141417;
  color: #fff;
  font-size: 1rem;
}
@media (min-width: 340px) {
  .card__btn {
    width: max-content;
  }
}
`
  },{
    category:"cards",
    html:`<div class="card">
  <div class="head">Window</div>
  <div class="content">
    This is a neobrutalist-style window with a button and space for any content
    you want!
    <br />
    <button class="button">Button</button>
  </div>
</div>`,
    css:`.card {
  font-family: Montserrat, sans-serif;
  width: 300px;
  height: 250px;
  translate: -6px -6px;
  background: #ff66a3;
  border: 3px solid #000000;
  box-shadow: 12px 12px 0 #000000;
  overflow: hidden;
  transition: all 0.3s ease;
}

.head {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 900;
  width: 100%;
  height: 32px;
  background: #ffffff;
  padding: 5px 12px;
  color: #000000;
  border-bottom: 3px solid #000000;
}

.content {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
}

.button {
  padding: 5px 10px;
  margin-top: 10px;
  border: 3px solid #000000;
  box-shadow: 3px 3px 0 #000000;
  font-weight: 750;
  background: #4ade80;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button:hover {
  translate: 1.5px 1.5px;
  box-shadow: 1.5px 1.5px 0 #000000;
  background: #1ac2ff;
}

.button:active {
  translate: 3px 3px;
  box-shadow: 0 0 0 #000000;
}

.card:hover {
  translate: -6px;
}`
  },{
    category:"cards",
    html:`<div class="card">
    <h2>CARD</h2>
</div>`,
    css:`.card {
  width: 190px;
  height: 254px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card h2 {
  z-index: 1;
  color: white;
  font-size: 2em;
}

.card::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}  
/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */

`
  },{
    category:"cards",
    html:`<div class="parent">
        <div class="card">
            <div class="logo">
                <span class="circle circle1"></span>
                <span class="circle circle2"></span>
                <span class="circle circle3"></span>
                <span class="circle circle4"></span>
                <span class="circle circle5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" class="svg">
                        <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
                        <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                        <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                      </svg>
                </span>

            </div>
            <div class="glass"></div>
            <div class="content">
                <span class="title">WEBIFY (3D UI)</span>
                <span class="text">Create, share, and use beautiful custom elements made with CSS</span>
            </div>
            <div class="bottom">
                
                <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="svg">
                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                          </svg></button>
                      <button class="social-button .social-button2">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="svg">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                          </svg>
                      </button>
                      <button class="social-button .social-button3">
                        <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" class="svg">
                            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                          </svg>
                      </button>
                </div>
                <div class="view-more">
                    <button class="view-more-button">View more</button>
                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </div>
            </div>
        </div>
    </div>`,
    css:`.parent {
  width: 290px;
  height: 300px;
  perspective: 1000px;
}

.card {
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
}

.glass {
  transform-style: preserve-3d;
  position: absolute;
  inset: 8px;
  border-radius: 55px;
  border-top-right-radius: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
  transform: translate3d(0px, 0px, 25px);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transition: all 0.5s ease-in-out;
}

.content {
  padding: 100px 60px 0px 30px;
  transform: translate3d(0, 0, 26px);
}

.content .title {
  display: block;
  color: #00894d;
  font-weight: 900;
  font-size: 20px;
}

.content .text {
  display: block;
  color: rgba(0, 137, 78, 0.7647058824);
  font-size: 15px;
  margin-top: 20px;
}

.bottom {
  padding: 10px 12px;
  transform-style: preserve-3d;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translate3d(0, 0, 26px);
}

.bottom .view-more {
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: flex-end;
  transition: all 0.2s ease-in-out;
}

.bottom .view-more:hover {
  transform: translate3d(0, 0, 10px);
}

.bottom .view-more .view-more-button {
  background: none;
  border: none;
  color: #00c37b;
  font-weight: bolder;
  font-size: 12px;
}

.bottom .view-more .svg {
  fill: none;
  stroke: #00c37b;
  stroke-width: 3px;
  max-height: 15px;
}

.bottom .social-buttons-container {
  display: flex;
  gap: 10px;
  transform-style: preserve-3d;
}

.bottom .social-buttons-container .social-button {
  width: 30px;
  aspect-ratio: 1;
  padding: 5px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  border: none;
  display: grid;
  place-content: center;
  box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
}

.bottom .social-buttons-container .social-button:first-child {
  transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
}

.bottom .social-buttons-container .social-button:nth-child(2) {
  transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
}

.bottom .social-buttons-container .social-button:nth-child(3) {
  transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
}

.bottom .social-buttons-container .social-button .svg {
  width: 15px;
  fill: #00894d;
}

.bottom .social-buttons-container .social-button:hover {
  background: black;
}

.bottom .social-buttons-container .social-button:hover .svg {
  fill: white;
}

.bottom .social-buttons-container .social-button:active {
  background: rgb(255, 234, 0);
}

.bottom .social-buttons-container .social-button:active .svg {
  fill: black;
}

.logo {
  position: absolute;
  right: 0;
  top: 0;
  transform-style: preserve-3d;
}

.logo .circle {
  display: block;
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
  top: 0;
  right: 0;
  box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(0, 249, 203, 0.2);
  transition: all 0.5s ease-in-out;
}

.logo .circle1 {
  width: 170px;
  transform: translate3d(0, 0, 20px);
  top: 8px;
  right: 8px;
}

.logo .circle2 {
  width: 140px;
  transform: translate3d(0, 0, 40px);
  top: 10px;
  right: 10px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  transition-delay: 0.4s;
}

.logo .circle3 {
  width: 110px;
  transform: translate3d(0, 0, 60px);
  top: 17px;
  right: 17px;
  transition-delay: 0.8s;
}

.logo .circle4 {
  width: 80px;
  transform: translate3d(0, 0, 80px);
  top: 23px;
  right: 23px;
  transition-delay: 1.2s;
}

.logo .circle5 {
  width: 50px;
  transform: translate3d(0, 0, 100px);
  top: 30px;
  right: 30px;
  display: grid;
  place-content: center;
  transition-delay: 1.6s;
}

.logo .circle5 .svg {
  width: 20px;
  fill: white;
}

.parent:hover .card {
  transform: rotate3d(1, 1, 0, 30deg);
  box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
}

.parent:hover .card .bottom .social-buttons-container .social-button {
  transform: translate3d(0, 0, 50px);
  box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
}

.parent:hover .card .logo .circle2 {
  transform: translate3d(0, 0, 60px);
}

.parent:hover .card .logo .circle3 {
  transform: translate3d(0, 0, 80px);
}

.parent:hover .card .logo .circle4 {
  transform: translate3d(0, 0, 100px);
}

.parent:hover .card .logo .circle5 {
  transform: translate3d(0, 0, 120px);
}`
  },{
    category:"cards",
    html:`<div class="card">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div class="card__content">
    <p class="card__title">Card Title</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>`,
    css:`.card {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}
`
  },{
    category:"cards",
    html:`<div class="main">
  <div class="card">
    <div class="fl">
      <div class="fullscreen">
        <svg viewBox="0 0 100 100" class="fullscreen_svg"><path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z"></path></svg>
      </div>
    </div>
    <div class="card_content">
      <label class="switch_738">
        <input type="checkbox" class="chk_738">
        <span class="slider_738"></span>
      </label>
    </div>
    <div class="card_back"></div>
  </div>
  <div class="data">
    <div class="img">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 80 80">
      <g stroke-width="2.00" fill="none" stroke-linecap="butt">
      <path stroke="#59afb1" d="M 14.06 0.00
        Q 13.33 4.09 13.93 7.52
        A 1.04 1.02 -78.7 0 0 14.37 8.19
        L 32.87 20.19"></path>
      <path stroke="#4fa6a8" d="M 32.87 20.19
        L 42.25 26.79"></path>
      <path stroke="#69cbc0" d="M 42.25 26.79
        C 41.40 28.26 24.14 34.92 21.32 36.20"></path>
      <path stroke="#6fcdbb" d="M 21.32 36.20
        Q 15.81 38.21 11.00 41.21"></path>
      <path stroke="#5ec8ab" d="M 11.00 41.21
        L 9.75 40.96"></path>
      <path stroke="#5cae9e" d="M 9.75 40.96
        Q 5.99 37.71 1.71 35.19
        A 1.00 1.00 0.0 0 0 0.22 35.85
        L 0.00 36.94"></path>
      <path stroke="#3190a6" d="M 79.95 6.12
        L 62.46 11.32"></path>
      <path stroke="#3a96a3" d="M 62.46 11.32
        Q 47.42 14.67 32.87 20.19"></path>
      <path stroke="#22a3be" d="M 80.00 11.06
        L 64.50 17.46"></path>
      <path stroke="#28879d" d="M 64.50 17.46
        L 62.46 11.32"></path>
      <path stroke="#2ba9bb" d="M 64.50 17.46
        L 43.00 26.96"></path>
      <path stroke="#4ab2b2" d="M 43.00 26.96
        L 42.25 26.79"></path>
      <path stroke="#45ced3" d="M 80.00 52.31
        Q 71.64 45.91 62.46 40.67"></path>
      <path stroke="#13636e" d="M 62.46 40.67
        Q 62.43 36.88 58.50 36.79"></path>
      <path stroke="#45ced3" d="M 58.50 36.79
        Q 50.07 32.95 43.00 26.96"></path>
      <path stroke="#326b65" d="M 58.50 36.79
        Q 55.85 40.04 56.86 44.07
        C 57.53 46.71 60.02 47.68 61.77 45.19
        Q 61.91 44.99 61.94 44.74
        L 62.46 40.67"></path>
      <path stroke="#59d4b5" d="M 40.81 79.86
        Q 46.22 74.94 52.34 70.94
        A 1.00 1.00 0.0 0 0 52.39 69.30
        Q 44.74 63.65 43.10 62.62
        Q 34.11 56.98 32.50 55.79"></path>
      <path stroke="#6ad8c5" d="M 32.50 55.79
        C 36.74 55.42 30.64 48.79 29.79 47.81
        C 27.54 45.21 26.34 42.09 24.05 39.44
        Q 22.66 37.82 21.32 36.20"></path>
      <path stroke="#326b65" d="M 48.75 39.07
        A 2.30 2.30 0.0 0 0 46.45 36.77
        L 46.05 36.77
        A 2.30 2.30 0.0 0 0 43.75 39.07
        L 43.75 44.21
        A 2.30 2.30 0.0 0 0 46.05 46.51
        L 46.45 46.51
        A 2.30 2.30 0.0 0 0 48.75 44.21
        L 48.75 39.07"></path>
      <path stroke="#326b65" d="M 58.63 54.41
        C 54.90 57.18 50.72 56.87 46.91 54.39
        A 1.00 0.99 51.9 0 0 46.04 54.28
        C 42.37 55.52 43.88 58.13 46.28 59.41
        Q 53.38 63.20 60.15 58.94
        C 62.54 57.43 62.47 54.80 59.41 54.23
        A 1.00 1.00 0.0 0 0 58.63 54.41"></path>
      <path stroke="#4bb793" d="M 9.75 40.96
        Q 5.15 43.50 0.05 44.46"></path>
      <path stroke="#5fd6b0" d="M 32.50 55.79
        L 11.00 41.21"></path>
      <path stroke="#48d08e" d="M 11.19 80.00
        Q 12.51 79.61 11.57 78.67
        Q 5.99 73.11 1.70 65.70
        C 1.28 64.97 0.74 64.76 0.00 65.19"></path>
      </g>
      <path fill="#6ebfb6" d="M 0.00 0.00
        L 14.06 0.00
        Q 13.33 4.09 13.93 7.52
        A 1.04 1.02 -78.7 0 0 14.37 8.19
        L 32.87 20.19
        L 42.25 26.79
        C 41.40 28.26 24.14 34.92 21.32 36.20
        Q 15.81 38.21 11.00 41.21
        L 9.75 40.96
        Q 5.99 37.71 1.71 35.19
        A 1.00 1.00 0.0 0 0 0.22 35.85
        L 0.00 36.94
        L 0.00 0.00
        Z"></path>
      <path fill="#439eac" d="M 14.06 0.00
        L 80.00 0.00
        L 79.95 6.12
        L 62.46 11.32
        Q 47.42 14.67 32.87 20.19
        L 14.37 8.19
        A 1.04 1.02 -78.7 0 1 13.93 7.52
        Q 13.33 4.09 14.06 0.00
        Z"></path>
      <path fill="#1f81a0" d="M 79.95 6.12
        L 80.00 11.06
        L 64.50 17.46
        L 62.46 11.32
        L 79.95 6.12
        Z"></path>
      <path fill="#308d99" d="M 62.46 11.32
        L 64.50 17.46
        L 43.00 26.96
        L 42.25 26.79
        L 32.87 20.19
        Q 47.42 14.67 62.46 11.32
        Z"></path>
      <path fill="#25c5dc" d="M 80.00 11.06
        L 80.00 52.31
        Q 71.64 45.91 62.46 40.67
        Q 62.43 36.88 58.50 36.79
        Q 50.07 32.95 43.00 26.96
        L 64.50 17.46
        L 80.00 11.06
        Z"></path>
      <path fill="#64d6ca" d="M 42.25 26.79
        L 43.00 26.96
        Q 50.07 32.95 58.50 36.79
        Q 55.85 40.04 56.86 44.07
        C 57.53 46.71 60.02 47.68 61.77 45.19
        Q 61.91 44.99 61.94 44.74
        L 62.46 40.67
        Q 71.64 45.91 80.00 52.31
        L 80.00 80.00
        L 40.81 79.86
        Q 46.22 74.94 52.34 70.94
        A 1.00 1.00 0.0 0 0 52.39 69.30
        Q 44.74 63.65 43.10 62.62
        Q 34.11 56.98 32.50 55.79
        C 36.74 55.42 30.64 48.79 29.79 47.81
        C 27.54 45.21 26.34 42.09 24.05 39.44
        Q 22.66 37.82 21.32 36.20
        C 24.14 34.92 41.40 28.26 42.25 26.79
        Z
        M 48.75 39.07
        A 2.30 2.30 0.0 0 0 46.45 36.77
        L 46.05 36.77
        A 2.30 2.30 0.0 0 0 43.75 39.07
        L 43.75 44.21
        A 2.30 2.30 0.0 0 0 46.05 46.51
        L 46.45 46.51
        A 2.30 2.30 0.0 0 0 48.75 44.21
        L 48.75 39.07
        Z
        M 58.63 54.41
        C 54.90 57.18 50.72 56.87 46.91 54.39
        A 1.00 0.99 51.9 0 0 46.04 54.28
        C 42.37 55.52 43.88 58.13 46.28 59.41
        Q 53.38 63.20 60.15 58.94
        C 62.54 57.43 62.47 54.80 59.41 54.23
        A 1.00 1.00 0.0 0 0 58.63 54.41
        Z"></path>
      <path fill="#499c85" d="M 9.75 40.96
        Q 5.15 43.50 0.05 44.46
        L 0.00 36.94
        L 0.22 35.85
        A 1.00 1.00 0.0 0 1 1.71 35.19
        Q 5.99 37.71 9.75 40.96
        Z"></path>
      <path fill="#70dac0" d="M 21.32 36.20
        Q 22.66 37.82 24.05 39.44
        C 26.34 42.09 27.54 45.21 29.79 47.81
        C 30.64 48.79 36.74 55.42 32.50 55.79
        L 11.00 41.21
        Q 15.81 38.21 21.32 36.20
        Z"></path>
      <rect fill="#000000" x="43.75" y="36.77" width="5.00" height="9.74" rx="2.30"></rect>
      <path fill="#000000" d="M 58.50 36.79
        Q 62.43 36.88 62.46 40.67
        L 61.94 44.74
        Q 61.91 44.99 61.77 45.19
        C 60.02 47.68 57.53 46.71 56.86 44.07
        Q 55.85 40.04 58.50 36.79
        Z"></path>
      <path fill="#4dd1a0" d="M 9.75 40.96
        L 11.00 41.21
        L 32.50 55.79
        Q 34.11 56.98 43.10 62.62
        Q 44.74 63.65 52.39 69.30
        A 1.00 1.00 0.0 0 1 52.34 70.94
        Q 46.22 74.94 40.81 79.86
        L 11.19 80.00
        Q 12.51 79.61 11.57 78.67
        Q 5.99 73.11 1.70 65.70
        C 1.28 64.97 0.74 64.76 0.00 65.19
        L 0.05 44.46
        Q 5.15 43.50 9.75 40.96
        Z"></path>
      <path fill="#000000" d="M 46.91 54.39
        C 50.72 56.87 54.90 57.18 58.63 54.41
        A 1.00 1.00 0.0 0 1 59.41 54.23
        C 62.47 54.80 62.54 57.43 60.15 58.94
        Q 53.38 63.20 46.28 59.41
        C 43.88 58.13 42.37 55.52 46.04 54.28
        A 1.00 0.99 51.9 0 1 46.91 54.39
        Z"></path>
      <path fill="#43ce7c" d="M 11.19 80.00
        L 0.00 80.00
        L 0.00 65.19
        C 0.74 64.76 1.28 64.97 1.70 65.70
        Q 5.99 73.11 11.57 78.67
        Q 12.51 79.61 11.19 80.00
        Z"></path>
      </svg>
    </div>
    <div class="text">
      <div class="text_m">CSS Theme Switch</div>
      <div class="text_s">Praashoo7</div>
    </div>
  </div>
  <div class="btns">
    <div class="likes">
      <svg class="likes_svg" viewBox="-2 0 105 92"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path></svg><span class="likes_text">22</span>
    </div>
    <div class="comments">
      <svg class="comments_svg" viewBox="-405.9 238 56.3 54.8" title="Comment"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"></path></svg><span class="comments_text">12</span>
    </div>
    <div class="views">
      <svg class="views_svg" viewBox="0 0 30.5 16.5" title="Views"><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path></svg><span class="views_text">332</span>
    </div>
  </div>
</div>`,
    css:`.card {
  width: 15em;
  height: 10em;
  background-color: #252525;
  border-radius: 7px;
  cursor: pointer;
}

.fl {
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transition: .2s ease-in-out;
}

.fl:hover .fullscreen {
  scale: 1.2;
}

.fl:hover .fullscreen_svg {
  fill: white;
}

.fullscreen {
  width: 1.5em;
  height: 1.5em;
  border-radius: 5px;
  background-color: #727890;
  margin: 1em;
  margin-right: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s ease-in-out;
  box-shadow: 2px 2px 6px rgba(0,0,0,.4);
}

.fullscreen_svg {
  width: 15px;
  height: 15px;
  fill: rgb(177, 176, 176);
  transition: .2s ease-in-out;
}

.card_back {
  position: absolute;
  width: 15em;
  height: 13em;
  background-color: rgba(30, 31, 38, 0.575);
  border-radius: 7px;
  margin-top: -5em;
  margin-left: 0.7em;
  transition: .2s ease-in-out;
  z-index: -1;
}

.main:hover .card_back {
  margin-top: -6.25em;
  margin-left: 0em;
  scale: 1.1;
  height: 15.25em;
  cursor: pointer;
}

.main:hover .fl {
  opacity: 1;
  cursor: pointer;
  margin-right: 0.5em;
}

.data {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
}

.img {
  width: 2.25em;
  height: 2.25em;
  background-color: #252525;
  border-radius: 5px;
  overflow: hidden;
}

.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.5em;
  font-family: Montserrat;
  color: white;
}

.text_m {
  font-weight: bold;
  font-size: 0.9em;
}

.text_s {
  font-size: 0.7em;
}

.btns {
  display: flex;
  gap: 0.5em;
  transition: .2s ease-in-out;
}

.likes {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: .2s ease-in-out;
}

.likes_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.likes_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.likes:hover {
  background-color: #5A5F73;
  cursor: pointer;
}

.comments {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: .24s ease-in-out;
}

.comments_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.comments_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.comments:hover {
  background-color: #5A5F73;
  cursor: pointer;
}

.views {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 1.4em;
  border-radius: 4px;
  margin-top: -0.5em;
  opacity: 0;
  background-color: #444857;
  transition: .28s ease-in-out;
}

.views_text {
  font-family: Montserrat;
  font-size: 0.8em;
  margin-left: 0.25em;
  color: white;
}

.views_svg {
  width: 12px;
  height: 12px;
  fill: white;
}

.views:hover {
  background-color: #5A5F73;
  cursor: pointer;
}

.main:hover .likes {
  margin-top: 0.5em;
  opacity: 1;
}

.main:hover .comments {
  margin-top: 0.5em;
  opacity: 1;
}

.main:hover .views {
  margin-top: 0.5em;
  opacity: 1;
}



/* The Main Switch */

.card_content {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* The switch - the box around the slider */
.switch_738 {
  font-size: 13px;
  position: relative;
  display: inline-block;
  width: 1.2em;
  height: 3.3em;
}

/* Hide default HTML checkbox */
.switch_738 .chk_738 {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider_738 {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 5px;
}

.slider_738:before {
  position: absolute;
  content: "";
  height: .5em;
  width: 2.4em;
  border-radius: 5px;
  left: -0.6em;
  top: 0.2em;
  background-color: white;
  box-shadow: 0 6px 7px rgba(0,0,0,0.3);
  transition: .4s;
}

.slider_738:before, .slider_738:after {
  content: "";
  display: block;
}

.slider_738:after {
  background: linear-gradient(transparent 50%, rgba(255, 255, 255, 0.15) 0) 0 50% / 50% 100%,
		repeating-linear-gradient(90deg,rgb(255, 255, 255) 0,rgb(255, 255, 255),rgb(255, 255, 255) 20%,rgb(255, 255, 255) 20%,rgb(255, 255, 255) 40%) 0 50% / 50% 100%,
		radial-gradient(circle at 50% 50%,rgb(255, 255, 255) 25%, transparent 26%);
  background-repeat: no-repeat;
  border: 0.25em solid transparent;
  border-left: 0.4em solid #ffffff;
  border-right: 0 solid transparent;
  transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  transform: translateX(-22.5%) rotate(90deg);
  transform-origin: 25% 50%;
  position: relative;
  top: 0.5em;
  left: 0.55em;
  width: 2em;
  height: 1em;
  box-sizing: border-box;
}

.chk_738:checked + .slider_738 {
  background-color: limegreen;
}

.chk_738:focus + .slider_738 {
  box-shadow: 0 0 1px limegreen;
}

.chk_738:checked + .slider_738:before {
  transform: translateY(2.3em);
}

.chk_738:checked + .slider_738:after {
  transform: rotateZ(90deg) rotateY(180deg) translateY(0.45em) translateX(-1.4em);
}`
  },{
    category:"cards",
    html:`<div class="container">
 <div class="left-side">
  <div class="card">
   <div class="card-line"></div>
   <div class="buttons"></div>
  </div>
  <div class="post">
   <div class="post-line"></div>
   <div class="screen">
    <div class="dollar">$</div>
   </div>
   <div class="numbers"></div>
   <div class="numbers-line2"></div>
  </div>
 </div>
 <div class="right-side">
  <div class="new">New Transaction</div>
  
   <svg viewBox="0 0 451.846 451.847" height="512" width="512" xmlns="http://www.w3.org/2000/svg" class="arrow"><path fill="#cfcfcf" data-old_color="#000000" class="active-path" data-original="#000000" d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"></path></svg>
 
 </div>
</div>`,
    css:`.container {
  background-color: #ffffff;
  display: flex;
  width: 460px;
  height: 120px;
  position: relative;
  border-radius: 6px;
  transition: 0.3s ease-in-out;
}

.container:hover {
  transform: scale(1.03);
  width: 220px;
}

.container:hover .left-side {
  width: 100%;
}

.left-side {
  background-color: #5de2a3;
  width: 130px;
  height: 120px;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;
  overflow: hidden;
}

.right-side {
  width: calc(100% - 130px);
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  white-space: nowrap;
  transition: 0.3s;
}

.right-side:hover {
  background-color: #f9f7f9;
}

.arrow {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}

.new {
  font-size: 23px;
  font-family: "Lexend Deca", sans-serif;
  margin-left: 20px;
}

.card {
  width: 70px;
  height: 46px;
  background-color: #c7ffbc;
  border-radius: 6px;
  position: absolute;
  display: flex;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
  -moz-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
  box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
}

.card-line {
  width: 65px;
  height: 13px;
  background-color: #80ea69;
  border-radius: 2px;
  margin-top: 7px;
}

@media only screen and (max-width: 480px) {
  .container {
    transform: scale(0.7);
  }

  .container:hover {
    transform: scale(0.74);
  }

  .new {
    font-size: 18px;
  }
}

.buttons {
  width: 8px;
  height: 8px;
  background-color: #379e1f;
  box-shadow: 0 -10px 0 0 #26850e, 0 10px 0 0 #56be3e;
  border-radius: 50%;
  transform: rotate(90deg);
  margin: 10px 0 0 -30px;
}

.container:hover .card {
  animation: slide-top 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) both;
}

.container:hover .post {
  animation: slide-post 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
}

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(-70px) rotate(90deg);
    transform: translateY(-70px) rotate(90deg);
  }

  60% {
    -webkit-transform: translateY(-70px) rotate(90deg);
    transform: translateY(-70px) rotate(90deg);
  }

  100% {
    -webkit-transform: translateY(-8px) rotate(90deg);
    transform: translateY(-8px) rotate(90deg);
  }
}

.post {
  width: 63px;
  height: 75px;
  background-color: #dddde0;
  position: absolute;
  z-index: 11;
  top: 120px;
  border-radius: 6px;
  overflow: hidden;
}

.post-line {
  width: 47px;
  height: 9px;
  background-color: #545354;
  position: absolute;
  border-radius: 0px 0px 3px 3px;
  right: 8px;
  top: 8px;
}

.post-line:before {
  content: "";
  position: absolute;
  width: 47px;
  height: 9px;
  background-color: #757375;
  top: -8px;
}

.screen {
  width: 47px;
  height: 23px;
  background-color: #ffffff;
  position: absolute;
  top: 22px;
  right: 8px;
  border-radius: 3px;
}

.numbers {
  width: 12px;
  height: 12px;
  background-color: #838183;
  box-shadow: 0 -18px 0 0 #838183, 0 18px 0 0 #838183;
  border-radius: 2px;
  position: absolute;
  transform: rotate(90deg);
  left: 25px;
  top: 52px;
}

.numbers-line2 {
  width: 12px;
  height: 12px;
  background-color: #aaa9ab;
  box-shadow: 0 -18px 0 0 #aaa9ab, 0 18px 0 0 #aaa9ab;
  border-radius: 2px;
  position: absolute;
  transform: rotate(90deg);
  left: 25px;
  top: 68px;
}

@keyframes slide-post {
  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px);
  }
}

.dollar {
  position: absolute;
  font-size: 16px;
  font-family: "Lexend Deca", sans-serif;
  width: 100%;
  left: 0;
  top: 0;
  color: #4b953b;
  text-align: center;
}

.container:hover .dollar {
  animation: fade-in-fwd 0.3s 1s backwards;
}

@keyframes fade-in-fwd {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`
  },{
    category:"cards",
    html:`<div class="main-container">
  <div class="border">
    <div class="card">
      <div class="shadow">
        <div class="content">
          <p class="rev">Revolut</p>
          <p class="ultra-text">ULTRA MEMBER</p>
          <p class="master-text">mastercard</p>
          <p class="master one"></p>
          <p class="master two"></p>
          <svg
            version="1.1"
            class="chip"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 50 50"
            xml:space="preserve"
          >
            <image
              width="50"
              height="50"
              x="0"
              y="0"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
            ></image>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
`,
    css:`.main-container {
  font-family: "Trebuchet MS", sans-serif;
  position: relative;
  height: 203px;
  aspect-ratio: 1.579;
  border-radius: 1em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in;
}
.main-container:hover {
  transform: rotateZ(1deg) rotateY(10deg) scale(1.1);
  box-shadow: 0 5em 2em #111;
}

.border {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  background: linear-gradient(
    115deg,
    rgba(0, 0, 0, 0.33) 12%,
    rgba(255, 255, 255, 0.33) 27%,
    rgba(255, 255, 255, 0.33) 31%,
    rgba(0, 0, 0, 0.33) 52%
  );
}

.border:hover:after {
  position: absolute;
  content: " ";
  height: 50em;
  aspect-ratio: 1.58;
  border-radius: 1em;
  background: linear-gradient(
    115deg,
    rgba(0, 0, 0, 1) 42%,
    rgba(255, 255, 255, 1) 47%,
    rgba(255, 255, 255, 1) 51%,
    rgba(0, 0, 0, 1) 52%
  );
  animation: rotate 4s linear infinite;
  z-index: 1;
  opacity: 0.05;
}

.card {
  height: 12.5em;
  aspect-ratio: 1.586;
  border-radius: 1em;
  background-color: #999;
  opacity: 0.8;
  background-image: linear-gradient(to right, #777, #777 2px, #999 2px, #999);
  background-size: 4px 100%;
}

.shadow {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.85em;
  border: 1px solid #bbb;
  background:
    radial-gradient(
        circle at 100% 100%,
        #ffffff 0,
        #ffffff 8px,
        transparent 8px
      )
      0% 0%/13px 13px no-repeat,
    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 8px, transparent 8px)
      100% 0%/13px 13px no-repeat,
    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 8px, transparent 8px)
      0% 100%/13px 13px no-repeat,
    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 8px, transparent 8px) 100%
      100%/13px 13px no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 10px)
      calc(100% - 26px) no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 26px)
      calc(100% - 10px) no-repeat,
    linear-gradient(
      135deg,
      rgba(3, 3, 3, 0.5) 0%,
      transparent 22%,
      transparent 47%,
      transparent 73%,
      rgba(0, 0, 0, 0.5) 100%
    );
  box-sizing: border-box;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 0.6em;
  border: 1px solid #aaa;
  box-shadow: -1px -1px 0 #ddd;
  transform: translate(-50%, -50%);
  height: 12em;
  aspect-ratio: 1.604;
  background-image: linear-gradient(to right, #777, #555 2px, #aaa 2px, #aaa);
  background-size: 4px 100%;
}

.rev {
  top: 0.5em;
  left: 0.75em;
  color: #ffffff9f;
  font-size: 1.25em;
}

.master {
  position: absolute;
  bottom: 1.25em;
  right: 0.5em;
  background: linear-gradient(
    90deg,
    rgba(75, 75, 75, 0.25) 0%,
    rgba(121, 121, 121, 1) 100%
  );
  color: #fff;
  height: 2.5em;
  width: 2.5em;
  border: 1px solid #bbb;
  border-radius: 50%;
}

.master.one {
  right: 2em;
}

.master-text {
  bottom: 0.25em;
  right: 0.8em;
  font-size: 0.75em;
}

.ultra-text {
  top: -4px;
  right: 1.75em;
  font-size: 0.5em;
  color: rgba(255, 255, 255, 0.66);
}

.ultra-text,
.master-text,
.rev {
  position: absolute;
  text-shadow: -1px -1px #333;
  color: #fff;
  opacity: 0.75;
}

.chip {
  position: absolute;
  top: 27.5%;
  left: 8.25%;
}

@keyframes rotate {
  0% {
    transform: translate(-25em, -15em);
  }
  20% {
    transform: translate(25em, 15em);
  }
  100% {
    transform: translate(25em, 15em);
  }
}
`
  },{
    category:"cards",
    html:`<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="heading_8264">MASTERCARD</p>
            <svg class="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
            </svg>
            <svg version="1.1" class="chip" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" xml:space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
            </svg>
            <svg version="1.1" class="contactless" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" xml:space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
              cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
              lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
              fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
              GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
              VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
              HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
              bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
              DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
              qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
              sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
              Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
              XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
              cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
              nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
              xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
              MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
              OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
              MDowMIXeN6gAAAAASUVORK5CYII="></image>
            </svg>
            <p class="number">9759 2484 5269 6576</p>
            <p class="valid_thru">VALID THRU</p>
            <p class="date_8264">1 2 / 2 4</p>
            <p class="name">ELON MUSK</p>
        </div>
        <div class="flip-card-back">
            <div class="strip"></div>
            <div class="mstrip"></div>
            <div class="sstrip">
              <p class="code">***</p>
            </div>
        </div>
    </div>
</div>`,
    css:`.flip-card {
  background-color: transparent;
  width: 240px;
  height: 154px;
  perspective: 1000px;
  color: white;
}

.heading_8264 {
  position: absolute;
  letter-spacing: .2em;
  font-size: 0.5em;
  top: 2em;
  left: 18.6em;
}

.logo {
  position: absolute;
  top: 6.8em;
  left: 11.7em;
}

.chip {
  position: absolute;
  top: 2.3em;
  left: 1.5em;
}

.contactless {
  position: absolute;
  top: 3.5em;
  left: 12.4em;
}

.number {
  position: absolute;
  font-weight: bold;
  font-size: .6em;
  top: 8.3em;
  left: 1.6em;
}

.valid_thru {
  position: absolute;
  font-weight: bold;
  top: 635.8em;
  font-size: .01em;
  left: 140.3em;
}

.date_8264 {
  position: absolute;
  font-weight: bold;
  font-size: 0.5em;
  top: 13.6em;
  left: 3.2em;
}

.name {
  position: absolute;
  font-weight: bold;
  font-size: 0.5em;
  top: 16.1em;
  left: 2em;
}

.strip {
  position: absolute;
  background-color: black;
  width: 15em;
  height: 1.5em;
  top: 2.4em;
  background: repeating-linear-gradient(
    45deg,
    #303030,
    #303030 10px,
    #202020 10px,
    #202020 20px
  );
}

.mstrip {
  position: absolute;
  background-color: rgb(255, 255, 255);
  width: 8em;
  height: 0.8em;
  top: 5em;
  left: .8em;
  border-radius: 2.5px;
}

.sstrip {
  position: absolute;
  background-color: rgb(255, 255, 255);
  width: 4.1em;
  height: 0.8em;
  top: 5em;
  left: 10em;
  border-radius: 2.5px;
}

.code {
  font-weight: bold;
  text-align: center;
  margin: .2em;
  color: black;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
}

.flip-card-front {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  background-color: #171717;
}

.flip-card-back {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  background-color: #171717;
  transform: rotateY(180deg);
}`
  },{
    category:"cards",
    html:`<div class="card">HOVER</div>`,
    css:`.card {
  position: relative;
  width: 220px;
  height: 320px;
  background: mediumturquoise;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
}

.card::before,
.card::after {
  position: absolute;
  content: "";
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: lightblue;
  transition: all 0.5s;
}

.card::before {
  top: 0;
  right: 0;
  border-radius: 0 15px 0 100%;
}

.card::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100%  0 15px;
}

.card:hover::before,
.card:hover:after {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.card:hover:after {
  content: "HELLO";
}`
  },{
    category:"cards",
    html:`<div class="card">
  <div class="card-info">
    <p class="title">Magic Card</p>
  </div>
</div>`,
    css:`.card {
 --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
 width: 190px;
 height: 254px;
 padding: 5px;
 border-radius: 1rem;
 overflow: visible;
 background: #f7ba2b;
 background: var(--background);
 position: relative;
 z-index: 1;
}

.card::after {
 position: absolute;
 content: "";
 top: 30px;
 left: 0;
 right: 0;
 z-index: -1;
 height: 100%;
 width: 100%;
 transform: scale(0.8);
 filter: blur(25px);
 background: #f7ba2b;
 background: var(--background);
 transition: opacity .5s;
}

.card-info {
 --color: #181818;
 background: var(--color);
 color: var(--color);
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 overflow: visible;
 border-radius: .7rem;
}

.card .title {
 font-weight: bold;
 letter-spacing: .1em;
}

/*Hover*/
.card:hover::after {
 opacity: 0;
}

.card:hover .card-info {
 color: #f7ba2b;
 transition: color 1s;
}
`
  },{
    category:"cards",
    html:`<div class="card">
  <div class="card__border"></div>
  <div class="card_title__container">
    <span class="card_title">Keys to Success</span>
    <p class="card_paragraph">Best way to be success in your life.</p>
  </div>
  <hr class="line" />
  <ul class="card__list">
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Set Clear Goals</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Stay Organized</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Continuous Learning</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Time Management</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          class="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">Maintain a Positive Attitude</span>
    </li>
  </ul>
  <button class="button">Get Your Success</button>
</div>
`,
    css:`.card {
  --white: hsl(0, 0%, 100%);
  --black: hsl(240, 15%, 9%);
  --paragraph: hsl(0, 0%, 83%);
  --line: hsl(240, 9%, 17%);
  --primary: hsl(189, 92%, 58%);

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 19rem;
  background-color: hsla(240, 15%, 9%, 1);
  background-image: radial-gradient(
      at 88% 40%,
      hsla(240, 15%, 9%, 1) 0px,
      transparent 85%
    ),
    radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
    radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
    radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
    radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
    radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%);

  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
}

.card .card__border {
  overflow: hidden;
  pointer-events: none;

  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 100%) -50%,
    hsl(0, 0%, 40%) 100%
  );

  border-radius: 1rem;
}

.card .card__border::before {
  content: "";
  pointer-events: none;

  position: fixed;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%), rotate(0deg);
  transform-origin: left;

  width: 200%;
  height: 10rem;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0) 0%,
    hsl(189, 100%, 50%) 40%,
    hsl(189, 100%, 50%) 60%,
    hsla(0, 0%, 40%, 0) 100%
  );

  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.card .card_title__container .card_title {
  font-size: 1rem;
  color: var(--white);
}

.card .card_title__container .card_paragraph {
  margin-top: 0.25rem;
  width: 65%;

  font-size: 0.5rem;
  color: var(--paragraph);
}

.card .line {
  width: 100%;
  height: 0.1rem;
  background-color: var(--line);

  border: none;
}

.card .card__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card .card__list .card__list_item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card .card__list .card__list_item .check {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: 1rem;
  background-color: var(--primary);

  border-radius: 50%;
}

.card .card__list .card__list_item .check .check_svg {
  width: 0.75rem;
  height: 0.75rem;

  fill: var(--black);
}

.card .card__list .card__list_item .list_text {
  font-size: 0.75rem;
  color: var(--white);
}

.card .button {
  cursor: pointer;

  padding: 0.5rem;
  width: 100%;
  background-image: linear-gradient(
    0deg,
    hsl(189, 92%, 58%),
    hsl(189, 99%, 26%) 100%
  );

  font-size: 0.75rem;
  color: var(--white);

  border: 0;
  border-radius: 9999px;
  box-shadow: inset 0 -2px 25px -4px var(--white);
}
`
  },{
    category:"cards",
    html:`<div class="card">
  <label class="avatar"></label>
  <label class="info">
    <span class="info-1"></span>
    <span class="info-2"></span>
  </label>
  <div class="content-1"></div>
  <div class="content-2"></div>
</div>`,
    css:`.card {
  width: 190px;
  height: 190px;
  border-radius: 44px;
  background: lightgrey;
  background: linear-gradient(145deg, #ff6b6b, #d43636);
  box-shadow: 2px 3px 3px #ba2f2f,
             2px 3px 3px #ff4949;
}

.avatar {
  width: 45px;
  height: 45px;
  display: inline-block;
  background-color: rgba(255,255,255,0.9);
  margin: 30px 15px 20px 25px;
  border-radius: 14px;
}

.info {
  display: inline-block;
  vertical-align: top;
  margin-top: 33px;
  width: 85px;
}

.info-1, .info-2 {
  display: inline-block;
  height: 20px;
  width: 100%;
  border-radius: 6px;
  background: rgba(255,255,255,0.9);
}

.info-2 {
  height: 11px;
  width: 50%;
  border-radius: 3px;
}

.content-1 {
  width: 80%;
  border-radius: 12px;
  background: rgba(255,255,255,0.9);
  height: 40px;
  margin: auto;
}

.content-2 {
  width: 60%;
  border-radius: 6px;
  background: rgba(255,255,255,0.9);
  height: 18px;
  margin: 10px 0 0 20px;
}`
  },{
    category:"cards",
    html:`<div class="container">
  <div data-text="Github" style="--r:-15;" class="glass">
    <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  </div>
  <div data-text="Code" style="--r:5;" class="glass">
    <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
      ></path>
    </svg>
  </div>
  <div data-text="Earn" style="--r:25;" class="glass">
    <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
      ></path>
    </svg>
  </div>
</div>`,
    css:`.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .glass {
  position: relative;
  width: 180px;
  height: 200px;
  background: linear-gradient(#fff2, transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  border-radius: 10px;
  margin: 0 -45px;
  backdrop-filter: blur(10px);
  transform: rotate(calc(var(--r) * 1deg));
}

.container:hover .glass {
  transform: rotate(0deg);
  margin: 0 10px;
}

.container .glass::before {
  content: attr(data-text);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.container .glass svg {
  font-size: 2.5em;
  fill: #fff;
}
`
  },{
    category:"cards",
    html:` <div class="book">
    <p>Hello</p>
    <div class="cover">
        <p>Hover Me</p>
    </div>
   </div>`,
    css:`.book {
  position: relative;
  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: whitesmoke;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
}

.cover {
  top: 0;
  position: absolute;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.book:hover .cover {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: rotatey(-80deg);
  -ms-transform: rotatey(-80deg);
  transform: rotatey(-80deg);
}

p {
  font-size: 20px;
  font-weight: bolder;
}`
  },{
    category:"cards",
    html:`<div class="card">
  <svg fill="none" viewBox="0 0 342 175" height="175" width="342" xmlns="http://www.w3.org/2000/svg" class="background">
    <path fill="url(#paint0_linear_103_640)" d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"></path>
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" y2="128" x2="354.142" y1="128" x1="0" id="paint0_linear_103_640">
        <stop stop-color="#5936B4"></stop>
        <stop stop-color="#362A84" offset="1"></stop>
      </linearGradient>
    </defs>
  </svg>
  <div class="cloud">
    <svg fill="#000000" preserveAspectRatio="xMidYMid meet" class="iconify iconify--emojione" role="img" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
      <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        <g fill="#75d6ff">
          <path d="M10.8 42.9c-.5 1.5-.1 3 1 3.4c1.1.4 2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2.1 1.9-3.6 3.8-4.2 5.5"> </path>
          <path d="M13.2 57.4c.6-1.8.7-4.1.2-6.9c-2.1 1.8-3.6 3.7-4.2 5.5c-.5 1.5-.1 3 1 3.4c1.1.4 2.5-.5 3-2"> </path>
          <path d="M51.5 37.4c-2.1 1.8-3.6 3.7-4.2 5.5c-.5 1.5-.1 3 1 3.4c1.1.4 2.4-.5 3-2c.5-1.7.6-4.1.2-6.9"> </path>
          <path d="M38.2 55.9c-.5 1.5-.1 3 1 3.4s2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2 1.9-3.5 3.8-4.2 5.5"> </path>
          <path d="M46.9 55.9c-.5 1.5-.1 3 1 3.4s2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2.1 1.9-3.6 3.8-4.2 5.5"> </path>
          <path d="M18.6 55.9c-.5 1.5-.1 3 1 3.4s2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2.1 1.9-3.6 3.8-4.2 5.5"> </path>
        </g>
        <path d="M24.5 31.9l-4.9 16.2h12.5L27.9 62l16.5-20.2H32.5l2.9-9.9z" fill="#ffce31"> </path>
        <path fill="#ffffff" d="M18.2 32.5c-.8 0-1.6-.1-2.4-.4c-3.1-1-5.3-3.9-5.3-7.2c0-2.2 1-4.3 2.6-5.7c.4-.4.9-.7 1.4-1l.5-1.8c1.3-4.4 5.4-7.5 10-7.5c.5 0 .9 0 1.5.1c.4.1.8.1 1.2.3l.2-.4c1.9-3.3 5.4-5.4 9.2-5.4C43 3.5 47.7 8.2 47.7 14v1c.4.2.9.4 1.3.6c2.8 1.6 4.5 4.6 4.5 7.8c0 4.2-2.9 7.8-7 8.8c-.7.2-1.4.2-2 .2H18.2z"> </path>
        <path fill="#b6c1d1" d="M37.1 5c5 0 9 4 9 8.9v.7c-2.1.2-4 1-5.4 2.3c1.1-.6 2.4-1 3.7-1c.5 0 1 .1 1.5.1c.8.2 1.6.5 2.3.9c2.3 1.3 3.8 3.7 3.8 6.5c0 3.6-2.5 6.5-5.8 7.3c-.7.2-1.2.3-1.8.3H18.2c-.7 0-1.3-.1-1.9-.3c-2.4-.8-4.2-3.1-4.2-5.8c0-1.8.8-3.5 2.1-4.6c.6-.5 1.3-.9 2-1.2c.6-.2 1.3-.3 2-.3c2 0 3.7.9 4.9 2.4h.1c-1.3-2.4-3.7-4.1-6.6-4.3c1.1-3.7 4.5-6.4 8.5-6.4c.4 0 .9 0 1.3.1c.8.1 1.6.3 2.3.7c2.7 1.2 4.7 3.7 5.1 6.8V18c0-3.4-1.8-6.5-4.5-8.3C30.8 6.9 33.8 5 37.1 5m0-3C33 2 29.2 4.1 27 7.6h-.3c-.6-.1-1.2-.1-1.7-.1c-5.3 0-10 3.5-11.4 8.6l-.3 1.2c-.4.2-.7.5-1.1.8c-2 1.7-3.1 4.2-3.1 6.9c0 4 2.5 7.4 6.3 8.7c.9.3 1.9.5 2.9.5h26.2c.8 0 1.6-.1 2.4-.3c4.8-1.1 8.2-5.3 8.2-10.3c0-3.8-2-7.3-5.3-9.1c-.2-.1-.3-.2-.5-.3v-.1C49.2 7.4 43.8 2 37.1 2z"> </path>
      </g>
    </svg>
  </div>
  <p class="main-text">24°</p>
  <div class="info">
    <div class="info-left">
      <p class="text-gray">H:32° L: 16°</p>
      <p>Kathmandu, Nepal</p>
    </div>
    <p class="info-right">Mid Rain</p>
  </div>
</div>`,
    css:`.card {
  width: 342px;
  height: 184px;
  position: relative;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.background {
  fill: linear-gradient(90deg, #5936B4 0%, #362A84 100%);
  position: absolute;
  inset: 0;
  z-index: -1;
}

.cloud {
  position: absolute;
  right: 0;
  top: -12px;
}

.cloud svg {
  height: 120px;
}

.card .main-text {
  font-size: 48px;
  z-index: 2;
}

.card .info {
  display: flex;
  justify-content: space-between;
}

.card .info .text-gray {
  color: rgba(235, 235, 245, 0.60);
}

.card .info .info-right {
  align-self: flex-end;
}
`
  },{
    category:"cards",
    html:`<div class="outer">
  <div class="dot"></div>
  <div class="card">
    <div class="ray"></div>
    <div class="text">750k</div>
    <div>Views</div>
    <div class="line topl"></div>
    <div class="line leftl"></div>
    <div class="line bottoml"></div>
    <div class="line rightl"></div>
  </div>
</div>
`,
    css:`.outer {
  width: 300px;
  height: 250px;
  border-radius: 10px;
  padding: 1px;
  background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
  position: relative;
}

.dot {
  width: 5px;
  aspect-ratio: 1;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 10px #ffffff;
  border-radius: 100px;
  z-index: 2;
  right: 10%;
  top: 10%;
  animation: moveDot 6s linear infinite;
}

@keyframes moveDot {
  0%,
  100% {
    top: 10%;
    right: 10%;
  }
  25% {
    top: 10%;
    right: calc(100% - 35px);
  }
  50% {
    top: calc(100% - 30px);
    right: calc(100% - 35px);
  }
  75% {
    top: calc(100% - 30px);
    right: 10%;
  }
}

.card {
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  border: solid 1px #202222;
  background-size: 20px 20px;
  background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  color: #fff;
}
.ray {
  width: 220px;
  height: 45px;
  border-radius: 100px;
  position: absolute;
  background-color: #c7c7c7;
  opacity: 0.4;
  box-shadow: 0 0 50px #fff;
  filter: blur(10px);
  transform-origin: 10%;
  top: 0%;
  left: 0;
  transform: rotate(40deg);
}

.card .text {
  font-weight: bolder;
  font-size: 4rem;
  background: linear-gradient(45deg, #000000 4%, #fff, #000);
  background-clip: text;
  color: transparent;
}

.line {
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: #2c2c2c;
}
.topl {
  top: 10%;
  background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
}
.bottoml {
  bottom: 10%;
}
.leftl {
  left: 10%;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, #747474 30%, #222424 70%);
}
.rightl {
  right: 10%;
  width: 1px;
  height: 100%;
}
`
  },{
    category:"cards",
    html:`<div class="card">
 <svg version="1.1" id="cookieSvg" x="0px" y="0px" viewBox="0 0 122.88 122.25" xml:space="preserve"><g><path d="M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z M59.28,57.86c2.77,0,5.01,2.24,5.01,5.01c0,2.77-2.24,5.01-5.01,5.01 c-2.77,0-5.01-2.24-5.01-5.01C54.27,60.1,56.52,57.86,59.28,57.86L59.28,57.86z M37.56,78.49c3.37,0,6.11,2.73,6.11,6.11 s-2.73,6.11-6.11,6.11s-6.11-2.73-6.11-6.11S34.18,78.49,37.56,78.49L37.56,78.49z M50.72,31.75c2.65,0,4.79,2.14,4.79,4.79 c0,2.65-2.14,4.79-4.79,4.79c-2.65,0-4.79-2.14-4.79-4.79C45.93,33.89,48.08,31.75,50.72,31.75L50.72,31.75z M119.3,32.4 c1.98,0,3.58,1.6,3.58,3.58c0,1.98-1.6,3.58-3.58,3.58s-3.58-1.6-3.58-3.58C115.71,34.01,117.32,32.4,119.3,32.4L119.3,32.4z M93.62,22.91c2.98,0,5.39,2.41,5.39,5.39c0,2.98-2.41,5.39-5.39,5.39c-2.98,0-5.39-2.41-5.39-5.39 C88.23,25.33,90.64,22.91,93.62,22.91L93.62,22.91z M97.79,0.59c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78C92.02,3.17,94.6,0.59,97.79,0.59L97.79,0.59z M76.73,80.63c4.43,0,8.03,3.59,8.03,8.03 c0,4.43-3.59,8.03-8.03,8.03s-8.03-3.59-8.03-8.03C68.7,84.22,72.29,80.63,76.73,80.63L76.73,80.63z M31.91,46.78 c4.8,0,8.69,3.89,8.69,8.69c0,4.8-3.89,8.69-8.69,8.69s-8.69-3.89-8.69-8.69C23.22,50.68,27.11,46.78,31.91,46.78L31.91,46.78z M107.13,60.74c-3.39-0.91-6.35-3.14-8.95-6.48c-5.78,1.52-11.16,1.41-15.76-0.02c-3.37-1.05-6.32-2.81-8.71-5.18 c-2.39-2.37-4.21-5.32-5.32-8.75c-1.51-4.66-1.69-10.2-0.18-16.32c-3.1-1.8-5.25-4.53-6.42-7.88c-1.06-3.05-1.28-6.59-0.61-10.35 C47.27,5.95,34.3,11.36,24.41,20.18C13.74,29.69,6.66,43.15,5.84,58.29l0,0.05v0h0l-0.01,0.13v0C5.07,73.72,10.55,87.82,20.02,98.3 c9.44,10.44,22.84,17.29,38,18.1l0.05,0h0v0l0.13,0.01h0c15.24,0.77,29.35-4.71,39.83-14.19c10.44-9.44,17.29-22.84,18.1-38l0-0.05 v0h0l0.01-0.13v0c0.07-1.34,0.09-2.64,0.06-3.91C112.98,61.34,109.96,61.51,107.13,60.74L107.13,60.74z M116.15,64.04L116.15,64.04 L116.15,64.04L116.15,64.04z M58.21,116.42L58.21,116.42L58.21,116.42L58.21,116.42z"></path></g></svg>
  <p class="cookieHeading">We use cookies.</p>
  <p class="cookieDescription">This website uses cookies to ensure you get the best experience on our site.</p>

  <div class="buttonContainer">
    <button class="acceptButton">Allow</button>
  <button class="declineButton">Decline</button>
  </div>
  

</div>
`,
    css:`.card {
  width: 300px;
  height: 220px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  gap: 13px;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
}

#cookieSvg {
  width: 50px;
}

#cookieSvg g path {
  fill: rgb(97, 81, 81);
}

.cookieHeading {
  font-size: 1.2em;
  font-weight: 800;
  color: rgb(26, 26, 26);
}

.cookieDescription {
  text-align: center;
  font-size: 0.7em;
  font-weight: 600;
  color: rgb(99, 99, 99);
}

.buttonContainer {
  display: flex;
  gap: 20px;
  flex-direction: row;
}

.acceptButton {
  width: 80px;
  height: 30px;
  background-color: #7b57ff;
  transition-duration: .2s;
  border: none;
  color: rgb(241, 241, 241);
  cursor: pointer;
  font-weight: 600;
  border-radius: 20px;
}

.declineButton {
  width: 80px;
  height: 30px;
  background-color: rgb(218, 218, 218);
  transition-duration: .2s;
  color: rgb(46, 46, 46);
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 20px;
}

.declineButton:hover {
  background-color: #ebebeb;
  transition-duration: .2s;
}

.acceptButton:hover {
  background-color: #9173ff;
  transition-duration: .2s;
}`
  },{
    category:"cards",
    html:`<div class="main">
  <div class="currentplaying">
    <svg height="50px" width="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="spotify"><radialGradient gradientUnits="userSpaceOnUse" gradientTransform="translate(0 -534)" r="43.888" cy="572.064" cx="33.34" id="ipdIa4~cOclR8yt_ClW93a"><stop stop-color="#f4e9c3" offset="0"></stop><stop stop-color="#f8eecd" offset=".219"></stop><stop stop-color="#fdf4dc" offset=".644"></stop><stop stop-color="#fff6e1" offset="1"></stop></radialGradient><path d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z" fill="url(#ipdIa4~cOclR8yt_ClW93a)"></path><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="translate(0 -534)" y2="590.253" y1="530.096" x2="32" x1="32" id="ipdIa4~cOclR8yt_ClW93b"><stop stop-color="#42d778" offset="0"></stop><stop stop-color="#3dca76" offset=".428"></stop><stop stop-color="#34b171" offset="1"></stop></linearGradient><path d="M57,32c0,12.837-9.663,23.404-22.115,24.837C33.942,56.942,32.971,57,32,57	c-1.644,0-3.25-0.163-4.808-0.471C15.683,54.298,7,44.163,7,32C7,18.192,18.192,7,32,7S57,18.192,57,32z" fill="url(#ipdIa4~cOclR8yt_ClW93b)"></path><path d="M41.683,44.394c-0.365,0-0.731-0.181-1.096-0.365c-3.471-2.009-7.674-3.105-12.24-3.105	c-2.559,0-5.116,0.364-7.491,0.912c-0.365,0-0.914,0.183-1.096,0.183c-0.914,0-1.461-0.732-1.461-1.462	c0-0.913,0.547-1.463,1.279-1.643c2.923-0.732,5.846-1.096,8.951-1.096c5.116,0,9.866,1.276,13.885,3.655	c0.548,0.364,0.914,0.73,0.914,1.642C43.145,43.847,42.414,44.394,41.683,44.394z M44.241,38.181c-0.547,0-0.912-0.18-1.279-0.364	c-3.835-2.375-9.135-3.839-15.163-3.839c-2.924,0-5.664,0.366-7.674,0.916c-0.549,0.18-0.731,0.18-1.096,0.18	c-1.096,0-1.827-0.912-1.827-1.826c0-1.096,0.549-1.645,1.461-2.009c2.74-0.73,5.481-1.279,9.317-1.279	c6.213,0,12.241,1.463,16.991,4.384c0.73,0.364,1.096,1.096,1.096,1.826C46.069,37.269,45.337,38.181,44.241,38.181z M47.165,30.876	c-0.548,0-0.731-0.182-1.279-0.364c-4.385-2.559-10.961-4.021-17.356-4.021c-3.289,0-6.577,0.366-9.5,1.096	c-0.366,0-0.731,0.182-1.279,0.182c-1.279,0.183-2.193-0.912-2.193-2.192c0-1.279,0.731-2.009,1.644-2.192	c3.471-1.096,7.125-1.462,11.327-1.462c6.943,0,14.25,1.462,19.731,4.567c0.73,0.366,1.278,1.096,1.278,2.193	C49.357,29.961,48.442,30.876,47.165,30.876z" fill="#fff"></path></svg>
    <p class="heading">Currently Playing</p>
  </div>
  <div class="loader">
    <div class="song">
      <p class="name">Time in a Bottle</p>
      <p class="artist">Jim Corce</p>
    </div>
    <div class="albumcover"></div>
    <div class="loading">
      <div class="load"></div>
      <div class="load"></div>
      <div class="load"></div>
      <div class="load"></div>
    </div>
  </div>
  <div class="loader">
    <div class="song">
      <p class="name">My Way</p>
      <p class="artist">Frank Sinatra</p>
    </div>
    <div class="albumcover"></div>
    <div class="play"></div>
  </div>
  <div class="loader">
    <div class="song">
      <p class="name">Lemon Tree</p>
      <p class="artist">Fools Garden</p>
    </div>
    <div class="albumcover"></div>
    <div class="play"></div>
  </div>
</div>`,
    css:`.main {
  background-color: white;
  padding: 1em;
  padding-bottom: 1.1em;
  border-radius: 15px;
  margin: 1em;
}

.loader {
  display: flex;
  flex-direction: row;
  height: 4em;
  padding-left: 1em;
  padding-right: 1em;
  transform: rotate(180deg);
  justify-content: right;
  border-radius: 10px;
  transition: .4s ease-in-out;
}

.loader:hover {
  cursor: pointer;
  background-color: lightgray;
}

.currentplaying {
  display: flex;
  margin: 1em;
}

.spotify {
  width: 50px;
  height: 50px;
  margin-right: 0.6em;
}

.heading {
  color: black;
  font-size: 1.1em;
  font-weight: bold;
  align-self: center;
}

.loading {
  display: flex;
  margin-top: 1em;
  margin-left: 0.3em;
}

.load {
  width: 2px;
  height: 33px;
  background-color: limegreen;
  animation: 1s move6 infinite;
  border-radius: 5px;
  margin: 0.1em;
}

.load:nth-child(1) {
  animation-delay: 0.2s;
}

.load:nth-child(2) {
  animation-delay: 0.4s;
}

.load:nth-child(3) {
  animation-delay: 0.6s;
}

.play {
  position: relative;
  left: 0.35em;
  height: 1.6em;
  width: 1.6em;
  clip-path: polygon(50% 50%, 100% 50%, 75% 6.6%);
  background-color: black;
  transform: rotate(-90deg);
  align-self: center;
  margin-top: 0.7em;
  justify-self: center;
}

.albumcover {
  position: relative;
  margin-right: 1em;
  height: 40px;
  width: 40px;
  background-color: rgb(233, 232, 232);
  align-self: center;
  border-radius: 5px;
}

.song {
  position: relative;
  transform: rotate(180deg);
  margin-right: 1em;
  color: black;
  align-self: center;
}

.artist {
  font-size: 0.6em;
}

@keyframes move6 {
  0% {
    height: 0.2em;
  }

  25% {
    height: 0.7em;
  }

  50% {
    height: 1.5em;
  }

  100% {
    height: 0.2em;
  }
}`
  },
  {
    category: "buttons",
    html: `<button class="bn">Hover!</button>`,
    css: `/* From Webify by Amir10Amir - Tags: gradient, button */
button {
  --border-radius: 25px;
  --border-width: 7px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  background-color: #212121;
  font-family: "Roboto", Arial, "Segoe UI", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ffff;
  z-index: 2;
}

button::after {
  --m-i: linear-gradient(#000, #000);
  --m-o: content-box, padding-box;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  background-image: conic-gradient(
		#ff0080,
		#ff0080,
		#ff0080,
		#ff0080,
		#ff0080,
		#ff0080,
		#ff0080
	);
  -webkit-mask-image: var(--m-i), var(--m-i);
  mask-image: var(--m-i), var(--m-i);
  -webkit-mask-origin: var(--m-o);
  mask-origin: var(--m-o);
  mask-clip: var(--m-o);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  filter: hue-rotate(0);
  animation: rotate-hue634 linear 500ms infinite;
  animation-play-state: paused;
  border-radius: 20px;
  border-color: #000;
}

button:hover::after {
  animation-play-state: running;
  border-radius: 10px;
}

@keyframes rotate-hue634 {
  to {
    filter: hue-rotate(1turn);
  }
}

button,
button::after {
  box-sizing: border-box;
  border-radius: 20px;
}

button:active {
  --border-width: 5px;
}

.bn {
  padding: 0.9em 1.6em;
  border: none;
  outline: none;
  color: #FFF;
  font-family: inherit;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 32px;
}

.bn::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(46, 46, 46);
  left: 0;
  top: 0;
  border-radius: 10px;
}

.bn::before {
  content: "";
  background: linear-gradient(
    45deg,
    #07d888, #e40851, #2f00ff, #00ff37,
      #ec0808, #2600ff, #0bd157, #2f00ff
);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 600%;
  z-index: -1;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  filter: blur(8px);
  animation: glowing345 20s linear infinite;
  transition: opacity .3s ease-in-out;
  border-radius: 20px;
  opacity: 0;
}

@keyframes glowing345 {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

.bn:hover::before {
  opacity: 1;
}

.bn:active:after {
  background: transparent;
}

.bn:active {
  color: #000;
  font-weight: bold;
}`
  },
  {
    category: "buttons",
    html: `<div class="container">
  <button class="join-now-button">Join now</button>
</div>`,
    css: `/* From Webify by AndiBumann  - Tags: animation, gradient, button */
.join-now-button {
  background-color: #ff69b4; /* Grundfarbe (Pink) */
  background-image: linear-gradient(
    to right,
    #ff69b4 0%,
    #ffffff 25%,
    #f00 50%,
    #ffa500 75%,
    #ff69b4 100%
  ); /* Farbverlauf */
  background-size: 200% 100%; /* Größe des Farbverlaufs */
  background-position: left; /* Position des Farbverlaufs */
  transition: background-position 0.3s; /* Animation des Farbverlaufs */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Schatteneffekt */
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.join-now-button:hover {
  background-position: right; /* Animation des Farbverlaufs */
}`
  },
  {
    category: "buttons",
    html: `<button class="space-btn">
  <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" stroke-linejoin="round" stroke-linecap="round"></path> </svg>
  to infinity
</button>`,
    css: `/* From Webify by AndrewHeinke - Tags: button */
.space-btn {
  background: #FBFBFF;
  border: 2px solid #FF4F00;
  color: #363537;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 1px;
  padding: .5rem .75rem;
  font-family: monospace;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 1px rgba(0,0,0,0.09), 
              0 4px 2px rgba(0,0,0,0.09), 
              0 8px 4px rgba(0,0,0,0.09), 
              0 16px 8px rgba(0,0,0,0.09),
              0 32px 16px rgba(0,0,0,0.09);
  transition: .3s ease-in;
}

.space-btn:hover {
  background: #FF4F00;
  color: white;
}

.space-btn svg {
  width: 1em;
  height: 1em;
  color: currentColor;
  margin-right: .5rem;
}`
  },
  {
    category: "buttons",
    html: `<button>
  Button
</button>`,
    css: `/* From Webify by AnshKaushal - Tags: button */
button {
  border: 1.5px solid black;
  padding: 10px;
  width: 100px;
  margin: 15px;
  color: #f5f0f0;
  background-color: #101014;
  box-shadow: 3px 3px 6px #101014;
  transition: transform 0.3s ease-in-out;
}

button:hover {
  background-color: #f5f0f0;
  color: #101014;
  transform: scale(1.2);
}`
  },
  {
    category: "buttons",
    html: `<button class="button">
      I'm a Button
    </button>`,
    css: `/* From Webify by AnthonyPreite - Tags: gradient, button */
.button {
  position: relative;
  height: 50px;
  width: 130px;
  border: none;
  outline: none;
  color: white;
  background: #0f0f0f;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Gruppo', sans-serif;
  transition: all .2s ease-out;
}

.button:before {
  position: absolute;
  content: '';
  top: -4px;
  left: -4px;
  height: calc(100% + 8px);
  width: calc(100% + 8px);
  border-radius: 6px;
  z-index: -1;
  opacity: 1;
  background: linear-gradient(90deg, hsla(141, 54%, 86%, 1) 0%, hsla(333, 73%, 85%, 1) 25%, hsla(141, 54%, 86%, 1)50%);
  background-size: 400%;
  transition: opacity 1s ease-in-out;
  animation: animate 20s linear infinite;
}

.button:hover {
  transform: scale(1.1);
  color: #0f0f0f;
  opacity: 1;
  transition: all .3s ease-in-out;
}

.button:active {
  background: none;
  color: #000000;
  transform: scale(1);
  transition: all .3s ease-in-out;
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}`
  },
];

// Helper function to get unique categories
function getUniqueCategories() {
  const categories = new Set();
  components.forEach(comp => categories.add(comp.category));
  return ['all', ...Array.from(categories)];
}