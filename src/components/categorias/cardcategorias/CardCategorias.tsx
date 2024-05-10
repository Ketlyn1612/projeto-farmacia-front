import Tema from './CardCategorias';
import Usuario from './CardCategorias';

export default interface Categoria {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
  usuario: Usuario | null;
}