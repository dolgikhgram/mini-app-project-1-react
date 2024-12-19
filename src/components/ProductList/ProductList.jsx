import React from "react";
import './ProductList.css'
import { ProductItem } from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
    {id:'1', title:'Джинсы', price:5000, description:'Синего цвета, прямые'},
    {id:'2', title:'Куртка', price:12000, description:'Зелёного цвета, тёплая'},
    {id:'3', title:'Джинсы 2', price:5000, description:'Синего цвета, прямые'},
    {id:'4', title:'Куртка 8', price:523, description:'Зелёного цвета, тёплая'},
    {id:'5', title:'Джинсы 3', price:50330, description:'Синего цвета, прямые'},
    {id:'6', title:'Куртка 7', price:6765, description:'Зелёного цвета, тёплая'},
    {id:'7', title:'Джинсы 4', price:3876, description:'Синего цвета, прямые'},
    {id:'8', title:'Куртка 5', price:767, description:'Зелёного цвета, тёплая'}
]

const getTotalPrice = (items=[]) =>{
    return items.reduce((acc,i)=> acc+=i.price,0)
}

export const ProductList = () =>{
    const {tg} = useTelegram()
    const [addedItems, setAddedItems]=useState([])
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []
        if (alreadyAdded){
            newItems = addedItems.filter(item=> item.id != product.id)
        }else{
            newItems=[...addedItems,product]
        }
        setAddedItems(newItems)
        if (newItems.length===0){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить  ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className="list">
            {
                ProductList.map(item => (
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                        className={'item'}
                    />
                ))
            }
        </div>
    )
}