function anagrams(words) {
    const anagramMap = {};
  
    for (let i = 0; i < words.length; i++) {
      const sortedWord = words[i].split('').sort().join('');
      if (!anagramMap[sortedWord]) {
        anagramMap[sortedWord] = [words[i]];
      } else {
        anagramMap[sortedWord].push(words[i]);
      }
    }
  
    return Object.values(anagramMap);
  }
  
  const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
  const fungsiAnagram = anagrams(words);
  
  console.log();