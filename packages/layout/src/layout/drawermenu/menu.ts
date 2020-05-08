export interface SimpleMenuItem {
  key: string;
  goto: () => void;
  label: string;
}

export interface MenuItem {
  key: string;
  goto: () => void;
  label: string;
  icon: JSX.Element;
}
