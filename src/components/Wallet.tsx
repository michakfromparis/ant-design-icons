import * as React from "react";

const Wallet: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      className="st0"
      d="M528 576h312V448H528v128zm92-104c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"
    />
    <path
      className="st0"
      d="M464 608V416c0-17.7 14.3-32 32-32h344V184H184v656h656V640H496c-17.7 0-32-14.3-32-32z"
    />
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200z" />
    <circle cx={620} cy={512} r={40} />
  </svg>
);

Wallet.displayName = "Wallet";

export default Wallet;