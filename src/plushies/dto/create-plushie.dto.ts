export class CreatePlushieDto {
  name: string;
  description?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  material?: string;
  price: number;
}
