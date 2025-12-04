export interface PokemonDetailsModalProps {
  open: boolean;
  pokemon: Pokemon | null;
  onClose: () => void;
}