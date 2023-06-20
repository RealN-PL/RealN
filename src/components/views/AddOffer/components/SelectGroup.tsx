import { Select, MenuItem } from "@mui/material";
interface Props {
  value: String;
  name: String;
  setFunc: (value: any) => void;
  values: string[][];
}
export default function SelectGroup({ value, name, setFunc, values }: Props) {
  return (
    <Select
      value={value}
      label={name}
      onChange={(e) => setFunc(e.target.value)}
    >
      {values.map((v, ) => (
        <MenuItem key={value.length} value={v[0]}>{v[1]}</MenuItem>
      ))}
    </Select>
  );
}
