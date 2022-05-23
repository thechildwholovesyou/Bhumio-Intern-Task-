import React from "react";
import "./Modal.css";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";
const Modal = () => {
  return (
    <div className="modal-container">
      <h1>Select File(s) to Upload...</h1>
      <h2>
        You can select file from Google Drive, Dropbox, OneDrive or Local PC
      </h2>
      <h2>Select files to upload</h2>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        display="flex"
        justifyContent="space-between"
      >
        <Button>DropBox</Button>
        <Button>Drive</Button>
        <Button>
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
            <button>OneDrive</button>
          </ReactOneDriveFilePicker>
        </Button>
        <Button>Browse File</Button>
      </ButtonGroup>

      <div className="fileSection"></div>
    </div>
  );
};

export default Modal;
