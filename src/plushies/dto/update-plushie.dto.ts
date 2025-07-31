export class UpdatePlushieDto {
  name?: string;
  description?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  material?: string;
  price?: number;
  image?: string;
}
