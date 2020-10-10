import React, { PureComponent } from 'react';
import styles from './as.less';
import { connect } from 'umi';
// import IndexModel from '@/models';

const c = (props: any) => {
  // dispatch()
  console.log(props);
  console.log('2333333333333');

  return (
    <div>
      <h1 className={styles.title}>Page11 index</h1>
      <h1 className={styles.title}>Page11 index</h1>
      <h1 className={styles.title}>Page11 index</h1>
      <h1 className={styles.title}>Page11 index</h1>
      <h1 className={styles.title}>Page11 index</h1>
    </div>
  );
};
class Cmy extends PureComponent {
  render() {
    console.log('22324234234234');

    return <>dsvsvsvsdvsvsdvsdvds sd vs dvsd vs dvs </>;
  }
}
// IndexModel
export default Cmy;
