import React, { useCallback } from "react";
import Button from "../Button/Button";

const Header = () =>{
    const tg = window.Telegram.WebApp

    const onClose =useCallback(()=>{
        tg.close()
    }) 
    return (
        <div className={'header'}>
            <Button onClick={onClose} title={'Close'}></Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header