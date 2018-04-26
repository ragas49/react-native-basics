import everest from '../../assets/everest.jpg'
import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
  places: [],
  selectedPlace: null
}

const mutations = {
  [ADD_PLACE] (state, placeName) {
    return {
      ...state,
      places: state.places.concat({
        key: Math.random(),
        name: placeName,
        image: everest
      })
    }
  },

  [DELETE_PLACE] (state) {
    return {
      state,
      places: state.places.filter(place => {
        return place.key !== state.selectedPlace.key
      }),
      selectedPlace: null
    }
  },

  [SELECT_PLACE] (state, selectedPlaceKey) {
    return {
      ...state,
      selectedPlace: state.places.find(place => {
        return place.key === selectedPlaceKey
      })
    }
  },

  [DESELECT_PLACE] (state) {
    console.log('deselect called')
    return {
      ...state,
      selectedPlace: null
    }
  }
}

const reducer = (state = initialState, action) => {
  if (mutations.hasOwnProperty(action.type)) {
    if (action.payload !== null && action.payload !== undefined) {
      return mutations[action.type](state, action.payload)
    }
    return mutations[action.type](state)
  }
  return state
}

export default reducer
