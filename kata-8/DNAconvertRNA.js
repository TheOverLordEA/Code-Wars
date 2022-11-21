//Create a funtion that will convert DNA to RNA sequence

function DNAconvertRNA(string) {
  const rna = /T/gi;
  return string.replace(rna, "U");
}
