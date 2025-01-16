export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface ImagesProps {
  src: string;
  alt: string;
  cls: string;
  location: string;
}

export interface VideoProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export interface PropsVideoContainer {
  cls?: boolean;
}

export interface LinkProps {
  text: string;
}

export interface PropsButton {
  children: React.ReactNode;
  onClick: () => void;
  type: "button" | "submit" | "reset";
}

export interface PropsSocialLink {
  children: React.ReactNode;
  href: string;
}

export interface PropsPostLink {
  children: React.ReactNode;
}

export interface PropsBlock {
  title: string;
  authorName: string;
  button: string;
}

export interface PropsBlockRight {
  title: string;
  authorName: string;
  button: string;
}

export interface PropsQuoteBackground {
  src: string;
  src_loc: string;
}

export interface PropsFormField {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PropsTextArea {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export interface DropDownProps {
  options: { value: string; label: string }[];
  onChange: any;
}

export interface PropsDataTable {
  columns: { title: string; dataIndex: string; key: string }[];
  dataSource: { key: string; name: string; age: number; address: string }[];
}

export interface DataType {
  key: number;
  article: string;
  year: string;
  fraction: string;
  firstTrimester: string;
  secondTrimester: string;
  thirdTrimester: string;
  fourthTrimester: string;
  user: string;
  date: string;
}

export interface NewsData {
  author: string;
  content: string;
  date: string;
  featured: boolean;
  id_area: string;
  id_news: string;
  likes: number;
  popular: boolean;
  title: string;
  user: string;
  views: number;
}

export interface ButtonNextProps {
  display: any;
  onClick: () => any;
}
