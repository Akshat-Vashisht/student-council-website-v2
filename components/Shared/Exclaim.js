const Exclaim = ({ size, position }) => {
  return (
    <div className={`absolute ${position}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 45 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.7082 0.479002C29.5715 0.645045 28.8419 0.866435 28.0668 1.03248C26.7446 1.25387 21.9115 3.8552 19.9053 5.40494C16.44 8.11697 12.1541 15.4229 11.1966 20.2935C10.8318 22.3413 10.7862 22.452 10.1023 26.8798C9.60074 30.256 9.87431 39.8865 10.6038 44.5357C11.0598 47.2477 10.8774 51.0667 10.1023 53.8341C10.0567 54.1108 10.0111 54.4429 10.0567 54.6643C10.0567 54.8857 9.87431 55.7159 9.64634 56.4354C9.28158 57.7084 8.27848 65.0143 8.0505 68.3905C8.00491 69.1654 7.82253 70.8812 7.68575 72.2649C6.72825 79.6815 5.95312 102.872 5.95312 122.797C5.95312 133.258 6.63705 138.405 8.27848 140.564C9.41836 142.003 10.2391 141.228 12.0173 137.022C13.4307 133.645 13.7043 133.313 16.6224 131.653C19.1757 130.103 19.6773 129.605 19.6773 128.443C19.6773 127.668 19.9053 127.059 20.1788 127.059C20.498 127.059 20.5892 126.506 20.498 125.675C20.3612 124.845 20.4524 124.292 20.7716 124.292C21.4099 124.292 22.6866 120.86 23.0969 118.037C23.2793 116.93 23.5985 115.989 23.8721 115.989C24.1 115.989 24.2368 115.657 24.1912 115.27C24.0088 113.61 24.2824 112.115 24.9207 111.34C25.2855 110.898 25.6047 110.178 25.6047 109.791C25.6047 109.403 25.9238 108.462 26.3342 107.798C26.7445 107.079 26.8357 106.58 26.5166 106.58C26.243 106.58 26.3798 105.972 26.7901 105.197C27.2005 104.422 27.5653 102.817 27.6109 101.599C27.6109 100.437 27.7021 99.5513 27.8388 99.6619C28.2492 100.215 29.7538 95.7876 29.7082 94.1825C29.5715 91.7472 29.6626 91.0831 30.073 91.1384C30.9393 91.3045 31.1217 91.0277 30.6201 90.2529C30.301 89.8101 30.2098 88.9799 30.3922 88.4817C30.5745 87.9282 30.8025 86.8766 30.8937 86.1018C31.0305 85.3823 31.3041 84.4967 31.5776 84.1093C31.8056 83.7772 31.8056 83.2791 31.6232 83.0577C31.4409 82.7809 31.5321 82.7809 31.8512 83.0023C32.6263 83.5558 33.5838 81.2865 32.9455 80.3456C32.5807 79.7922 32.6263 79.4047 33.0823 78.9619C33.4471 78.5745 33.6294 77.9103 33.4926 77.4676C33.3559 76.9694 33.5382 76.6927 34.0398 76.6927C34.6781 76.6927 34.7237 76.5266 34.3134 75.9178C33.9486 75.3643 33.903 75.0323 34.2678 74.7555C34.5413 74.5895 34.6325 74.1467 34.4957 73.87C34.3134 73.5932 34.359 73.3718 34.5869 73.3718C34.7693 73.3718 34.9973 72.8183 34.9973 72.0988C35.0885 70.4937 35.3621 69.3868 35.818 68.4459C36.046 68.0031 36.0004 67.5603 35.6356 67.2836C35.2253 66.9515 35.2253 66.7855 35.6356 66.4534C35.9092 66.232 36.046 65.7339 35.9548 65.4018C35.818 65.0143 35.9092 64.3502 36.1372 63.9074C36.5019 63.2432 36.6387 63.2432 37.0491 63.9627C37.4138 64.6269 37.4594 64.3502 37.2771 62.9665C37.1403 61.9149 37.2315 61.1953 37.505 61.1953C37.7786 61.1953 37.8698 60.5865 37.6874 59.5903C37.4594 58.3726 37.5962 57.8191 38.2345 57.3764C38.7361 57.0443 38.8273 56.7675 38.4625 56.7675C38.0978 56.7675 38.0066 56.4908 38.2345 56.048C38.4169 55.7159 38.5081 54.8304 38.4169 54.1108C38.3713 53.4467 38.5537 52.8932 38.8273 52.8932C39.1009 52.8932 39.192 52.6165 39.0553 52.3397C38.8729 52.0076 39.0553 51.1774 39.4656 50.4579C39.8304 49.7384 40.0128 48.6314 39.876 47.9673C39.7392 47.3584 39.7848 46.3622 39.9216 45.864C40.1951 45.0338 40.2863 45.0338 40.6967 45.698C41.0159 46.3068 41.0615 46.0854 40.8335 44.9785C40.6511 44.0929 40.7879 43.152 41.107 42.6539C41.563 41.9897 41.563 41.8237 41.107 41.8237C40.6967 41.8237 40.7423 41.4916 41.2894 40.7721C41.791 40.1079 41.9278 39.6098 41.6086 39.333C40.8791 38.7796 41.0159 37.3959 41.791 37.3959C42.3381 37.3959 42.4293 37.1745 42.019 36.3443C41.6542 35.4587 41.7454 35.1266 42.2925 34.7392C42.8397 34.4071 42.9765 33.7429 42.8397 32.7467C42.7029 31.9718 42.7941 31.3076 43.022 31.3076C43.25 31.3076 43.2956 31.0309 43.1588 30.7542C42.9765 30.4221 43.022 29.8686 43.25 29.4812C43.478 29.0937 43.706 27.9314 43.7516 26.8798C43.7972 25.8282 43.706 25.2747 43.5692 25.6068C43.4324 25.9943 43.1132 26.3263 42.9309 26.3263C42.7029 26.3263 42.8853 25.2747 43.3868 24.0017C43.9795 22.3413 44.1163 21.4004 43.7972 20.6809C43.5236 20.1274 43.5236 19.3525 43.706 18.9651C44.2075 18.0242 44.2075 15.2568 43.706 15.2568C43.478 15.2568 43.3868 14.4266 43.5236 13.4303C43.7516 12.102 43.478 10.9951 42.5661 9.11323C41.107 6.06912 39.0553 3.08035 38.4625 3.08035C38.2345 3.08035 37.505 2.58221 36.8211 1.91804C36.0004 1.14318 34.7237 0.700396 32.7631 0.534353C31.2129 0.36831 29.845 0.368307 29.7082 0.479002ZM29.7082 14.9801C31.8968 16.3638 32.6263 20.3488 31.988 27.544C31.7144 30.6988 31.3497 34.1304 31.1217 35.0713C30.8481 36.0675 30.6657 37.0084 30.6657 37.1191C30.6657 39.6651 26.9725 59.9224 26.0606 62.579C25.8326 63.1879 25.5135 64.7929 25.3311 66.1213C25.1943 67.4496 24.7384 69.4421 24.3736 70.4937C24.0088 71.5453 23.8265 72.763 23.9632 73.1504C24.1 73.5932 24.0544 73.9253 23.8265 73.9253C23.5985 73.9253 23.0057 75.9178 22.4586 78.3531C21.9115 80.7331 20.9995 84.3307 20.4068 86.3232C19.8141 88.3157 19.3581 89.9761 19.4493 90.0868C19.5405 90.1975 19.3581 90.5296 19.039 90.8617C18.6286 91.3045 18.355 91.2491 17.9447 90.6956C17.5343 90.1975 17.4887 89.9761 17.8991 89.9761C18.3094 89.9761 18.3094 89.8101 17.8991 89.2012C17.4887 88.5924 17.4887 88.371 17.9447 88.205C18.4006 87.9836 18.4006 87.7622 17.8991 87.0427C17.2607 86.0464 17.5343 83.3344 18.2638 83.3344C18.5374 83.3344 18.5374 82.6702 18.3094 81.674C18.0815 80.6777 18.0815 80.0135 18.355 80.0135C18.7654 80.0135 18.7198 78.4638 18.2182 77.5229C18.0815 77.1908 18.0359 75.6964 18.1271 74.202C18.4006 70.1617 18.4918 69.2761 18.9022 68.5012C19.1301 68.1691 19.1757 67.6157 18.9934 67.3389C18.8566 67.0622 18.9478 66.6748 19.2213 66.4534C19.4493 66.2873 19.6773 65.8445 19.6773 65.5678C19.6773 65.2357 19.4949 65.1804 19.2213 65.3464C18.9934 65.5125 18.7654 65.4571 18.7654 65.1804C18.7654 64.9036 19.4949 63.9627 20.3612 63.1879C21.2731 62.3577 21.8659 61.4721 21.7291 61.1953C21.1363 60.033 20.8172 51.9523 21.1363 45.1445C21.1819 44.0376 21.0907 42.7646 20.9084 42.2111C20.7716 41.713 20.8172 41.2702 21.0451 41.2702C21.3187 41.2702 21.5011 40.8274 21.5011 40.2739C21.5011 39.7205 21.6379 39.0563 21.8659 38.8349C22.0482 38.6135 22.2306 37.894 22.2762 37.2298C22.3218 36.5656 22.5498 35.0159 22.7778 33.7983C23.2337 31.1969 22.641 30.0346 20.9084 30.2007C18.5374 30.4774 18.3094 30.256 18.3094 28.2635C18.3094 27.1012 18.5374 26.3263 18.9022 26.3263C19.2669 26.3263 19.2669 26.1603 18.811 25.8282C18.2638 25.3854 18.2638 25.164 18.6742 24.4999C18.9934 24.0571 19.3125 22.9501 19.4037 22.0092C19.5405 21.0683 19.8141 19.7953 20.1332 19.1865C20.4068 18.5223 20.498 18.0242 20.3612 18.0242C20.2244 18.0242 20.5436 17.5261 21.0907 16.8619C23.2337 14.2606 27.2005 13.375 29.7082 14.9801Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0818 84.9946C17.9451 85.2714 18.0363 85.5481 18.2642 85.5481C18.5378 85.5481 18.7658 85.2714 18.7658 84.9946C18.7658 84.6626 18.6746 84.4412 18.5834 84.4412C18.4466 84.4412 18.2186 84.6626 18.0818 84.9946Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.7926 153.681C12.4735 153.903 12.0631 154.013 11.8807 153.847C11.5616 153.626 7.91393 155.84 5.77096 157.666C3.71917 159.382 0.937863 163.035 1.21143 163.644C1.39382 163.92 1.30263 164.142 1.02905 164.142C-0.110826 164.142 -0.384399 174.879 0.618697 180.469C1.75858 186.89 5.13262 192.369 8.32429 193.144C11.516 193.863 14.9812 190.875 16.9874 185.672C17.8993 183.458 18.492 182.739 20.407 181.576C22.1396 180.525 22.9148 179.694 23.2795 178.532C23.5075 177.591 24.0546 176.872 24.4194 176.872C24.8298 176.872 24.9666 176.484 24.8298 175.709C24.693 175.045 24.7842 174.381 25.0577 174.16C25.6961 173.662 26.152 164.031 25.5593 163.533C25.3313 163.367 25.0121 162.647 24.921 161.873C24.7842 161.153 24.5106 160.489 24.237 160.378C24.0091 160.267 23.7811 159.935 23.7811 159.603C23.7811 159.327 22.9604 158.109 21.9573 156.947C20.9542 155.784 20.1335 154.954 20.1335 155.065C20.1335 155.231 19.5407 154.954 18.8112 154.456C17.261 153.515 13.6589 153.017 12.7926 153.681ZM12.5191 162.813C12.7014 163.035 12.3823 163.644 11.8351 164.197C10.7864 165.359 10.0569 165.636 10.9232 164.585C11.3336 164.086 11.2424 163.81 10.6497 163.256C9.96572 162.592 9.96572 162.537 11.06 162.481C11.6983 162.481 12.3823 162.647 12.5191 162.813ZM11.8351 166.134C13.3398 166.632 14.9356 170.95 14.3885 172.942C13.7045 175.322 12.3367 174.824 11.1056 171.724C10.5585 170.285 9.92012 169.123 9.69215 169.123C9.09941 169.123 8.73465 167.629 9.00822 166.632C9.32739 165.747 10.1481 165.581 11.8351 166.134Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default Exclaim;
