class Formatter {
  //add static methods here
  static capitalize(string) {
    let capString = string.charAt(0).toUpperCase() + string.slice(1, string.length);
    return capString;
  }

  static sanitize(string) {
    let sanString = string.replace(/[^a-z0-9áéíóúñü \'.,_-]/gim, "");
    return sanString;
  }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}