import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Main.module.css"
import Rectangle from "../Assets/rectangle.svg";
import Triangle from "../Assets/triangle.svg"
import {changeSvgBorderColorStart, changeSvgBorderWidthStart, selectSvgStart} from "../Redux/Action";


const Main = () => {
    const dispatch = useDispatch();
    const {svg, width, color, loading, error} = useSelector(state => state.data)

    const select = (value) => {
        dispatch(selectSvgStart(value))
    };

    const changeBorderWidth = (value) => {
        dispatch(changeSvgBorderWidthStart(value))
    }

    const changeBorderColor = (value) => {
        dispatch(changeSvgBorderColorStart(value))
    }

    return (
        <>{loading ? <div>Loading....</div> :
            <div className={styles.iconComponent}>
                <div className={styles.selectIcon}>
                    <label>Selected Icon:</label>&nbsp;&nbsp;
                    {svg && <img style={{border: `${width}px solid ${color}`}} className={styles.selectImg} width="100" height="100" src={svg ? svg : ""} alt="Select icon"/>}
                </div>
                <div className={styles.selectIcon}>
                    <label>Select Icon (Dropdown):</label>&nbsp;&nbsp;
                    <select onChange={(e) => {
                        select(e.target.value)
                    }}>
                        <option disabled selected value>Rectangle Icon</option>
                        <option value={Rectangle}>Rectangle</option>
                        <option value={Triangle}>Triangle</option>
                    </select>
                </div>
                <div className={styles.selectIcon}>
                    <label>Input box for width:</label>&nbsp;&nbsp;<input name="width" type="number" value={width ? width : 0}
                                                                          className={styles.selectIconColor}
                                                                          onChange={e => {
                                                                              changeBorderWidth(e.target.value)
                                                                          }}/>
                </div>
                <div className={styles.selectIcon}>
                    <label>Dropdown for select color:</label>&nbsp;&nbsp;
                    <select onChange={(e) => {
                        changeBorderColor(e.target.value)
                    }}>
                        <option disabled selected value>Select Border Color</option>
                        <option value="#0096FF">Blue</option>
                        <option value="#7CFC00">Green</option>
                        <option value="#FF0000">Red</option>
                        <option value="#FFEA00">Yellow</option>
                        <option value="#FF5F1F">Orange</option>
                    </select>
                </div>
            </div>}
        </>
    );
};

export default Main;