import { PropsWithChildren } from 'react';
import * as TYPES from '../actionTypes/dialogActionTypes';
import { PassableProps as DialogProps } from '../../components/templates/Dialog';

export type DialogType = PropsWithChildren<{
  dialogName: string,
  isMinimized: boolean,
  icon: string,
  props: DialogProps,
}>

type InitialStateType = {
  dialogStack: DialogType[],
  activeDialog: null | DialogType,
}

const initialState: InitialStateType = {
  dialogStack: [],
  activeDialog: null,
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
        dialogStack: state.dialogStack.map(dialog =>
          dialog.dialogName === action.dialogName ? { ...dialog, isMinimized: true } : dialog,
        ),
        // TODO: don't make active if it is minimized
        // The issue is previous dialog might not be -1 or -2 whatever, it might be in the middle
        activeDialog:
          state.dialogStack.length > 1
            ? state.dialogStack[state.dialogStack.length - 2].dialogName
            : null,
      };

    case TYPES.CLOSE_DIALOG:
      const newDialogStack = state.dialogStack.filter(
        dialog => dialog.dialogName !== action.dialogName,
      );
      return {
        ...state,
        dialogStack: newDialogStack,
        activeDialog: newDialogStack[newDialogStack.length - 1]
          ? newDialogStack[newDialogStack.length - 1].dialogName
          : null,
      };

    case TYPES.SET_ACTIVE:
      return {
        ...state,
        dialogStack: state.dialogStack.map(dialog =>
          dialog.dialogName === action.dialogName ? { ...dialog, isMinimized: false } : dialog,
        ),
        activeDialog: action.dialogName,
      };

    default:
      return state;
  }
}
