import { plus, del, selectGlobalData } from "@/store/slices/globalSlice";
import { useAppDispatch, useAppSelector } from "@/hooks"

const Home = () => {
    const dispatch = useAppDispatch()
    const { value } = useAppSelector(selectGlobalData)

    return <div>
        <div>{value}</div>
        <button onClick={() => {dispatch(plus(3))}}>+1</button>
        <button onClick={() => {dispatch(del())}}>1</button>
    </div>
}

export default Home;
