import { createSelector } from 'reselect';

export const getAllBreedsSelector = state => state.breedsReducer.breeds;

export const getAllBreeds = createSelector(
   getAllBreedsSelector,
   (allBreeds) => allBreeds
)
