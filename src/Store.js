import { configureStore } from '@reduxjs/toolkit'
import forBreadcumb from '../src/Slices/breadcumb'

export default configureStore({
  reducer: {
	myBreadcumb: forBreadcumb,
  },
})