export function hello(name: string) {
  return `Hello ${name}`
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  // window.Vue.use(Plugin)
}

export default hello
