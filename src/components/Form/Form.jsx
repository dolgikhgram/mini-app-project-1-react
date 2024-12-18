import React, { useEffect, useState } from "react";
import './Form.css'
import { useTelegram } from "../../hooks/useTelegram";

export const Form = () => {

    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('')

    const onChangeCountry = (e) =>{
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) =>{
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) =>{
        setSubject(e.target.value)
    }

    const {tg} = useTelegram()

    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Отправить даннные'
        })
    },[])

    useEffect(()=>{
        if(!street || !country){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
    },[country,street])

    return (
        <div className="form">
            <h3>Введите ваши данные</h3>
            <input 
                className={"input" }
                type="text" 
                placeholder="Cтрана"
                value={country}
                onChange={onChangeCountry}
            />
            <input 
                className={"input"}
                type="text" 
                placeholder="Улица"
                value={street}
                onChange={onChangeStreet}
            />
            <select 
                value={subject} 
                className="select"
                onChange={onChangeSubject}
            >
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    )
}