import './index.scss';
import LogoV from '../../../assets/images/logo-v.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  const animateLogo = () => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 40,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 3,
      }
    );
  };

  window.onload = animateLogo;

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      });
    gsap
      .fromTo(solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 3,
        }
      );
  }, [])
  

  return (
    <div className='logo-container' ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={LogoV} alt='V' />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="499.000000pt"
        height="470.000000pt"
        viewBox="0 0 499.000000 470.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,470.000000) scale(0.100000,-0.100000)"
          fill="none"
          className="svg-container"
        >
          <path
            ref={outlineLogoRef}
            d="M835 4631 c-3 -5 4 -12 15 -16 30 -10 24 -22 -17 -36 -21 -6 -123 -50 -228 -96 -188 -85 -382 -156 -397 -147 -5 3 -8 11 -8 19 0 24 -39 105 -51 105 -8 0 -10 -20 -5 -72 6 -69 5 -72 -10 -50 -22 30 -38 28 -30 -3 5 -18 2 -25 -9 -25 -8 0 -15 -7 -15 -16 0 -11 6 -14 20 -9 28 9 25 -11 -5 -31 -14 -9 -25 -23 -25 -30 0 -18 4 -18 41 2 17 8 33 14 35 12 2 -3 27 -72 54 -154 28 -82 74 -210 102 -284 50 -134 61 -166 176 -480 87 -240 213 -555 352 -880 67 -157 153 -361 191 -454 38 -93 76 -177 85 -187 9 -10 37 -66 64 -126 79 -181 317 -681 371 -780 41 -76 47 -94 34 -99 -27 -11 -16 -31 42 -83 32 -27 55 -53 51 -56 -3 -3 -22 8 -42 25 -20 18 -41 30 -47 28 -12 -4 169 -186 225 -226 24 -16 51 -53 78 -104 23 -43 48 -78 55 -78 17 0 17 3 -8 45 -12 20 -19 38 -16 41 3 3 52 -32 109 -78 134 -108 362 -268 382 -268 30 0 16 18 -51 64 l-67 46 41 0 c23 0 45 -4 48 -10 8 -13 35 -13 35 1 0 6 -9 13 -20 16 -10 3 -26 16 -35 29 l-15 24 42 0 c25 0 57 -8 76 -20 40 -25 42 -25 42 0 0 21 15 27 25 10 10 -16 45 -12 45 5 0 19 23 19 61 0 26 -14 30 -14 35 0 7 17 98 21 124 5 9 -5 19 -5 27 2 10 8 21 8 40 -1 23 -11 29 -10 39 3 10 15 14 15 40 1 36 -19 44 -19 44 0 0 21 14 19 56 -10 20 -14 41 -25 45 -25 12 0 11 17 -1 25 -30 19 -1 26 103 24 102 -1 115 -3 145 -26 18 -13 40 -26 50 -28 9 -2 26 -7 37 -10 11 -3 29 1 40 9 20 14 20 15 1 33 -12 12 -20 14 -23 6 -6 -17 -59 4 -83 34 -23 29 -9 79 19 67 9 -3 22 -8 29 -11 21 -9 13 15 -10 32 -20 14 -21 17 -8 28 9 7 16 21 17 32 2 31 81 197 302 629 41 80 59 127 55 141 -4 15 15 66 56 151 34 71 78 174 97 229 46 132 118 282 181 381 29 45 52 84 52 87 0 19 -21 2 -50 -41 -28 -42 -31 -44 -25 -17 12 57 87 220 175 386 96 178 133 258 122 260 -4 1 -11 1 -15 0 -16 -3 4 43 108 250 64 127 102 214 99 225 -5 19 45 144 68 171 8 10 14 11 25 2 20 -17 29 -2 11 18 -15 16 -14 23 12 76 15 32 33 86 40 120 16 76 24 86 50 62 25 -23 28 -1 3 27 -15 17 -15 21 2 60 11 24 20 44 21 46 1 2 12 -1 23 -8 17 -9 21 -8 21 4 0 8 -4 18 -10 21 -16 10 -12 40 10 68 11 14 20 31 20 39 0 7 10 36 22 65 21 47 25 51 51 46 32 -6 36 7 7 25 -15 9 -19 19 -14 37 4 15 2 25 -4 25 -6 0 0 25 14 55 28 64 30 85 10 85 -11 0 -13 9 -9 34 6 37 -11 57 -25 29 -6 -10 -13 -44 -17 -76 -6 -44 -14 -64 -33 -82 l-25 -23 -48 74 c-50 76 -57 90 -39 79 6 -3 10 -2 10 4 0 6 -12 18 -27 28 -49 30 -72 55 -79 85 -3 18 -14 33 -25 35 -10 3 -19 10 -19 16 0 5 -7 15 -16 21 -14 11 -13 19 15 75 24 50 27 63 15 68 -8 3 -14 14 -14 24 0 36 -26 19 -45 -31 -20 -51 -32 -59 -54 -37 -13 13 -229 13 -564 -1 -93 -4 -170 -5 -172 -3 -3 2 3 17 11 33 9 17 22 48 29 69 13 37 13 39 -5 39 -12 0 -20 -7 -20 -16 0 -8 -12 -40 -27 -70 -29 -60 -48 -60 -46 1 1 38 -11 47 -20 15 -3 -11 -10 -20 -15 -20 -6 0 -2 27 9 61 23 72 24 89 6 89 -9 0 -22 -33 -36 -92 -41 -166 -202 -541 -410 -952 -75 -149 -163 -336 -195 -416 -111 -273 -361 -747 -488 -924 -15 -21 -28 -48 -28 -58 0 -11 -5 -18 -12 -16 -17 6 -475 905 -559 1098 -108 246 -361 871 -366 905 -3 17 -12 34 -19 38 -27 16 -14 28 24 22 l37 -6 -24 20 -23 21 31 -6 c39 -8 43 13 4 22 -15 4 -42 23 -62 42 l-35 35 38 -7 c29 -6 37 -4 34 6 -3 7 -22 16 -44 20 -104 18 -386 131 -616 246 -5 2 -8 -3 -8 -12 0 -20 -34 -21 -50 -1 -14 17 -36 20 -45 6z m163 -123 c-2 -6 -35 -19 -74 -28 -38 -10 -143 -45 -233 -79 -167 -62 -191 -69 -191 -51 0 6 5 10 11 10 6 0 25 7 42 15 63 28 283 108 352 126 84 21 98 23 93 7z m161 -302 c71 -143 172 -360 224 -481 303 -704 731 -1602 871 -1823 35 -57 68 -117 71 -133 4 -16 8 -29 10 -29 17 0 38 17 46 36 4 13 13 24 19 24 6 0 9 -4 6 -8 -2 -4 -1 -13 3 -20 4 -7 42 58 95 165 147 299 346 665 549 1013 66 113 130 228 143 255 12 28 47 106 77 175 30 69 105 226 165 350 168 346 259 545 295 644 5 13 12 16 25 11 9 -4 96 -11 192 -15 171 -8 210 -13 210 -31 0 -8 -95 -6 -258 6 -80 6 -81 -14 -1 -31 91 -18 171 -47 157 -56 -7 -4 -53 -7 -101 -6 -109 2 -135 -18 -67 -49 24 -11 25 -12 3 -12 -29 -1 -28 -9 2 -43 34 -39 57 -38 36 1 -8 14 -6 17 11 17 36 -2 31 22 -9 43 l-38 20 76 1 c99 0 171 10 166 23 -2 6 -32 21 -68 34 -35 14 -66 26 -68 29 -2 2 62 1 143 -3 132 -5 146 -4 146 10 0 12 -9 17 -29 17 -17 0 -32 4 -35 8 -3 4 50 15 116 23 111 13 123 13 141 -2 20 -16 20 -17 -17 -120 -91 -254 -124 -335 -201 -504 -45 -99 -87 -192 -93 -208 -6 -15 -16 -26 -22 -25 -7 2 -12 -17 -14 -47 -2 -36 -35 -133 -120 -350 -65 -165 -142 -363 -171 -440 -57 -151 -79 -201 -432 -1000 -64 -143 -144 -327 -180 -410 -36 -82 -71 -157 -79 -166 -8 -8 -14 -24 -14 -35 0 -31 -173 -372 -178 -351 -5 25 -23 16 -41 -21 -15 -30 -31 -42 -31 -23 0 5 -12 12 -26 15 -15 4 -57 34 -94 67 -95 84 -124 76 -53 -15 45 -58 41 -61 -75 -69 -48 -4 -130 -11 -182 -17 -127 -13 -460 -13 -460 0 0 6 21 10 48 10 26 0 112 5 192 9 297 19 460 54 423 92 -10 9 -36 9 -125 0 -247 -27 -276 -30 -358 -30 -107 0 -92 9 65 42 66 14 144 31 173 37 57 13 76 35 49 55 -9 7 -78 18 -152 25 l-135 13 37 17 c52 23 70 45 52 66 -11 13 -8 19 19 41 31 24 42 56 22 68 -5 3 -10 -3 -10 -14 0 -11 -14 -28 -35 -41 -35 -21 -44 -43 -25 -55 20 -12 9 -26 -37 -48 -81 -38 -66 -49 87 -69 74 -9 141 -17 149 -17 32 -2 -3 -11 -184 -52 -105 -23 -194 -46 -199 -50 -5 -5 -4 -15 4 -24 16 -20 142 -20 317 -1 206 24 270 28 253 18 -40 -25 -463 -71 -652 -72 -59 0 -78 -3 -78 -14 0 -19 54 -26 219 -26 114 0 142 -3 133 -12 -19 -19 -473 -16 -483 3 -4 8 -17 32 -28 54 -134 257 -358 746 -412 897 -19 55 -32 31 -14 -27 8 -27 13 -50 11 -52 -1 -2 -47 104 -100 234 -54 131 -112 262 -128 292 -16 29 -47 97 -67 150 -21 53 -58 141 -81 196 -23 55 -44 108 -47 118 -3 9 -11 17 -18 17 -15 0 -12 -6 -101 250 -81 234 -91 260 -104 260 -18 0 -131 301 -240 640 -40 124 -89 270 -110 325 -49 126 -93 272 -87 282 3 5 43 10 89 11 54 1 114 11 173 28 103 29 124 34 180 41 56 6 28 -11 -60 -38 -38 -11 -76 -23 -84 -25 -29 -9 1 -18 54 -15 60 3 70 -9 30 -35 -29 -19 -24 -34 11 -34 21 0 24 -4 19 -20 -10 -31 24 -39 47 -11 23 30 23 51 -1 51 -38 0 -30 17 19 40 64 30 63 40 -2 41 l-53 1 35 15 c19 9 55 21 80 28 61 15 48 31 -22 27 -32 -2 -58 -1 -58 1 0 3 28 16 63 30 34 14 91 39 127 55 73 34 109 42 127 29 7 -5 71 -127 142 -271z m-484 259 c-68 -31 -174 -67 -186 -63 -19 6 152 77 186 77 l30 0 -30 -14z m3901 -22 c-11 -11 -17 4 -9 23 7 18 8 18 11 1 2 -10 1 -21 -2 -24z m-3431 -23 c3 -5 52 -35 108 -66 56 -31 120 -68 143 -80 30 -18 41 -20 41 -10 0 8 -6 12 -13 9 -6 -2 -15 0 -19 6 -3 6 -2 11 4 11 18 0 0 28 -22 35 -19 6 -17 8 17 16 47 11 80 -10 70 -45 -4 -17 -3 -18 5 -6 8 11 13 12 22 3 16 -16 3 -67 -16 -59 -8 3 -17 1 -20 -4 -4 -6 0 -10 7 -11 7 0 6 -3 -4 -7 -24 -10 -12 -23 46 -52 49 -25 76 -53 64 -66 -10 -10 -139 78 -134 91 9 24 -38 56 -214 149 -75 39 -106 61 -108 75 -3 21 12 29 23 11z m-485 -55 c-7 -8 -17 -12 -23 -8 -6 4 -3 9 9 14 27 11 28 11 14 -6z m690 0 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-1173 -22 c-4 -3 -7 0 -7 7 0 7 3 10 7 7 3 -4 3 -10 0 -14z m1153 12 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-735 -15 c-27 -12 -43 -12 -25 0 8 5 22 9 30 9 10 0 8 -3 -5 -9z m755 5 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-1030 -9 c0 -12 -94 -46 -103 -37 -7 7 -3 13 14 19 43 17 89 26 89 18z m996 -95 c104 -62 152 -101 105 -86 -38 12 -225 114 -245 134 -25 26 -12 47 17 27 12 -8 67 -42 123 -75z m-1116 54 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m1370 -20 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-870 -15 c-20 -13 -40 -13 -40 0 0 6 12 10 28 10 21 0 24 -2 12 -10z m3869 -35 c11 -19 17 -35 14 -35 -13 0 -53 43 -53 57 0 24 18 14 39 -22z m-4342 10 c8 -22 -6 -33 -17 -15 -13 20 -12 30 0 30 6 0 13 -7 17 -15z m1028 -26 l30 -21 -30 7 c-51 11 -16 -9 100 -59 107 -45 182 -86 159 -86 -17 0 -250 95 -273 111 -21 14 -40 69 -25 69 5 0 23 -10 39 -21z m3334 -65 c54 -68 66 -78 62 -51 -1 9 3 9 23 1 9 -3 16 -10 16 -15 0 -4 -7 -6 -15 -3 -18 7 -19 0 -5 -27 6 -10 17 -19 25 -19 20 0 19 -19 -1 -27 -10 -4 -20 0 -26 10 -5 10 -14 17 -21 17 -7 0 -31 30 -55 65 -23 36 -47 65 -52 65 -15 0 -12 -9 11 -41 27 -39 8 -37 -25 2 -27 32 -29 40 -20 77 9 33 17 28 83 -54z m-3066 52 c21 -16 22 -26 2 -26 -8 0 -19 9 -25 20 -12 23 -3 25 23 6z m-146 -113 c132 -59 214 -105 210 -118 -2 -5 10 -15 27 -21 17 -6 32 -18 34 -27 3 -15 -1 -15 -39 3 -24 10 -46 26 -49 36 -6 16 -34 28 -220 95 -55 20 -80 41 -80 66 0 18 -4 19 117 -34z m2218 26 c-4 -12 -63 -136 -131 -276 -68 -141 -124 -257 -124 -259 0 -2 -9 -18 -20 -36 l-21 -33 7 30 c7 32 282 595 291 595 2 0 1 -10 -2 -21z m982 -91 c80 -108 98 -145 50 -100 -13 12 -27 19 -32 15 -4 -5 -6 -3 -2 3 3 5 -23 44 -59 85 -62 72 -71 88 -57 102 12 13 18 7 100 -105z m-2983 41 c5 -5 7 -12 3 -15 -9 -9 -67 16 -67 28 0 12 50 2 64 -13z m2901 -30 c14 -17 24 -34 21 -36 -8 -8 -65 40 -65 55 -1 21 16 13 44 -19z m205 21 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-3302 -38 c109 -47 230 -114 215 -119 -6 -2 -42 11 -80 30 -37 19 -107 51 -155 72 -49 21 -88 41 -88 46 0 15 16 11 108 -29z m213 -12 c19 -15 20 -19 8 -20 -9 0 -27 9 -40 20 -19 15 -20 19 -8 20 9 0 27 -9 40 -20z m2868 -40 c19 -32 69 -103 112 -156 73 -90 88 -114 73 -114 -12 0 -253 255 -254 267 0 16 22 63 29 63 3 0 21 -27 40 -60z m197 -16 c61 -68 75 -94 52 -93 -11 0 -116 125 -126 151 -11 26 24 -1 74 -58z m93 25 c-5 -3 -2 -14 7 -25 13 -16 15 -16 10 -2 -5 15 -3 16 14 5 23 -13 23 -16 10 -37 -7 -11 -10 -11 -10 -2 0 7 -4 10 -10 7 -5 -3 -10 -1 -10 4 0 6 -5 10 -12 9 -7 -2 -12 8 -12 24 1 19 -3 25 -13 21 -12 -5 -12 -7 -2 -14 8 -4 10 -11 6 -15 -10 -10 -17 -1 -22 26 -7 34 4 42 30 23 12 -10 19 -21 14 -24z m-3290 -44 c111 -46 171 -77 166 -85 -3 -4 -40 5 -82 22 -43 16 -109 40 -148 54 -63 22 -95 44 -95 66 0 8 41 -7 159 -57z m3231 40 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-155 -47 c60 -69 156 -168 162 -168 2 0 11 -7 20 -16 16 -16 5 -64 -16 -64 -16 0 -33 29 -27 46 4 10 1 14 -6 11 -12 -3 -137 145 -173 206 -24 41 -3 33 40 -15z m215 -28 c41 -51 16 -54 -26 -2 -16 20 -34 43 -38 50 -18 30 32 -8 64 -48z m-332 -9 c6 -18 -36 9 -43 28 -5 11 -2 11 17 -1 12 -8 24 -20 26 -27z m-2967 -4 c119 -47 189 -81 189 -90 0 -5 -6 -7 -12 -5 -7 2 -67 16 -133 32 -118 28 -155 48 -155 82 0 21 18 18 111 -19z m3242 -55 c52 -54 69 -82 49 -82 -7 0 -103 105 -131 143 -26 37 21 2 82 -61z m-160 -155 c33 -37 58 -70 55 -72 -8 -8 -248 226 -248 242 0 8 5 23 11 34 9 18 16 12 66 -58 30 -43 83 -109 116 -146z m222 163 c15 -16 16 -23 6 -33 -10 -9 -15 -8 -27 7 -29 40 -12 62 21 26z m69 -5 c-4 -8 -11 -15 -16 -15 -6 0 -5 6 2 15 7 8 14 15 16 15 2 0 1 -7 -2 -15z m-3326 -29 c53 -13 116 -27 139 -31 23 -4 46 -12 52 -18 15 -19 64 -147 58 -153 -7 -7 -367 206 -367 218 0 12 12 10 118 -16z m167 14 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m2750 -115 c38 -44 75 -89 84 -99 33 -40 -10 -8 -84 62 -72 67 -95 83 -95 64 0 -9 71 -106 103 -139 45 -50 6 -29 -60 32 -39 36 -74 65 -77 65 -18 0 1 -35 62 -109 37 -46 74 -93 82 -105 14 -20 14 -20 -5 -6 -11 8 -48 41 -82 73 -111 104 -94 49 31 -103 25 -29 44 -56 41 -58 -2 -2 -43 30 -91 72 -58 51 -91 73 -97 67 -12 -12 37 -78 156 -213 43 -48 75 -88 72 -88 -4 0 -41 33 -83 73 -43 39 -104 96 -136 126 l-58 54 28 76 c15 42 47 118 71 170 37 81 46 93 57 80 7 -8 44 -50 81 -94z m255 -130 c-13 -15 -16 -14 -39 13 -15 16 -59 68 -98 115 -108 126 -88 125 39 0 100 -100 110 -113 98 -128z m-3010 210 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-154 -70 c53 -36 133 -83 177 -105 l80 -40 64 -153 c34 -83 101 -228 148 -321 47 -93 83 -171 81 -173 -2 -3 -22 1 -44 8 -23 7 -48 8 -59 4 -14 -7 -10 -10 22 -16 29 -6 21 -7 -30 -4 -38 2 -79 0 -90 -5 -14 -6 2 -9 55 -11 41 -1 94 -2 118 -3 31 -1 48 -7 58 -21 15 -19 13 -20 -53 -26 -37 -4 -97 -8 -133 -9 -103 -4 -27 -17 105 -19 l110 -1 36 -70 c41 -80 46 -76 -83 -54 -211 36 -294 74 -117 54 46 -5 106 -10 132 -10 77 0 53 23 -39 38 -43 7 -101 17 -129 22 -27 5 -58 9 -67 9 -16 1 -78 115 -78 144 0 7 -10 28 -23 47 -13 19 -79 161 -146 315 -68 154 -141 319 -162 368 -39 87 -43 97 -35 97 2 0 48 -29 102 -65z m3144 -196 c0 -3 -6 -11 -13 -17 -10 -9 -33 11 -98 86 -119 135 -118 140 4 32 59 -51 107 -97 107 -101z m20 136 c11 -13 10 -14 -4 -9 -9 3 -16 10 -16 15 0 13 6 11 20 -6z m-137 -117 c73 -69 86 -87 81 -105 -3 -13 -9 -23 -13 -22 -6 0 -175 196 -200 232 -15 21 -15 21 14 0 17 -12 69 -59 118 -105z m-30 -66 c66 -64 86 -90 82 -103 -4 -11 -9 -19 -13 -18 -9 1 -211 229 -225 254 -14 26 39 -20 156 -133z m-1234 82 c-17 -47 -92 -209 -101 -219 -5 -5 -12 -5 -19 2 -11 11 11 63 79 181 37 63 60 83 41 36z m1271 -219 c9 -11 10 -22 3 -37 -8 -19 -16 -12 -93 78 -47 55 -93 108 -102 118 -10 11 -18 24 -18 29 0 9 182 -155 210 -188z m-32 -88 c5 -45 -20 -32 -89 46 -98 110 -159 183 -159 191 0 4 55 -41 123 -101 90 -81 123 -116 125 -136z m-238 63 c46 -52 95 -107 109 -122 47 -52 11 -28 -86 58 -54 48 -111 97 -126 111 -15 13 -26 27 -24 31 2 4 7 16 11 26 8 23 -3 33 116 -104z m144 -78 l69 -62 -18 -26 -17 -26 -18 28 c-9 16 -65 83 -124 149 -58 66 -106 124 -106 129 0 5 33 -22 73 -60 39 -38 103 -97 141 -132z m-257 86 c6 -13 36 -54 67 -91 31 -38 56 -71 56 -73 0 -2 -30 20 -67 51 -71 58 -83 64 -83 40 0 -8 7 -15 15 -15 8 0 12 -6 9 -14 -5 -13 61 -101 135 -178 52 -56 30 -46 -57 25 -97 80 -142 111 -149 104 -15 -15 17 -63 122 -185 63 -74 115 -136 115 -138 0 -3 -53 42 -117 98 -65 57 -130 112 -144 123 l-25 19 37 100 c56 151 58 156 67 156 5 0 13 -10 19 -22z m164 -120 c71 -61 129 -113 129 -115 0 -2 -9 -23 -20 -46 -13 -26 -18 -52 -15 -68 8 -35 -9 -46 -28 -19 -8 12 -63 75 -122 141 -59 66 -105 123 -102 126 4 3 58 -40 122 -97 64 -56 119 -100 122 -96 5 4 -55 78 -215 269 -36 42 9 9 129 -95z m208 10 c-8 -14 -14 -18 -17 -10 -4 13 17 46 25 38 3 -2 -1 -15 -8 -28z m-1379 17 c0 -18 -185 -341 -201 -350 -11 -7 13 49 61 146 65 130 140 240 140 204z m1350 -83 c0 -5 -7 -17 -16 -28 -14 -17 -15 -17 -10 -1 3 10 6 23 6 28 0 5 5 9 10 9 6 0 10 -4 10 -8z m-255 -112 c70 -58 131 -106 136 -108 12 -5 11 -26 -3 -57 -13 -29 -29 -32 -44 -7 -7 10 -62 75 -123 144 -156 178 -152 182 34 28z m-75 -84 c71 -63 139 -121 151 -130 l23 -16 -52 -107 c-28 -60 -55 -124 -61 -143 -5 -19 -59 -141 -119 -270 -61 -132 -109 -248 -109 -265 -1 -31 -131 -355 -143 -355 -9 0 -180 173 -176 178 2 1 33 -11 70 -28 122 -54 142 -35 65 66 l-52 69 44 3 c24 2 47 9 51 15 11 17 10 97 -1 97 -6 0 -11 -19 -13 -42 l-3 -43 -38 3 c-35 3 -67 -10 -67 -28 0 -4 23 -37 51 -74 28 -37 48 -70 45 -73 -2 -3 -45 14 -93 37 -105 51 -97 49 -101 26 -3 -13 29 -52 104 -127 60 -60 104 -109 98 -109 -6 0 -73 29 -148 65 -152 72 -156 73 -156 44 0 -13 45 -65 125 -144 69 -68 121 -126 117 -129 -5 -3 -75 28 -155 69 -202 101 -205 83 -15 -83 48 -41 86 -78 83 -80 -5 -5 -157 72 -205 104 -19 13 -41 24 -49 24 -20 0 38 -59 116 -118 109 -82 77 -76 -86 15 -51 29 -97 53 -102 53 -20 0 -16 24 17 96 20 44 89 201 154 349 65 149 156 356 203 460 71 159 103 239 163 405 6 16 40 -52 64 -126 16 -49 27 -62 36 -40 4 10 -11 54 -40 112 -53 111 -52 141 4 98 54 -40 79 -49 45 -17 -17 16 -41 36 -54 45 -20 14 -22 21 -14 44 l9 28 65 -78 c68 -84 89 -113 70 -102 -6 4 -11 3 -11 -2 0 -12 77 -82 90 -82 22 0 5 28 -90 146 -55 68 -103 130 -106 138 -14 36 20 16 126 -75 63 -54 118 -99 123 -99 24 0 -4 52 -83 153 -50 64 -95 119 -100 122 -10 6 -14 35 -5 35 3 0 64 -51 135 -114z m-54 -42 c88 -115 87 -116 -24 -24 -56 45 -102 84 -102 85 0 1 5 17 12 35 l11 33 21 -25 c12 -14 48 -61 82 -104z m-3368 -164 c0 -9 -3 -7 -8 5 -5 11 -8 29 -8 40 0 16 2 15 8 -5 4 -14 8 -32 8 -40z m1182 40 c43 -7 42 -8 -19 -6 -45 1 -66 5 -69 15 -4 11 1 12 19 6 13 -4 44 -11 69 -15z m25 -79 c38 -7 39 -8 14 -15 -36 -10 -82 -4 -87 12 -4 14 14 15 73 3z m214 -47 c3 -3 -1 -9 -9 -14 -13 -8 -12 -10 3 -10 9 0 17 7 17 16 0 31 22 8 39 -41 10 -28 28 -69 41 -93 22 -42 22 -61 1 -47 -6 3 -11 12 -11 19 0 9 -31 11 -134 8 -129 -3 -135 -3 -146 18 -6 12 -10 24 -7 26 4 4 96 -18 127 -30 9 -4 24 0 35 8 17 12 13 14 -43 21 -67 8 -82 21 -29 28 19 2 7 5 -28 6 -68 2 -59 21 10 21 49 0 135 -28 95 -31 -14 -1 -1 -5 29 -10 54 -9 85 -3 43 8 -12 3 -22 13 -22 23 0 13 -10 21 -32 25 -18 4 -35 11 -38 15 -9 13 -163 22 -155 10 4 -7 18 -10 32 -7 15 3 22 0 20 -7 -7 -22 -75 -19 -87 3 -9 18 -8 21 7 21 14 1 13 4 -7 16 -23 14 -14 15 109 9 74 -3 137 -8 140 -11z m-86 -51 c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35 -2 23 -4z m-126 -30 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m2324 -65 c-24 -39 -28 -30 -5 13 8 17 18 28 21 25 3 -3 -4 -20 -16 -38z m-2106 -59 c120 -20 144 -29 145 -53 0 -15 -202 22 -275 50 -8 3 -15 2 -15 -4 0 -6 17 -13 38 -17 21 -3 56 -13 78 -21 38 -15 38 -15 -41 -9 -81 6 -99 16 -89 48 3 9 0 17 -6 17 -6 0 -8 5 -5 10 4 6 14 9 23 6 10 -3 76 -15 147 -27z m42 15 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m447 -115 c-30 -61 -58 -109 -60 -106 -7 7 101 217 112 217 2 0 -21 -50 -52 -111z m-511 31 c30 0 46 -4 42 -10 -7 -11 -94 -14 -119 -4 -25 9 -19 27 7 20 12 -3 44 -6 70 -6z m217 -60 c19 -25 19 -25 -6 -28 -13 -2 -49 4 -79 13 -44 12 -58 13 -74 3 -15 -9 -28 -9 -58 0 -21 6 -50 14 -65 17 -65 13 -18 21 118 21 143 -1 145 -1 164 -26z m-113 -56 c101 -21 102 -36 1 -18 -105 20 -118 23 -118 33 0 10 1 10 117 -15z m-137 6 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m274 -6 c22 -9 20 -24 -3 -24 -21 0 -34 13 -24 24 8 7 8 7 27 0z m-219 -24 c-3 -5 -17 -10 -30 -10 -13 0 -27 5 -30 10 -4 6 8 10 30 10 22 0 34 -4 30 -10z m162 -31 c92 -17 111 -24 110 -38 -1 -15 -7 -16 -41 -10 -23 5 -86 16 -141 25 -110 19 -116 21 -95 34 22 14 43 13 167 -11z m26 -69 c32 0 7 -20 -26 -21 -30 -1 -30 -2 8 -9 31 -7 43 -5 52 7 7 9 19 13 28 10 8 -4 15 -2 15 2 0 5 7 11 15 15 12 4 13 2 6 -13 -7 -12 -6 -22 1 -29 9 -9 4 -28 -22 -80 -19 -37 -38 -70 -43 -73 -5 -3 -8 -10 -7 -15 1 -5 -12 -15 -29 -22 -31 -12 -32 -11 -49 25 -9 21 -22 41 -28 45 -7 4 -15 19 -18 32 -3 14 -15 28 -26 31 -22 7 -26 25 -8 43 9 9 7 13 -5 18 -27 10 -20 24 13 24 17 0 30 5 30 11 0 8 13 10 38 5 20 -3 45 -6 55 -6z m1417 -506 c40 -17 54 -28 53 -41 -3 -27 -32 -93 -41 -93 -7 0 -148 142 -202 203 l-25 29 80 -38 c44 -20 105 -47 135 -60z m-20 -186 c8 -2 6 -15 -6 -43 -10 -22 -19 -41 -19 -42 0 -1 -48 43 -105 98 l-105 100 112 -54 c61 -30 117 -57 123 -59z m-248 -150 c42 -35 75 -64 73 -67 -3 -2 -59 28 -126 68 -67 39 -124 69 -127 66 -9 -9 56 -70 170 -162 102 -82 136 -118 86 -92 -32 17 -215 121 -260 148 -21 13 -38 19 -38 14 0 -11 77 -85 155 -148 33 -27 64 -53 70 -57 5 -5 5 -8 -1 -8 -13 0 -258 159 -262 169 -3 8 58 162 80 204 8 16 14 13 56 -28 26 -25 82 -73 124 -107z m113 82 c31 -16 63 -30 70 -30 8 0 16 -4 19 -9 8 -12 -46 -130 -59 -131 -13 0 -207 161 -201 167 2 3 39 -14 83 -36 159 -82 177 -62 43 48 -35 29 -21 26 45 -9z m-135 -121 c19 -12 61 -35 93 -51 57 -29 65 -40 48 -67 -7 -11 -29 1 -100 58 -50 40 -91 75 -91 77 0 9 16 3 50 -17z m-209 -110 c24 -22 88 -77 142 -121 53 -45 95 -83 93 -85 -2 -3 -66 34 -142 81 -76 47 -140 83 -143 80 -6 -6 108 -113 122 -114 4 0 7 -5 7 -11 0 -6 -15 -1 -32 11 -18 11 -57 35 -85 51 -29 17 -53 37 -53 44 0 15 37 105 43 105 3 0 24 -18 48 -41z m55 -2 c27 -19 88 -57 137 -86 88 -53 92 -57 81 -85 -12 -30 -28 -19 -207 136 -84 73 -88 88 -11 35z m175 -13 c95 -49 96 -50 75 -79 -13 -17 -17 -16 -72 33 -33 28 -70 60 -84 71 -39 32 -16 25 81 -25z m179 -39 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-19 -38 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z m-324 -152 c55 -44 99 -82 97 -84 -4 -4 -230 133 -268 163 -24 20 -27 26 -16 45 11 22 11 22 49 -11 20 -18 82 -69 138 -113z m8 48 c183 -113 179 -109 151 -132 -14 -12 -78 32 -221 152 -100 84 -96 83 70 -20z m87 11 c43 -25 78 -52 78 -60 0 -24 -18 -16 -97 46 -91 72 -86 76 19 14z m-194 -69 c46 -37 81 -69 79 -72 -8 -7 -197 119 -197 131 0 19 12 27 24 18 6 -5 48 -39 94 -77z m-1671 28 c-4 -3 -7 0 -7 7 0 7 3 10 7 7 3 -4 3 -10 0 -14z m1651 -88 c46 -37 81 -70 78 -72 -2 -2 -42 19 -89 49 -47 29 -93 58 -102 63 -13 8 -16 17 -10 34 6 20 9 21 23 8 10 -7 54 -44 100 -82z m-1638 70 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m1805 -77 c79 -49 98 -69 77 -82 -8 -5 -172 118 -172 129 0 10 11 4 95 -47z m-1785 37 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m1720 -221 c0 -12 -29 4 -137 75 -134 87 -138 92 -123 121 10 18 20 12 135 -87 69 -58 125 -108 125 -109z m-1710 201 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m1588 -43 c31 -21 94 -60 140 -86 78 -45 83 -51 77 -75 -8 -33 -10 -35 -28 -24 -27 16 -256 208 -256 216 -1 13 9 8 67 -31z m170 -36 c45 -28 82 -56 82 -63 0 -31 -26 -19 -105 48 -119 100 -116 101 23 15z m-1778 4 c6 -11 7 -20 2 -20 -10 0 -32 21 -32 32 0 16 19 8 30 -12z m1514 -22 c28 -23 53 -43 55 -45 2 -2 2 -6 -2 -9 -9 -9 -128 76 -122 87 9 14 14 12 69 -33z m-13 -47 c35 -26 73 -59 84 -71 l20 -23 -25 13 c-37 20 -160 113 -160 122 0 16 19 7 81 -41z m-323 -6 c-7 -8 -38 23 -38 38 0 6 10 2 22 -10 12 -13 19 -25 16 -28z m352 -67 c61 -46 110 -88 110 -94 0 -7 24 -29 53 -50 58 -43 44 -64 -15 -23 -68 47 -91 69 -72 69 10 0 -15 20 -55 45 -40 25 -84 54 -98 65 -30 23 -51 27 -33 5 15 -18 1 -19 -22 -1 -21 15 -23 37 -6 54 19 19 21 17 138 -70z m198 -8 c34 -22 62 -45 62 -51 0 -9 -17 -47 -25 -57 -4 -5 -148 102 -164 122 -25 30 8 18 72 -27 82 -58 87 -61 87 -45 0 8 -20 27 -45 42 -47 30 -74 56 -58 56 5 0 37 -18 71 -40z m-274 -25 c40 -25 83 -56 96 -70 13 -14 33 -25 46 -25 26 0 48 -24 41 -45 -4 -8 -2 -17 3 -20 6 -4 10 -1 10 4 0 6 5 11 11 11 6 0 9 -6 6 -14 -4 -11 0 -13 15 -11 11 3 18 2 14 -2 -3 -3 -1 -12 6 -20 17 -21 0 -28 -22 -8 -19 17 -20 17 -26 -23 -6 -41 -6 -41 -27 -21 -11 10 -27 19 -35 19 -8 0 -12 6 -8 15 4 10 -1 15 -15 15 -12 0 -35 12 -52 26 -23 20 -32 22 -38 12 -5 -7 -9 -11 -10 -8 0 3 -2 13 -4 23 -2 9 2 17 8 18 7 0 -6 6 -28 14 -22 7 -34 13 -27 14 6 1 12 7 12 15 0 19 21 26 43 14 10 -5 23 -8 29 -6 6 2 -24 26 -66 53 -41 28 -76 53 -76 58 0 15 25 5 94 -38z m-321 0 c20 -10 37 -22 37 -25 0 -4 47 -46 105 -94 95 -79 127 -110 93 -90 -59 34 -288 217 -288 230 0 6 -1 7 53 -21z m74 4 c85 -47 213 -152 201 -164 -5 -6 -216 139 -233 160 -5 7 -17 15 -25 18 -12 4 -12 6 2 6 10 1 34 -8 55 -20z m-160 0 c-9 -5 -21 -8 -26 -4 -5 3 -12 1 -16 -5 -3 -5 -23 -10 -43 -10 -45 0 -32 17 18 23 72 8 87 7 67 -4z m-277 -15 c0 -2 -9 -4 -21 -4 -11 0 -18 4 -14 10 5 8 35 3 35 -6z m590 11 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-450 -25 c0 -5 4 -10 10 -10 14 0 302 -232 296 -238 -3 -2 -42 22 -86 54 -151 110 -215 153 -228 154 -27 0 9 -38 107 -115 56 -42 101 -79 101 -81 0 -11 -22 0 -65 32 -33 26 -49 33 -55 25 -5 -9 -16 -5 -39 14 -17 15 -29 31 -26 35 3 5 -26 31 -64 58 -75 53 -78 61 -22 64 31 1 29 2 -14 8 l-50 7 68 1 c39 1 67 -2 67 -8z m309 -94 c153 -116 250 -180 258 -172 9 8 -16 33 -106 106 -113 92 -107 100 14 20 56 -38 128 -83 160 -101 31 -17 53 -35 48 -39 -4 -5 -59 -6 -121 -3 l-113 6 -156 131 c-86 72 -158 137 -161 144 -12 36 54 2 177 -92z m-634 84 c-7 -12 -135 -11 -135 1 0 5 32 9 71 9 42 0 68 -4 64 -10z m456 -16 c13 -14 72 -67 132 -117 168 -142 138 -129 -80 35 -73 55 -133 101 -133 104 0 16 60 0 81 -22z m346 19 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m-996 -13 c29 0 46 -10 94 -53 33 -31 55 -59 51 -65 -4 -6 18 -28 53 -51 36 -25 61 -36 63 -29 3 7 10 8 17 4 7 -5 10 -15 6 -23 -4 -13 -3 -14 9 -4 11 9 16 9 22 0 4 -7 2 -15 -5 -17 -9 -3 -9 -7 1 -20 24 -29 -9 -9 -138 83 -69 49 -121 91 -114 93 7 3 25 -6 42 -18 16 -12 32 -20 34 -17 13 12 -131 90 -154 83 -19 -6 -30 0 -52 28 -14 18 -13 19 10 13 14 -4 41 -7 61 -7z m1016 -7 c-4 -3 -7 0 -7 7 0 7 3 10 7 7 3 -4 3 -10 0 -14z m-1098 -27 c8 -9 17 -13 22 -10 13 7 39 -9 157 -98 59 -44 129 -94 156 -111 47 -31 48 -32 22 -35 -28 -4 -86 36 -260 176 -43 35 -76 57 -73 48 6 -15 4 -15 -23 -1 -26 13 -50 42 -50 60 0 9 35 -12 49 -29z m390 17 c14 -9 21 -11 16 -4 -6 10 -2 11 15 6 15 -5 20 -4 16 4 -4 6 -1 11 8 11 19 0 33 -23 18 -28 -7 -2 5 -16 26 -30 155 -108 272 -196 272 -203 0 -14 -26 -10 -40 6 -15 18 -34 20 -24 3 11 -18 -20 -3 -70 34 -25 18 -48 39 -51 47 -5 12 -3 12 12 0 10 -7 14 -8 8 -2 -25 28 -177 133 -172 119 5 -13 -1 -12 -33 6 -22 13 -40 29 -40 36 0 16 11 15 39 -5z m511 12 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m170 0 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-785 -76 c39 -40 63 -68 55 -63 -13 7 -169 120 -179 130 -2 2 9 4 25 4 23 0 44 -15 99 -71z m73 15 c58 -58 53 -57 -50 10 -52 34 -59 46 -27 46 12 0 45 -24 77 -56z m752 41 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m320 -29 c7 -9 8 -16 3 -16 -14 0 -53 30 -53 41 0 12 32 -4 50 -25z m-340 9 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-682 -27 c17 -16 26 -19 29 -10 3 6 9 9 15 6 7 -4 6 -9 -1 -13 -6 -4 36 -40 99 -85 110 -78 127 -93 117 -103 -8 -7 -225 148 -266 191 -38 39 -32 50 7 14z m59 -107 c123 -86 138 -101 106 -101 -26 0 -283 197 -283 216 0 8 29 -11 177 -115z m318 15 c106 -77 128 -96 120 -104 -7 -7 -149 98 -220 163 -56 51 -28 35 100 -59z m-467 2 c20 -10 31 -28 17 -28 -12 0 -85 54 -85 63 0 5 10 2 23 -7 12 -9 32 -21 45 -28z m52 7 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m890 -10 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m124 -13 c2 -4 0 -14 -5 -22 -8 -13 -10 -13 -18 0 -10 15 -6 30 9 30 5 0 11 -4 14 -8z m-977 -9 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m33 -23 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m346 -21 c25 -17 43 -33 40 -36 -6 -7 -96 49 -96 60 0 12 10 8 56 -24z m39 1 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m165 5 c0 -3 -2 -5 -5 -5 -3 0 -5 2 -5 5 0 3 2 5 5 5 3 0 5 -2 5 -5z m-19 -22 c13 -15 12 -15 -8 -4 -24 12 -29 21 -14 21 5 0 15 -7 22 -17z m-491 -8 c7 -9 10 -18 7 -22 -8 -7 -37 15 -37 28 0 14 16 11 30 -6z M4730 3985 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z M4760 3935 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z M1950 3110 c0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -14 43 -13 58 2 15 15 16 28 2 28 -5 0 -10 -4 -10 -10z M1764 3069 c-3 -6 -2 -14 2 -18 10 -9 105 -38 144 -44 14 -2 -3 -5 -37 -6 -34 0 -65 -5 -68 -11 -4 -6 34 -10 105 -10 163 0 142 21 -59 61 -52 10 -60 14 -43 20 12 5 22 11 22 14 0 10 -59 5 -66 -6z M2193 2493 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z M2198 2313 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z M2310 2115 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z M3230 465 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z M2503 553 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z M2570 410 c14 -11 30 -20 35 -20 6 0 -1 9 -15 20 -14 11 -29 20 -35 20 -5 0 1 -9 15 -20z M2540 355 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z M2560 345 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z M2580 325 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z M2600 315 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo;