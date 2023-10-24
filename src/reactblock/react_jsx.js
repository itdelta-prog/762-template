'use strict';
const {useState } = React
 function LikeButton({dataForm}) {
    let [text, setText] = useState(dataForm);
    return (
        <div>
            <h2 className="text-[59px] text-white">1111111111</h2>
            <h4>{text}</h4>
            <button onClick={() => setText('gjhgj')}>222222222222</button>
        </div>
    )
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton dataForm={ddd} />, domContainer);