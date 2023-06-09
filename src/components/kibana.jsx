import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 256 342"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <title>{"Kibana"}</title>
    <path
      d="M0 306.93v34.012h15.986L156.32 172.718a265.907 265.907 0 0 0-30.34-17.006L0 306.929Z"
      fill="#009B90"
    />
    <path
      d="M156.324 172.718 15.922 341.01h239.65c0-68.569-38.91-129.519-99.248-168.292Z"
      fill="#40BEB0"
    />
    <path fill="#EF5098" d="M0 0v307.445L256 0z" />
    <path
      d="m.068 307.34 126.175-151.495C86.693 137.372 43.651 127.805 0 128.003L.068 307.34Z"
      fill="#353535"
    />
  </svg>
);

export default SvgComponent;
