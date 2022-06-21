import { aboutDel, aboutPlu, selectAboutData } from "@/store/slices/about";
import { useAppDispatch, useAppSelector } from "@/hooks";

const About = () => {
  const dispatch = useAppDispatch();
  const { val } = useAppSelector(selectAboutData);

  return (
    <div>
      <h2>About Page Container</h2>
      <h3>val: {val}</h3>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" ,width: 80}}>
        <button
          onClick={() => {
            dispatch(aboutPlu());
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch(aboutDel());
          }}
        >
          -1
        </button>
      </div>
      <br />
    </div>
  );
};

export default About;
