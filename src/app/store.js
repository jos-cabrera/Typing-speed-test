import { configureStore } from '@reduxjs/toolkit';
import { timerReducer, testTimeReducer } from '../features/timer/timerSlice';
import {
	wordsReducer,
	typedCharactersReducer,
} from '../features/words/wordsSlice';
import { wpmReducer, accuracyReducer } from '../features/stats/statsSlice';
import {
	settingsOpenedReducer,
	testTypeReducer,
} from '../features/settings/settingsSlice';

export default configureStore({
	reducer: {
		timer: timerReducer,
		testTime: testTimeReducer,
		words: wordsReducer,
		typedCharacters: typedCharactersReducer,
		wpm: wpmReducer,
		accuracy: accuracyReducer,
		settings: settingsOpenedReducer,
		testType: testTypeReducer,
	},
});
