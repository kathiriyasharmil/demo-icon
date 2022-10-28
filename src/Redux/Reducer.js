import * as type from "./Type";

const initialState = {
    svg: "",
    width: "",
    color: "black",
    loading: false,
    error: null
};

const usersReducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case  type.SELECT_SVG_START:
        case  type.CHANGE_SVG_BORDER_WIDTH_START:
        case  type.CHANGE_SVG_BORDER_COLOR_START:
            return {...state, loading: true};

        case type.SELECT_SVG_SUCCESS:
            return {...state, svg: action.payload, loading: false};

        case type.CHANGE_SVG_BORDER_WIDTH_SUCCESS:
            return {...state, width: action.payload, loading: false};

        case type.CHANGE_SVG_BORDER_COLOR_SUCCESS:
            return {...state, color: action.payload, loading: false};

        case type.SELECT_SVG_ERROR:
        case type.CHANGE_SVG_BORDER_WIDTH_ERROR:
        case type.CHANGE_SVG_BORDER_COLOR_ERROR:
            return {...state, loading: false, error: action.payload};

        default :
            return state;
    }
};
export default usersReducer