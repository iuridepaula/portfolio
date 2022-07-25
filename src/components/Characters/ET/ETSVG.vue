<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="et"
    viewBox="0 0 100 200"
    aria-labelledby="etDesc"
  >
    <desc id="etDesc">
      A little green alien, flying around in its purple spaceship
    </desc>
    <linearGradient id="etLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f00" stop-opacity=".75" />
      <stop offset="100%" stop-color="#f00" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="etLight2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0ff" stop-opacity=".75" />
      <stop offset="100%" stop-color="#0ff" stop-opacity="0" />
    </linearGradient>
    <g class="et-et">
      <g class="et-light">
        <path fill="url(#etLight2)" d="M50 12.5L0 191.6h100L50 12.5z" />
      </g>
      <g class="et-ship">
        <path
          fill="#5f1b9a"
          d="M60.7 20.2c.1-2.4-5-5.2-10.4-5.3s-10.7 2-10.8 4.5c0 1.4 1.5 3.2 3.9 4.5l-.1 2.5c0 .1.1.3.3.3H45c.1 0 .3-.1.3-.3l.1-1.7c1.4.5 2.9.9 4.5.9 1.7.1 3.4-.2 4.9-.7l-.1 1.7c0 .1.1.3.3.3h1.4c.1 0 .3-.1.3-.3l.1-2.5c2.3-1 3.9-2.5 3.9-3.9z"
        />
        <ellipse cx="50.3" cy="17.2" fill="#a95ed4" rx="11.8" ry="6.8" />
        <g class="et-body">
          <path
            fill="#00b1e5"
            d="M50.2 19.7c1.6.1 3.1-.2 4.3-.8 0-.1 0-.2.1-.4l.2-5.9c.1-2.3-1.8-4.3-4.2-4.4-2.4-.1-4.4 1.8-4.5 4.1l-.2 5.9v.5c1.2.8 2.7 1 4.3 1z"
          />
          <g class="et-eye">
            <ellipse cx="50.4" cy="13.3" fill="#fff" rx="2.5" ry="2.5" />
            <ellipse cx="50.4" cy="13.3" fill="#004e88" rx="1" ry="1" />
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
