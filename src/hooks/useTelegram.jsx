import React, { useCallback } from "react";

const tg = window.Telegram.WebApp

export function useTelegram (){

    const onClose =useCallback(()=>{
        tg.close()
    }) 

    const onToggleButton =useCallback(()=>{
        if (tg.MainButton.isVisable){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }) 

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user
    }
}