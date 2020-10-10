import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

export default class Life1 extends PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      //   count: 0,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps', nextProps, prevState);
    // if (nextProps.count != prevState.count) {
    //   return { count: nextProps.count };
    // }
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevSteate) {
    return { name: '你妈嗨' };
  }
  componentDidUpdate(props, state, cccc) {
    console.log('============================componentDidUpdate');
    console.log(this.props, this.state);
    console.log(props, state, cccc);
    console.log('============================componentDidUpdate');
  }
  componentDidMount() {
    this.setState({ count: 1 });
    this.setState({ a: 2 });
  }
  componentDidCatch(error, info) {
    console.log('============================componentDidCatch');
    console.log(error, info);
    console.log('============================componentDidCatch');
  }
  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
  initChildren = () => {
    return this.props.children.map((v) => {
      console.log(v);
      return v;
      return React.createElement(v, { name: '你妈嗨' });
    });
  };
  render() {
    console.log('============================render');
    console.log(this.props, this.state);
    console.log('============================render');
    return (
      <div>
        1 hahahahahahah {this.state.count}
        <button onClick={this.click}>点击改变</button>
        {/* {React.createElement(this.props.children[0], { name: '你妈嗨' })} */}
        {/* {this.initChildren()} */}
        {ReactDOM.createPortal(this.props.children, document.body)};
      </div>
    );
  }
}
