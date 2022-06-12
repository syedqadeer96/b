export default interface CardProps {
    id?: number;
    title?: string;
    image?: string;
    author?: string;
    state?:string;
    reads?: string;
    time?: string;
    bu?:React.ReactElement;
    bo?:React.ReactElement;
    category?:string;
  }