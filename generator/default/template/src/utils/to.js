export default function(promise) {
  return promise.then((value) => [value, null]).catch((err) => [undefined, err])
}