/**
 * Service for misc. things (anything that doesn't fit into a more specific area).
 **/

/**
 * Attempt to pull specified key from both the POST and GET side of a request.
 * Will prefer POST side over GET side if both are set.
 *
 * @param  {String} key Key to attempt to retrieve
 * @param  {String} req Express Request object
 * @return {String}     Returns the value if it exists or null
 **/
exports.getRequestValue = function ( key, req ) {
  if ( req ) {
    if ( req.body && req.body[ key ] ) { return req.body[ key ]; }
    if ( req.query && req.query[ key ] ) { return req.query[ key ]; }
  }

  // Well something shore went wrong
  return null;
};

/**
 * Given a camelcased string, return the formatted (display version) of the
 * string, i.e. returnThisString --> Return This String
 *
 * @param  {String} str The string to convert
 * @return {String}     Returns the formatted string
 **/
exports.camelCaseToDisplay = function ( str ) {
  return ( '' + str ).match( /[A-Z]?[a-z]+/g )
    .map( function ( v ) { return v.substr( 0, 1 ).toUpperCase() + v.substr( 1, v.length ); } )
    .join( ' ' );
};

/**
 * Given a camelcased string, return the constant-formatted version of the
 * string, i.e. returnThisString --> RETURN_THIS_STRING
 *
 * @param  {String} str The string to convert
 * @return {String}     Returns the formatted string
 **/
exports.camelCaseToConstant = function ( str ) {
  return ( '' + str ).match( /[A-Z]?[a-z]+/g )
    .map( function ( v ) { return v.toUpperCase(); } )
    .join( '_' );
};
