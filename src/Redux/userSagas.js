import * as type from "./Type";
import {take, takeEvery, takeLatest, put, all, delay, fork, call} from "redux-saga/effects"
import {
    changeSvgBorderColorError,
    changeSvgBorderColorSuccess,
    changeSvgBorderWidthError,
    changeSvgBorderWidthSuccess,
    selectSvgError,
    selectSvgSuccess
} from "./Action";


function* onSelectSvgStartAsync({payload}) {
    try {
        yield put(selectSvgSuccess(payload))
    } catch (e) {
        yield put(selectSvgError(e))
    }
}

function* onSelectSvg() {
    yield takeLatest(type.SELECT_SVG_START, onSelectSvgStartAsync)
}


function* onChangeBorderWidthStartAsync({payload}) {
    try {
        yield put(changeSvgBorderWidthSuccess(payload))
    } catch (e) {
        yield put(changeSvgBorderWidthError(e))
    }
}

function* onChangeSvgBorderWidth() {
    yield takeLatest(type.CHANGE_SVG_BORDER_WIDTH_START, onChangeBorderWidthStartAsync)
}

function* onChangeBorderColorStartAsync({payload}) {
    try {
        yield put(changeSvgBorderColorSuccess(payload))
    } catch (e) {
        yield put(changeSvgBorderColorError(e))
    }
}

function* onChangeSvgBorderColor() {
    yield takeLatest(type.CHANGE_SVG_BORDER_COLOR_START, onChangeBorderColorStartAsync)
}

const userSagas = [fork(onSelectSvg), fork(onChangeSvgBorderWidth), fork(onChangeSvgBorderColor)];

export default function* rootSaga() {
    yield all([...userSagas]);
}