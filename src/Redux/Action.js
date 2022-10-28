import * as type from "./Type"

export const selectSvgStart = (data) => ({
    type: type.SELECT_SVG_START,
    payload: data
});

export const selectSvgSuccess = (data) => ({
    type: type.SELECT_SVG_SUCCESS,
    payload: data
});

export const selectSvgError = (data) => ({
    type: type.SELECT_SVG_ERROR,
    payload: data
});

export const changeSvgBorderWidthStart = (data) => ({
    type: type.CHANGE_SVG_BORDER_WIDTH_START,
    payload: data
});

export const changeSvgBorderWidthSuccess = (data) => ({
    type: type.CHANGE_SVG_BORDER_WIDTH_SUCCESS,
    payload: data
});

export const changeSvgBorderWidthError = (data) => ({
    type: type.CHANGE_SVG_BORDER_WIDTH_ERROR,
    payload: data
});

export const changeSvgBorderColorStart = (data) => ({
    type: type.CHANGE_SVG_BORDER_COLOR_START,
    payload: data
});

export const changeSvgBorderColorSuccess = (data) => ({
    type: type.CHANGE_SVG_BORDER_COLOR_SUCCESS,
    payload: data
});

export const changeSvgBorderColorError = (data) => ({
    type: type.CHANGE_SVG_BORDER_COLOR_ERROR,
    payload: data
});