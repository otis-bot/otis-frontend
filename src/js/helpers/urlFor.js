// Build a URL in the format of:
// http://url.com/:path
const urlFor = (path) => {
  return 'http://otis-api.herokuapp.com' + path;
};

export default urlFor;
