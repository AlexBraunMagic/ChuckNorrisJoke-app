import { put, call, takeLatest, fork, all} from "redux-saga/effects";
import { GENERATION_ADD_JOKE, addJoke } from "./action";
import { newJoke } from "../../api/index";

function* jokeWorker() {
      
    console.log('work');
    const payload = yield call(newJoke);
    yield put(addJoke(payload));
}

export function* jokeWatcher() {  
    yield takeLatest("GENERATION_ADD_JOKE", jokeWorker);
}

export function* root() {
    yield all([fork(jokeWatcher)]);
}