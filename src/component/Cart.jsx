import {useSelector,useDispatch } from 'react-redux'
import {removeItem,increaseCartQuantity,decreaseCartQuantity} from './slice/CartSlice';
import CartItem from './CartItem'
import PriceSummary from './PriceSummary'
import {URL} from '../constant.js'
import '../Css/Cart.css'
const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleIncrease = async (_id) => {
        try{
            const response = await fetch(`${URL}/cart/${_id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    action:"increment",
                }),
            })
            if(!response.ok){
                throw new Error ("Failed to increase Quantity")
            }
            dispatch(increaseCartQuantity(_id));
        }
        catch(err){
            console.log(err)
        }
    }

    const handleDecrease = async (_id) => {
        try{
            const response = await fetch(`${URL}/cart/${_id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    action:"decrement",
                }),
            })
            if(!response.ok){
                throw new Error ("Failed to decrease Quantity")
            }
            dispatch(decreaseCartQuantity(_id));
        }
        catch(err){
            console.log(err)
        }
    }

    const handleRemove = async (_id) => {
        try{
            const response  = await fetch(`${URL}/cart/${_id}`,{
                method:'DELETE'
            })
            const data = await response.json()
            
            if(!response.ok){
                throw new Error("Failed to delete Cart Item")
            }
    
            dispatch(removeItem(_id))

            console.log(data.message)
        }catch(err){
            console.log(err)
        }
        
    }
    const totalPrice = cartItems.reduce((total,item) => {
        return total + (item?.productDetails?.price ?? 0) * item.quantity
    },0);

    const totalDiscount = cartItems.reduce((total, item) => {
        const discount =
            (item.productDetails.price *
                item.productDetails.discountPercentage) /
            100;

        return total + discount * item.quantity;
    }, 0);

    const finalPrice = totalPrice - totalDiscount;

    if(cartItems.length === 0 ){
        return (
            <section className="empty-cart">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                    alt="Empty Cart"
                />
                <h2>Your Cart is Empty</h2>
                <p>
                    Looks like you haven't added anything yet.
                </p>
            </section>
        )
    }
    return(
        <section className="cart-page">
            <div className="cart-left">
                <div className="cart-heading">
                    <h2>Shopping Cart</h2>
                    <span>{cartItems.length} Items</span>
                </div>
                {
                cartItems.map((item) => (
                    <CartItem 
                    key={item._id}
                    item={item} 
                    onIncrease={() => handleIncrease(item._id)}
                    onDecrease={() => handleDecrease(item._id)}
                    onRemove={() => handleRemove(item._id)}/>
                ))
                }
            </div>
            <div className="cart-right">
                <PriceSummary 
                totalPrice={totalPrice}
                totalDiscount={totalDiscount}
                finalPrice={finalPrice}
                totalItems={cartItems.length}
                />
            </div>
        </section>
    )
}

export default Cart