import * as TYPES from '../actionTypes/dialogActionTypes';
import { getDialog } from '../../components/molecules/HelloIcon';

const initialState = {
  dialogStack: [getDialog],
  activeDialog: getDialog.dialogName,
};

export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.OPEN_DIALOG:
      const dialogIndex = state.dialogStack.findIndex(
        x => x.dialogName === action.payload.dialogName,
      );
      return dialogIndex !== -1
        ? {
            ...state,
            dialogStack: Object.assign([...state.dialogStack], {
              [dialogIndex]: { ...action.payload, isMinimized: false },
            }),
            activeDialog: action.payload.dialogName,
          }
        : {
            ...state,
            dialogStack: [...state.dialogStack, { ...action.payload, isMinimized: false }],
            activeDialog: action.payload.dialogName,
          };

    case TYPES.MINIMIZE_DIALOG:
      return {
        ...state,
        dialogStack: state.dialogStack.map(dialog => {
          return dialog.dialogName === action.dialogName
            ? { ...dialog, isMinimized: true }
            : dialog;
        }),
        activeDialog:
          state.dialogStack.length > 1
            ? state.dialogStack[state.dialogStack.length - 1].dialogName
            : '',
      };

    case TYPES.CLOSE_DIALOG:
      return {
        ...state,
        dialogStack: state.dialogStack.filter(dialog => dialog.dialogName !== action.dialogName),
      };

    case TYPES.SET_ACTIVE:
      return {
        ...state,
        dialogStack: state.dialogStack.map(dialog => {
          return dialog.dialogName === action.dialogName
            ? { ...dialog, isMinimized: false }
            : dialog;
        }),
        activeDialog: action.dialogName,
      };

    default:
      return state;
  }
}
