// Build a URL in the format of:
// http://url.com/:path
const urlFor = (path) => {
  return 'https://otis-api.herokuapp.com' + path;
};

export default urlFor;
