import Typography from '@material-ui/core/Typography'
import { Product } from '~/models/Product'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems, removeFromCart } from '~/store/cartSlice'

type AddProductToCartProps = {
  product: Product
}

export default function AddProductToCart({ product }: AddProductToCartProps) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartItem = cartItems.find((i: any) => i.product.id === product.id)

  const handleAddToCart = () => dispatch<any>(addToCart(product))
  const handleRemoveToCart = () => dispatch<any>(removeFromCart(product))

  return (
    <>
      {cartItem ? (
        <>
          <IconButton onClick={handleRemoveToCart}>
            <Remove color="secondary" />
          </IconButton>
          <Typography align="center">{cartItem.count}</Typography>
          <IconButton
            disabled={cartItem.count >= product.count}
            onClick={handleAddToCart}
          >
            <Add color="secondary" />
          </IconButton>
        </>
      ) : (
        <IconButton disabled={product.count === 0} onClick={handleAddToCart}>
          <CartIcon color="secondary" />
        </IconButton>
      )}
    </>
  )
}
