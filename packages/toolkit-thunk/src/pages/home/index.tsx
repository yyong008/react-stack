import {
  plus,
  del,
  selectGlobalData,
  agePlus,
  ageDel,
  fetchAgeThunk,
} from "@/store/slices/globalSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";

const About = () => {
  const dispatch = useAppDispatch();
  const { value, age } = useAppSelector(selectGlobalData);

  useEffect(() => {
    dispatch(fetchAgeThunk())
  }, [])

  return (
    <div>
      <h2>About Page Container</h2>
      <div>
        <h3>value: {value}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" ,width: 80}}>
          <button
            onClick={() => {
              dispatch(plus(2));
            }}
          >
            +2
          </button>
          <button
            onClick={() => {
              dispatch(del());
            }}
          >
            -1
          </button>
        </div>
      </div>

      <br />
      <div>
        <h3>age: {age}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" ,width: 80}}>
          <button
            onClick={() => {
              dispatch(agePlus());
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              dispatch(ageDel());
            }}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
