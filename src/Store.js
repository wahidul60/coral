import { configureStore } from '@reduxjs/toolkit'
import forBreadcumb from '../src/Slices/breadcumb'
import addCard from '../src/Slices/addToCard'

export default configureStore({
  reducer: {
	myBreadcumb: forBreadcumb,
  myCard : addCard,
  },
})