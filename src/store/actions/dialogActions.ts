import { ReactNode } from 'react';
import * as TYPES from '../actionTypes/dialogActionTypes';

export type OpenDialogActionPayloadType = {
  icon: string,
  dialogName: string,
  children: ReactNode,
  props: any,
}

export const openDialog = (payload: OpenDialogActionPayloadType) => ({
  type: TYPES.OPEN_DIALOG,
  payload,
});

export const closeDialog = (dialogName: string) => ({
  type: TYPES.CLOSE_DIALOG,
  dialogName,
});

export const minimizeDialog = (dialogName: string) => ({
  type: TYPES.MINIMIZE_DIALOG,
  dialogName,
});

export const setActive = (dialogName: string) => ({
  type: TYPES.SET_ACTIVE,
  dialogName,
});

export const setInactive = () => ({
  type: TYPES.SET_INACTIVE,
});
