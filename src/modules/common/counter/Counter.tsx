import { Link } from "react-router-dom";
import { CartIcon } from '../../../tools/icons/IconCart';
import routesApp from "../../../contexts/navigation/routesApp";

import { useAppSelector } from '../../../store/hooks';
import {selectCount} from './counterSlice';

import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  return (
    <div>
      <Link to={routesApp.getCart()} className={styles.cart}>
        <CartIcon/>
        <span className={styles.count}>{count}</span>
      </Link>
    </div>
  );
}
