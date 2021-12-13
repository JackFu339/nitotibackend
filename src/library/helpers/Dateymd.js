import moment from "moment";

export default function Dateymd(props) {
  return moment(new Date(props.oDate)).format("yyyy/MM/DD");
}
