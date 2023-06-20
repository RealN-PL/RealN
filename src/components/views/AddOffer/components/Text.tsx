import { style } from './Lists'
import { TextField } from '@mui/material'
interface Props  {
    event : any,
    value: string[],
    setFunc: any ,
    label: string
}
export default function Text({value, setFunc, label} : Props) {
  return (
    <TextField
    id="outlined-basic"
    value={value}
    label={label}
    style={style}
    variant="outlined"
    onChange={(e) => setFunc(e.target.value)}
  />
  )
}
