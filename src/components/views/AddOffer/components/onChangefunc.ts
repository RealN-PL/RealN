interface Props  {
    e : any,
    value: string[],
    setFunc: any 
}

export const onChange = ({e, value, setFunc} : Props) => {
    e.preventDefault();
    value.includes(e.target.value)
      ? setFunc(value.filter(check))
      : setFunc([e.target.value, ...value]);
    function check(w: any) {
      return w !== e.target.value;
    }
  };