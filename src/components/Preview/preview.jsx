import React, {useState} from "react";

import PreviewOne from "./preview-pages/preview-1";
import PreviewTwo from "./preview-pages/preview-2";
import PreviewThree from "./preview-pages/preview-3";

const Preview = () => {
    const [count,setCount] = useState(0)
    return (
        <div className="previewMainBlock">
            {count===0 ?
                <PreviewOne count={count} setCount={setCount}/>:
                count===1 ?
                <PreviewTwo count={count} setCount={setCount}/>:
                <PreviewThree />
            }
        </div>
    )
}

export default Preview;
