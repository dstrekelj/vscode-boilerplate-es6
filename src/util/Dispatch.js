export default (component, reducer) => (type, payload) => {
  component.setState(prevState => reducer(prevState, { type, payload }))
}
