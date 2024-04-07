export type CardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string
};

export type NavItemType = {
  id: string;
  label: string;
  link: string;
  icon: JSX.Element;
};