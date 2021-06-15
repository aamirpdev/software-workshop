import React from 'react';

const User2 = ({ width, height, color, ...props }) => (
  <svg
    viewBox="0 0 31 35"
    width={width}
    height={height}
    {...props}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M16.0413 0.0757988H16.171H16.2878H16.0413ZM24.3318 11.5548L24.3227 11.5859L24.2993 11.6767C24.311 11.6352 24.3214 11.5963 24.3318 11.5548ZM24.298 11.6845C24.2864 11.7247 24.276 11.7662 24.2643 11.8039C24.2643 11.8117 24.2643 11.8207 24.2643 11.8285L24.298 11.6845ZM30.7023 33.562C30.6862 33.7544 30.6141 33.938 30.4948 34.0899C30.4006 34.197 30.2829 34.2808 30.151 34.3351C30.0071 34.3945 29.8527 34.4245 29.697 34.4233C29.4181 34.4233 29.1418 34.4 28.8655 34.387C28.5892 34.374 28.3466 34.3675 28.0872 34.3636C27.7413 34.3636 27.3953 34.3675 27.0494 34.3753C26.7035 34.3831 26.3528 34.3991 25.9974 34.4233C25.2644 34.4713 24.5315 34.5271 23.7986 34.5686C23.2538 34.598 22.7085 34.633 22.1628 34.6737C21.6011 34.7139 21.0407 34.7411 20.4764 34.7645C19.9122 34.7878 19.3777 34.828 18.8277 34.8644C18.3023 34.8981 17.7783 34.9137 17.2542 34.9409C16.6925 34.9681 16.1282 35.0058 15.5678 35.0006C15.0321 35.0006 14.5002 34.9707 13.9632 34.9448C12.9345 34.8929 11.9045 34.8825 10.8719 34.876H10.8148C10.7838 34.8786 10.7525 34.8786 10.7214 34.876H10.2285C9.69794 34.876 9.16738 34.876 8.63682 34.8644C7.95708 34.8501 7.27864 34.8371 6.6002 34.8319H6.67155C6.15266 34.8319 5.626 34.8319 5.10582 34.8099C4.62066 34.7904 4.1368 34.7904 3.65554 34.7813C3.17427 34.7723 2.67614 34.7606 2.1858 34.7398C1.94711 34.7307 1.71232 34.7009 1.47493 34.6737C1.37115 34.662 1.27127 34.6529 1.16749 34.6464C1.1059 34.6488 1.04422 34.6453 0.983285 34.636C0.912727 34.6235 0.843919 34.6026 0.778326 34.5738L0.603202 34.4713C0.559093 34.4421 0.521904 34.4035 0.494237 34.3584C0.382125 34.3549 0.274975 34.3114 0.192172 34.2357C0.10937 34.1601 0.0563863 34.0573 0.0428079 33.9459C0.0207554 33.6138 0 33.2818 0 32.9497C0.000466098 32.2793 0.0411853 31.6096 0.121938 30.9442C0.18898 30.3249 0.291193 29.7099 0.428079 29.1022C0.496831 28.809 0.5578 28.5132 0.649902 28.2278C0.732923 27.9684 0.819836 27.709 0.91583 27.4495C1.01788 27.1917 1.13394 26.9397 1.26348 26.6945C1.3932 26.4351 1.54498 26.1821 1.69675 25.9344C2.27017 25.0087 2.9488 24.1524 3.7191 23.3828C4.11604 22.978 4.53764 22.5954 4.9722 22.2308C5.38212 21.8884 5.81539 21.5744 6.25255 21.2683C7.16315 20.649 8.13514 20.1252 9.15311 19.7052C9.38271 19.6053 9.61621 19.5119 9.85101 19.4237C10.0145 19.3614 10.1792 19.3043 10.3426 19.2473L10.5359 19.1785C10.7487 19.1072 10.964 19.041 11.1845 18.9761L11.2196 18.9658C11.4496 18.8983 11.6805 18.8352 11.9123 18.7764C11.5594 18.6908 11.2092 18.5922 10.8667 18.4767C10.402 18.3258 9.9518 18.1335 9.52152 17.902C9.05126 17.6524 8.6003 17.3679 8.17242 17.0511C7.75288 16.7338 7.37959 16.3596 7.0633 15.9394C6.73835 15.4935 6.46015 15.0153 6.23309 14.5124C6.01333 14.035 5.83958 13.5376 5.71421 13.0271C5.57836 12.5174 5.48892 11.9964 5.44698 11.4705C5.40851 10.9438 5.40504 10.4151 5.4366 9.88789C5.45736 9.62845 5.47163 9.36252 5.51054 9.10308C5.54946 8.84364 5.59357 8.57252 5.64027 8.30659C5.69893 8.02672 5.77342 7.7504 5.86339 7.47897C5.93344 7.25326 6.01127 7.02884 6.09429 6.80702C6.28178 6.29902 6.49834 5.80224 6.74289 5.31912C6.86071 5.08383 6.9906 4.85478 7.13206 4.63289C7.27734 4.40718 7.42393 4.17498 7.59127 3.96483C7.75861 3.75468 7.93503 3.53805 8.11015 3.3305C8.28528 3.12294 8.49283 2.94133 8.6913 2.75194C8.86772 2.58849 9.04674 2.43023 9.23483 2.28495C9.42293 2.13966 9.64475 1.96843 9.86528 1.83352C10.3331 1.5464 10.814 1.28134 11.3078 1.03833C11.7511 0.806856 12.2117 0.60996 12.6854 0.449395C13.2043 0.283352 13.7323 0.139362 14.2628 0.0070467C14.2814 0.00513808 14.3001 0.00513808 14.3186 0.0070467C14.4127 0.0106156 14.5033 0.0432454 14.578 0.100446C14.6156 0.130434 14.648 0.166365 14.674 0.206817C15.1617 0.123393 15.6555 0.0804388 16.1503 0.0783932H16.1723C16.5692 0.0817313 16.9647 0.125193 17.3528 0.208114C17.4825 0.235356 17.6122 0.266489 17.7419 0.300216C18.231 0.429937 18.7135 0.583008 19.1896 0.754239C19.689 0.925384 20.1715 1.14252 20.6308 1.40284C20.8567 1.52888 21.0734 1.67062 21.2794 1.82703C21.4153 1.92844 21.5452 2.03759 21.6686 2.15393C21.8356 2.32137 21.9941 2.49715 22.1434 2.68059C22.2958 2.86782 22.4362 3.06453 22.5637 3.26953C22.7141 3.50821 22.8646 3.7495 22.9943 3.99986C23.2235 4.4563 23.4287 4.92436 23.6092 5.40214C23.8022 5.87204 23.9714 6.35131 24.1164 6.83815C24.1999 7.11725 24.2692 7.4004 24.324 7.68653C24.3707 7.9598 24.4139 8.23395 24.4537 8.50896C24.5245 9.03462 24.5462 9.56575 24.5186 10.0954C24.503 10.5976 24.4369 11.097 24.3214 11.5859L24.2643 11.8052C24.0839 12.4669 23.8352 13.1082 23.5223 13.7185C23.2004 14.3535 22.8268 14.9609 22.4054 15.5346C22.0643 15.9763 21.682 16.3845 21.2639 16.754C20.8854 17.092 20.4738 17.391 20.0354 17.6465C19.5616 17.9194 19.0697 18.1595 18.5631 18.3652C18.3659 18.4495 18.1648 18.5208 17.9612 18.587C17.847 18.6246 17.7303 18.6622 17.6148 18.6959C17.9806 18.7893 18.3464 18.8879 18.7096 18.9956C19.2182 19.1448 19.715 19.3355 20.2157 19.5145C20.7164 19.6935 21.186 19.8388 21.6738 19.9919C22.1894 20.1473 22.695 20.3344 23.1876 20.5522C23.4545 20.6751 23.712 20.8173 23.9582 20.9777C24.1684 21.117 24.3703 21.2686 24.5627 21.4318C25.0079 21.7968 25.4291 22.1902 25.8235 22.6096C26.1791 22.9991 26.4955 23.4228 26.7679 23.8744C26.9054 24.1001 27.0274 24.3323 27.1571 24.5606C27.2868 24.7889 27.4165 24.9926 27.5527 25.2092C27.8576 25.6879 28.1585 26.1653 28.4335 26.6621C28.7085 27.1589 28.9524 27.6402 29.1807 28.1448C29.3968 28.6302 29.5877 29.1264 29.7528 29.6314C29.918 30.1218 30.0754 30.6138 30.225 31.1076C30.3906 31.6204 30.5207 32.144 30.6141 32.6747C30.6336 32.8044 30.6544 32.9341 30.6699 33.0638C30.6982 33.2283 30.7091 33.3952 30.7023 33.562ZM11.9343 17.7866C12.889 18.0159 13.8632 18.154 14.844 18.1991C15.2099 18.1963 15.575 18.1655 15.9362 18.107C16.3111 18.0396 16.6821 17.9552 17.0531 17.8683C17.2555 17.8125 17.4578 17.7581 17.6576 17.6867C17.8872 17.6037 18.1129 17.5142 18.3374 17.4169C18.7308 17.2508 19.1152 17.0671 19.4906 16.8656C19.759 16.7065 20.0188 16.5333 20.2689 16.3467C20.505 16.1664 20.7242 15.9705 20.9421 15.7694C21.0822 15.6267 21.2197 15.4802 21.3547 15.3323C21.493 15.1718 21.6229 15.0042 21.7438 14.8303C21.8541 14.6811 21.9566 14.5293 22.0552 14.3736C22.1537 14.218 22.2368 14.0792 22.325 13.93L22.3392 13.9079C22.5455 13.5266 22.7427 13.1426 22.9126 12.7405C23.0825 12.3383 23.2058 11.9738 23.329 11.573C23.3588 11.4575 23.3887 11.3434 23.4107 11.2253C23.4445 11.0502 23.4704 10.8764 23.4938 10.6986C23.5314 10.4016 23.5443 10.1019 23.556 9.80098C23.5567 9.41394 23.5307 9.02732 23.4782 8.64387C23.4445 8.41296 23.4107 8.18595 23.3718 7.95505C23.3394 7.77474 23.2979 7.59572 23.259 7.41671C23.1829 7.15208 23.1007 6.88961 23.0125 6.6293C22.9269 6.36986 22.8218 6.1182 22.7245 5.86524C22.6272 5.61229 22.5118 5.33339 22.3976 5.07006C22.3016 4.84564 22.1862 4.62771 22.0733 4.40978C21.7896 3.89641 21.4475 3.41759 21.0537 2.98284C20.7641 2.71938 20.4466 2.4884 20.1067 2.29403C19.8957 2.18333 19.6795 2.07999 19.4581 1.98399C19.3284 1.92821 19.1987 1.87892 19.069 1.82703C18.9769 1.79071 18.8861 1.7505 18.794 1.71677C18.6098 1.64802 18.423 1.58705 18.2362 1.52348L18.1168 1.48327C17.8902 1.41063 17.6619 1.34274 17.4319 1.27961L17.2295 1.23291C17.0545 1.19051 16.8774 1.15717 16.699 1.13302C16.4836 1.10838 16.2696 1.09411 16.0504 1.08892C15.1476 1.12499 14.2511 1.25542 13.3755 1.47808C13.107 1.55851 12.8463 1.64672 12.5829 1.7492C12.4944 1.78239 12.398 1.78889 12.3058 1.76791C12.2136 1.74693 12.1295 1.69939 12.064 1.63115C11.7164 1.7933 11.3752 1.96843 11.0341 2.15004C10.6897 2.33687 10.3586 2.54708 10.043 2.77918C9.87565 2.9089 9.70702 3.03862 9.54616 3.17872C9.40606 3.29936 9.27245 3.42519 9.13884 3.55232C8.88199 3.81584 8.63949 4.09298 8.4124 4.38253C8.19506 4.66642 7.99243 4.96127 7.80531 5.26593C7.67559 5.48516 7.56662 5.70698 7.45376 5.9327C7.34091 6.15841 7.24621 6.39451 7.15281 6.628C6.96472 7.10148 6.80386 7.58145 6.65728 8.06791C6.61577 8.24692 6.57296 8.42334 6.53923 8.60495C6.50421 8.80731 6.47437 9.00838 6.44583 9.21204C6.39394 9.58953 6.37968 9.9748 6.36411 10.3549C6.36411 10.7933 6.38876 11.2279 6.43156 11.6638C6.48161 12.0811 6.56181 12.4943 6.67155 12.9C6.76884 13.2139 6.87002 13.5214 6.99585 13.8249C7.12168 14.1285 7.25529 14.3879 7.3928 14.6642C7.5217 14.8906 7.66287 15.1097 7.81569 15.3206C7.95898 15.5077 8.11273 15.6866 8.27619 15.8563C8.4981 16.0669 8.73527 16.2607 8.98577 16.4362C9.21927 16.5984 9.45925 16.7488 9.70183 16.8928C10.0611 17.089 10.4324 17.2623 10.8135 17.4117C11.1768 17.5583 11.5452 17.6789 11.9343 17.7866ZM29.7061 33.4283C29.6918 33.2402 29.6594 33.0535 29.627 32.868C29.5945 32.6824 29.553 32.4723 29.5063 32.2751C29.3935 31.8432 29.2599 31.4177 29.1172 30.9922C28.9654 30.5356 28.8253 30.0712 28.6592 29.6184C28.4815 29.1385 28.2882 28.6676 28.0729 28.2006C27.8861 27.7985 27.676 27.4067 27.4606 27.0188C27.4606 27.0266 27.4684 27.0331 27.4723 27.0422C27.0689 26.3521 26.6174 25.6918 26.2192 24.9991C26.0267 24.6406 25.8127 24.294 25.5784 23.9613C25.3501 23.6604 25.1114 23.3763 24.8571 23.0987C24.3554 22.595 23.8073 22.1398 23.22 21.7392C22.7924 21.5045 22.3459 21.3057 21.8852 21.1451C21.4182 20.9803 20.9421 20.8389 20.4713 20.682C19.9524 20.5081 19.4452 20.3265 18.9328 20.1488C18.4528 19.9854 17.9663 19.8414 17.476 19.7065C17.0868 19.6092 16.6977 19.5171 16.3085 19.4561C16.0802 19.4211 15.8506 19.377 15.6184 19.3627C15.4394 19.3497 15.2604 19.3419 15.0814 19.3394C14.6279 19.346 14.1753 19.3793 13.7258 19.4392C13.2614 19.5093 12.8013 19.5958 12.3455 19.6987C11.5515 19.8957 10.7715 20.1454 10.0106 20.4459C9.61189 20.6067 9.21754 20.7767 8.82751 20.9557C8.48375 21.1152 8.14907 21.2942 7.81569 21.4746C7.20895 21.8323 6.62417 22.2261 6.06445 22.6537C5.79723 22.8548 5.54557 23.0662 5.28613 23.2842C5.02669 23.5021 4.80227 23.7187 4.56747 23.9444L4.56099 23.9509L4.54283 23.9704C4.34435 24.1728 4.14458 24.3777 3.9526 24.5879C3.76061 24.798 3.55695 25.0315 3.37664 25.265C3.19632 25.4985 3.00304 25.7398 2.837 25.9927C2.68263 26.2236 2.53475 26.4571 2.38946 26.6932C2.29865 26.8554 2.20785 27.0188 2.13002 27.1849C2.02494 27.3924 1.93154 27.6 1.83815 27.8127C1.69605 28.1558 1.57899 28.5087 1.4879 28.8687C1.15218 30.1895 0.967652 31.5443 0.937882 32.9069C0.937882 33.1378 0.952152 33.3674 0.965124 33.597C1.00965 33.6018 1.0533 33.6127 1.09484 33.6294L1.11171 33.6372C1.21678 33.6528 1.32575 33.6463 1.43082 33.6541C1.5359 33.6618 1.65524 33.6722 1.7668 33.6839C1.99511 33.7098 2.22342 33.7254 2.45302 33.7293C2.92002 33.7358 3.38831 33.7488 3.8566 33.7539H3.82677C4.22501 33.7539 4.62066 33.7539 5.0189 33.7656C5.39509 33.7786 5.76999 33.7864 6.14747 33.7903H6.07094C7.17357 33.7903 8.2762 33.8201 9.37882 33.8396H10.7305C10.7928 33.8396 10.8602 33.8396 10.9199 33.8396H11.3091C11.8007 33.8396 12.2911 33.8564 12.7827 33.8668C13.7232 33.8876 14.6611 33.9615 15.6015 33.981C15.9738 33.981 16.3435 33.9628 16.7132 33.9459C17.2581 33.92 17.8042 33.9005 18.3503 33.8707C18.8964 33.8409 19.4672 33.8006 20.0276 33.7708C20.588 33.741 21.1212 33.7241 21.666 33.6917C22.1849 33.6618 22.6921 33.6138 23.2058 33.5853C23.7636 33.5555 24.3214 33.5256 24.8792 33.488C25.4071 33.4504 25.9351 33.4063 26.4631 33.3868C27.0377 33.3661 27.6111 33.3609 28.1845 33.3622C28.6657 33.3622 29.1483 33.4089 29.6296 33.4206C29.6516 33.4322 29.6737 33.4296 29.6957 33.4283H29.7061ZM12.5012 8.38832C12.5637 8.38146 12.6241 8.36193 12.6787 8.33093C12.7334 8.29993 12.7811 8.2581 12.819 8.208C12.8959 8.10794 12.9308 7.98184 12.9163 7.85646C12.9004 7.73127 12.8356 7.61747 12.736 7.53994C12.6348 7.46634 12.5104 7.43179 12.3858 7.44265C12.3227 7.4486 12.2615 7.46759 12.2061 7.4984C12.1507 7.52922 12.1024 7.57119 12.064 7.62167C11.9863 7.72132 11.9512 7.84776 11.9665 7.97324C11.9818 8.09873 12.0463 8.21301 12.1458 8.29103C12.2488 8.36488 12.3749 8.39939 12.5012 8.38832ZM16.6652 8.50377C16.7284 8.49772 16.7896 8.47842 16.8448 8.44712C16.9 8.41583 16.948 8.37325 16.9857 8.32216C17.0251 8.27278 17.0543 8.21601 17.0714 8.15519C17.0886 8.09437 17.0934 8.03073 17.0855 7.96802C17.0781 7.90504 17.0582 7.84417 17.027 7.78894C16.9958 7.73371 16.954 7.68523 16.9039 7.64631C16.8015 7.57103 16.6751 7.53595 16.5485 7.54772C16.4853 7.55399 16.4242 7.57324 16.3688 7.60427C16.3134 7.6353 16.2651 7.67744 16.2268 7.72804C16.148 7.82886 16.1126 7.95682 16.1281 8.08379C16.1437 8.21077 16.209 8.32637 16.3098 8.40518C16.4122 8.48047 16.5387 8.51555 16.6652 8.50377ZM13.4365 14.1959C13.5532 14.2258 13.6687 14.2582 13.788 14.2802C14.0378 14.3301 14.2923 14.3523 14.5469 14.3464C14.7727 14.345 14.9979 14.3242 15.2202 14.2841C15.3745 14.2543 15.5276 14.2115 15.6807 14.17C15.9274 14.0999 16.1678 14.0092 16.3993 13.8989C16.6465 13.7848 16.8834 13.6498 17.1076 13.4954C17.2062 13.428 17.3048 13.3657 17.3982 13.284C17.5252 13.1795 17.6468 13.0686 17.7627 12.9519C17.8556 12.8526 17.9322 12.7392 17.9897 12.6159C18.0364 12.4999 18.0353 12.3702 17.9867 12.255C17.9381 12.1398 17.8459 12.0485 17.7303 12.001C17.6161 11.9557 17.489 11.9557 17.3748 12.001C17.2609 12.0497 17.1686 12.1383 17.1154 12.2501C17.0757 12.3024 17.0323 12.3518 16.9857 12.398C16.7437 12.6056 16.4832 12.7906 16.2073 12.9506C16.0556 13.0284 15.9038 13.1037 15.7455 13.1672C15.5873 13.2308 15.429 13.2788 15.2682 13.3255C15.1306 13.3579 14.9944 13.3878 14.8543 13.4072C14.7093 13.4245 14.5633 13.4327 14.4172 13.4319C14.1514 13.4182 13.8877 13.3783 13.6298 13.3125C13.4041 13.236 13.1848 13.1543 12.9669 13.0635C12.7692 12.9755 12.5765 12.8768 12.3896 12.7677C12.1239 12.6028 11.8761 12.4106 11.6502 12.1943L11.4712 12.0062C11.3953 11.913 11.2886 11.85 11.1703 11.8285C11.0519 11.8141 10.9326 11.8469 10.8382 11.9197C10.7438 11.9925 10.6818 12.0995 10.6657 12.2177C10.6565 12.2754 10.6592 12.3345 10.6737 12.3912C10.6882 12.4478 10.7142 12.5009 10.75 12.5472C10.9644 12.7847 11.1959 13.0063 11.4427 13.21C11.5854 13.319 11.7384 13.4124 11.8876 13.5058C12.1279 13.6532 12.3765 13.7866 12.6322 13.9053C12.891 14.0263 13.1602 14.1236 13.4365 14.1959ZM8.8301 22.9119C8.73777 22.9137 8.64784 22.9416 8.57066 22.9923C7.72618 23.5423 6.86613 24.0858 6.12023 24.7682C5.89971 24.9692 5.68697 25.1755 5.48071 25.3908C5.30559 25.5711 5.14733 25.7618 4.99036 25.9577C4.66356 26.3894 4.3876 26.8573 4.16793 27.3522C4.03468 27.6376 3.92281 27.9324 3.83325 28.2343C3.71132 28.6235 3.59716 29.0269 3.51025 29.4316C3.49546 29.5442 3.52574 29.6581 3.59449 29.7485C3.66325 29.8388 3.76491 29.8984 3.87736 29.9142C3.98851 29.9299 4.10135 29.9009 4.19128 29.8338C4.28309 29.7632 4.34437 29.6602 4.36251 29.5458C4.39495 29.4044 4.42997 29.2643 4.46629 29.1242C4.5561 28.7867 4.66348 28.4542 4.788 28.1279C4.86972 27.9243 4.95404 27.7245 5.04744 27.526C5.12138 27.3691 5.2057 27.2173 5.28742 27.0655C5.35877 26.9501 5.42882 26.8333 5.50925 26.7231C5.62081 26.5674 5.73626 26.4182 5.8556 26.269C6.04371 26.0444 6.24468 25.8309 6.45751 25.6295C6.84456 25.2663 7.25492 24.9287 7.68597 24.619C8.14128 24.2934 8.61088 23.9886 9.07917 23.6824C9.17019 23.6142 9.23056 23.5128 9.24708 23.4003C9.26361 23.2878 9.23496 23.1733 9.16738 23.0818C9.12883 23.0286 9.07808 22.9854 9.0194 22.9558C8.96072 22.9263 8.89581 22.9112 8.8301 22.9119ZM3.83196 30.6017H3.77488C3.67102 30.6033 3.5711 30.6418 3.49294 30.7102C3.41478 30.7786 3.36345 30.8726 3.3481 30.9753C3.28609 31.2995 3.24278 31.6269 3.21838 31.956C3.207 32.0665 3.23826 32.1772 3.30577 32.2655C3.37328 32.3537 3.47194 32.4129 3.58159 32.4308C3.69378 32.4452 3.80714 32.415 3.89719 32.3465C3.98724 32.2781 4.04675 32.1769 4.06286 32.065C4.09168 31.7351 4.13758 31.4069 4.20036 31.0817C4.21337 30.9695 4.18218 30.8567 4.11341 30.7671C4.04464 30.6775 3.9437 30.6182 3.83196 30.6017Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="30.7075" height="35" fill={color} />
      </clipPath>
    </defs>
  </svg>
);
export default User2;
