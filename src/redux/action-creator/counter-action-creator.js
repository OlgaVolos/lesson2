import {DEC_COUNTER, INC_COUNTER, RESET_COUNTER} from "../action-types";

export const incCounter = () => ({type: INC_COUNTER}) //actionCreator
export const decCounter = () => ({type: DEC_COUNTER}) //actionCreator
export const resetCounter = () => ({type: RESET_COUNTER}) //actionCreator