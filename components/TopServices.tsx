import React from 'react';

const services = [
  {
    title: 'ML & AI Development',
    description: 'Machine Learning and Artificial Intelligence solution for your organization by experts hand.',
    href: '/ml-ai',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M30.5 44V43C30.5 40.7908 32.3642 39.001 34.3446 38.022C36.2692 37.0708 37.8886 35.5022 38.093 33.6626L38.5 30L42.5 28L37.5 20.5C37.5 11.3873 30.1126 4 21 4C11.8873 4 4.5 11.3873 4.5 20.5C4.5 26.0758 7.26566 31.0056 11.5 33.9924M11.5 33.9924V44M11.5 33.9924C13.0013 35.0514 14.6872 35.8662 16.5 36.379" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M22.1154 24L19.1941 14.9578C19.0104 14.3893 18.4469 14 17.8077 14C17.1685 14 16.605 14.3893 16.4213 14.9578L13.5 24M27.5 14V24M14.5769 21H21.0384" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Data Engineering',
    description: 'Seamless migration of legacy data to modern systems with consolidation, transformation, and optimization for unified insights.',
    href: '/data-migration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M4.5 24C4.5 15.0433 4.5 10.565 7.28248 7.78248C10.065 5 14.5433 5 23.5 5C32.4566 5 36.935 5 39.7176 7.78248C42.5 10.565 42.5 15.0433 42.5 24C42.5 32.9566 42.5 37.435 39.7176 40.2176C36.935 43 32.4566 43 23.5 43C14.5433 43 10.065 43 7.28248 40.2176C4.5 37.435 4.5 32.9566 4.5 24Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M4.5 24H42.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M25.5 14H33.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16 16.5C17.3807 16.5 18.5 15.3807 18.5 14C18.5 12.6193 17.3807 11.5 16 11.5C14.6193 11.5 13.5 12.6193 13.5 14C13.5 15.3807 14.6193 16.5 16 16.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16 36.5C17.3807 36.5 18.5 35.3807 18.5 34C18.5 32.6193 17.3807 31.5 16 31.5C14.6193 31.5 13.5 32.6193 13.5 34C13.5 35.3807 14.6193 36.5 16 36.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M25.5 34H33.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Business Intelligence',
    description: 'Leverage AI-powered BI to predict optimal stock entry/exit points, minimizing risk and maximizing returns.',
    href: '/stock-price-prediction-with-ai-poc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M3.50391 28C3.50391 20.9868 3.50391 17.4801 5.31983 15.1198C5.65227 14.6878 6.02369 14.2916 6.42877 13.937C8.64147 12 11.9289 12 18.5039 12H28.5039C35.0789 12 38.3663 12 40.5791 13.937C40.9841 14.2916 41.3555 14.6878 41.6879 15.1198C43.5039 17.4801 43.5039 20.9868 43.5039 28C43.5039 35.0132 43.5039 38.52 41.6879 40.8802C41.3555 41.3122 40.9841 41.7084 40.5791 42.063C38.3663 44 35.0789 44 28.5039 44H18.5039C11.9289 44 8.64147 44 6.42877 42.063C6.02369 41.7084 5.65227 41.3122 5.31983 40.8802C3.50391 38.52 3.50391 35.0132 3.50391 28Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M31.5039 12C31.5039 8.22876 31.5039 6.34314 30.3323 5.17158C29.1607 4 27.2751 4 23.5039 4C19.7327 4 17.847 4 16.6755 5.17158C15.5039 6.34314 15.5039 8.22876 15.5039 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M23.5039 22C21.2947 22 19.5039 23.3432 19.5039 25C19.5039 26.6568 21.2947 28 23.5039 28C25.7131 28 27.5039 29.3432 27.5039 31C27.5039 32.6568 25.7131 34 23.5039 34M23.5039 22C25.2455 22 26.7271 22.8348 27.2763 24M23.5039 22V20M23.5039 34C21.7623 34 20.2807 33.1652 19.7315 32M23.5039 34V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M11.5039 24H3.50391" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M43.5039 24H35.5039" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
      </svg>
    )
  },
  {
    title: 'AR/VR Solutions',
    description: 'Complete Augmented and Virtual Reality Solutions-customized to give life to your visual commerce.',
    href: '/augmented-reality',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M13.8398 6H33.8398C37.5782 6 39.4474 6 40.8398 6.80384C41.752 7.33046 42.5094 8.08788 43.036 9C43.8398 10.3923 43.8398 12.2615 43.8398 16C43.8398 19.7385 43.8398 21.6076 43.036 23C42.5094 23.9122 41.752 24.6696 40.8398 25.1962C39.4474 26 37.5782 26 33.8398 26H33.0524C31.6786 26 30.9916 26 30.349 25.8572C29.4886 25.6662 28.681 25.2878 27.9834 24.7492C27.4622 24.3468 27.0224 23.8192 26.143 22.7638C25.4422 21.9228 25.0918 21.5024 24.6896 21.3136C24.1512 21.061 23.5284 21.061 22.99 21.3136C22.5878 21.5024 22.2374 21.9228 21.5366 22.7638C20.6572 23.8192 20.2174 24.3468 19.6963 24.7492C18.9987 25.2878 18.191 25.6662 17.3307 25.8572C16.688 26 16.0011 26 14.6272 26H13.8398C10.1014 26 8.23214 26 6.83984 25.1962C5.92772 24.6696 5.1703 23.9122 4.64368 23C3.83984 21.6076 3.83984 19.7385 3.83984 16C3.83984 12.2615 3.83984 10.3923 4.64368 9C5.1703 8.08788 5.92772 7.33046 6.83984 6.80384C8.23214 6 10.1014 6 13.8398 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9.83984 12H13.8398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M24.041 38L20.0004 34M24.041 38L20.0004 42M24.041 38C13.9413 38 5.45764 34 3.83984 30M30.102 37.5422C37.0446 36.4628 42.3724 33.5784 43.8398 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Game Studio',
    description: 'We craft addictive multiplayer experiences from concept art to launch, with stunning environments and immersive level design.',
    href: '/game-studio',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M3.85635 31.6184C4.30213 24.6322 5.61459 19.5198 6.72675 16.5502C7.28823 15.051 8.49621 13.9346 10.0428 13.5604C18.6428 11.4799 29.0371 11.4799 37.6371 13.5604C39.1837 13.9346 40.3917 15.051 40.9531 16.5502C42.0653 19.5198 43.3777 24.6322 43.8235 31.6184C44.0901 35.7978 41.0695 38.1006 37.7257 39.785C35.5959 40.8578 33.958 37.6914 32.8708 35.2406C32.2768 33.9016 30.9733 33.0712 29.4961 33.0712H18.1838C16.7065 33.0712 15.403 33.9016 14.809 35.2406C13.7216 37.6914 12.0839 40.8578 9.95407 39.785C6.64415 38.1176 3.58753 35.8314 3.85635 31.6184Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9.83984 9L13.7655 8M37.8398 9L33.8398 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M17.8398 26L14.8398 23M14.8398 23L11.8398 20M14.8398 23L11.8398 26M14.8398 23L17.8398 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M31.8164 20H31.8344" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M35.8164 26H35.8344" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'QA Testing & Automation',
    description: 'Using the latest tools & concrete methodologies to ensure the readiness of your digital solution.',
    href: '/software-testing-as-service',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M29.8398 35C29.8398 35 30.8398 35 31.8398 37C31.8398 37 35.0162 32 37.8398 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M43.8398 34C43.8398 39.5228 39.3626 44 33.8398 44C28.317 44 23.8398 39.5228 23.8398 34C23.8398 28.4772 28.317 24 33.8398 24C39.3626 24 43.8398 28.4772 43.8398 34Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M29.8972 18.4894C28.6854 16.4029 26.4264 15 23.8398 15C19.9738 15 16.8398 18.134 16.8398 22C16.8398 24.1314 17.7923 26.0402 19.2949 27.324" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M43.8078 21.48C43.7598 20.4 43.0336 19.0836 41.421 16.304L37.5736 9.67244C35.9674 6.90394 35.1644 5.51968 33.8436 4.75984C32.523 4 30.9202 4 27.7144 4H19.9652C16.7595 4 15.1566 4 13.836 4.75984C12.5153 5.51968 11.7122 6.90392 10.1061 9.67242L6.25868 16.304C4.64612 19.0836 3.83984 20.4732 3.83984 22C3.83984 23.5268 4.64612 24.9164 6.25868 27.696L10.1061 34.3276C11.7122 37.096 12.5153 38.4804 13.836 39.2402C15.0798 39.84 15.8341 40 19.0398 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
      </svg>
    )
  },
  {
    title: 'LMS Development',
    description: 'Boost academic integrity with AI-powered Moodle proctoring to verify identity, monitor exams, and prevent cheating.',
    href: 'https://elearning23.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M4.83984 24C4.83984 15.0433 4.83984 10.565 7.62232 7.78248C10.4048 5 14.8832 5 23.8398 5C32.7964 5 37.2748 5 40.0574 7.78248C42.8398 10.565 42.8398 15.0433 42.8398 24C42.8398 32.9566 42.8398 37.435 40.0574 40.2176C37.2748 43 32.7964 43 23.8398 43C14.8832 43 10.4048 43 7.62232 40.2176C4.83984 37.435 4.83984 32.9566 4.83984 24Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M4.83984 18H42.8398" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"></path>
        <path d="M13.8398 12H13.8578" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M21.8398 12H21.8578" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M18.0759 27C17.5266 26.3862 16.7283 26 15.8398 26C14.183 26 12.8398 27.3432 12.8398 29V31C12.8398 32.6568 14.183 34 15.8398 34C16.7283 34 17.5266 33.6138 18.0759 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M30.8398 26L34.8398 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M24.8242 27H24.8422M24.8242 33H24.8422" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Web & Mobile App Development',
    description: 'Developing innovative and native web & mobile Apps for Android, iOS, BlackBerry and Windows platforms.',
    href: '/mobile-app-development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M39.8398 20.256C39.8398 12.5929 39.8398 8.76128 37.4966 6.38064C35.1536 4 31.3822 4 23.8398 4H19.8398C12.2974 4 8.52614 4 6.18298 6.38064C3.83984 8.76128 3.83984 12.5929 3.83984 20.256C3.83984 27.9192 3.83984 31.7508 6.18298 34.1314C7.1222 35.0856 8.29084 35.6574 9.83984 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M43.8398 35C43.8398 31.2502 43.8398 29.3754 42.8848 28.061C42.5764 27.6366 42.2032 27.2634 41.7788 26.955C40.4644 26 38.5896 26 34.8398 26H24.8398C21.09 26 19.2152 26 17.9009 26.955C17.4764 27.2634 17.1032 27.6366 16.7948 28.061C15.8398 29.3754 15.8398 31.2502 15.8398 35C15.8398 38.7498 15.8398 40.6246 16.7948 41.939C17.1032 42.3634 17.4764 42.7366 17.9009 43.045C19.2152 44 21.09 44 24.8398 44H34.8398C38.5896 44 40.4644 44 41.7788 43.045C42.2032 42.7366 42.5764 42.3634 42.8848 41.939C43.8398 40.6246 43.8398 38.7498 43.8398 35Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M32.8398 32L34.6796 33.5858C35.453 34.2524 35.8398 34.5858 35.8398 35C35.8398 35.4142 35.453 35.7476 34.6796 36.4142L32.8398 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M26.8398 32L25 33.5858C24.2266 34.2524 23.8398 34.5858 23.8398 35C23.8398 35.4142 24.2266 35.7476 25 36.4142L26.8398 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4.83984 12H38.8398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'eCommerce Development',
    description: 'We provide ultimate e-commerce solution as well as customizations for your e-commerce business.',
    href: 'https://www.nop-station.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M22.8398 16H40.2318C41.4814 16 42.1062 16 42.5636 16.2017C44.587 17.0938 43.6824 19.3415 43.342 20.9568C43.2808 21.247 43.0818 21.494 42.803 21.6264C41.6464 22.1752 40.8362 23.2162 40.6236 24.4268L39.4384 31.1756C38.917 34.145 38.7388 38.3886 36.1366 40.4804C34.2274 42 31.4766 42 25.9748 42H21.7048C16.2031 42 13.4522 42 11.543 40.4804C8.94089 38.3884 8.76261 34.145 8.24117 31.1756L7.05599 24.4268C6.84339 23.2162 6.03331 22.1752 4.87667 21.6264C4.59777 21.494 4.39889 21.247 4.33773 20.9568C3.99733 19.3415 3.09265 17.0938 5.11609 16.2017C5.57353 16 6.19829 16 7.44779 16H14.8398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M27.8398 24H19.8398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12.8398 22L19.8398 6M29.8398 6L34.8398 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
      </svg>
    )
  },
  {
    title: 'Adobe Experience Manager',
    description: 'End-to-end enterprise CMS & DAM solutions to accelerate content delivery and create personalized customer experiences.',
    href: '/adobe-experience-manager-aem',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M4.5 24C4.5 15.0433 4.5 10.565 7.28248 7.78248C10.065 5 14.5433 5 23.5 5C32.4566 5 36.935 5 39.7176 7.78248C42.5 10.565 42.5 15.0433 42.5 24C42.5 32.9566 42.5 37.435 39.7176 40.2176C36.935 43 32.4566 43 23.5 43C14.5433 43 10.065 43 7.28248 40.2176C4.5 37.435 4.5 32.9566 4.5 24Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"></path>
        <path d="M23.5 32L21.7678 26.4M21.7678 26.4L20.3194 21.7178C19.1402 17.906 18.5506 16 17.5 16C16.4494 16 15.8598 17.906 14.6806 21.7178L13.2323 26.4M21.7678 26.4H13.2323M11.5 32L13.2323 26.4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M27.5 25.7392V28C27.5 30.2092 29.2908 32 31.5 32C32.9858 32 34.2824 31.1898 34.9722 29.9872M27.5 25.7392V24C27.5 21.7908 29.2908 20 31.5 20C33.7092 20 35.5 21.7908 35.5 24V25.7392H27.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'SharePoint Services',
    description: 'Get the best comprehensive set of SharePoint services to meet your business requirements.',
    href: '/sharepoint-services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M7.27772 19.3259C8.28662 20 9.69108 20 12.5 20C15.3089 20 16.7134 20 17.7223 19.3259C18.159 19.034 18.534 18.659 18.8259 18.2223C19.5 17.2134 19.5 15.8089 19.5 13C19.5 10.1911 19.5 8.78662 18.8259 7.77772C18.534 7.34096 18.159 6.96596 17.7223 6.67412C16.7134 6 15.3089 6 12.5 6C9.69108 6 8.28662 6 7.27772 6.67412C6.84096 6.96596 6.46596 7.34096 6.17412 7.77772C5.5 8.78662 5.5 10.1911 5.5 13C5.5 15.8089 5.5 17.2134 6.17412 18.2223C6.46596 18.659 6.84096 19.034 7.27772 19.3259Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M29.118 20H39.882C40.7756 20 41.5 19.2756 41.5 18.382C41.5 18.1308 41.4416 17.883 41.3292 17.6584L35.9472 6.89442C35.6732 6.34626 35.1128 6 34.5 6C33.8872 6 33.3268 6.34626 33.0528 6.89442L27.6708 17.6584C27.5584 17.883 27.5 18.1308 27.5 18.382C27.5 19.2756 28.2244 20 29.118 20Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12.5 42C16.366 42 19.5 38.866 19.5 35C19.5 31.134 16.366 28 12.5 28C8.63401 28 5.5 31.134 5.5 35C5.5 38.866 8.63401 42 12.5 42Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M40.5 30V35C40.5 37.8284 40.5 39.2426 39.6214 40.1214C38.7426 41 37.3284 41 34.5 41H29.5M28.5 29L38.5 39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Blockchain/Web3',
    description: 'Enterprise-grade settlement rails, privacy-preserving ZK-networks, and agentic AI layers to automate reconciliation and secure global asset tokenization.',
    href: '/blockchain-development-services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
        <path d="M7.83108 17.0724L1.41846 13.1752M20.5918 19.0102L15.8058 21.9189L8.94803 17.7512" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
        <path d="M15.8058 39.3212L1.41846 30.5775V13.1752L6.20452 10.2666L20.5918 19.0103V36.4198L15.8058 39.3212ZM15.8058 39.3212V21.919M28.5945 14.2436L23.8084 17.1522L9.42119 8.40857" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
        <path d="M20.592 32.5996L23.8086 34.5545M23.8086 34.5545L28.5947 31.653V14.2436L14.2074 5.49989L9.42139 8.40857V12.2215M23.8086 34.5545V17.1522M36.583 9.42231L31.7969 12.3309L17.4096 3.58728" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
        <path d="M36.5827 18.824V9.42209L22.1954 0.678345L17.4094 3.58704V7.44576M28.5945 27.7868L31.7966 29.733M31.7966 29.733L36.5827 26.8316V20.0269M31.7966 29.733V12.3307M3.64844 18.8512V20.0269M5.92985 18.8512V20.0269" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
      </svg>
    )
  }
];

const TopServices = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 bg-black border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
        {/* Header matched to website style */}
        <div className="mb-20 md:mb-28">
          <h2 className="font-[Satoshi,sans-serif] text-4xl md:text-[64px] font-bold bg-clip-text text-transparent leading-[1.1] tracking-tight"
              style={{ backgroundImage: 'linear-gradient(160deg, rgb(255,255,255) 10%, rgba(189,189,189,0.8) 60%, rgb(255,255,255) 90%)' }}>
            Top Services
          </h2>
        </div>

        {/* Content grid displaying all 12 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start gap-8 group">
              <div className="text-[#4992C1] transition-all duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="font-[Satoshi,sans-serif] text-lg text-[#a3a3a3] leading-relaxed max-w-[380px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopServices;
