'use client';
import React, { useEffect } from 'react';
import './footer.scss';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Footer() {

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      // let footer = document.querySelector('footer');
      // let footerInnerWrapper = document.querySelector('footer .footer-inner__wrapper');

      // gsap.set(footerInnerWrapper, { y: "-100%" });

      // gsap.to(footerInnerWrapper, {
      //    y: 0,
      //    scrollTrigger: {
      //       trigger: footer,
      //       start: 'top bottom',
      //       end: 'bottom bottom', // Bitişi daha doğru belirle
      //       scrub: true
      //    }
      // });

      let titles = document.querySelectorAll('footer .content__wrapper .text__layer h2');

      gsap.to(titles, {
         y: 0,
         scrollTrigger: {
            trigger: titles,
            start: "top bottom",
            end: 'max max',
            scrub: true
         }
      })
   }, []);

   return (
      <footer className='section__paddings'>
         <div className="footer-inner__wrapper">
            <div className="content__wrapper">
               <div className="title__wrapper">
                  <div className="text__layer">
                     <h2>Your Project</h2>
                  </div>
                  <div className="text__layer">
                     <h2>+ <p>Our Vision</p> =</h2>
                     <svg xmlns="http://www.w3.org/2000/svg" width="111" height="75" viewBox="0 0 111 75" fill="none">
                        <path d="M111 4.51936V33.7367C111.001 34.2483 110.901 34.7551 110.705 35.2277C110.509 35.7004 110.221 36.1295 109.859 36.4905C109.496 36.8514 109.066 37.137 108.592 37.3307C108.118 37.5245 107.611 37.6225 107.1 37.6192C100.462 37.5798 87.0393 37.4904 80.473 37.4224C76.4187 37.383 73.2769 38.8537 70.6898 41.9741C62.7637 51.5283 54.6444 60.9394 46.84 70.5795C44.5749 73.3777 42.2525 74.4334 38.667 74.3689C30.129 74.2187 13.8153 74.2294 3.8782 74.2509C3.14217 74.2507 2.42138 74.0412 1.8 73.6467C1.17861 73.2522 0.682287 72.6891 0.368981 72.0231C0.0556751 71.3571 -0.0616781 70.6157 0.0306266 69.8855C0.122931 69.1553 0.421084 68.4664 0.890264 67.8993C14.6848 51.4138 41.222 19.756 46.1494 13.9555C53.6246 5.16704 63.1609 0.71556 74.7047 0.654728C85.4398 0.608209 96.1748 0.633258 107.114 0.654728C108.141 0.655651 109.125 1.06243 109.853 1.78638C110.581 2.51032 110.993 3.49272 111 4.51936Z" fill="url(#paint0_linear_99_64)" />
                        <path d="M89.2581 48.4688C89.391 48.286 89.5721 48.1438 89.7813 48.0582C89.9904 47.9726 90.2193 47.9469 90.4422 47.9841C90.6651 48.0212 90.8733 48.1197 91.0433 48.2686C91.2134 48.4174 91.3387 48.6106 91.4051 48.8266V48.8517C92.4786 52.5123 95.9997 55.9583 100.641 57.6151L100.748 57.6544C100.988 57.7408 101.194 57.9001 101.338 58.1097C101.482 58.3194 101.557 58.569 101.551 58.8234C101.546 59.0777 101.462 59.3241 101.309 59.5278C101.157 59.7315 100.944 59.8822 100.702 59.9589L100.122 60.1414C94.8403 61.8161 89.8879 65.2441 87.3258 68.9048L87.0538 69.2913C86.9209 69.4741 86.7398 69.6162 86.5306 69.7019C86.3215 69.7875 86.0926 69.8131 85.8697 69.776C85.6468 69.7388 85.4386 69.6403 85.2685 69.4915C85.0985 69.3427 84.9732 69.1494 84.9068 68.9334V68.9084C83.8333 65.2477 80.3122 61.8018 75.671 60.145L75.5601 60.1056C75.3209 60.0189 75.1149 59.8593 74.9712 59.6494C74.8274 59.4395 74.753 59.1898 74.7585 58.9354C74.7641 58.681 74.8492 58.4348 75.002 58.2313C75.1548 58.0279 75.3675 57.8774 75.6102 57.8012L76.1863 57.6187C81.5073 55.9619 86.4455 52.5159 89.0148 48.8553L89.2581 48.4688Z" fill="url(#paint1_linear_99_64)" />
                        <defs>
                           <linearGradient id="paint0_linear_99_64" x1="108.17" y1="3.88599" x2="3.57046" y2="74.8771" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FDF5A6" />
                              <stop offset="0.3" stopColor="#FD6E50" />
                              <stop offset="0.5" stopColor="#E82C69" />
                              <stop offset="0.7" stopColor="#C32EA2" />
                              <stop offset="1" stopColor="#7757D1" />
                           </linearGradient>
                           <linearGradient id="paint1_linear_99_64" x1="127.407" y1="32.2338" x2="22.8115" y2="103.225" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FDF5A6" />
                              <stop offset="0.3" stopColor="#FD6E50" />
                              <stop offset="0.5" stopColor="#E82C69" />
                              <stop offset="0.7" stopColor="#C32EA2" />
                              <stop offset="1" stopColor="#7757D1" />
                           </linearGradient>
                        </defs>
                     </svg>
                  </div>
               </div>

               <Button className='button__black' speed={'0.02'}>
                  GET IN TOUCH WITH US
               </Button>
            </div>

            <div className="footer__bottom">
               <div className="logo__wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="90" height="91" viewBox="0 0 90 91" fill="none">
                     <g clipPath="url(#clip0_99_44)">
                        <path d="M89.1741 3.09826V26.3486C89.1749 26.7557 89.095 27.159 88.9391 27.5351C88.7832 27.9112 88.5544 28.2528 88.2659 28.54C87.9773 28.8272 87.6347 29.0545 87.2579 29.2087C86.8811 29.3628 86.4774 29.4408 86.0703 29.4382C80.7881 29.4069 70.1069 29.3357 64.8816 29.2816C61.6553 29.2503 59.1551 30.4206 57.0964 32.9037C50.789 40.5067 44.3279 47.9957 38.1174 55.6671C36.3149 57.8939 34.4668 58.7339 31.6135 58.6826C24.8193 58.563 11.8372 58.5716 3.92955 58.5887C3.34384 58.5886 2.77025 58.4218 2.27577 58.1079C1.78129 57.794 1.38633 57.3459 1.13701 56.8159C0.887688 56.2859 0.794302 55.6959 0.867756 55.1148C0.941209 54.5337 1.17847 53.9855 1.55183 53.5343C12.5292 40.4155 33.6467 15.2232 37.5678 10.6073C43.5163 3.61366 51.1051 0.0712982 60.2913 0.0228897C68.834 -0.0141286 77.3767 0.00580434 86.0817 0.0228897C86.8987 0.0236244 87.6822 0.34733 88.2615 0.923426C88.8408 1.49952 89.1689 2.28128 89.1741 3.09826Z" fill="url(#paint0_linear_99_44)" />
                        <path d="M71.8726 38.072C71.9783 37.9265 72.1225 37.8134 72.2889 37.7453C72.4553 37.6771 72.6375 37.6567 72.8148 37.6863C72.9922 37.7158 73.1579 37.7942 73.2932 37.9126C73.4286 38.0311 73.5282 38.1848 73.5811 38.3567V38.3767C74.4354 41.2897 77.2374 44.0319 80.9306 45.3503L81.0161 45.3817C81.2065 45.4504 81.3706 45.5771 81.4853 45.744C81.5999 45.9108 81.6594 46.1094 81.6553 46.3119C81.6512 46.5143 81.5838 46.7103 81.4625 46.8724C81.3412 47.0345 81.1721 47.1545 80.9791 47.2155L80.5178 47.3607C76.3148 48.6934 72.3737 51.4214 70.3349 54.3344L70.1185 54.6419C70.0127 54.7874 69.8685 54.9005 69.7021 54.9687C69.5357 55.0368 69.3536 55.0572 69.1762 55.0277C68.9988 54.9981 68.8331 54.9197 68.6978 54.8013C68.5625 54.6829 68.4628 54.5291 68.4099 54.3572V54.3373C67.5557 51.4242 64.7537 48.682 61.0604 47.3636L60.9721 47.3323C60.7817 47.2632 60.6178 47.1363 60.5034 46.9692C60.389 46.8022 60.3298 46.6035 60.3342 46.401C60.3386 46.1986 60.4064 46.0027 60.5279 45.8407C60.6495 45.6788 60.8188 45.5591 61.012 45.4984L61.4704 45.3532C65.7047 44.0348 69.6344 41.2926 71.6789 38.3795L71.8726 38.072Z" fill="url(#paint1_linear_99_44)" />
                        <path d="M13.9532 82.4225C14.0671 82.7072 14.0813 82.8382 13.6855 82.861C12.4041 82.935 11.1227 83.0575 9.84413 83.1629C9.63341 83.1799 9.49103 83.1629 9.39137 82.9208C9.31411 82.7655 9.20099 82.6307 9.06136 82.5277C8.92173 82.4247 8.7596 82.3565 8.58836 82.3285C7.68801 82.0925 6.74354 82.0808 5.83761 82.2943C5.70883 82.3253 5.58709 82.3804 5.47882 82.4567C5.41378 82.485 5.35915 82.5328 5.32252 82.5935C5.28589 82.6543 5.26907 82.7249 5.27439 82.7956C5.27971 82.8664 5.30691 82.9337 5.35221 82.9883C5.39752 83.0428 5.45868 83.082 5.52723 83.1002C5.85815 83.2369 6.21149 83.3112 6.56944 83.3195C7.76826 83.4277 8.97562 83.4362 10.1688 83.6327C10.7815 83.7292 11.382 83.8915 11.9599 84.1168C14.3319 85.0736 14.1012 87.8784 12.6718 89.0203C11.8223 89.6557 10.828 90.0697 9.77864 90.2248C8.79967 90.4012 7.80615 90.4842 6.81148 90.4725C5.23393 90.4412 3.67916 90.3473 2.19558 89.6724C1.70863 89.4624 1.26874 89.1568 0.901915 88.7739C0.535089 88.3909 0.248778 87.9383 0.0599125 87.4427C-0.0312095 87.2092 -0.0226668 87.101 0.270632 87.0754C1.62892 86.9587 2.98436 86.8277 4.34264 86.6995C4.4537 86.6995 4.54482 86.6682 4.58184 86.822C4.72137 87.4228 5.18552 87.6563 5.72086 87.7731C6.64342 87.971 7.59746 87.971 8.52001 87.7731C8.59713 87.7556 8.67319 87.7337 8.74782 87.7076C8.99556 87.6107 9.27747 87.5253 9.27177 87.195C9.26608 86.8647 8.95284 86.7963 8.70226 86.7422C7.75117 86.5344 6.78016 86.5742 5.81768 86.5002C4.86507 86.459 3.92069 86.3051 3.00429 86.0417C1.88235 85.6801 1.03093 85.0622 0.885705 83.8007C0.740479 82.5392 1.25019 81.5568 2.30948 80.8592C3.36878 80.1615 4.45939 79.9309 5.63544 79.7913C7.37152 79.5516 9.1362 79.6181 10.8493 79.9878C12.2446 80.3238 13.3836 80.9959 13.9532 82.4225Z" fill="black" />
                        <path d="M27.2682 79.9053C27.1543 80.8137 27.0376 81.6794 26.9408 82.545C26.918 82.7814 26.8383 82.844 26.6019 82.8298C25.4629 82.8156 24.2982 82.8298 23.1478 82.8156C22.8858 82.8156 22.7947 82.8754 22.7606 83.1544C22.5071 85.3869 22.2281 87.6165 21.9632 89.8462C21.9376 90.0768 21.8579 90.148 21.6187 90.1452C20.3601 90.1309 19.1043 90.1452 17.8457 90.1452C17.5808 90.1452 17.5296 90.0911 17.5609 89.8206C17.8457 87.5909 18.1105 85.3613 18.3895 83.1316C18.418 82.8981 18.3895 82.8127 18.1048 82.8156C16.9658 82.8326 15.8267 82.8156 14.6877 82.8298C14.403 82.8298 14.2919 82.7871 14.3403 82.4653C14.4628 81.6965 14.5539 80.9191 14.6251 80.1446C14.645 79.9737 14.6792 79.8911 14.8785 79.8911C19.016 79.9082 23.1165 79.9053 27.2682 79.9053Z" fill="black" />
                        <path d="M40.7402 80.1075C40.4554 82.2432 40.3159 84.4016 39.8859 86.5145C39.4901 88.4794 38.2286 89.6896 36.3008 90.1765C34.2542 90.7162 32.1027 90.7162 30.0561 90.1765C27.9375 89.607 26.9466 88.1547 27.1658 85.9792C27.3253 84.4016 27.5389 82.8269 27.7354 81.2522C27.7781 80.8849 27.8322 80.5176 27.8663 80.1502C27.8834 79.9993 27.9119 79.911 28.097 79.911C29.4866 79.911 30.8762 79.911 32.2858 79.911C32.0722 81.6993 31.9042 83.4648 31.6365 85.2103C31.3147 87.3005 32.6787 87.6678 34.0541 87.4058C35.0906 87.2065 35.5918 86.5259 35.7313 85.3299C35.9306 83.6214 36.1499 81.9129 36.3464 80.2043C36.3749 79.9794 36.4176 79.8939 36.6682 79.8968C37.941 79.911 39.211 79.8968 40.4839 79.8968C40.6149 79.9053 40.7743 79.8541 40.7402 80.1075Z" fill="black" />
                        <path d="M52.2186 80.4239C51.353 80.0889 50.4329 79.917 49.5048 79.917C47.1499 79.8971 44.7921 79.917 42.4344 79.8999C42.1952 79.8999 42.104 79.9426 42.0756 80.2131C41.9218 81.6084 41.7395 82.9924 41.5658 84.382C41.3437 86.1959 41.1273 88.0069 40.8938 89.8151C40.8596 90.0999 40.928 90.1597 41.2127 90.1568C42.4144 90.1397 43.6189 90.1568 45.0826 90.1568C46.4637 90.0999 48.1038 90.2679 49.7355 89.9973C52.8479 89.4762 54.7187 87.4345 54.8269 84.4047C54.8924 82.5054 53.9841 81.1215 52.2186 80.4239ZM50.2509 85.2191C50.0203 86.3809 49.1831 87.1099 47.9017 87.2124C47.2154 87.2608 46.5263 87.2295 45.8343 87.2409C45.6578 87.2409 45.6208 87.1897 45.6435 87.0131C45.8068 85.7032 45.9634 84.3924 46.1134 83.0806C46.1333 82.8898 46.1988 82.8386 46.3811 82.8443C46.7114 82.8614 47.0417 82.8443 47.4489 82.8443C47.8599 82.8318 48.2712 82.8518 48.679 82.9041C49.9377 83.149 50.4958 83.9577 50.2509 85.2191Z" fill="black" />
                        <path d="M60.8125 79.9053C60.485 82.5564 60.1633 85.1676 59.8415 87.7789C59.7561 88.4737 59.6507 89.1685 59.5909 89.8661C59.571 90.1252 59.4713 90.1509 59.252 90.1509C58.0219 90.1509 56.7889 90.1338 55.5502 90.1509C55.237 90.1509 55.1572 90.0768 55.1971 89.7636C55.4021 88.2031 55.5844 86.6313 55.7666 85.0794C55.9698 83.4544 56.1719 81.8275 56.3732 80.1987C56.3931 80.042 56.3732 79.8911 56.6152 79.8911C58.0077 79.911 59.383 79.9053 60.8125 79.9053Z" fill="black" />
                        <path d="M72.5957 80.1103C71.5546 79.7587 70.4626 79.5817 69.3637 79.5864C68.2246 79.5615 67.0876 79.6976 65.9865 79.9907C63.4721 80.714 61.6497 82.1492 61.288 84.8999C60.9834 87.178 61.7892 89.1713 64.2467 90.0028C66.7262 90.8541 69.4295 90.7834 71.861 89.8034C74.2131 88.8922 75.5629 87.1694 75.6454 84.5668C75.7024 82.3799 74.6573 80.8706 72.5957 80.1103ZM70.218 86.7309C69.644 87.2281 68.904 87.4913 68.145 87.4684C66.9689 87.4684 66.1517 86.9359 65.8669 85.9963C65.7178 85.4428 65.7586 84.8554 65.9826 84.3279C66.2066 83.8003 66.601 83.3631 67.1028 83.086C67.4951 82.8502 67.935 82.7047 68.3906 82.6598C68.8461 82.615 69.306 82.6721 69.7368 82.8269C71.3229 83.3736 71.5763 85.5862 70.218 86.7309Z" fill="black" />
                        <path d="M81.258 82.787C81.258 83.0176 81.4459 83.1002 81.6225 83.1515C82.2922 83.3121 82.9782 83.3953 83.667 83.3992C85.0281 83.4875 86.3893 83.5558 87.6906 84.0228C88.9919 84.4898 89.6611 85.3469 89.7095 86.5372C89.7636 87.9411 89.0774 88.8893 87.8785 89.5272C86.9539 89.99 85.9481 90.2685 84.9171 90.3472C82.9238 90.558 80.9504 90.5637 79.0112 89.9913C77.5362 89.5556 76.4171 88.7099 75.9387 87.1153L79.0255 86.8305L80.2926 86.7166C80.3923 86.7166 80.5148 86.6483 80.5518 86.8049C80.7055 87.4883 81.2409 87.7019 81.8332 87.8158C82.7326 87.9925 83.6592 87.9779 84.5526 87.7731C84.8658 87.699 85.2645 87.6221 85.2474 87.2035C85.2303 86.7849 84.8487 86.7963 84.5583 86.7394C83.6471 86.5571 82.7131 86.5913 81.7905 86.5201C80.8508 86.4773 79.9192 86.3263 79.0141 86.0702C77.8751 85.7114 77.0208 85.0907 76.867 83.8093C76.7133 82.5279 77.2571 81.5483 78.325 80.8535C79.3245 80.2014 80.4578 79.9451 81.6196 79.8084C83.3551 79.5705 85.1188 79.639 86.8306 80.0106C88.2345 80.3438 89.3792 81.0215 89.9373 82.4481C90.0626 82.7756 90.0142 82.8553 89.6526 82.8781C88.3854 82.955 87.1182 83.0717 85.8511 83.1799C85.629 83.1999 85.4724 83.1799 85.3641 82.9265C85.2814 82.7647 85.1603 82.6256 85.0113 82.5213C84.8624 82.4171 84.6903 82.3509 84.5099 82.3285C83.6327 82.1117 82.7168 82.1039 81.836 82.3057C81.7451 82.3245 81.657 82.3551 81.574 82.3969C81.4117 82.4652 81.2494 82.5791 81.258 82.787Z" fill="black" />
                        <path d="M16.2027 76.7388C14.984 73.468 13.7671 70.1942 12.5522 66.9176C12.4753 66.7097 12.3642 66.6784 12.1734 66.6784C10.6785 66.6784 9.18066 66.6927 7.68284 66.6784C7.57573 66.6668 7.46761 66.6877 7.37261 66.7386C7.27761 66.7894 7.20014 66.8676 7.15034 66.9632C6.20116 68.4819 5.25197 70.0006 4.30278 71.5193L0.922729 76.9296C2.15572 76.9296 4.47933 76.9467 4.47933 76.9467C4.47933 76.9467 5.87464 76.8243 6.12807 75.9899C6.18502 75.8048 6.31886 75.7451 6.52388 75.7479C7.95336 75.7479 9.38378 75.7479 10.8152 75.7479C10.8851 75.7354 10.9572 75.7495 11.0172 75.7875C11.0773 75.8254 11.121 75.8844 11.1398 75.9529C11.2565 76.2804 11.2281 76.7474 11.5327 76.8955C11.8374 77.0435 12.2332 76.9296 12.592 76.9296H16.2483C16.2312 76.8414 16.2312 76.7873 16.2027 76.7388ZM7.66006 73.2591L9.31734 70.2749C9.6505 71.3171 9.95804 72.2682 10.277 73.2591H7.66006Z" fill="black" />
                        <path d="M42.9981 69.6084C41.8591 69.6084 40.7201 69.6084 39.581 69.6084C39.2963 69.6084 39.1824 69.6569 39.1482 69.9815C38.8976 72.1997 38.6186 74.4151 38.3509 76.6334C38.331 76.7843 38.3509 76.9381 38.0918 76.9352C36.7306 76.9352 35.3666 76.9352 34.0027 76.9352C33.977 76.9352 33.9543 76.9153 33.9229 76.901C34.2077 74.5547 34.4924 72.2453 34.7772 69.9388C34.8114 69.654 34.7174 69.617 34.4697 69.6198C33.3306 69.6198 32.1916 69.6198 31.0526 69.6198C30.7678 69.6198 30.7023 69.5373 30.7422 69.261C30.859 68.4894 30.9529 67.7148 31.027 66.9403C31.0469 66.7723 31.0697 66.6812 31.2747 66.6812C35.378 66.6812 39.4814 66.6812 43.636 66.6812C43.5164 67.6123 43.3968 68.5207 43.2914 69.4319C43.3 69.6739 43.1405 69.6084 42.9981 69.6084Z" fill="black" />
                        <path d="M54.7159 73.4671C56.4074 72.8805 57.2531 71.6588 57.3385 69.8848C57.4069 68.4326 56.7177 67.4245 55.3452 66.9632C54.8437 66.7911 54.3178 66.7007 53.7876 66.6956C50.7407 66.6813 47.691 66.6956 44.6469 66.6785C44.4248 66.6785 44.3622 66.744 44.3422 66.9632C44.1771 68.387 43.9948 69.8108 43.8183 71.2118C43.599 72.9972 43.3855 74.7826 43.1577 76.568C43.1178 76.8699 43.1861 76.9411 43.4908 76.9354C44.7352 76.9154 45.9824 76.9211 47.2268 76.9354C47.4319 76.9354 47.5116 76.8984 47.5429 76.6677C47.6312 75.8134 47.7536 74.9592 47.8447 74.1049C47.8675 73.8799 47.9501 73.8201 48.1665 73.8201C48.7104 73.8201 49.2514 73.8372 49.7953 73.8201C49.8852 73.8067 49.977 73.8253 50.0545 73.8726C50.1321 73.92 50.1905 73.9932 50.2196 74.0793C50.6581 74.9506 51.1109 75.8134 51.5523 76.6848C51.632 76.8386 51.7003 76.9297 51.8997 76.9297C53.3235 76.9154 54.7472 76.9297 56.2052 76.9297C55.6357 75.8704 55.1174 74.8652 54.5735 73.8714C54.4482 73.6493 54.4368 73.5639 54.7159 73.4671ZM52.0734 70.8872C51.4668 70.9128 50.8575 70.8872 50.2509 70.8872C50.2509 70.8872 49.0891 70.8872 48.5082 70.9042C48.2662 70.9042 48.2633 70.6195 48.2633 70.6195C48.2633 70.6195 48.2633 69.8592 48.4456 69.6798C48.6278 69.5004 51.1821 69.6143 52.0534 69.62C52.5603 69.62 52.7682 69.7823 52.7739 70.1525C52.783 70.2483 52.7713 70.345 52.7398 70.4359C52.7083 70.5268 52.6576 70.61 52.5912 70.6796C52.5248 70.7493 52.4442 70.8039 52.3548 70.8397C52.2655 70.8755 52.1695 70.8917 52.0734 70.8872Z" fill="black" />
                        <path d="M71.6617 76.679C70.4514 73.4328 69.2355 70.1866 68.0367 66.9318C67.9541 66.7069 67.8374 66.6784 67.6324 66.6784C66.1345 66.6784 64.6396 66.6784 63.1418 66.6784C63.0393 66.6702 62.9367 66.6929 62.8473 66.7437C62.758 66.7944 62.6859 66.8709 62.6406 66.9632C60.6283 70.1904 58.6113 73.4176 56.5895 76.6449C56.5383 76.7303 56.487 76.8214 56.413 76.9496C57.663 76.9496 60.0607 76.9667 60.0607 76.9667C60.0607 76.9667 61.3364 76.8043 61.5784 76.0611C61.6582 75.8276 61.8176 75.7621 62.0654 75.7764C63.2044 75.7935 64.369 75.7764 65.5195 75.7764C65.8498 75.7764 66.2427 75.6852 66.4933 75.8305C66.7439 75.9757 66.7354 76.4 66.8464 76.7189C66.8948 76.8584 66.9404 76.961 67.1312 76.961C68.6546 76.9467 70.1752 76.961 71.7186 76.961C71.7051 76.866 71.6861 76.7718 71.6617 76.679ZM63.1361 73.262C63.6885 72.271 64.221 71.3114 64.7933 70.2806C65.1265 71.3228 65.4369 72.2739 65.7501 73.262H63.1361Z" fill="black" />
                        <path d="M83.2171 74.2245C83.1061 75.0788 82.9979 75.9331 82.8982 76.7873C82.8754 76.9838 82.7473 76.9326 82.6419 76.9326C81.9784 76.9326 75.281 76.9326 72.5957 76.9326C72.2739 76.9326 72.2056 76.85 72.2455 76.5453C72.6119 73.6351 72.9744 70.7239 73.3332 67.8118C73.3788 67.4473 73.3788 66.9576 73.5126 66.7525C73.6009 66.6102 76.7503 66.6785 77.8523 66.6785C77.6074 68.6718 77.0664 73.3276 76.998 73.6778C76.9439 73.9483 77.0265 74.0053 77.2828 74.0024C78.8974 74.0024 82.7103 74.0024 83.0007 74.0024C83.1773 73.991 83.2399 74.0366 83.2171 74.2245Z" fill="black" />
                        <path d="M21.4108 69.5744C21.4108 69.8022 21.6101 69.879 21.7867 69.9331C22.4569 70.0906 23.1428 70.1718 23.8312 70.1752C25.1924 70.2635 26.5535 70.3347 27.8548 70.8017C29.1106 71.2544 29.8083 72.1201 29.8624 73.2847C29.925 74.7085 29.2387 75.6653 28.0228 76.3088C27.1096 76.7632 26.1179 77.0387 25.1012 77.1204C23.1079 77.3368 21.1146 77.3425 19.1555 76.7644C17.6805 76.3288 16.5671 75.4802 16.0916 73.897C16.812 73.8258 17.5153 73.7517 18.2016 73.6862C18.8879 73.6207 19.6766 73.5495 20.417 73.4869C20.5224 73.4869 20.6619 73.3929 20.7018 73.5809C20.8584 74.2614 21.3994 74.4722 21.9889 74.5832C22.8763 74.7514 23.7884 74.7397 24.6713 74.549C24.7238 74.5415 24.7754 74.5281 24.825 74.5092C25.0898 74.3981 25.4316 74.3269 25.3945 73.9397C25.3575 73.5524 25.0585 73.5666 24.7738 73.5125C23.8369 73.3132 22.8773 73.3531 21.9262 73.279C20.9875 73.2363 20.0568 73.0853 19.1527 72.8291C18.0336 72.4703 17.1594 71.8609 17.0199 70.5995C16.8803 69.338 17.3843 68.3214 18.4436 67.6266C19.4488 66.9631 20.5935 66.704 21.7724 66.5673C23.508 66.329 25.272 66.3984 26.9835 66.7724C28.3702 67.1027 29.515 67.769 30.0645 69.1814C30.224 69.6 30.224 69.5943 29.7798 69.6285C28.5136 69.7291 27.2464 69.8335 25.9783 69.9417C25.879 69.9692 25.7729 69.957 25.6825 69.9075C25.5921 69.8581 25.5245 69.7753 25.4942 69.6769C25.409 69.5174 25.2871 69.3806 25.1386 69.2776C24.99 69.1746 24.8191 69.1084 24.6399 69.0846C23.7747 68.8726 22.8722 68.8638 22.0031 69.0589C21.9132 69.0802 21.8255 69.1098 21.7411 69.1472C21.5731 69.227 21.3994 69.3352 21.4108 69.5744Z" fill="black" />
                        <path d="M88.0694 66.6785L87.3433 67.9513L86.7083 66.6785H85.7116L85.6262 68.9053H86.4378L86.4805 67.8346L87.05 68.9053H87.5825L88.2232 67.8488L88.1833 68.9053H89.0034L89.0917 66.6785H88.0694ZM82.8413 66.6785L82.8157 67.3733H83.7554L83.6984 68.9053H84.5185L84.5783 67.3733H85.5209L85.5493 66.6785H82.8413Z" fill="black" />
                     </g>
                     <defs>
                        <linearGradient id="paint0_linear_99_44" x1="86.9217" y1="2.59424" x2="3.68465" y2="59.087" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#FDF5A6" />
                           <stop offset="0.3" stopColor="#FD6E50" />
                           <stop offset="0.5" stopColor="#E82C69" />
                           <stop offset="0.7" stopColor="#C32EA2" />
                           <stop offset="1" stopColor="#7757D1" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_99_44" x1="102.23" y1="25.1526" x2="18.9962" y2="81.6453" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#FDF5A6" />
                           <stop offset="0.3" stopColor="#FD6E50" />
                           <stop offset="0.5" stopColor="#E82C69" />
                           <stop offset="0.7" stopColor="#C32EA2" />
                           <stop offset="1" stopColor="#7757D1" />
                        </linearGradient>
                        <clipPath id="clip0_99_44">
                           <rect width="90" height="90.5951" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
               </div>

               <div className="mail__box">
                  <span>Say hi</span>
                  <div className="line"></div>
                  <span>hello@astralstudios.com</span>
               </div>

               <div className="number__box">
                  <Link href={'mailto:hello@astralstudios.com'} className='mail__text'>
                     <span>hello@astralstudios.com</span>
                  </Link>
                  <Link href={'/'}>
                     <span>+000 0000 000 000</span>
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   )
}
