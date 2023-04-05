// this는 자기자신을 지칭
// 실행하는 위치에 따라 값이 달라진다.
// 현재 this는 Classcomponent 자체를 의미한다.
import { Component } from "react";

class ClassComp extends Component {
  state = {
    count: 0,
  };

  setCount(num) {
    this.setState({
      count: num,
    });
  }

  render() {
    return (
      <div className="bg-blue-100 w-1/2 min-h-screen flex flex-col justify-center items-center text-2xl">
        <div>{this.state.count}</div>
        <button
          className="bg-purple-300 px-4 py-2 rounded-md"
          onClick={() => this.setCount(this.state.count + 1)}
        >
          +
        </button>
      </div>
    );
  }
}

export default ClassComp;