import {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as counterActions from '../redux/reducers/counter';

export default function Test() {
    const dispatch = useDispatch();
    const value = useSelector(({counter}) => counter.value)

    const plus = useCallback(({ value }) => {
        dispatch(counterActions.increment({ value }));
    }, [dispatch]);

    const minus = useCallback(({ value }) => {
        dispatch(counterActions.decrement({ value }));
    }, [dispatch]);

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => minus({value})}>minus</button>
            <span>{value}</span>
            <button onClick={() => plus({value})}>plus</button>
        </div>
    )
};
