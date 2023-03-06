import React from "react";
import STYLE from "./App3.module.css"
const Hotstar =()=>{
    return(
<div id={STYLE.main}>
    <div id={STYLE.firstBlock}>
        <nav>
            <div className={STYLE.navbar}>
                <a href="">
                    <img src="data:image/png;base64,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" alt="" srcset="" />
                </a>
                <ul>
                    <li>
                        <a href="">TV</a>
                    </li>
                    <li>
                        <a href="">Movies</a>
                    </li>
                    <li>
                        <a href="">Sports</a>
                    </li>
                    <li>
                        <a href="">KIDS</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

<div id={STYLE.secondBlock}>
<div className={STYLE.login}>
    <button className={STYLE.login2}>SUBSCRIBE</button>
   <a className={STYLE.login3} href="">Login</a>
</div>

</div>
</div>
    
    )
}
export default Hotstar