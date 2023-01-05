import * as types from '../profile/types'

export const changeName = (data) => ({
    type: types.CHANGE_NAME, 
    payload: data
  })

export const toggleProfile = () => ({
    type: types.TOGGLE_PROFILE
})