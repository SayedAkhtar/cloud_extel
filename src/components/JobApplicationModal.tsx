import React from "react";

interface JobApplicationModalProps {
  job: any;
  onClose: () => void;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  job,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-[#F5FAFE] p-6 w-full max-w-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.37207 1.50024L22.9995 24.1277" stroke="#7B8897" />
            <path d="M0.371826 23.1274L22.9992 0.500025" stroke="#7B8897" />
          </svg>
        </button>
        <svg
          width="90"
          height="82"
          viewBox="0 0 90 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5856_15870)">
            <path
              d="M48.7241 48.6834C47.5562 49.9973 46.1547 51.2236 44.6656 52.1579C43.7897 52.7127 42.8554 53.1506 41.9502 53.6178C41.921 53.647 41.921 53.6762 41.8918 53.7054C41.5999 54.085 41.3079 54.5229 41.3955 54.9901C41.5123 55.5448 42.0962 55.866 42.651 55.9828C44.1401 56.304 46.3299 56.1288 47.7898 55.7492C50.8263 54.9901 53.8337 53.6762 55.9359 51.3112C58.0965 48.8878 59.06 45.7344 59.352 42.5811C59.6732 39.2818 59.9068 36.2744 58.5929 33.0919C58.2133 32.1575 57.717 31.2524 56.9578 30.5809C56.1987 29.9093 55.1476 29.5297 54.1548 29.7925C53.2789 30.0261 52.5782 30.756 52.1986 31.5736C51.819 32.3911 51.7314 33.3254 51.7022 34.2598C51.6438 36.6832 51.7314 38.289 51.5271 40.7124C51.2935 43.457 50.5343 46.6396 48.7241 48.6834Z"
              fill="white"
            />
            <path
              d="M49.6295 24.0697C50.1843 23.3689 51.0018 21.5879 50.0967 20.8288C49.9507 20.712 49.7755 20.6536 49.6295 20.5952C49.0747 20.42 48.52 20.3324 47.9652 20.1864C47.1185 19.9236 46.0966 19.5441 45.8922 18.6097C45.717 17.8214 45.8338 17.0039 45.717 16.2155C48.5784 16.1571 49.5419 13.3834 49.8923 10.9891C50.0967 9.70445 50.0383 8.53654 49.9215 7.28105C49.7755 5.82116 49.9799 4.41968 49.7171 2.95979C49.6879 2.75541 49.6295 2.55103 49.4835 2.43424C49.3375 2.31745 49.1331 2.28825 48.9288 2.25905C47.1185 2.11306 45.3082 2.05467 43.5272 2.34664C42.0089 2.58023 39.3519 3.13498 38.7096 4.74085C37.9212 6.69709 37.8337 8.82852 37.9504 10.9016C38.038 12.5366 38.3592 14.1717 38.4468 15.836C38.5052 16.9455 38.4176 18.2302 37.8045 19.1937C37.5417 19.6316 37.1913 20.0112 36.7241 20.2448C36.1402 20.5368 35.7022 20.2448 35.2351 20.7704C34.8263 21.2375 34.5343 22.055 34.6803 22.6682C34.8263 23.3105 35.3519 23.7777 35.8774 24.1865C37.3373 25.2668 38.9432 26.1427 40.6658 26.7267C41.425 26.9895 42.1841 27.1938 43.0016 27.1646C44.0527 27.1354 45.0455 26.7267 46.0382 26.3179C47.0893 25.8799 48.1988 25.4128 49.0455 24.6244C49.2499 24.5077 49.4543 24.3033 49.6295 24.0697Z"
              fill="white"
            />
            <path
              d="M23.0591 32.5955C23.3803 28.537 25.2197 24.3618 28.957 22.3179C31.2345 21.0624 33.7163 20.7121 36.1981 20.1281C36.2564 20.0989 36.344 20.0989 36.4316 20.1281C36.5192 20.1573 36.5776 20.2741 36.636 20.3617C37.8331 22.6391 40.4025 24.1574 42.9719 24.0698C45.6581 23.9822 47.7019 22.3471 49.1326 20.2157C50.9721 20.8288 52.7823 21.5296 54.3882 22.5807C59.6146 26.0844 59.9357 33.4714 60.6365 39.1358C59.9357 39.165 52.2568 40.4205 52.3151 40.1869C52.0816 41.3256 52.286 41.1504 52.2568 42.2599C52.1692 44.3329 52.0232 46.406 51.8188 48.479C51.6144 50.844 51.2348 53.1506 50.7093 55.4572C45.3369 57.2383 39.2054 56.8003 33.4243 56.2748C31.7892 56.1288 30.0665 55.9536 28.6651 55.1361C24.665 52.8003 24.4898 45.8512 23.935 41.8219C23.4679 38.6978 22.8255 35.778 23.0591 32.5955Z"
              fill="#37C4CD"
            />
            <path
              d="M63.3229 72.8882C63.4397 71.9539 62.9141 70.9027 62.0966 70.2896C60.9871 69.4721 59.5856 69.2677 58.2717 68.8589C56.8118 68.3917 55.4395 67.6326 54.0381 67.0195C52.6366 66.4063 51.1183 65.8807 49.5708 65.9391C48.0233 65.9975 46.4467 66.6983 45.6875 68.0414C45.0452 69.1509 45.1912 70.5524 45.9211 71.5743C46.6803 72.6254 47.5854 72.3918 48.7825 72.5086C50.9431 72.7422 53.0161 73.3845 55.06 74.1145C57.3082 74.8736 58.8849 75.1656 61.2207 74.6692C61.8338 74.5232 62.4762 74.3189 62.9141 73.8517C63.1477 73.5597 63.2937 73.2385 63.3229 72.8882Z"
              fill="#172536"
            />
            <path
              d="M55.877 72.2458C55.6726 72.7714 55.3806 73.2677 55.001 73.6765C54.9134 73.7641 54.8258 73.8809 54.709 73.8809C54.4463 73.9101 54.3295 73.5889 54.3003 73.3261C54.2127 72.7422 54.1251 72.129 54.0375 71.5451C53.6871 71.9246 53.3952 72.3334 53.1908 72.8006C53.074 73.0633 52.8988 73.4137 52.6068 73.4429C52.2272 73.4721 52.0521 73.0342 51.9645 72.6838C51.8185 72.0414 51.6433 71.3991 51.4973 70.7275"
              stroke="#37C4CD"
              stroke-width="0.291976"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M76.9579 49.2674C75.79 47.9827 74.0966 47.136 72.3739 46.8148C69.9505 46.3768 67.4687 46.8148 65.1037 47.4571C60.0817 48.8294 55.3809 51.1361 50.3589 52.4207C48.1107 53.0047 46.68 52.7711 44.4902 52.5959C41.7164 52.3623 38.8842 52.6543 36.0812 52.4791C33.4827 52.3332 30.6505 52.1288 28.2271 52.8295C27.9059 52.6251 27.5847 52.4207 27.2636 52.1872C24.5482 50.4061 21.8328 48.6542 18.4167 49.2966C15.7305 49.793 13.1319 51.1652 11.4676 53.3551C9.68658 55.6909 10.2413 58.7274 11.818 61.0632C13.1319 62.9903 15.0589 64.421 17.0736 65.6181C23.9934 69.7349 31.5556 72.2751 39.7309 71.7204C40.8113 71.6328 42.1252 71.6328 42.9135 72.5087C43.2055 72.8299 43.3807 74.6401 44.0522 74.5526C44.8697 74.465 46.4172 74.2314 47.1763 73.9686C51.2932 72.4795 55.4393 70.9904 59.5561 69.5306C63.1767 68.2167 66.8264 66.9028 70.1257 64.9465C72.9871 63.2239 75.5565 60.9173 77.0747 57.9391C78.155 55.7785 79.0602 52.9463 77.9215 50.6981C77.6587 50.1433 77.3375 49.6762 76.9579 49.2674Z"
              fill="#1456A2"
            />
            <path
              d="M25.7454 55.4572C29.8622 57.501 34.1835 58.8149 38.3587 60.7127C39.9354 61.4135 41.4829 62.1142 43.0596 62.815C43.9355 63.2237 44.8406 63.6033 45.7166 64.0413"
              stroke="#172536"
              stroke-width="0.291976"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.9207 75.6911C31.147 73.7641 33.0449 72.2166 34.1252 70.2311C34.3588 69.7932 34.5632 69.3552 34.8843 69.0048C35.4975 68.3917 36.6362 68.4793 37.4537 68.3917C38.5632 68.2749 39.6435 68.1289 40.7531 68.0121C40.8114 68.0121 40.899 67.9829 40.9574 68.0121C41.191 68.8589 41.6874 69.6472 42.0961 70.4355C42.3297 70.9027 43.0013 72.5962 43.0889 72.8881C42.6509 73.2385 41.6582 73.5305 41.045 73.7641C39.7311 74.2604 38.388 74.7568 37.3369 75.6911C36.5486 76.3918 35.9938 77.2678 35.4099 78.1145C34.8259 78.9612 34.1836 79.808 33.3369 80.4211C32.4901 81.0051 31.3514 81.2971 30.3879 80.9175C28.2857 80.0416 29.0156 77.0926 29.9207 75.6911Z"
              fill="#172536"
            />
            <path
              d="M47.0886 56.5666C47.3806 56.4207 47.6142 56.1579 47.7894 55.6323C48.0814 54.7856 47.9062 53.7929 47.439 53.0337C46.7675 51.9826 45.5996 51.3403 44.3733 51.0191C43.1762 50.6979 41.8915 50.6103 40.6652 50.4643C38.5629 50.1724 36.4899 49.6176 34.5629 48.7417C33.6285 48.3329 32.6942 47.8366 32.1103 47.019C31.4387 46.1139 31.2927 44.9752 31.1467 43.8657C30.9423 42.2306 30.738 40.5663 30.5336 38.9313C30.3584 37.5006 30.1832 36.0407 29.4825 34.7852C28.7817 33.5297 27.4386 32.5078 26.0079 32.6246C24.7816 32.7122 23.7305 33.6173 23.1174 34.6976C22.1247 36.4495 21.6575 39.0773 21.3363 41.0627C20.986 43.2817 21.2195 45.5299 21.6283 47.749C22.1539 50.6103 23.7597 53.0337 26.3291 54.4644C32.0811 57.647 39.4389 57.4426 45.7747 56.8586C46.3295 56.7418 46.7383 56.7126 47.0886 56.5666Z"
              fill="white"
            />
            <path
              d="M44.8696 0.945143C45.5703 1.00354 46.2711 1.00354 46.9426 1.00354C48.1689 0.974341 49.512 0.915945 50.4463 1.70428C51.0595 2.20064 51.3807 3.04737 51.2639 3.83571C51.1471 4.62405 50.6215 5.32479 49.9208 5.67516C47.9937 6.55109 44.1981 3.77731 43.1761 6.25911C42.7674 7.22264 42.9134 8.06937 42.1542 8.8869C41.5119 9.55845 40.6943 9.82123 40.3732 10.7556C40.1104 11.4855 39.9936 12.303 39.5264 12.9746C39.4096 13.1498 39.2637 13.2957 39.1469 13.4417C38.9133 13.7045 38.6797 13.9965 38.4169 14.2593C37.4826 13.5877 36.2855 13.7921 35.6431 12.5366C35.4972 12.2738 35.4096 11.9819 35.2052 11.7775C34.738 11.3103 33.8621 11.2811 33.5993 10.6972C33.3365 10.1132 33.9205 9.47085 33.8913 8.8577C33.8621 8.09857 33.0446 7.54381 33.0446 6.81387C33.0446 5.79195 34.4168 5.38318 34.7964 4.41966C35.2636 3.16416 34.738 2.60941 35.8183 1.64589C37.7746 -0.105972 40.3148 -0.0475768 42.6798 0.623969C43.3805 0.769957 44.1105 0.886748 44.8696 0.945143Z"
              fill="#172536"
            />
            <path
              d="M43.6147 8.85781L41.2205 8.21546C40.8994 8.12787 40.5782 8.21546 40.3154 8.41985L39.3227 9.26658"
              stroke="#37C4CD"
              stroke-width="0.583953"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M65.7175 51.4862C61.0751 53.5884 57.3378 57.2089 53.1041 60.0411C49.1625 62.6981 44.7828 64.6251 40.4324 66.5522C40.666 67.0485 40.7535 67.5449 40.9871 68.0413"
              stroke="#172536"
              stroke-width="0.291976"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M45.8625 12.0403C46.1545 12.9454 47.2348 13.5002 48.1399 13.179"
              stroke="#1C1C1B"
              stroke-width="0.291976"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M41.1623 11.7774C39.4396 12.2154 38.3885 10.4051 38.9141 9.23724C39.644 7.60217 41.9214 7.86495 42.3594 9.58761"
              fill="white"
            />
            <path
              d="M40.2859 9.09139C40.6071 9.0038 40.9867 9.06219 41.2494 9.23738C41.5122 9.41256 41.6874 9.70454 41.6582 9.96732"
              stroke="#1C1C1B"
              stroke-width="0.291976"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32.49 42.6103C31.2345 42.2307 29.9498 42.0263 28.6651 41.8511C27.2928 41.6468 25.9497 41.4716 24.5775 41.238C23.322 41.0044 22.0373 40.8 20.7818 40.5664C20.8986 39.5153 21.0154 38.4642 21.1613 37.4131C21.8621 32.4787 23.1468 27.6903 26.6797 24.1282L33.074 29.9677C32.4316 32.5663 32.49 40.1285 32.49 42.6103Z"
              fill="#37C4CD"
            />
            <path
              d="M32.5484 59.1068H58.8847C59.2643 59.1068 59.5854 58.7856 59.5854 58.4061C59.5854 58.0265 59.2643 57.7053 58.8847 57.7053H32.5484C32.1689 57.7053 31.8477 58.0265 31.8477 58.4061C31.8477 58.7856 32.1397 59.1068 32.5484 59.1068Z"
              fill="#172536"
            />
            <path
              d="M36.4313 58.1434H59.4975L64.2859 46.3767C64.4319 45.9971 64.1691 45.5884 63.7311 45.5884H41.9497C41.7161 45.5884 41.4825 45.7344 41.3949 45.9387L36.4313 58.1434Z"
              fill="#172536"
            />
            <path
              d="M52.782 51.8658C52.5484 52.5082 51.7017 53.0046 50.9425 53.0046C50.1542 53.0046 49.7454 52.479 49.979 51.8658"
              fill="white"
            />
            <path
              d="M52.3152 40.1576C52.5196 37.413 52.4904 33.3837 52.3444 30.6392"
              stroke="#172536"
              stroke-width="0.291976"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M45.7459 16.0697L45.8043 16.2157C45.7459 16.6244 45.7751 17.0332 45.8335 17.442C45.7459 17.4128 45.6291 17.3836 45.5415 17.3544C44.6364 17.0624 43.8773 16.3324 43.4977 15.4857C44.1984 15.8361 44.9868 16.0405 45.7459 16.0697Z"
              fill="#172536"
            />
            <path
              d="M31.2344 42.1431C31.0592 38.4642 31.5556 35.7196 32.3147 32.1283"
              stroke="#172536"
              stroke-width="0.291976"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48.1103 8.79947C48.1103 9.76299 48.8986 10.5513 49.8622 10.5513C50.8257 10.5513 51.614 9.76299 51.614 8.79947C51.614 7.83594 50.8257 7.04761 49.8622 7.04761C48.8694 7.04761 48.1103 7.83594 48.1103 8.79947Z"
              stroke="#37C4CD"
              stroke-width="0.583953"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M43.614 8.85782C43.614 9.82134 44.4023 10.6097 45.3658 10.6097C46.3293 10.6097 47.1177 9.82134 47.1177 8.85782C47.1177 7.89429 46.3293 7.10596 45.3658 7.10596C44.3731 7.10596 43.614 7.89429 43.614 8.85782Z"
              stroke="#37C4CD"
              stroke-width="0.583953"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48.1101 8.79944L47.0882 8.85783"
              stroke="#37C4CD"
              stroke-width="0.583953"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M39.4675 72.3335C39.8763 73.151 40.1682 74.0562 40.3142 74.9613C40.3142 75.0489 40.3434 75.1365 40.285 75.2241C40.1974 75.3701 39.9931 75.3409 39.8471 75.2825C39.0003 74.9321 38.4456 73.9394 37.5113 73.881C37.6864 74.8153 38.4456 75.6328 38.358 76.5671C38.358 76.6547 38.3288 76.7423 38.2704 76.8007C38.1828 76.8883 38.0368 76.8883 37.8908 76.8299C37.1901 76.6256 36.7521 75.9248 36.1098 75.6328C35.9346 75.5744 35.701 75.5452 35.6134 75.6912C35.5258 75.808 35.5842 75.9832 35.6718 76.1C35.9638 76.7131 36.2558 77.3555 36.5477 77.9686"
              stroke="#37C4CD"
              stroke-width="0.291976"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g clip-path="url(#clip1_5856_15870)">
            <path
              d="M6.70099 16.2311H0.963379V18.8677H6.70099V16.2311Z"
              fill="#37C4CD"
            />
            <path
              d="M13.6827 16.2311H7.94507V18.8677H13.6827V16.2311Z"
              fill="#37C4CD"
            />
            <path
              d="M9.21466 11.7693H3.47705V14.4059H9.21466V11.7693Z"
              fill="#37C4CD"
            />
            <path
              d="M10.6363 20.4648H4.89868V23.1014H10.6363V20.4648Z"
              fill="#37C4CD"
            />
            <path
              d="M12.9466 7.78906H7.20898V10.4256H12.9466V7.78906Z"
              fill="#37C4CD"
            />
            <path
              d="M15.9928 5.76099H0.125488V24.7494H15.9928V5.76099Z"
              stroke="#BEDFF9"
              stroke-width="0.253877"
              stroke-miterlimit="10"
            />
          </g>
          <g clip-path="url(#clip2_5856_15870)">
            <path
              d="M73.803 20.184H86.1667C88.2739 20.184 90.0003 21.8849 90.0003 23.9667V27.521C90.0003 29.5774 88.3247 31.2784 86.2175 31.3038L74.6915 31.4815C72.8636 31.5069 71.2642 30.2629 70.8834 28.5111L70.0456 24.7791C69.5124 22.4181 71.3403 20.184 73.803 20.184Z"
              fill="#32BFC8"
            />
            <path
              d="M82.8921 25.8455C82.4097 29.0697 82.8921 32.4209 84.2884 35.3658C80.7088 34.2234 78.3731 30.1614 79.2109 26.5563"
              fill="#32BFC8"
            />
            <path
              d="M73.2703 25.6678L75.0982 24.3477L76.6468 25.6678L78.9571 24.3477L80.4042 25.8455L82.8922 24.3477L84.3393 26.0232L85.8879 24.3477"
              stroke="#1D1D1B"
              stroke-width="0.253877"
              stroke-miterlimit="10"
            />
            <path
              d="M73.4734 27.8258L86.0657 27.4449"
              stroke="#1D1D1B"
              stroke-width="0.253877"
              stroke-miterlimit="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_5856_15870">
              <rect
                width="68.0597"
                height="80.9359"
                fill="white"
                transform="matrix(-1 0 0 1 78.4465 0.127686)"
              />
            </clipPath>
            <clipPath id="clip1_5856_15870">
              <rect
                width="16.1212"
                height="19.2419"
                fill="white"
                transform="translate(0 5.63416)"
              />
            </clipPath>
            <clipPath id="clip2_5856_15870">
              <rect
                width="20.0563"
                height="15.1818"
                fill="white"
                transform="translate(69.9436 20.184)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Form Header */}
        <div className="flex items-start justify-start mb-4 mt-5">
          <h2 className="text-2xl font-semibold text-gray-800">
            Job Application Form
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border  p-3 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border  p-3 outline-none"
            required
          />
          <input
            type="text"
            readOnly
            value={job.position}
            className="w-full border  p-3 outline-none"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Current CTC"
              className="border  p-3 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Notice Period"
              className="border  p-3 outline-none"
              required
            />
          </div>
          <div className="border  p-3 flex items-center justify-between">
            <span>Resume</span>
            <label className="cursor-pointer text-blue-600 hover:text-blue-800">
              UPLOAD 📤
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                required
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3  text-lg flex items-center justify-center hover:bg-blue-700"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;
