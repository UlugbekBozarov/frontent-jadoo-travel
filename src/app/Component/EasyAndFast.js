import React, { useState } from 'react'

const EasyAndFast = () => {
    const [steps] = useState([
        {
            title: "Choose Destination",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
        },
        {
            title: "Make Payment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
        },
        {
            title: "Reach Airport on Selected Date",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
        }
    ])

    const renderSteps = () => {
        return (
            steps.map((step, i) => {
                return (
                    <div className="step_block" key={i}>
                        <div className="step_icon">
                            {
                                i === 0 ? (
                                    <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="47" height="48" rx="13" fill="#F0BB1F" />
                                        <path d="M13.5446 17.4755C13.248 17.4755 13.0054 17.2328 13 16.9363V13.5446C13 13.2426 13.2426 13 13.5446 13H16.9363C17.2328 13 17.4755 13.2426 17.4755 13.5446V14.7255H30.5245V13.5446C30.5245 13.248 30.7672 13.0054 31.0637 13H34.4554C34.752 13 34.9946 13.2426 35 13.5446V16.9363C35 17.2328 34.7574 17.4755 34.4554 17.4755H33.2745V30.5245H34.4554C34.752 30.5245 34.9946 30.7672 35 31.0637V34.4554C35 34.752 34.7574 34.9946 34.4554 35H31.0637C30.7672 35 30.5245 34.7574 30.5245 34.4554V33.2745H17.4755V34.4554C17.4755 34.752 17.2328 34.9946 16.9363 35H13.5446C13.248 35 13.0054 34.7574 13 34.4554V31.0637C13 30.7672 13.2426 30.5245 13.5446 30.5245H14.7255V17.4755H13.5446ZM33.9216 16.3971V14.0784H31.6029V16.3971H33.9216ZM31.6029 33.9216H33.9216V31.6029H31.6029V33.9216ZM17.4755 31.0637V32.1961H30.5245V31.0637C30.5245 30.7672 30.7672 30.5245 31.0637 30.5245H32.1961V17.4755H31.0637C30.7672 17.4755 30.5245 17.2328 30.5245 16.9363V15.8039H17.4755V16.9363C17.4755 17.2328 17.2328 17.4755 16.9363 17.4755H15.8039V30.5245H16.9363C17.2328 30.5245 17.4755 30.7672 17.4755 31.0637ZM14.0784 31.6029V33.9216H16.3971V31.6029H14.0784ZM16.3971 16.3971V14.0784H14.0784V16.3971H16.3971Z" fill="white" />
                                    </svg>
                                ) : i === 1 ? (
                                    <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="47" height="48" rx="13" fill="#F15A2B" />
                                        <path d="M32.8183 31.9287C32.3681 31.9379 31.9259 31.8091 31.5511 31.5596C31.2721 31.3773 30.9461 31.2802 30.6128 31.2802C30.2796 31.2802 29.9536 31.3773 29.6746 31.5596C29.296 31.8007 28.8564 31.9287 28.4076 31.9287C27.9588 31.9287 27.5192 31.8007 27.1406 31.5596C26.8617 31.3771 26.5355 31.2799 26.2022 31.2799C25.8689 31.2799 25.5427 31.3771 25.2638 31.5596C24.8852 31.8007 24.4456 31.9287 23.9968 31.9287C23.548 31.9287 23.1084 31.8007 22.7298 31.5596C22.451 31.3772 22.1252 31.2801 21.792 31.2801C21.4589 31.2801 21.133 31.3772 20.8543 31.5596C20.511 31.7878 20.1104 31.9146 19.6984 31.9255L19.6757 31.2768C19.98 31.2695 20.2755 31.1732 20.5257 30.9998C20.9042 30.7587 21.3436 30.6307 21.7924 30.6307C22.2411 30.6307 22.6805 30.7587 23.059 30.9998C23.338 31.1821 23.664 31.2793 23.9973 31.2793C24.3306 31.2793 24.6566 31.1821 24.9356 30.9998C25.3142 30.7585 25.7539 30.6304 26.2028 30.6304C26.6518 30.6304 27.0915 30.7585 27.4701 30.9998C27.7491 31.1821 28.0751 31.2793 28.4084 31.2793C28.7417 31.2793 29.0677 31.1821 29.3467 30.9998C29.7253 30.7588 30.1648 30.6308 30.6137 30.6308C31.0625 30.6308 31.502 30.7588 31.8806 30.9998C32.1603 31.1826 32.4871 31.2799 32.8212 31.2799C33.1552 31.2799 33.4821 31.1826 33.7617 30.9998C34.1361 30.751 34.5775 30.6224 35.0269 30.6313V31.28C34.6923 31.2708 34.3635 31.3687 34.0883 31.5593C33.7126 31.8092 33.2694 31.9381 32.8183 31.9287V31.9287Z" fill="white" />
                                        <path d="M15.1783 31.9285C14.7282 31.9378 14.2861 31.809 13.9115 31.5594C13.6364 31.3686 13.3075 31.2707 12.9729 31.2798V30.6312C13.4231 30.6218 13.8653 30.7506 14.24 31.0002C14.515 31.191 14.8437 31.289 15.1783 31.2798C15.513 31.289 15.8419 31.1909 16.1169 30.9999C16.4908 30.7504 16.9323 30.6217 17.3818 30.6312C17.8203 30.6213 18.2516 30.7442 18.6191 30.9837L18.2918 31.5435C18.0234 31.3628 17.7052 31.2706 17.3818 31.2798C17.0484 31.2708 16.721 31.3685 16.4471 31.5587C16.072 31.809 15.6291 31.9381 15.1783 31.9285Z" fill="white" />
                                        <path d="M32.8193 29.6579C32.3688 29.6671 31.9263 29.5383 31.5512 29.2888C31.272 29.1064 30.9456 29.0092 30.6121 29.0092C30.2785 29.0092 29.9522 29.1064 29.673 29.2888C29.2944 29.5298 28.855 29.6578 28.4062 29.6578C27.9574 29.6578 27.518 29.5298 27.1394 29.2888C26.8606 29.1065 26.5346 29.0094 26.2014 29.0094C25.8683 29.0094 25.5423 29.1065 25.2635 29.2888C24.8849 29.5299 24.4455 29.6579 23.9967 29.6579C23.5479 29.6579 23.1084 29.5299 22.7299 29.2888C22.451 29.1065 22.1251 29.0094 21.7919 29.0094C21.4588 29.0094 21.1328 29.1065 20.854 29.2888C20.4794 29.5384 20.0372 29.6672 19.5872 29.6579C19.1371 29.6672 18.695 29.5384 18.3204 29.2888C18.0455 29.0981 17.7169 29.0001 17.3824 29.0093C17.0481 29.0002 16.7196 29.0981 16.4448 29.2888C16.0708 29.5381 15.6294 29.6669 15.1799 29.6579C14.7298 29.6672 14.2875 29.5384 13.9128 29.2888C13.6374 29.0977 13.308 28.9997 12.9729 29.0093V28.3606C13.423 28.3513 13.8651 28.4801 14.2397 28.7297C14.5148 28.9204 14.8437 29.0184 15.1783 29.0093C15.5126 29.0183 15.8412 28.9204 16.1159 28.7297C16.49 28.4804 16.9314 28.3516 17.3808 28.3606C17.8312 28.351 18.2737 28.4799 18.6486 28.7297C18.9236 28.9205 19.2523 29.0184 19.5868 29.0093C19.9214 29.0184 20.2501 28.9205 20.5251 28.7297C20.9037 28.4886 21.3431 28.3605 21.7919 28.3605C22.2407 28.3605 22.6802 28.4886 23.0587 28.7297C23.3376 28.9121 23.6636 29.0092 23.9968 29.0092C24.3301 29.0092 24.6561 28.9121 24.935 28.7297C25.3135 28.4886 25.753 28.3605 26.2018 28.3605C26.6506 28.3605 27.09 28.4886 27.4686 28.7297C27.7475 28.9121 28.0735 29.0092 28.4067 29.0092C28.7399 29.0092 29.0659 28.9121 29.3448 28.7297C29.7237 28.4887 30.1635 28.3607 30.6126 28.3607C31.0617 28.3607 31.5014 28.4887 31.8804 28.7297C32.1597 28.912 32.4862 29.0091 32.8198 29.0091C33.1534 29.0091 33.4798 28.912 33.7592 28.7297C34.1342 28.4803 34.5766 28.3515 35.027 28.3606V29.0093C34.6917 28.9998 34.3621 29.0977 34.0864 29.2888C33.7115 29.5381 33.2694 29.6669 32.8193 29.6579Z" fill="white" />
                                        <path d="M32.8183 27.388C32.3682 27.3972 31.926 27.2684 31.5512 27.0189C31.276 26.8282 30.9472 26.7303 30.6126 26.7394C30.367 26.7309 30.1231 26.7833 29.9026 26.8918L29.6166 26.308C29.9262 26.1563 30.2679 26.0814 30.6126 26.0897C31.0633 26.0806 31.506 26.2097 31.881 26.4598C32.1606 26.6426 32.4875 26.7399 32.8216 26.7399C33.1556 26.7399 33.4825 26.6426 33.7621 26.4598C34.1363 26.2109 34.5776 26.0821 35.027 26.0907V26.7394C34.6924 26.7302 34.3635 26.828 34.0884 27.0186C33.7126 27.2685 33.2694 27.3974 32.8183 27.388Z" fill="white" />
                                        <path d="M28.4043 27.3879C27.9548 27.3973 27.5133 27.2686 27.1394 27.0191C26.8604 26.8366 26.5343 26.7395 26.201 26.7395C25.8676 26.7395 25.5415 26.8366 25.2625 27.0191C24.8839 27.2602 24.4444 27.3882 23.9955 27.3882C23.5467 27.3882 23.1072 27.2602 22.7286 27.0191C22.4496 26.8367 22.1236 26.7396 21.7903 26.7396C21.457 26.7396 21.131 26.8367 20.852 27.0191C20.4775 27.2683 20.0357 27.397 19.5859 27.3879C19.1358 27.3972 18.6937 27.2684 18.3191 27.0188C18.0439 26.8281 17.7151 26.7301 17.3805 26.7392C17.0471 26.7302 16.7197 26.828 16.4458 27.0181C16.0711 27.2682 15.6287 27.3972 15.1783 27.3879C14.7282 27.3972 14.2861 27.2684 13.9115 27.0188C13.6364 26.8281 13.3075 26.7301 12.9729 26.7392V26.0906C13.4231 26.0812 13.8653 26.21 14.24 26.4597C14.515 26.6504 14.8437 26.7484 15.1783 26.7392C15.513 26.7484 15.8419 26.6503 16.1169 26.4593C16.4908 26.2098 16.9323 26.0811 17.3818 26.0906C17.8318 26.0813 18.2739 26.2101 18.6486 26.4597C18.9236 26.6504 19.2523 26.7484 19.5868 26.7392C19.9215 26.7483 20.2503 26.6504 20.5254 26.4597C20.9041 26.2186 21.3436 26.0906 21.7924 26.0906C22.2413 26.0906 22.6808 26.2186 23.0594 26.4597C23.3383 26.642 23.6644 26.7391 23.9977 26.7391C24.3309 26.7391 24.657 26.642 24.9359 26.4597C25.3146 26.2184 25.7543 26.0903 26.2032 26.0903C26.6522 26.0903 27.0919 26.2184 27.4705 26.4597C27.7563 26.6518 28.0951 26.7495 28.4393 26.7389C28.4643 26.7392 28.4893 26.7379 28.5142 26.735L28.6005 27.3778C28.5354 27.3854 28.4698 27.3888 28.4043 27.3879Z" fill="white" />
                                        <path d="M32.8193 25.1174C32.3688 25.1266 31.9263 24.9978 31.5512 24.7483C31.272 24.5658 30.9456 24.4687 30.6121 24.4687C30.2785 24.4687 29.9522 24.5658 29.673 24.7483C29.2944 24.9893 28.855 25.1173 28.4062 25.1173C27.9574 25.1173 27.518 24.9893 27.1394 24.7483C26.8606 24.5659 26.5346 24.4688 26.2014 24.4688C25.8683 24.4688 25.5423 24.5659 25.2635 24.7483C24.8849 24.9893 24.4455 25.1174 23.9967 25.1174C23.5479 25.1174 23.1084 24.9893 22.7299 24.7483C22.451 24.5659 22.1251 24.4688 21.7919 24.4688C21.4588 24.4688 21.1328 24.5659 20.854 24.7483C20.4794 24.9979 20.0372 25.1267 19.5872 25.1174C19.1371 25.1267 18.695 24.9979 18.3204 24.7483C18.0455 24.5575 17.7169 24.4596 17.3824 24.4687C17.0481 24.4596 16.7196 24.5576 16.4448 24.7483C16.0708 24.9976 15.6294 25.1264 15.1799 25.1174C14.7298 25.1267 14.2875 24.9979 13.9128 24.7483C13.6374 24.5572 13.308 24.4592 12.9729 24.4687V23.8201C13.423 23.8108 13.8651 23.9396 14.2397 24.1892C14.5148 24.3799 14.8437 24.4778 15.1783 24.4687C15.5126 24.4778 15.8412 24.3799 16.1159 24.1892C16.49 23.9398 16.9314 23.811 17.3808 23.8201C17.8312 23.8105 18.2737 23.9393 18.6486 24.1892C18.9236 24.3799 19.2523 24.4779 19.5868 24.4687C19.9214 24.4779 20.2501 24.3799 20.5251 24.1892C20.9037 23.9481 21.3431 23.82 21.7919 23.82C22.2407 23.82 22.6802 23.9481 23.0587 24.1892C23.3376 24.3715 23.6636 24.4687 23.9968 24.4687C24.3301 24.4687 24.6561 24.3715 24.935 24.1892C25.3135 23.9481 25.753 23.82 26.2018 23.82C26.6506 23.82 27.09 23.9481 27.4686 24.1892C27.7475 24.3715 28.0735 24.4687 28.4067 24.4687C28.7399 24.4687 29.0659 24.3715 29.3448 24.1892C29.7237 23.9482 30.1635 23.8202 30.6126 23.8202C31.0617 23.8202 31.5014 23.9482 31.8804 24.1892C32.1597 24.3715 32.4862 24.4686 32.8198 24.4686C33.1534 24.4686 33.4798 24.3715 33.7592 24.1892C34.1342 23.9397 34.5766 23.8109 35.027 23.8201V24.4687C34.6917 24.4592 34.3621 24.5572 34.0864 24.7483C33.7115 24.9976 33.2694 25.1264 32.8193 25.1174Z" fill="white" />
                                        <path d="M28.1977 24.8425L27.5857 24.6278C27.7433 24.175 27.8077 23.6949 27.775 23.2165C27.7423 22.7381 27.6131 22.2713 27.3953 21.8441L25.1675 17.4815C25.1455 17.4385 25.1335 17.391 25.1322 17.3426C25.1309 17.2943 25.1404 17.2463 25.1601 17.2021C25.1798 17.1579 25.2091 17.1187 25.2459 17.0873C25.2827 17.0559 25.3261 17.0331 25.3728 17.0207L29.8125 15.8369C29.9572 15.799 30.0811 15.7056 30.1572 15.5769C30.2334 15.4482 30.2556 15.2946 30.2191 15.1496C30.1826 15.0045 30.0903 14.8798 29.9623 14.8025C29.8342 14.7252 29.6809 14.7015 29.5355 14.7367L24.1621 16.0211C24.0473 16.0482 23.9402 16.1014 23.8492 16.1766C23.7582 16.2518 23.6857 16.3469 23.6374 16.4546C23.5891 16.5623 23.5662 16.6797 23.5705 16.7976C23.5748 16.9156 23.6063 17.031 23.6623 17.1348L25.258 20.0992C25.2985 20.1745 25.3076 20.2628 25.2833 20.3448C25.259 20.4268 25.2033 20.4959 25.1283 20.537L23.0688 21.6722L22.7559 21.104L24.5338 20.1239L23.0919 17.4423C22.9887 17.2509 22.931 17.0383 22.9231 16.821C22.9152 16.6036 22.9574 16.3874 23.0465 16.189C23.1355 15.9907 23.269 15.8154 23.4366 15.6768C23.6041 15.5383 23.8014 15.4401 24.0129 15.3899L29.3838 14.1059C29.6964 14.0269 30.0277 14.0753 30.3046 14.2406C30.5816 14.4058 30.7816 14.6743 30.8606 14.9869C30.9396 15.2996 30.8911 15.6309 30.7259 15.9078C30.5607 16.1848 30.2922 16.3848 29.9795 16.4638L25.9274 17.5438L27.9733 21.5486C28.2309 22.0542 28.3836 22.6066 28.4221 23.1726C28.4607 23.7387 28.3844 24.3067 28.1977 24.8425V24.8425Z" fill="white" />
                                        <path d="M21.6222 21.7338L17.6809 23.9055L17.9938 24.4733L21.9351 22.3016L21.6222 21.7338Z" fill="white" />
                                        <path d="M31.1351 22.6851C30.654 22.6851 30.1837 22.5424 29.7837 22.2751C29.3837 22.0079 29.0719 21.628 28.8878 21.1835C28.7037 20.7391 28.6555 20.25 28.7494 19.7782C28.8432 19.3063 29.0749 18.8729 29.4151 18.5327C29.7553 18.1926 30.1887 17.9609 30.6605 17.8671C31.1324 17.7732 31.6215 17.8214 32.0659 18.0055C32.5104 18.1896 32.8903 18.5013 33.1576 18.9013C33.4248 19.3013 33.5675 19.7716 33.5675 20.2527C33.5668 20.8976 33.3103 21.5159 32.8543 21.9719C32.3983 22.4279 31.78 22.6844 31.1351 22.6851V22.6851ZM31.1351 18.4689C30.7823 18.4689 30.4374 18.5736 30.1441 18.7696C29.8507 18.9656 29.6221 19.2441 29.4871 19.5701C29.3521 19.896 29.3167 20.2547 29.3856 20.6007C29.4544 20.9467 29.6243 21.2645 29.8737 21.514C30.1232 21.7634 30.4411 21.9333 30.7871 22.0022C31.1331 22.071 31.4918 22.0357 31.8177 21.9006C32.1436 21.7656 32.4222 21.537 32.6182 21.2437C32.8142 20.9503 32.9189 20.6055 32.9189 20.2527C32.9183 19.7798 32.7301 19.3264 32.3957 18.9921C32.0613 18.6577 31.608 18.4695 31.1351 18.4689V18.4689Z" fill="white" />
                                    </svg>
                                ) : (
                                    <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="47" height="48" rx="13" fill="#006380" />
                                        <path d="M16.5 26.125C16.2033 26.125 15.9133 26.213 15.6666 26.3778C15.42 26.5426 15.2277 26.7769 15.1142 27.051C15.0006 27.3251 14.9709 27.6267 15.0288 27.9176C15.0867 28.2086 15.2296 28.4759 15.4393 28.6857C15.6491 28.8954 15.9164 29.0383 16.2074 29.0962C16.4983 29.1541 16.7999 29.1244 17.074 29.0108C17.3481 28.8973 17.5824 28.705 17.7472 28.4584C17.912 28.2117 18 27.9217 18 27.625C18 27.2272 17.842 26.8456 17.5607 26.5643C17.2794 26.283 16.8978 26.125 16.5 26.125ZM16.5 28.375C16.3517 28.375 16.2067 28.331 16.0833 28.2486C15.96 28.1662 15.8639 28.0491 15.8071 27.912C15.7503 27.775 15.7355 27.6242 15.7644 27.4787C15.7934 27.3332 15.8648 27.1996 15.9697 27.0947C16.0746 26.9898 16.2082 26.9184 16.3537 26.8894C16.4992 26.8605 16.65 26.8753 16.787 26.9321C16.9241 26.9889 17.0412 27.085 17.1236 27.2083C17.206 27.3317 17.25 27.4767 17.25 27.625C17.25 27.8239 17.171 28.0147 17.0303 28.1553C16.8897 28.296 16.6989 28.375 16.5 28.375Z" fill="white" />
                                        <path d="M31.5 26.125C31.2033 26.125 30.9133 26.213 30.6666 26.3778C30.42 26.5426 30.2277 26.7769 30.1142 27.051C30.0006 27.3251 29.9709 27.6267 30.0288 27.9176C30.0867 28.2086 30.2296 28.4759 30.4393 28.6857C30.6491 28.8954 30.9164 29.0383 31.2074 29.0962C31.4983 29.1541 31.7999 29.1244 32.074 29.0108C32.3481 28.8973 32.5824 28.705 32.7472 28.4584C32.912 28.2117 33 27.9217 33 27.625C33 27.2272 32.842 26.8456 32.5607 26.5643C32.2793 26.283 31.8978 26.125 31.5 26.125ZM31.5 28.375C31.3517 28.375 31.2067 28.331 31.0833 28.2486C30.96 28.1662 30.8639 28.0491 30.8071 27.912C30.7503 27.775 30.7355 27.6242 30.7644 27.4787C30.7933 27.3332 30.8648 27.1996 30.9697 27.0947C31.0746 26.9898 31.2082 26.9184 31.3537 26.8894C31.4992 26.8605 31.65 26.8753 31.787 26.9321C31.9241 26.9889 32.0412 27.085 32.1236 27.2083C32.206 27.3317 32.25 27.4767 32.25 27.625C32.25 27.8239 32.171 28.0147 32.0303 28.1553C31.8897 28.296 31.6989 28.375 31.5 28.375Z" fill="white" />
                                        <path d="M20.625 28H27.375V28.75H20.625V28Z" fill="white" />
                                        <path d="M20.625 26.5H27.375V27.25H20.625V26.5Z" fill="white" />
                                        <path d="M22.875 20.875H25.125V21.625H22.875V20.875Z" fill="white" />
                                        <path d="M35.25 24.25V23.5C35.2491 23.2019 35.1303 22.9163 34.9195 22.7055C34.7087 22.4947 34.4231 22.3759 34.125 22.375H32.64L31.8638 19.6525L31.6312 18.7263C31.5702 18.483 31.4297 18.2672 31.232 18.113C31.0343 17.9587 30.7907 17.875 30.54 17.875H27.375V16.375C27.3744 16.1763 27.2952 15.9858 27.1547 15.8453C27.0142 15.7048 26.8237 15.6256 26.625 15.625H21.375C21.1763 15.6256 20.9858 15.7048 20.8453 15.8453C20.7048 15.9858 20.6256 16.1763 20.625 16.375V17.875H17.46C17.2093 17.875 16.9657 17.9587 16.768 18.113C16.5703 18.2672 16.4298 18.483 16.3687 18.7263L16.14 19.6487L15.36 22.375H13.875C13.5769 22.3759 13.2913 22.4947 13.0805 22.7055C12.8697 22.9163 12.7509 23.2019 12.75 23.5V24.25C12.7506 24.44 12.7994 24.6267 12.8919 24.7926C12.9844 24.9586 13.1175 25.0983 13.2788 25.1987C12.9398 25.5471 12.75 26.0139 12.75 26.5V31C12.7505 31.1573 12.7842 31.3128 12.8488 31.4562C12.9134 31.5996 13.0075 31.7279 13.125 31.8325V33.25C13.1259 33.5481 13.2447 33.8337 13.4555 34.0445C13.6663 34.2553 13.9519 34.3741 14.25 34.375H17.25C17.5481 34.3741 17.8337 34.2553 18.0445 34.0445C18.2553 33.8337 18.3741 33.5481 18.375 33.25V32.125H29.625V33.25C29.6259 33.5481 29.7447 33.8337 29.9555 34.0445C30.1663 34.2553 30.4519 34.3741 30.75 34.375H33.75C34.0481 34.3741 34.3337 34.2553 34.5445 34.0445C34.7553 33.8337 34.8741 33.5481 34.875 33.25V31.8325C34.9925 31.7279 35.0866 31.5996 35.1512 31.4562C35.2158 31.3128 35.2495 31.1573 35.25 31V26.5C35.25 26.0139 35.0602 25.5471 34.7213 25.1987C34.8825 25.0983 35.0156 24.9586 35.1081 24.7926C35.2006 24.6267 35.2494 24.44 35.25 24.25ZM21.375 16.375H26.625V17.875H21.375V16.375ZM17.0963 18.91C17.1163 18.8287 17.1631 18.7565 17.229 18.7048C17.2949 18.6532 17.3763 18.6251 17.46 18.625H30.54C30.6237 18.6251 30.7051 18.6532 30.771 18.7048C30.8369 18.7565 30.8836 18.8287 30.9037 18.91L31.02 19.375H16.98L17.0963 18.91ZM16.7812 20.125H31.2188L32.5012 24.625H21.7162C21.6281 24.1009 21.3571 23.6251 20.9514 23.2819C20.5456 22.9387 20.0314 22.7504 19.5 22.7504C18.9686 22.7504 18.4544 22.9387 18.0486 23.2819C17.6429 23.6251 17.3719 24.1009 17.2838 24.625H15.4987L16.7812 20.125ZM20.9475 24.625H18.0525C18.1344 24.3032 18.3211 24.0179 18.5833 23.8141C18.8454 23.6103 19.168 23.4997 19.5 23.4997C19.832 23.4997 20.1546 23.6103 20.4167 23.8141C20.6789 24.0179 20.8656 24.3032 20.9475 24.625ZM13.5 23.5C13.5 23.4005 13.5395 23.3052 13.6098 23.2348C13.6802 23.1645 13.7755 23.125 13.875 23.125H15.1463L14.7188 24.625H13.875C13.7755 24.625 13.6802 24.5855 13.6098 24.5152C13.5395 24.4448 13.5 24.3495 13.5 24.25V23.5ZM17.625 33.25C17.625 33.3495 17.5855 33.4448 17.5152 33.5152C17.4448 33.5855 17.3495 33.625 17.25 33.625H14.25C14.1505 33.625 14.0552 33.5855 13.9848 33.5152C13.9145 33.4448 13.875 33.3495 13.875 33.25V32.125H17.625V33.25ZM34.125 33.25C34.125 33.3495 34.0855 33.4448 34.0152 33.5152C33.9448 33.5855 33.8495 33.625 33.75 33.625H30.75C30.6505 33.625 30.5552 33.5855 30.4848 33.5152C30.4145 33.4448 30.375 33.3495 30.375 33.25V32.125H34.125V33.25ZM34.5 31C34.5 31.0995 34.4605 31.1948 34.3902 31.2652C34.3198 31.3355 34.2245 31.375 34.125 31.375H13.875C13.7755 31.375 13.6802 31.3355 13.6098 31.2652C13.5395 31.1948 13.5 31.0995 13.5 31V30.625H34.5V31ZM34.5 29.875H13.5V26.5C13.5009 26.2019 13.6197 25.9163 13.8305 25.7055C14.0413 25.4947 14.3269 25.3759 14.625 25.375H33.375C33.6731 25.3759 33.9587 25.4947 34.1695 25.7055C34.3803 25.9163 34.4991 26.2019 34.5 26.5V29.875ZM34.5 24.25C34.5 24.3495 34.4605 24.4448 34.3902 24.5152C34.3198 24.5855 34.2245 24.625 34.125 24.625H33.2812L32.8538 23.125H34.125C34.2245 23.125 34.3198 23.1645 34.3902 23.2348C34.4605 23.3052 34.5 23.4005 34.5 23.5V24.25Z" fill="white" />
                                    </svg>
                                )
                            }
                        </div>
                        <div className="step_body">
                            <h6>{step.title}</h6>
                            <p>{step.description}</p>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <section id="easy_and_fast">
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-lg-6">
                        <div>
                            <div className="title">
                                <p>Easy and Fast</p>
                                <h1>Book your next trip in 3 easy steps</h1>
                            </div>
                            <div>
                                {
                                    renderSteps()
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="card_container">
                            <div className="card_block">
                                <div className="card_img">
                                    <img src="/images/easy-and-fast/Rectangle.png" alt="city" />
                                </div>
                                <div className="card_body">
                                    <h6>Trip To Greece</h6>
                                    <div className="descrip">
                                        <p className="date">14-29 June</p>
                                        <p>by Robbin joseph</p>
                                    </div>
                                    <div className="block_icon">
                                        <button className="btn">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M13.6544 0.150827C13.2855 0.0428744 4.26244 -0.855475 1.09361 3.42567C-0.309832 5.32223 -0.330914 7.9221 1.02328 11.1525C0.679764 11.8655 0.379038 12.6166 0.133956 13.4091C0.0594447 13.6499 0.194222 13.9052 0.434764 13.9795C0.479608 13.9934 0.525026 14 0.56987 14C0.764338 14 0.944888 13.8744 1.00515 13.6787C3.42037 5.87028 11.2693 2.09267 13.6762 1.13835C13.9105 1.0454 14.2235 0.317405 13.6544 0.150827Z" fill="#84829A" />
                                                    <path d="M2.47192 12.1298C3.77832 12.6778 5.08453 12.9587 6.29922 12.9587C7.39103 12.9587 8.40923 12.7342 9.28663 12.279C11.0525 11.363 12.1315 9.61081 12.4071 7.21132C12.6878 4.7659 13.0373 3.23416 13.3289 2.29712C10.7336 3.49428 5.16878 6.5974 2.47192 12.1298Z" fill="#84829A" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect width="14" height="14" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                        <button className="btn">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M13.5009 3.56123e-08C13.4232 -2.92608e-05 13.3466 0.0180173 13.2771 0.0527336L9.48821 1.94771L5.20378 0.0432416C5.19678 0.0402533 5.18878 0.039726 5.18128 0.0367378C5.16201 0.0295308 5.14229 0.0235251 5.12228 0.0187497C5.10239 0.0133885 5.08217 0.00919911 5.06178 0.00624017C5.02118 0.00290038 4.98037 0.00290038 4.93979 0.00624017C4.9194 0.00919911 4.89919 0.0133885 4.8793 0.0187497C4.85929 0.0235251 4.83957 0.0295308 4.82029 0.0367378C4.81279 0.039726 4.80479 0.040224 4.79779 0.0432416L0.297862 2.04322C0.11722 2.12343 0.000825201 2.30255 0.000854498 2.50019V13.5C0.000942387 13.6692 0.0865172 13.8268 0.228341 13.919C0.370195 14.0114 0.549108 14.0257 0.703822 13.957L5.00076 12.047L9.29769 13.957C9.30519 13.96 9.31319 13.957 9.32069 13.9615C9.44174 14.0157 9.5807 14.0126 9.69917 13.953C9.70717 13.9496 9.71616 13.953 9.72416 13.9475L13.7241 11.9476C13.8936 11.8629 14.0007 11.6896 14.0006 11.5V0.500237C14.0008 0.224088 13.777 0.000117221 13.5009 3.56123e-08ZM4.50079 11.1751L1.00083 12.7305V2.8252L4.50079 1.26971V11.1751ZM9.00072 12.7305L5.50076 11.1751V1.26971L9.00072 2.82517V12.7305ZM13.0006 11.1911L10.0007 12.691V2.80918L13.0006 1.3092V11.1911Z" fill="#84829A" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect width="14" height="14" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                        <button className="btn">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.3433 1.24239L6.02577 7.58322C5.95335 7.54126 5.87719 7.50611 5.79827 7.47822L1.62744 6.06656C1.5013 6.03495 1.38935 5.9621 1.30935 5.85958C1.22936 5.75706 1.18591 5.63076 1.18591 5.50072C1.18591 5.37069 1.22936 5.24439 1.30935 5.14187C1.38935 5.03935 1.5013 4.9665 1.62744 4.93489L11.9758 1.25406C12.0434 1.23109 12.1143 1.21927 12.1858 1.21906C12.2392 1.2182 12.2924 1.22608 12.3433 1.24239Z" fill="#84829A" />
                                                <path d="M12.7459 2.02424L9.06503 12.3842C9.02444 12.505 8.94545 12.6091 8.84012 12.6807C8.73478 12.7524 8.6089 12.7875 8.4817 12.7809C8.35303 12.7868 8.22602 12.7499 8.1205 12.6761C8.01498 12.6022 7.93687 12.4955 7.89836 12.3726L6.51003 8.20174C6.48214 8.12282 6.44699 8.04666 6.40503 7.97424L12.7575 1.65674C12.7934 1.77729 12.7893 1.9062 12.7459 2.02424Z" fill="#84829A" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="block_footer">
                                        <p>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.266665 15.4667H1.86667V6.66667C1.86667 6.5194 1.98607 6.4 2.13333 6.4H5.86667V0.266667C5.86667 0.1194 5.98607 0 6.13333 0H13.0667C13.2139 0 13.3333 0.1194 13.3333 0.266667V15.4667H15.7333C15.8806 15.4667 16 15.5861 16 15.7333C16 15.8806 15.8806 16 15.7333 16H0.266665C0.119399 16 0 15.8806 0 15.7333C0 15.5861 0.119399 15.4667 0.266665 15.4667ZM10.4 15.4667H11.4667V13.0667C11.4667 12.9194 11.3473 12.8 11.2 12.8H10.6667C10.5194 12.8 10.4 12.9194 10.4 13.0667V15.4667ZM9.33333 6.66667V15.4667H9.86667V13.0667C9.86667 12.6248 10.2248 12.2667 10.6667 12.2667H11.2C11.6418 12.2667 12 12.6248 12 13.0667V15.4667H12.8V0.533333H6.4V6.4H9.06667C9.21393 6.4 9.33333 6.5194 9.33333 6.66667ZM2.4 15.4667H8.8V6.93333H2.4V15.4667Z" fill="#84829A" />
                                                <path d="M7.46658 3.7334H9.06659C9.21385 3.7334 9.33325 3.8528 9.33325 4.00007V5.60007C9.33325 5.74733 9.21385 5.86673 9.06659 5.86673H7.46658C7.31932 5.86673 7.19992 5.74733 7.19992 5.60007V4.00007C7.19992 3.8528 7.31932 3.7334 7.46658 3.7334ZM7.73325 5.3334H8.79992V4.26673H7.73325V5.3334Z" fill="#84829A" />
                                                <path d="M7.46658 1.06665H9.06659C9.21385 1.06665 9.33325 1.18605 9.33325 1.33332V2.93332C9.33325 3.08058 9.21385 3.19998 9.06659 3.19998H7.46658C7.31932 3.19998 7.19992 3.08058 7.19992 2.93332V1.33332C7.19992 1.18605 7.31932 1.06665 7.46658 1.06665ZM7.73325 2.66665H8.79992V1.59998H7.73325V2.66665Z" fill="#84829A" />
                                                <path d="M10.1333 3.7334H11.7333C11.8806 3.7334 12 3.8528 12 4.00007V5.60007C12 5.74733 11.8806 5.86673 11.7333 5.86673H10.1333C9.98607 5.86673 9.86667 5.74733 9.86667 5.60007V4.00007C9.86667 3.8528 9.98607 3.7334 10.1333 3.7334ZM10.4 5.3334H11.4667V4.26673H10.4V5.3334Z" fill="#84829A" />
                                                <path d="M10.1333 1.06665H11.7333C11.8806 1.06665 12 1.18605 12 1.33332V2.93332C12 3.08058 11.8806 3.19998 11.7333 3.19998H10.1333C9.98607 3.19998 9.86667 3.08058 9.86667 2.93332V1.33332C9.86667 1.18605 9.98607 1.06665 10.1333 1.06665ZM10.4 2.66665H11.4667V1.59998H10.4V2.66665Z" fill="#84829A" />
                                                <path d="M10.1333 6.3999H11.7333C11.8806 6.3999 12 6.5193 12 6.66657V8.26657C12 8.41384 11.8806 8.53324 11.7333 8.53324H10.1333C9.98607 8.53324 9.86667 8.41384 9.86667 8.26657V6.66657C9.86667 6.5193 9.98607 6.3999 10.1333 6.3999ZM10.4 7.9999H11.4667V6.93324H10.4V7.9999Z" fill="#84829A" />
                                                <path d="M10.1333 9.06665H11.7333C11.8806 9.06665 12 9.18605 12 9.33332V10.9333C12 11.0806 11.8806 11.2 11.7333 11.2H10.1333C9.98607 11.2 9.86667 11.0806 9.86667 10.9333V9.33332C9.86667 9.18605 9.98607 9.06665 10.1333 9.06665ZM10.4 10.6667H11.4667V9.59998H10.4V10.6667Z" fill="#84829A" />
                                                <path d="M5.06659 12.2666H3.46659C3.31932 12.2666 3.19992 12.1472 3.19992 12V10.4C3.19992 10.2527 3.31932 10.1333 3.46659 10.1333H5.06659C5.21385 10.1333 5.33325 10.2527 5.33325 10.4V12C5.33325 12.1472 5.21385 12.2666 5.06659 12.2666ZM4.79992 10.6666H3.73325V11.7333H4.79992V10.6666Z" fill="#84829A" />
                                                <path d="M5.06659 9.59989H3.46659C3.31932 9.59989 3.19992 9.48049 3.19992 9.33322V7.73322C3.19992 7.58595 3.31932 7.46655 3.46659 7.46655H5.06659C5.21385 7.46655 5.33325 7.58595 5.33325 7.73322V9.33322C5.33325 9.48049 5.21385 9.59989 5.06659 9.59989ZM4.79992 7.99989H3.73325V9.06655H4.79992V7.99989Z" fill="#84829A" />
                                                <path d="M5.06659 14.9334H3.46659C3.31932 14.9334 3.19992 14.814 3.19992 14.6667V13.0667C3.19992 12.9194 3.31932 12.8 3.46659 12.8H5.06659C5.21385 12.8 5.33325 12.9194 5.33325 13.0667V14.6667C5.33325 14.814 5.21385 14.9334 5.06659 14.9334ZM4.79992 13.3334H3.73325V14.4H4.79992V13.3334Z" fill="#84829A" />
                                                <path d="M7.73333 12.2666H6.13333C5.98607 12.2666 5.86667 12.1472 5.86667 12V10.4C5.86667 10.2527 5.98607 10.1333 6.13333 10.1333H7.73333C7.8806 10.1333 8 10.2527 8 10.4V12C8 12.1472 7.8806 12.2666 7.73333 12.2666ZM7.46667 10.6666H6.4V11.7333H7.46667V10.6666Z" fill="#84829A" />
                                                <path d="M7.73333 9.59989H6.13333C5.98607 9.59989 5.86667 9.48049 5.86667 9.33322V7.73322C5.86667 7.58595 5.98607 7.46655 6.13333 7.46655H7.73333C7.8806 7.46655 8 7.58595 8 7.73322V9.33322C8 9.48049 7.8806 9.59989 7.73333 9.59989ZM7.46667 7.99989H6.4V9.06655H7.46667V7.99989Z" fill="#84829A" />
                                                <path d="M7.73333 14.9334H6.13333C5.98607 14.9334 5.86667 14.814 5.86667 14.6667V13.0667C5.86667 12.9194 5.98607 12.8 6.13333 12.8H7.73333C7.8806 12.8 8 12.9194 8 13.0667V14.6667C8 14.814 7.8806 14.9334 7.73333 14.9334ZM7.46667 13.3334H6.4V14.4H7.46667V13.3334Z" fill="#84829A" />
                                            </svg>
                                            24 people going
                                        </p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3644 2.45457C17.33 1.34265 15.8804 0.709981 14.3617 0.707636C12.8417 0.709395 11.3906 1.34173 10.3546 2.45386L10.0015 2.82698L9.64836 2.45386C7.59251 0.241198 4.13215 0.114128 1.91953 2.16998C1.82148 2.26112 1.72679 2.35577 1.63565 2.45386C-0.545218 4.80619 -0.545218 8.44162 1.63565 10.794L9.48255 19.069C9.75403 19.3556 10.2064 19.3679 10.493 19.0964C10.5024 19.0875 10.5115 19.0784 10.5204 19.069L18.3645 10.794C20.5452 8.44187 20.5452 4.80665 18.3644 2.45457ZM17.3302 9.80969H17.3294L10.0015 17.5386L2.67282 9.80969C1.00676 8.01229 1.00676 5.23481 2.67282 3.43741C4.1858 1.79757 6.74172 1.69475 8.38156 3.20773C8.46118 3.28119 8.53778 3.35779 8.61124 3.43741L9.48255 4.35663C9.76969 4.64193 10.2333 4.64193 10.5204 4.35663L11.3917 3.43812C12.9047 1.79828 15.4606 1.69546 17.1005 3.20844C17.1801 3.2819 17.2567 3.35851 17.3302 3.43812C19.0107 5.23837 19.023 8.02092 17.3302 9.80969Z" fill="#4152CA" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ongoing">
                                    <div className="user">
                                        <img src="/images/easy-and-fast/img.png" alt="img" />
                                    </div>
                                    <div className="w-100">
                                        <p>Ongoing</p>
                                        <h5>Trip to rome</h5>
                                        <h6>
                                            <span>40%</span>
                                            completed
                                        </h6>
                                        <div className="progress_block">
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: "40%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg_filter"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EasyAndFast
