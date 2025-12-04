export interface MainLayoutProps {
  children: ReactNode;
  currentTab?: number;
  onTabChange?: (e: React.SyntheticEvent, newValue: number) => void;
  teamCount?: number;
}
