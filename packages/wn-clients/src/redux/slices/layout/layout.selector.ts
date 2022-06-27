import { RootState } from '../../store';

export const headerVisibilitySelector = (state: RootState) =>
  state.layout.header.isVisible;
