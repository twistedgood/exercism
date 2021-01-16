//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  return dna.split('').map(nucleotide => TRANSCRIPTION_MAP[nucleotide]).join('');
};

const TRANSCRIPTION_MAP = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
};