import React from 'react';
import Styles from './index.module.scss';

export default function Loader() {
  return (
    <div className={Styles.globalLoader}>
      <div className={Styles.pageLoader}></div>
    </div>
  );
}

