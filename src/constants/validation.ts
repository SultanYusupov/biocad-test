export type AminoAcidColorScheme = {
    [key in 'A' | 'R' | 'N' | 'D' | 'C' | 'E' | 'Q' | 'G' | 'H' | 'I' | 'L' | 'K' | 'M' | 'F' | 'P' | 'S' | 'T' | 'W' | 'Y' | 'V']: string;
};
export const AMINO_ACID_COLOR_SCHEME:AminoAcidColorScheme = {
    'A': '#67E4A6', 'R': '#BB99FF', 'N': '#80BFFF', 'D': '#FC9CAC', 'C': '#FFEA00', 'E': '#FC9CAC'
    , 'Q': '#80BFFF', 'G': '#C4C4C4', 'H': '#80BFFF', 'I': '#67E4A6', 'L': '#67E4A6', 'K': '#BB99FF',
    'M': '#67E4A6', 'F': '#67E4A6', 'P': '#67E4A6', 'S': '#80BFFF', 'T': '#80BFFF', 'W': '#67E4A6',
    'Y': '#67E4A6', 'V': '#67E4A6'
};
// const ALLOWED_CHARACTERS = ['A', 'R', 'N', 'D', 'C', 'E', 'Q', 'G', 'H', 'I', 'L', 'K', 'M', 'F', 'P', 'S', 'T', 'W', 'Y', 'V', '-'];
const ALLOWED_CHARACTERS = Object.keys(AMINO_ACID_COLOR_SCHEME).concat(['-']);
export const ALLOWED_CHARACTERS_REGEX = new RegExp(`^[${ALLOWED_CHARACTERS.join('')}]+$`);