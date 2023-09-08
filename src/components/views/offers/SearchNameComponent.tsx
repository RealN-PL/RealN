import { TextField, debounce } from "@mui/material";
import { fetchOffersAsync } from "./catalogSlice";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import {  useState } from "react";

interface Props {
  dispPage: number;
  displayLimit: number;
}

export default function SearchComponent({ dispPage, displayLimit }: Props) {
  const dispatch = useAppDispatch();
  const { filterValue } = useAppSelector((state) => state.catalog);
  const [filter, setFilter] = useState(filterValue)
  const debouncedSearch = debounce((e: any) => {
    dispatch(fetchOffersAsync({ dispPage, displayLimit, filterValue: e.target.value }));
  }, 1000);




  return (
    <TextField
      label="Filtruj po nazwie"
      variant="filled"
      value={filter}
      onChange={(e: any) => {
       setFilter(e.target.value);
        debouncedSearch(e);
      }}
      fullWidth
    />
  );
}
