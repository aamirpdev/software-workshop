import React from 'react';

const Artboard = ({ width, height, color, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 43 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.44518 0.903198C8.15896 0.903198 7.874 0.912063 7.58778 0.932327C7.25597 0.95639 6.92669 0.986785 6.59741 1.01971L6.15161 1.06151C5.68808 1.1033 5.22456 1.13623 4.7585 1.16536L4.37856 1.18689C4.04675 1.20588 3.71367 1.22361 3.38439 1.26287C3.09419 1.30823 2.80971 1.38465 2.53586 1.49084C2.3219 1.59346 2.1176 1.71511 1.92542 1.85431C1.8242 1.94583 1.73099 2.04582 1.6468 2.1532C1.5482 2.29686 1.46339 2.44951 1.3935 2.60913C1.28325 2.92138 1.20642 3.24445 1.16427 3.5729C1.10475 4.07062 1.06676 4.60127 1.05029 5.14965C1.59234 5.13319 2.12299 5.12939 2.57005 5.12939H2.86387C3.31093 5.12939 3.75673 5.12939 4.20379 5.13952H6.03256C6.71899 5.13952 7.33195 5.13066 7.9044 5.11166L8.72 5.08126L9.53813 5.06607C9.90288 5.05087 10.2702 5.04454 10.6349 5.0382H10.9464C11.377 5.0268 11.8102 5.01414 12.2408 5.00021C12.8271 4.98121 13.4173 4.96348 14.0062 4.95462H14.5913C15.1422 4.95462 15.6957 4.96601 16.2466 4.97741L17.0787 4.99388C17.5004 4.99388 17.9209 5.00274 18.3451 5.00401H18.5351C19.0417 5.00401 19.5483 5.00401 20.0612 5.02554L20.5779 5.0382C21.4302 5.05973 22.275 5.08126 23.1222 5.08506H23.7719C25.545 5.08506 27.3788 5.09646 29.181 5.15598L29.4634 5.16358C29.856 5.17625 30.2486 5.18891 30.6412 5.19651H30.9414C31.3428 5.20411 31.7443 5.21044 32.1458 5.22691C32.5473 5.24337 32.9335 5.2611 33.3274 5.2801L33.6237 5.2953C34.1544 5.32189 34.685 5.34975 35.2157 5.37002L35.4867 5.37762L35.7869 5.38648C36.0972 5.38648 36.4062 5.40041 36.7152 5.41941L37.7284 5.47133L38.2349 5.50046C38.7187 5.52706 39.2038 5.54985 39.6876 5.55745H40.6032C40.8059 5.55745 41.0085 5.55112 41.2111 5.53846C41.2879 5.53462 41.3642 5.55356 41.4302 5.59291C41.4543 5.32062 41.4619 5.05847 41.4657 4.79504V4.73172C41.4769 4.28612 41.4596 3.84025 41.4138 3.39687C41.3617 3.03938 41.2695 2.68889 41.1389 2.35203C41.0799 2.22654 41.0104 2.10622 40.9312 1.99236C40.8793 1.93453 40.8235 1.88036 40.7641 1.83025C40.6876 1.78357 40.6085 1.74128 40.5272 1.7036C40.3294 1.63304 40.1249 1.58296 39.9168 1.55416L39.6521 1.5301C39.5103 1.51743 39.3697 1.50477 39.2278 1.48704L38.9644 1.44524L38.6567 1.39332C38.5465 1.38066 38.435 1.37052 38.3261 1.36039C37.489 1.28694 36.5632 1.23375 35.4133 1.20335C34.9067 1.19069 34.4077 1.17422 33.9062 1.15776C33.5946 1.14889 33.2818 1.12483 32.9728 1.0995L32.5321 1.06657C32.2674 1.04884 32.0014 1.03238 31.7367 1.02351H31.0288L30.683 1.03238C30.3246 1.04251 29.9725 1.05137 29.6205 1.05137H28.7656C28.5364 1.05137 28.3084 1.05137 28.0779 1.04504H27.7448C27.375 1.04504 27.0056 1.03744 26.6367 1.02225L26.3707 1.01338C26.2073 1.00578 26.0579 0.998183 25.9072 0.994384H24.1012C23.9568 0.994384 23.8137 0.994384 23.6706 1.00198C23.2147 1.02225 22.7651 1.04124 22.3142 1.04124H19.813C19.1329 1.04124 18.4097 1.04124 17.7094 1.06531L17.2813 1.08177C16.7962 1.09823 16.3175 1.1147 15.8401 1.1147C15.4601 1.1147 15.1296 1.10457 14.8358 1.08304C14.357 1.05011 13.8796 1.02351 13.4008 0.999449L13.1944 0.990584C12.7828 0.967788 12.3687 0.948791 11.9558 0.942459H11.5505C11.1972 0.942459 10.8439 0.942459 10.4905 0.95259H10.1828C9.80283 0.95259 9.42289 0.939926 9.05055 0.925995C8.84538 0.918396 8.64274 0.91333 8.44011 0.91333L8.44518 0.903198ZM13.1856 4.32898C12.8872 4.32407 12.5961 4.23638 12.3446 4.07569C12.1936 3.95769 12.0686 3.80981 11.9773 3.64129C11.8932 3.4804 11.8551 3.29941 11.8672 3.11824C11.8748 2.88015 12.0077 2.67498 12.1369 2.47868L12.1863 2.40396C12.2168 2.35828 12.2575 2.32033 12.3052 2.29307C12.3529 2.26582 12.4063 2.25002 12.4611 2.24692C12.4897 2.20866 12.5238 2.17494 12.5625 2.14687C12.912 1.89991 13.2286 1.77959 13.53 1.77959H13.6377C13.8508 1.80551 14.0523 1.89112 14.219 2.02655C14.335 2.11465 14.4367 2.22017 14.5204 2.33937C14.6361 2.49462 14.7134 2.67498 14.7462 2.86578C14.779 3.05659 14.7663 3.25244 14.7091 3.43739C14.6552 3.58917 14.5714 3.72858 14.4626 3.84736C14.3538 3.96614 14.2223 4.06187 14.0759 4.12888C13.883 4.21748 13.6782 4.27723 13.468 4.30619C13.3757 4.3197 13.2826 4.32689 13.1894 4.32772L13.1856 4.32898ZM5.54244 4.46576C5.48484 4.46575 5.4273 4.46194 5.3702 4.45436C5.23149 4.44072 5.09614 4.40346 4.97 4.34418C4.88413 4.30381 4.8037 4.25275 4.73064 4.1922C4.66832 4.14279 4.61332 4.08481 4.56726 4.01997C4.49463 3.91116 4.44467 3.78883 4.42035 3.66029C4.40769 3.57647 4.40514 3.49143 4.41275 3.407C4.42927 3.27231 4.45723 3.13927 4.49634 3.00933C4.5152 2.88267 4.5785 2.76685 4.67491 2.68258C4.69234 2.66841 4.71149 2.6565 4.7319 2.64712C4.75379 2.58819 4.78407 2.53274 4.82182 2.48248C4.94209 2.35261 5.07875 2.23894 5.22836 2.14433C5.38306 2.04948 5.5554 1.98701 5.73494 1.9607C5.7878 1.95312 5.84112 1.94931 5.89452 1.9493C6.18472 1.94816 6.46583 2.05054 6.68732 2.23805C6.82035 2.36414 6.92204 2.5196 6.98428 2.692C7.04651 2.8644 7.06755 3.04897 7.04573 3.23096C7.01619 3.51773 6.89494 3.78732 6.69999 3.9997C6.47286 4.24128 6.16981 4.39773 5.84133 4.44297C5.74245 4.45858 5.64254 4.46662 5.54244 4.46703V4.46576ZM9.24052 4.53922C9.04472 4.53893 8.85112 4.49804 8.67194 4.41913C8.49275 4.34021 8.33188 4.225 8.19948 4.08076C8.10161 3.97986 8.03025 3.85629 7.99178 3.72108C7.95368 3.60244 7.94627 3.47608 7.97025 3.35381C7.99295 3.26776 8.02087 3.18317 8.05384 3.10051C8.1346 2.94741 8.23744 2.80702 8.35906 2.68385L8.40338 2.63445C8.47165 2.5531 8.56699 2.49914 8.67187 2.48248C8.9353 2.29631 9.25065 2.10254 9.61666 2.10254C9.75134 2.0976 9.88577 2.11778 10.0131 2.16206C10.0979 2.19383 10.1784 2.2364 10.2524 2.28871C10.4231 2.41736 10.5564 2.58916 10.6387 2.78643C10.7272 2.98499 10.7566 3.20482 10.7235 3.41966C10.6956 3.5978 10.63 3.76792 10.531 3.91865C10.4543 4.0342 10.3578 4.13537 10.2461 4.21753C10.1247 4.30615 9.99233 4.37853 9.85222 4.43283C9.65592 4.50353 9.44915 4.54078 9.24052 4.54302V4.53922Z"
      fill="#0A3159"
    />
    <path
      d="M42.2855 3.20289C42.2221 2.69918 42.0753 2.20955 41.8511 1.75405C41.7102 1.47769 41.5026 1.24087 41.247 1.0651C41.0548 0.9423 40.8469 0.846023 40.629 0.778875C40.4748 0.731742 40.3167 0.698263 40.1566 0.678825C40.1097 0.671226 40.0629 0.663627 40.0147 0.658561C39.8235 0.637031 39.6348 0.6231 39.4398 0.602837C39.2004 0.568642 38.9623 0.51925 38.7217 0.492655C38.4811 0.466059 38.2417 0.443262 38.0011 0.422999C37.5236 0.381206 37.0436 0.353343 36.5636 0.335613C36.0836 0.317882 35.5745 0.288754 35.0806 0.277356C34.5867 0.265957 34.1156 0.248227 33.633 0.231763C33.1505 0.215299 32.6769 0.162107 32.2007 0.132979C31.6941 0.10385 31.1989 0.116515 30.6948 0.132979C29.7247 0.158308 28.7546 0.158308 27.782 0.14311C27.288 0.126646 26.7979 0.126646 26.3091 0.107649C25.8202 0.0886525 25.3149 0.0949848 24.8222 0.087386C24.3296 0.0797872 23.8357 0.0785208 23.343 0.102584C22.8504 0.126646 22.3425 0.12538 21.841 0.122847H18.8851C18.3987 0.122847 17.9111 0.136778 17.4223 0.151976C16.9334 0.167173 16.4699 0.193769 15.9937 0.188703C15.0451 0.179838 14.094 0.107649 13.1518 0.0620567C12.6642 0.0455927 12.1804 0.0278622 11.6953 0.0253293C11.2103 0.0227964 10.7126 0.0379939 10.2199 0.0443262C9.72726 0.0506586 9.24473 0.0240628 8.75588 0H8.4494C8.06059 0 7.67305 0.0253293 7.28552 0.0582573C6.81692 0.0962513 6.35213 0.148176 5.88354 0.184904C5.41495 0.221631 4.93622 0.259625 4.4613 0.29002C3.96052 0.303942 3.46145 0.354738 2.96814 0.441996C2.47016 0.544648 1.99696 0.74339 1.57503 1.0271C1.37463 1.16339 1.19395 1.32661 1.03805 1.51216C0.864417 1.72081 0.721546 1.95324 0.613783 2.20238C0.512395 2.43918 0.433937 2.68516 0.379487 2.93693C0.328828 3.18389 0.298433 3.43592 0.265505 3.68541C0.151802 4.60273 0.109459 5.52749 0.138859 6.45137C0.15279 6.95795 0.176853 7.46454 0.181919 7.97112C0.186985 8.47771 0.181919 8.9843 0.173053 9.49088C0.156589 10.4939 0.126194 11.4957 0.102131 12.5013C0.0780686 13.5068 0.0793351 14.5149 0.0502064 15.5218C0.0210777 16.5286 -0.0118503 17.5101 0.00334725 18.5043C0.010946 18.9957 0.0375418 19.4845 0.0540058 19.9747C0.0704698 20.4648 0.0742692 20.9562 0.0704698 21.4476C0.0666704 21.939 0.0451406 22.4468 0.0286765 22.9471C0.0122125 23.4473 0.00714664 23.9362 0.010946 24.4288C0.0181349 24.9272 0.0519555 25.4247 0.112263 25.9195C0.16516 26.4171 0.254474 26.9103 0.379487 27.3949V27.3949C0.461611 27.7054 0.562264 28.0108 0.680905 28.3093C0.769862 28.5511 0.90347 28.7741 1.07478 28.9666C1.23607 29.1215 1.41653 29.2551 1.61176 29.3642V29.3642C1.6572 29.391 1.70762 29.4082 1.75993 29.4149H1.79539C1.83799 29.4164 1.88059 29.4121 1.92204 29.4022C1.94613 29.3983 1.96985 29.3923 1.99296 29.3845C2.47548 29.4428 2.95548 29.4934 3.44433 29.5111C3.93319 29.5289 4.38531 29.5301 4.85644 29.539C5.84048 29.5605 6.82832 29.539 7.81363 29.5314C8.79894 29.5238 9.78298 29.5225 10.767 29.5403C11.7511 29.558 12.7123 29.5517 13.6799 29.5947C14.1586 29.6175 14.6348 29.6479 15.1123 29.6606C15.5897 29.6733 16.1014 29.6809 16.5953 29.6771C17.0892 29.6733 17.5667 29.6695 18.0517 29.6771C18.5583 29.691 19.0649 29.7163 19.5715 29.7315C20.5429 29.7568 21.5155 29.7581 22.4843 29.7948C23.0011 29.8151 23.5169 29.8396 24.032 29.8683C24.5094 29.8936 24.9856 29.9063 25.4631 29.9189C26.456 29.9468 27.4464 30.0063 28.4393 29.9734C28.9269 29.9595 29.4132 29.9278 29.8982 29.9113C30.3833 29.8949 30.8696 29.8924 31.3547 29.9012C32.3235 29.9215 33.2924 29.9405 34.2587 29.9189L35.667 29.8886C36.1292 29.8772 36.589 29.8772 37.0499 29.8759C38.072 29.8759 39.1396 29.8442 40.1009 29.4618C40.2069 29.4275 40.2969 29.356 40.3542 29.2604C40.3648 29.236 40.3729 29.2105 40.3782 29.1844C40.4884 29.1388 40.5973 29.0919 40.7037 29.0388C40.8763 28.9558 41.0366 28.8492 41.1799 28.7221C41.2857 28.6184 41.3745 28.4988 41.4433 28.3675C41.5163 28.2298 41.5753 28.0852 41.6194 27.9357C41.6606 27.8193 41.6945 27.7004 41.7207 27.5798C41.7726 27.3113 41.8157 27.0415 41.8473 26.7692C41.9613 25.8029 42.0411 24.8303 42.1196 23.8564C42.1614 23.3498 42.1931 22.8293 42.2095 22.3151C42.226 21.8389 42.2095 21.3614 42.2159 20.8853C42.2159 19.8886 42.1969 18.8944 42.2159 17.8977C42.2349 16.901 42.2374 15.8992 42.2159 14.9012C42.1943 13.9032 42.1918 12.9141 42.2159 11.92C42.2361 10.9511 42.2399 9.981 42.2653 9.00709C42.2906 8.03318 42.2956 7.06814 42.3349 6.09422C42.3526 5.6345 42.3729 5.17477 42.3742 4.71505C42.383 4.20947 42.3534 3.70396 42.2855 3.20289V3.20289ZM1.09504 5.14184H1.06338C1.07984 4.61499 1.10897 4.08941 1.17356 3.5651C1.2136 3.23704 1.28918 2.9143 1.39899 2.60258C1.46773 2.44565 1.55038 2.29518 1.64595 2.15299C1.732 2.04795 1.82691 1.95049 1.92964 1.8617C2.11915 1.72251 2.32092 1.60085 2.53248 1.49823C2.80827 1.39047 3.09488 1.31276 3.38734 1.26646C3.84327 1.21454 4.30173 1.19934 4.75892 1.17021C5.21611 1.14108 5.6885 1.10816 6.15203 1.06636C6.61556 1.02457 7.10821 0.968845 7.5882 0.939716C8.07599 0.908054 8.56515 0.902981 9.0535 0.924519C9.53222 0.943516 10.0122 0.957447 10.4897 0.948582C10.9671 0.939716 11.4699 0.93465 11.96 0.939716C12.4502 0.944782 12.9238 0.972644 13.4051 0.996707C13.8863 1.02077 14.3612 1.04737 14.8387 1.08029C15.7962 1.14362 16.7549 1.09296 17.7136 1.0613C18.6951 1.02837 19.6766 1.0423 20.6594 1.03597C21.1736 1.03597 21.6865 1.02837 22.2007 1.03597C22.6933 1.03597 23.1834 1.0195 23.6748 0.997974C24.1662 0.976444 24.631 0.997974 25.1072 0.997974H25.9051C26.1482 0.997974 26.3914 1.01824 26.6333 1.0271C27.1133 1.04483 27.5945 1.04483 28.0745 1.05117C28.5545 1.0575 29.051 1.05117 29.5398 1.06003C30.0287 1.0689 30.5289 1.04483 31.0254 1.0347C31.2597 1.0347 31.4978 1.02204 31.7346 1.0347C31.9993 1.04483 32.2652 1.0613 32.5299 1.07903C32.9884 1.10942 33.4443 1.15502 33.9041 1.17021C34.4106 1.18668 34.9084 1.20314 35.4111 1.21581C36.3825 1.24367 37.3552 1.28673 38.324 1.37285L38.6558 1.40578C38.8471 1.43364 39.0358 1.47163 39.227 1.49823C39.4575 1.52862 39.6867 1.54255 39.916 1.56535C40.1229 1.59551 40.3265 1.64555 40.5239 1.71479C40.6043 1.75172 40.6822 1.79403 40.7569 1.84144C40.8163 1.89068 40.8721 1.944 40.9241 2.00101C41.0032 2.11444 41.0727 2.23434 41.1318 2.35942C41.2609 2.69569 41.3522 3.04527 41.4041 3.40172C41.4522 3.86698 41.4699 4.33487 41.4572 4.80243C41.4572 5.06712 41.4408 5.33181 41.4319 5.5965C41.3663 5.55447 41.2895 5.53328 41.2116 5.53571C40.705 5.56991 40.1984 5.54711 39.6918 5.53571C39.2093 5.52812 38.723 5.50405 38.2404 5.47872L36.7207 5.3964C36.2217 5.36981 35.7214 5.36601 35.2212 5.34701C34.1979 5.30902 33.1746 5.24569 32.1513 5.20517C31.6447 5.1849 31.147 5.17984 30.6454 5.17097C30.1439 5.16211 29.6715 5.14564 29.1865 5.13045C27.1601 5.06586 25.1338 5.06586 23.1214 5.06586C22.0993 5.06586 21.0811 5.0304 20.0603 5.00507C19.0662 4.97974 18.0707 4.9886 17.0765 4.97214C16.247 4.95947 15.4187 4.93541 14.5917 4.93541H14.0054C12.9833 4.95187 11.9651 4.9962 10.9456 5.02026C10.4745 5.02913 10.0059 5.03419 9.53729 5.05319C8.99271 5.07092 8.4494 5.09498 7.90608 5.11272C6.92204 5.14564 5.93673 5.14564 4.95395 5.13425C4.25867 5.13425 3.56084 5.11905 2.86556 5.11651C2.43369 5.11651 2.00436 5.11651 1.57376 5.13425C1.41672 5.13425 1.25715 5.13678 1.09504 5.14184ZM36.8688 29.002H36.038C35.0895 29.016 34.1383 29.0527 33.1923 29.0438C32.6996 29.0438 32.2057 29.035 31.7131 29.0248C31.2204 29.0147 30.7303 29.0033 30.2389 29.0147C29.7475 29.0261 29.2739 29.0514 28.7926 29.0729C28.3114 29.0945 27.8073 29.1021 27.3146 29.0932C26.822 29.0843 26.3534 29.0603 25.8709 29.0451C25.3643 29.0286 24.8678 29.0223 24.3663 29.0033C23.8648 28.9843 23.3975 28.9526 22.9137 28.9336C22.3919 28.9146 21.8726 28.8956 21.3521 28.8868C20.8683 28.8779 20.3833 28.8716 19.9008 28.8652C19.4182 28.8589 18.9332 28.8336 18.4481 28.8171C17.9631 28.8007 17.4426 28.7918 16.9398 28.7943C16.4648 28.7943 15.9887 28.8032 15.515 28.7943C14.536 28.769 13.5608 28.6955 12.5806 28.6816C12.0841 28.674 11.5877 28.6816 11.0925 28.6702C10.6252 28.6613 10.1579 28.6499 9.69053 28.6499C8.69678 28.6499 7.70218 28.6525 6.70674 28.6575C6.21789 28.6575 5.72776 28.6702 5.24144 28.6689C4.75512 28.6677 4.27386 28.6563 3.79134 28.6499C3.50259 28.6499 3.21383 28.6398 2.92761 28.6208C2.71358 28.6082 2.50081 28.5841 2.28805 28.5575C2.2578 28.5129 2.21959 28.4743 2.17533 28.4435C2.14661 28.4206 2.11401 28.403 2.07908 28.3916C2.03639 28.3742 1.9909 28.3648 1.94484 28.3637C1.91123 28.3666 1.87807 28.3734 1.84605 28.384C1.80147 28.3483 1.75917 28.3098 1.71941 28.2687C1.68942 28.2197 1.66236 28.169 1.63835 28.1168C1.62315 28.0876 1.60542 28.061 1.59276 28.0319C1.45621 27.6829 1.34697 27.3239 1.26601 26.958C1.21155 26.7237 1.16469 26.4868 1.1267 26.25C1.09757 26.041 1.07224 25.8308 1.05071 25.6168C1.04185 25.5319 1.03678 25.4483 1.03045 25.3635C1.01778 25.2204 1.00385 25.0773 0.997521 24.9341C0.975992 24.4364 0.972192 23.9374 0.982324 23.4385C0.992456 22.9395 1.02158 22.4468 1.03045 21.9504C1.03931 21.4539 1.04185 20.9663 1.03045 20.4762C1.01905 19.9861 0.992456 19.4871 0.975992 18.9944C0.959528 18.5018 0.954462 17.9813 0.959528 17.4747C0.970926 16.4526 1.00892 15.4306 1.02538 14.4098C1.04058 13.4169 1.04185 12.4227 1.05831 11.4298C1.07478 10.4369 1.11784 9.46935 1.11024 8.48531C1.11024 8.04965 1.11024 7.61272 1.08491 7.17832C1.06844 6.79838 1.05578 6.41844 1.05071 6.0385H1.06338C1.95877 5.99291 2.85669 6.00051 3.75461 6.01317H3.79894C4.79565 6.02964 5.79109 6.04483 6.78779 6.03597C7.33491 6.03597 7.88075 6.02584 8.42533 6.00557C8.90026 5.99037 9.37391 5.96758 9.84757 5.95745C10.8607 5.93592 11.865 5.91819 12.8732 5.89032C13.8813 5.86246 14.921 5.85993 15.9456 5.88146C16.4598 5.89159 16.9765 5.90552 17.4907 5.91185C17.9707 5.91945 18.4507 5.91185 18.9307 5.92325C19.9438 5.93465 20.9633 5.98658 21.979 5.99671C22.9947 6.00684 23.9914 6.00304 24.997 6.01064C26.0241 6.01824 27.0487 6.02204 28.0745 6.04483C29.0649 6.07143 30.0553 6.10689 31.0469 6.12715C32.0677 6.14742 33.0859 6.20061 34.108 6.2538C34.6145 6.27786 35.1211 6.30319 35.6277 6.31839C36.1128 6.33105 36.5978 6.34119 37.0829 6.36905C37.7693 6.40578 38.4545 6.4463 39.1422 6.4691C39.4638 6.4805 39.7855 6.47796 40.1072 6.48176C40.476 6.4917 40.8451 6.48198 41.2128 6.45263C41.2787 6.44682 41.3433 6.43058 41.4041 6.40451V6.49063C41.3775 7.30243 41.3661 8.11423 41.3496 8.92477V9.08181C41.3281 10.0798 41.3243 11.0752 41.304 12.0719C41.2837 13.0686 41.2964 14.0603 41.3167 15.0557C41.3369 16.0512 41.3255 17.0377 41.3167 18.0281C41.3103 18.5081 41.3167 18.9894 41.323 19.4694C41.3293 19.9493 41.323 20.4521 41.323 20.9435C41.323 21.4349 41.3331 21.9288 41.3167 22.4189C41.3002 22.9091 41.2685 23.4321 41.2293 23.9387C41.2204 24.0514 41.2103 24.1641 41.2014 24.2756C41.133 25.1228 41.0608 25.9701 40.9659 26.8148C40.9557 26.8908 40.9405 26.9656 40.9279 27.0415C40.8886 27.3207 40.8228 27.5955 40.7316 27.8622C40.6985 27.937 40.6596 28.009 40.615 28.0775C40.5849 28.1119 40.5528 28.1444 40.5188 28.175C40.4781 28.202 40.4358 28.2265 40.3921 28.2485C40.2997 28.2991 40.2047 28.3473 40.1085 28.3916L39.9274 28.4625C39.769 28.5258 39.612 28.5892 39.4524 28.6512C39.4016 28.6702 39.3535 28.6957 39.3093 28.7272C39.2732 28.7553 39.2423 28.7896 39.2181 28.8285C39.2181 28.8361 39.2067 28.8387 39.2017 28.8463C39.0522 28.8792 38.9015 28.9108 38.7495 28.9349C38.1247 28.9978 37.4965 29.0202 36.8688 29.002V29.002ZM4.55882 4.02356C4.60563 4.08892 4.661 4.1477 4.72346 4.19833C4.90834 4.34787 5.13279 4.44029 5.36936 4.46429C5.52669 4.48098 5.68554 4.47672 5.84175 4.45162C6.17454 4.40706 6.48181 4.24918 6.71181 4.00456C6.90792 3.79017 7.03 3.51848 7.06008 3.22948C7.0818 3.04633 7.06049 2.86063 6.99783 2.68716C6.93517 2.51369 6.83289 2.35724 6.69914 2.23024C6.47528 2.04139 6.19162 1.93816 5.89874 1.93896C5.84537 1.93854 5.79205 1.94193 5.73916 1.94909C5.55931 1.97569 5.38686 2.03906 5.23258 2.13526C5.07778 2.22895 4.93635 2.34312 4.81211 2.47467C4.79687 2.49754 4.78454 2.52221 4.77538 2.54813C4.77538 2.55572 4.76652 2.56586 4.76145 2.57472C4.74999 2.59321 4.74024 2.61271 4.73232 2.63298C4.70896 2.64405 4.68688 2.65764 4.66647 2.67351C4.5795 2.74181 4.5205 2.83955 4.50056 2.94833C4.45424 3.09724 4.42035 3.24974 4.39924 3.40426C4.39416 3.48874 4.3967 3.57352 4.40684 3.65755C4.43232 3.78854 4.48402 3.91304 4.55882 4.02356V4.02356ZM5.30603 3.5613L5.2959 3.5537L5.25411 3.52204V3.50937C5.2667 3.39347 5.28829 3.27871 5.3187 3.16616C5.35652 3.15337 5.39141 3.13313 5.42128 3.10664H5.42888C5.51251 3.02808 5.60276 2.9569 5.69864 2.89387L5.79869 2.85461C5.83432 2.84852 5.87026 2.84429 5.90634 2.84195C5.94206 2.84557 5.97757 2.85107 6.01272 2.85841C6.02412 2.85841 6.03425 2.86854 6.04565 2.87361L6.08364 2.89007L6.09504 2.89894L6.10517 2.90653L6.1267 2.9344C6.14063 2.96479 6.15203 2.99392 6.16343 3.02432C6.17483 3.05471 6.16343 3.06104 6.16343 3.07877V3.1383C6.16343 3.16996 6.15456 3.20162 6.14823 3.23202C6.1419 3.26241 6.13557 3.26114 6.12923 3.27634C6.1229 3.29154 6.10897 3.327 6.09757 3.35233C6.08617 3.37766 6.04818 3.41819 6.02158 3.44858C5.99499 3.47898 5.97599 3.48151 5.95319 3.49797L5.92787 3.5157C5.86809 3.54464 5.8063 3.56919 5.74296 3.58916C5.66209 3.60204 5.58041 3.60923 5.49853 3.61069C5.46578 3.608 5.43322 3.60335 5.40102 3.59676H5.36302L5.30603 3.5613ZM12.3374 4.08815C12.5087 4.20339 12.7033 4.2795 12.9073 4.31104C13.0913 4.34271 13.2794 4.34271 13.4633 4.31104C13.675 4.28219 13.8811 4.22201 14.075 4.13247C14.2231 4.06507 14.3562 3.96871 14.4665 3.84909C14.5767 3.72946 14.662 3.58898 14.7171 3.43592C14.7285 3.39032 14.7374 3.34473 14.745 3.29787C14.7435 3.28173 14.7465 3.26549 14.7539 3.25101C14.8004 2.92633 14.7191 2.59627 14.5272 2.33029C14.4424 2.21409 14.3403 2.11158 14.2245 2.02634C14.0548 1.89314 13.8512 1.81021 13.6368 1.78698H13.5279C13.1741 1.80594 12.8349 1.93378 12.5565 2.15299C12.5196 2.1798 12.4871 2.21228 12.4603 2.24924C12.4046 2.25305 12.3504 2.2691 12.3015 2.29624C12.2527 2.32338 12.2105 2.36096 12.1779 2.40628C12.0348 2.62411 11.865 2.85208 11.8562 3.12437C11.8449 3.30698 11.8839 3.48919 11.9689 3.65122C12.059 3.82158 12.1847 3.97059 12.3374 4.08815V4.08815ZM13.5342 2.69504L13.5862 2.70263L13.6254 2.72036C13.6658 2.74825 13.7043 2.77871 13.7407 2.81155C13.7584 2.83181 13.7723 2.85334 13.7875 2.87361C13.8027 2.89387 13.8205 2.91413 13.8344 2.93693C13.8525 2.97399 13.8673 3.01255 13.8787 3.05218V3.13576C13.8709 3.15648 13.8621 3.17677 13.8521 3.19656V3.20922C13.8369 3.22948 13.823 3.24975 13.8065 3.27001L13.7609 3.3042C13.7508 3.31054 13.7419 3.3194 13.7305 3.32573L13.7103 3.33333C13.6346 3.3675 13.5568 3.39669 13.4773 3.42072C13.3785 3.44224 13.2781 3.45496 13.1771 3.45871C13.1058 3.45342 13.0351 3.4424 12.9656 3.42579C12.9304 3.41449 12.8961 3.40052 12.863 3.38399V3.38399C12.8478 3.37133 12.8326 3.35866 12.8187 3.34473C12.7971 3.32084 12.7772 3.29545 12.7592 3.26874C12.7516 3.25355 12.7465 3.23835 12.7389 3.22188V3.19149C12.7516 3.15891 12.7664 3.12718 12.7832 3.0965C12.806 3.05978 12.8288 3.02305 12.8529 2.98632L12.8668 2.96606C12.9252 2.96002 12.9821 2.94418 13.0353 2.9192C13.0628 2.90816 13.0895 2.89504 13.115 2.87994C13.1581 2.85081 13.1986 2.82295 13.2417 2.79635C13.3102 2.76191 13.3813 2.73311 13.4545 2.71023C13.4722 2.70899 13.4899 2.70899 13.5077 2.71023L13.5342 2.69504ZM8.19104 4.08815C8.2998 4.20827 8.4283 4.30893 8.57098 4.38576C8.69802 4.45294 8.83475 4.49994 8.97624 4.52508C9.27423 4.57347 9.57967 4.5438 9.86277 4.43896C10.0035 4.38624 10.1364 4.31467 10.2579 4.22619C10.3664 4.1422 10.4601 4.04077 10.5353 3.92604C10.6351 3.77274 10.7016 3.60013 10.7303 3.41945C10.7591 3.20468 10.7305 2.98612 10.6476 2.78594C10.5646 2.58576 10.4302 2.41108 10.2579 2.27964C10.1831 2.22632 10.1013 2.1837 10.0147 2.15299C9.8866 2.10841 9.75144 2.08738 9.61581 2.09093C9.2764 2.09093 8.97371 2.25431 8.70269 2.44301L8.66976 2.4696C8.56235 2.4858 8.46459 2.54076 8.39494 2.62411C8.2553 2.76432 8.13709 2.92435 8.04413 3.09904C8.01003 3.18128 7.98209 3.26595 7.96054 3.35233C7.93544 3.47599 7.94154 3.60395 7.97827 3.72467C8.01694 3.86166 8.09021 3.9864 8.19104 4.08688V4.08815ZM9.80958 3.07497L9.79185 3.05724L9.81211 3.07751L9.80958 3.07497ZM9.65 2.98252C9.66765 2.9814 9.68534 2.98399 9.70193 2.99012L9.72472 3.00152C9.73831 3.0094 9.75069 3.01921 9.76145 3.03065C9.77675 3.0474 9.79033 3.06564 9.80198 3.08511C9.82021 3.12371 9.83586 3.16348 9.84884 3.20415C9.85312 3.22377 9.85608 3.24366 9.8577 3.26368C9.85643 3.26694 9.85643 3.27055 9.8577 3.27381C9.85556 3.29552 9.85218 3.31708 9.84757 3.3384C9.84757 3.35613 9.83364 3.37259 9.82604 3.39032C9.82236 3.40067 9.81814 3.41082 9.81338 3.42072C9.79565 3.44605 9.77538 3.47011 9.75512 3.49417C9.7186 3.52457 9.6801 3.55249 9.63987 3.57776L9.61201 3.58916C9.55527 3.61566 9.49689 3.6385 9.43724 3.65755C9.36566 3.67015 9.2933 3.67777 9.22067 3.68034H9.19661C9.14449 3.67772 9.09275 3.67009 9.0421 3.65755C9.0155 3.64742 8.98891 3.63475 8.96358 3.62209L8.94458 3.61449C8.90444 3.58735 8.86634 3.55729 8.8306 3.52457L8.81667 3.50937L8.80021 3.48784L8.8154 3.45365C8.86948 3.37663 8.92827 3.30303 8.99144 3.23328C9.0786 3.22812 9.16269 3.19921 9.2346 3.1497V3.1497L9.25107 3.13956L9.35872 3.06991C9.42288 3.03833 9.48935 3.01166 9.55755 2.99012C9.57979 2.98676 9.6022 2.98464 9.62467 2.98379L9.65 2.98252ZM4.04337 16.4286C4.2767 16.4848 4.51839 16.4977 4.75639 16.4666C5.00293 16.4514 5.24862 16.429 5.49347 16.3994C5.88354 16.3513 6.27108 16.2855 6.65735 16.2335L7.88709 16.0664C8.71451 15.9591 9.54446 15.8747 10.377 15.8131C11.0102 15.7903 11.6333 15.7953 12.2615 15.8042C12.611 15.8042 12.9593 15.8131 13.3088 15.8156C13.7875 15.8156 14.265 15.8156 14.7437 15.8295C15.2668 15.8447 15.7898 15.8612 16.3154 15.8726C17.3336 15.8945 18.351 15.9034 19.3676 15.8992H20.3314C21.0102 15.8992 21.6865 15.8992 22.3653 15.8865C22.8567 15.8764 23.3455 15.8625 23.8357 15.8485C24.0955 15.8502 24.3553 15.8354 24.6133 15.8042C24.9337 15.7548 25.2731 15.6218 25.4719 15.3483C25.5672 15.2185 25.6314 15.0686 25.6594 14.9101C25.677 14.8702 25.6861 14.827 25.686 14.7834C25.6771 14.5605 25.686 14.3389 25.686 14.1173C25.686 13.8956 25.6733 13.6613 25.6733 13.4334C25.6733 12.9483 25.7075 12.4671 25.7455 11.9845C25.7934 11.5319 25.8154 11.077 25.8114 10.6218C25.8099 10.4875 25.8002 10.3535 25.7822 10.2204C25.7546 10.0684 25.716 9.91854 25.667 9.77204C25.6134 9.6134 25.527 9.46787 25.4133 9.34499C25.2996 9.22211 25.1612 9.12466 25.0071 9.05902C24.8797 9.00949 24.7484 8.97052 24.6145 8.9425C24.1219 8.83485 23.6191 8.78546 23.1188 8.72467C22.6427 8.66895 22.1665 8.62462 21.6877 8.58029C20.7138 8.49291 19.7437 8.37133 18.7673 8.30927C16.7625 8.18262 14.7526 8.18262 12.7465 8.05598C12.2475 8.02558 11.7473 7.99392 11.247 7.98379C10.7468 7.97366 10.2503 7.97872 9.75132 7.97872C8.71662 7.96986 7.68318 7.92806 6.64595 7.9192H6.33187C5.71637 7.9192 5.10087 7.93566 4.48283 7.94959C4.36653 7.94383 4.25212 7.98076 4.16115 8.05344C4.12207 8.08659 4.08981 8.12703 4.06616 8.17249C4.0421 8.21621 4.02581 8.26378 4.01804 8.31307C3.9698 8.34067 3.92691 8.37671 3.89139 8.41945C3.87734 8.4348 3.86463 8.45133 3.8534 8.46885C3.84453 8.48404 3.83567 8.50051 3.82807 8.51697C3.81028 8.55958 3.80041 8.60507 3.79894 8.65122C3.76981 9.11981 3.74322 9.59093 3.74068 10.0608C3.73815 10.5306 3.79134 10.9866 3.8154 11.4539C3.8154 11.6654 3.82174 11.8769 3.80654 12.0871C3.78881 12.3316 3.76854 12.576 3.74322 12.8204C3.71789 13.0648 3.69382 13.327 3.67356 13.5803C3.6533 13.8336 3.64823 14.054 3.62923 14.2882C3.59124 14.7682 3.47852 15.247 3.50259 15.7282C3.50831 15.8868 3.56354 16.0396 3.66052 16.1652C3.75751 16.2908 3.89139 16.3829 4.04337 16.4286V16.4286ZM7.47169 8.81586C7.98967 8.82725 8.50892 8.84878 9.0269 8.86145C9.50436 8.87285 9.98182 8.87158 10.4605 8.87665C10.9393 8.88171 11.4547 8.89311 11.9524 8.92224C12.4704 8.95137 12.9884 8.98809 13.5077 9.01342C14.5208 9.06662 15.534 9.09321 16.5472 9.12867C17.5236 9.16287 18.4988 9.21226 19.4714 9.29965C19.9692 9.34397 20.4681 9.39336 20.9646 9.44909C21.461 9.50481 21.9309 9.54281 22.4147 9.5922C22.7423 9.62681 23.0707 9.66481 23.4 9.70618C23.7027 9.74417 24.0066 9.7771 24.3081 9.83283C24.426 9.85788 24.5419 9.89131 24.6551 9.93288C24.6753 9.94554 24.6931 9.95821 24.7121 9.97214C24.7212 9.98212 24.7297 9.9927 24.7374 10.0038C24.765 10.0564 24.7895 10.1105 24.8108 10.1659C24.8444 10.3058 24.8673 10.4481 24.8792 10.5914C24.8982 11.269 24.8096 11.9466 24.7766 12.6178C24.7602 12.9699 24.7589 13.3207 24.7766 13.6727C24.7855 13.9134 24.7766 14.1527 24.7842 14.3934C24.783 14.4178 24.783 14.4424 24.7842 14.4668C24.788 14.4886 24.7906 14.5106 24.7918 14.5327V14.596C24.7918 14.6543 24.7918 14.7138 24.7804 14.772V14.7796C24.7757 14.7881 24.7702 14.7962 24.764 14.8037C24.7471 14.8195 24.7293 14.8343 24.7108 14.848C24.6787 14.8658 24.6452 14.881 24.6107 14.8936C24.5271 14.9113 24.4426 14.924 24.3575 14.9316C24.2751 14.9392 24.1928 14.9443 24.1042 14.9481H24.0928C23.1505 14.9797 22.207 14.9937 21.2647 14.9962C20.2668 14.9962 19.2713 15.0089 18.2746 14.9962C17.2374 14.9848 16.2002 14.9696 15.1642 14.9405C14.1649 14.9139 13.1632 14.9227 12.1639 14.9075H10.6771C10.1503 14.9202 9.62467 14.9797 9.09909 15.0266C8.12011 15.1178 7.14367 15.2508 6.16976 15.3939C5.66318 15.4686 5.15659 15.5408 4.65 15.5762C4.56515 15.5762 4.48156 15.5762 4.39671 15.5762C4.41064 15.1811 4.49803 14.791 4.53222 14.3972C4.57148 13.9412 4.59175 13.4828 4.63734 13.0268C4.69448 12.5791 4.72324 12.1282 4.72346 11.6768C4.71079 11.1968 4.669 10.7156 4.63481 10.2343C4.62721 9.98987 4.63481 9.74544 4.63481 9.50101C4.63481 9.25658 4.6576 9.04382 4.67153 8.81459C5.111 8.80446 5.55806 8.79179 5.98992 8.78926C6.48258 8.79433 6.9803 8.80572 7.47169 8.81586ZM26.5231 20.6434C26.48 20.2406 26.4319 19.8341 26.3635 19.4339C26.3015 19.0729 26.1951 18.7209 26.166 18.3549V18.2105C26.1663 18.1537 26.1594 18.0971 26.1457 18.042C26.194 18.014 26.2369 17.9775 26.2723 17.9344C26.285 17.9205 26.2964 17.9053 26.3078 17.8901C26.3175 17.8738 26.326 17.8569 26.3331 17.8394C26.3561 17.7972 26.3699 17.7506 26.3737 17.7026C26.3824 17.5846 26.344 17.4679 26.2668 17.3782C26.1897 17.2885 26.0801 17.233 25.9621 17.2239C25.6487 17.1834 25.3332 17.1606 25.0173 17.1555C24.7171 17.1467 24.4182 17.1429 24.1194 17.1467C23.5013 17.1543 22.8833 17.1809 22.2653 17.21C21.7903 17.2264 21.3167 17.2214 20.843 17.234C20.3694 17.2467 19.8754 17.2543 19.3916 17.2556C18.9079 17.2568 18.3924 17.2556 17.8947 17.2378C17.397 17.2201 16.9258 17.2226 16.4421 17.2112C15.9583 17.1998 15.5099 17.1884 15.0489 17.1821C14.5563 17.1821 14.0649 17.1821 13.5722 17.1986C13.0999 17.2112 12.6275 17.1986 12.1551 17.1986C11.6628 17.1986 11.1702 17.1922 10.6771 17.1796C10.192 17.1669 9.70699 17.1733 9.22194 17.1568C8.842 17.1441 8.46206 17.1327 8.08212 17.1327H7.72498C6.69788 17.1568 5.67204 17.2112 4.6462 17.267L4.45117 17.2758H3.82174C3.76887 17.2757 3.71631 17.2838 3.66596 17.2999C3.62746 17.3127 3.59083 17.3306 3.55705 17.3531C3.55306 17.3526 3.549 17.3534 3.54555 17.3555C3.54209 17.3575 3.53945 17.3607 3.53805 17.3645C3.4581 17.4221 3.40254 17.5074 3.38227 17.6038V17.6038C3.36057 17.6315 3.34228 17.6617 3.32782 17.6938C3.30844 17.7333 3.29765 17.7764 3.29615 17.8204C3.28856 18.137 3.27336 18.4536 3.27589 18.7728C3.27842 19.0919 3.29615 19.4415 3.31008 19.7758V19.7302C3.32908 20.2077 3.35568 20.6839 3.39367 21.1601C3.43167 21.6363 3.45573 22.077 3.48106 22.5355C3.50639 22.9939 3.51652 23.4397 3.51652 23.8918C3.51652 24.1451 3.51652 24.3858 3.50132 24.6327C3.48612 24.8797 3.46713 25.1089 3.4494 25.3457C3.42808 25.5828 3.42004 25.8208 3.42533 26.0588C3.4342 26.3273 3.48359 26.6046 3.67863 26.8009C3.92432 27.0453 4.30426 27.1378 4.64114 27.1555C5.13759 27.1796 5.63151 27.1555 6.12797 27.1555C6.90938 27.1555 7.69205 27.1555 8.47219 27.1416C9.27386 27.1289 10.0705 27.0833 10.8696 27.0415H10.8481L11.0115 27.0339C11.0507 27.0365 11.09 27.0365 11.1292 27.0339C12.0715 26.9959 13.0137 27.0149 13.956 26.9807C14.9692 26.9453 15.9823 26.9162 16.9866 26.9035C17.9909 26.8908 18.9788 26.8934 19.973 26.8579C20.4656 26.8402 20.9557 26.8389 21.4484 26.8579C21.941 26.8769 22.4033 26.8782 22.8808 26.8693C23.3582 26.8604 23.8572 26.8402 24.3461 26.8224C24.5791 26.8123 24.8146 26.8098 25.0502 26.8022C25.3491 26.8112 25.6478 26.7767 25.9367 26.6996C26.0758 26.6476 26.2003 26.563 26.2997 26.4528C26.3991 26.3425 26.4705 26.21 26.5079 26.0664C26.5526 25.9008 26.5802 25.731 26.5902 25.5598C26.6105 25.3318 26.6067 25.1001 26.6067 24.8708C26.6067 24.3642 26.6156 23.8576 26.6143 23.3511C26.6143 22.9078 26.5978 22.4645 26.5915 22.0238C26.5921 21.5628 26.5693 21.1021 26.5231 20.6434ZM25.7354 24.7796C25.7489 25.1054 25.7332 25.4318 25.6885 25.7548C25.6797 25.7883 25.6691 25.8212 25.6568 25.8536L25.6505 25.8625C25.5383 25.8829 25.425 25.8964 25.3111 25.903C24.8438 25.9169 24.3752 25.9296 23.9079 25.9473C23.4405 25.965 22.9479 25.9777 22.4679 25.9802C21.9879 25.9828 21.5054 25.9511 21.0229 25.9486C20.496 25.9486 19.9704 25.9676 19.4448 25.984C18.4583 26.0144 17.4692 26.0005 16.48 26.0182C15.995 26.0271 15.5099 26.0461 15.0249 26.0562C14.5398 26.0664 14.0535 26.093 13.5684 26.1006C12.896 26.1082 12.2222 26.1208 11.5421 26.1348L11.0621 26.1499C11.0251 26.1461 10.9877 26.1461 10.9507 26.1499V26.1499C10.4884 26.1715 10.0274 26.2006 9.56515 26.2259C8.73182 26.258 7.89722 26.2741 7.06135 26.2741H5.85948C5.40316 26.3057 4.94489 26.2956 4.49043 26.2437C4.43016 26.2285 4.37094 26.2095 4.31312 26.1867V26.1753C4.30507 26.1309 4.29957 26.0861 4.29666 26.041C4.29666 25.5914 4.35365 25.1456 4.37391 24.696C4.39798 24.2161 4.39291 23.7348 4.38151 23.2548C4.36885 22.7482 4.34352 22.2505 4.31566 21.7477C4.2878 21.2449 4.23967 20.77 4.21561 20.2837V20.157C4.20294 19.8556 4.18901 19.5529 4.17508 19.2528V19.3655C4.16621 19.1223 4.15735 18.8804 4.15862 18.6373C4.15862 18.46 4.16621 18.2827 4.17255 18.1066C4.669 18.1003 5.16545 18.0813 5.66191 18.0585H5.55299L5.77209 18.0496H5.74423C5.84681 18.0496 5.9494 18.042 6.05198 18.037H5.98866C6.98663 17.9977 7.9846 17.9724 8.98384 18.0104C9.49043 18.0281 9.98942 18.0268 10.4935 18.037C10.9747 18.0484 11.456 18.061 11.9398 18.0674C12.4236 18.0737 12.9073 18.0902 13.3899 18.0851C13.8724 18.08 14.3587 18.0674 14.8438 18.0762C15.3288 18.0851 15.8114 18.0978 16.2951 18.1104C16.7789 18.1231 17.2564 18.1256 17.7364 18.1358C18.6318 18.156 19.5259 18.1649 20.4213 18.1421C20.843 18.1294 21.2647 18.1256 21.6877 18.1193C22.1551 18.1193 22.6199 18.0838 23.0809 18.061H23.0581C23.5102 18.0446 23.9648 18.0344 24.417 18.0344C24.6981 18.0344 24.9806 18.0344 25.263 18.0496C25.2545 18.0717 25.2486 18.0947 25.2452 18.118C25.2423 18.2871 25.2482 18.4562 25.263 18.6246C25.2823 18.7724 25.3093 18.9191 25.344 19.0641C25.4023 19.3338 25.4567 19.6011 25.4973 19.8721C25.5809 20.4635 25.653 21.0524 25.686 21.6451C25.7075 22.3265 25.729 23.0091 25.7303 23.6917C25.7379 24.0628 25.7303 24.4212 25.7303 24.7784L25.7354 24.7796ZM38.7166 22.0909C38.6989 21.0702 38.6786 20.0456 38.6457 19.0248C38.6102 18.0306 38.5469 17.0365 38.5089 16.041V15.9764C38.4925 15.4851 38.4823 14.9924 38.476 14.5023C38.4697 14.0122 38.4633 13.5081 38.476 13.0117C38.4887 12.5152 38.538 12.039 38.5798 11.554C38.6229 11.0955 38.6444 10.6358 38.652 10.176C38.6596 9.71631 38.6609 9.25659 38.652 8.79939C38.6609 8.68689 38.628 8.57506 38.5596 8.48531C38.4861 8.39515 38.3801 8.3374 38.2645 8.32447H38.2468C38.2242 8.27681 38.1928 8.23385 38.1543 8.19782C38.1153 8.15882 38.0669 8.13048 38.0137 8.1155C37.8279 8.06221 37.6359 8.03326 37.4426 8.02938H37.3349C37.2083 8.02938 37.0879 8.02938 36.9651 8.03825C36.5915 8.05091 36.2191 8.07624 35.8468 8.12183C35.1617 8.20289 34.4803 8.29027 33.7913 8.31814C32.9453 8.33587 32.0993 8.31814 31.2584 8.31814C30.339 8.31814 29.4208 8.3498 28.5026 8.38146C28.4451 8.38945 28.39 8.40921 28.3405 8.4395C28.291 8.46979 28.2483 8.50996 28.2151 8.5575C28.1871 8.59523 28.1673 8.63835 28.1568 8.68414C28.1454 8.72284 28.139 8.76286 28.1378 8.80319V8.80319C28.0946 8.83161 28.0562 8.86666 28.0239 8.90704C27.9576 9.00467 27.9293 9.12309 27.9441 9.24012C27.958 9.52381 27.9732 9.80876 27.9833 10.095C28.0125 11.0448 28.0327 11.9947 28.0555 12.9471C28.0809 13.9678 28.1188 14.9886 28.1543 16.0094C28.1543 16.0993 28.1543 16.1892 28.1644 16.2779V16.3513C28.1936 17.3024 28.2024 18.251 28.2024 19.2047V22.1745C28.2024 23.1446 28.1606 24.116 28.1416 25.0874C28.1416 25.3103 28.1416 25.5332 28.134 25.7561C28.134 25.8929 28.134 26.0296 28.1416 26.1664C28.1457 26.283 28.1769 26.3971 28.2328 26.4995C28.3321 26.6654 28.4855 26.792 28.6672 26.8579C28.815 26.9099 28.9678 26.9464 29.1232 26.9668C29.2498 26.9896 29.3663 27.0086 29.4866 27.0289C29.726 27.0694 29.9666 27.0897 30.2072 27.1074C30.6809 27.1441 31.1596 27.1403 31.6333 27.1619C32.1285 27.1859 32.6211 27.2188 33.115 27.2188C33.609 27.2188 34.0788 27.2062 34.5601 27.21C35.0413 27.2138 35.5454 27.2024 36.038 27.1733C36.2559 27.1606 36.4724 27.1467 36.6877 27.1378H36.7093C36.903 27.1378 37.0955 27.1378 37.2906 27.1277C37.4261 27.1277 37.5616 27.1277 37.6958 27.1188C37.8375 27.1201 37.9788 27.1035 38.1163 27.0694C38.2057 27.0505 38.29 27.0125 38.3633 26.958C38.4267 26.9006 38.4836 26.8365 38.533 26.7667C38.6176 26.6237 38.6711 26.4645 38.69 26.2994C38.7204 26.1364 38.7382 25.9712 38.7432 25.8055C38.7546 25.5522 38.7609 25.2862 38.7597 25.0291C38.7597 24.5365 38.7445 24.0464 38.7356 23.555C38.7267 23.0636 38.7356 22.5785 38.723 22.0897L38.7166 22.0909ZM29.0155 26.117L29.0345 26.1487L29.0155 26.117ZM37.9263 25.5104C37.9192 25.7582 37.8955 26.0053 37.8554 26.25V26.2639C37.8162 26.2639 37.7769 26.2728 37.7364 26.2753H37.1411C36.8954 26.2753 36.6497 26.2753 36.4041 26.2842H36.3306L35.5783 26.3146C35.1287 26.3273 34.6804 26.3146 34.2295 26.3146C33.7432 26.3146 33.2544 26.3298 32.7668 26.3146C32.2792 26.2994 31.8068 26.269 31.3281 26.2563C30.8493 26.2437 30.3478 26.2361 29.8602 26.1791C29.5943 26.1487 29.3283 26.1065 29.0624 26.0524L29.013 26.0372V26.022C29.0054 25.1089 29.0674 24.1933 29.094 23.2814C29.1244 22.2948 29.1118 21.3083 29.1105 20.3204C29.1105 19.1008 29.1105 17.8799 29.0738 16.6616V16.6743C29.0408 15.7004 29.0003 14.7264 28.9661 13.7525V13.6613C28.9446 12.9357 28.9218 12.21 28.9066 11.483C28.8914 10.7561 28.8648 9.99747 28.8293 9.25405L29.6361 9.22366C30.61 9.19706 31.5801 9.20973 32.5489 9.21479C33.0771 9.21479 33.6064 9.21479 34.1358 9.20086C34.6247 9.1844 35.1161 9.12614 35.6011 9.06535C36.1254 8.99949 36.6472 8.94883 37.1753 8.92984C37.3834 8.91946 37.592 8.93263 37.7972 8.9691C37.7972 9.3655 37.7896 9.76064 37.7782 10.157V10.2837C37.7655 10.6763 37.7478 11.0702 37.7148 11.4615C37.673 11.9478 37.6275 12.4329 37.6123 12.9192C37.5971 13.4055 37.6123 13.9134 37.6123 14.4098C37.6275 15.3065 37.6629 16.1981 37.7098 17.0922C37.7516 17.9129 37.7984 18.7386 37.8276 19.5542V19.6302C37.8554 20.5902 37.8808 21.5489 37.8985 22.5089C37.9061 23.0281 37.9149 23.5486 37.9276 24.0666C37.9441 24.5529 37.9555 25.0329 37.9352 25.5091L37.9263 25.5104Z"
      fill={color}
    />
  </svg>
);
export default Artboard;