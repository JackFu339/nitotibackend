import React, { Component } from "react";

import XLSX from "xlsx";
import { make_cols } from "./MakeColumns";
import { SheetJSFT } from "./types";

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: [],
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
    // this.handleFile();
  }

  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      let data = XLSX.utils.sheet_to_json(ws);
      let channelId = '{ "channelId":"' + this.props.Category + `"}`;
      let obj = JSON.parse(channelId);
      data = [obj].concat(data);
      console.log(JSON.stringify(data, null, 2));
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
        // console.log(JSON.stringify(data, null, 2));
        // console.log(JSON.stringify(this.state.data, null, 2));
      });
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="file">上傳Excel</label>
        <br />
        <input
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="匯入" onClick={this.handleFile} />
      </div>
    );
  }
}

export default ExcelReader;
