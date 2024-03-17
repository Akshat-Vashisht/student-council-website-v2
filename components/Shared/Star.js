const Star = ({size, color, position}) => {
  return (
    <div className={`absolute ${position}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 233 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M106.852 12.484C110.142 -3.58503 133.446 -2.51594 135.251 13.7869C136.623 26.1732 152.056 31.0374 160.34 21.7272C171.222 9.49698 190.913 21.9734 184.304 36.9503C179.275 48.3439 190.198 60.2804 202.017 56.3536C217.528 51.1997 228.329 71.8229 215.13 81.4639C205.08 88.8049 208.529 104.588 220.726 107.067C236.749 110.324 235.683 133.567 219.429 135.343C207.056 136.695 202.176 152.096 211.512 160.326C223.773 171.135 211.129 190.683 196.155 184.13C184.746 179.138 172.776 190.024 176.74 201.83C181.95 217.349 161.2 227.97 151.483 214.795C144.086 204.766 128.272 208.196 125.772 220.405C122.482 236.474 99.1782 235.405 97.3732 219.102C96.0018 206.716 80.568 201.852 72.2842 211.162C61.4021 223.392 41.7109 210.916 48.3208 195.939C53.3491 184.545 42.426 172.609 30.6075 176.536C15.0962 181.689 4.29537 161.066 17.4944 151.425C27.5446 144.084 24.0951 128.301 11.8987 125.822C-4.12473 122.565 -3.05844 99.3225 13.1959 97.5464C25.568 96.1945 30.4481 80.7935 21.1122 72.5631C8.85142 61.7541 21.4951 42.2065 36.4694 48.7589C47.8787 53.7513 59.8489 42.8651 55.8848 31.059C50.674 15.5397 71.4248 4.91867 81.1414 18.0939C88.538 28.1234 104.352 24.6927 106.852 12.484Z"
        fill={color}
      />
    </svg>
    </div>
  );
};

export default Star;