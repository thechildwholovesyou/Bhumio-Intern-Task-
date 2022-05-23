import React from "react";

import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";

export default function Test() {
  return (
    <div className="Test">
      <ReactOneDriveFilePicker
        clientID="c3e71009-3dd7-4fc8-9127-2de5ac14c89f"
        action="share"
        multiSelect={true}
        onSuccess={(result) => {
          alert(JSON.stringify(result));
        }}
        onCancel={(result) => {
          alert(JSON.stringify(result));
        }}
      >
        <button>Click Here</button>
      </ReactOneDriveFilePicker>
      
    </div>
  );
}