import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  pickColor,
  selectColors
} from './colorsSlice';

import styles from './Colors.module.css';

export default function Colors() {

  const colors = useSelector(selectColors);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className={styles.Colors}>
      {colors.map(color => (
        <span className={styles.ColorSquareWrapper}>
          <span
            className={`${styles.ColorSquare} ${color.isSelected ? styles.ColorSquareSelected : ''}`}
            style={{ backgroundColor: color.id }}
            onClick={() => dispatch(pickColor(color.id))}
          />
        </span>
      ))}
    </div>
  )
  /*return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );*/
}
