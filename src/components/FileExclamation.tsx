import * as React from "react";

const FileExclamation: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path className="st0" d="M602 326h188.2L602 137.8z" />
    <path
      className="st0"
      d="M534 352V136H232v752h560V394H576c-23.2 0-42-18.8-42-42zm-54 96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V448zm32 336c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
    />
    <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z" />
    <circle cx={512} cy={744} r={40} />
    <path d="M488 640h48c4.4 0 8-3.6 8-8V448c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8z" />
  </svg>
);

FileExclamation.displayName = "FileExclamation";

export default FileExclamation;