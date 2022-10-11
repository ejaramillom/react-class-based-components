# react-class-based-components
React udemy maximilian course for class based components

# 167 the component lifecycle in class based components

so, the class based components cannot use hooks, so we use the lifecycle promises

componentDidMount() => it is called once component is mounted (was evaluated and rendered)
- it is equivalent to useEffect(..., []) in functional components with empty dependencies

componentDidUpdate() => it is called once component is updated (was re-evaluated and rendered)
- it is equivalent to useEffect(..., [someValue]) in functional components with some dependencies included

componentWillUnmount() => called right before component is unmounted (removed from DOM)
- it is equivalent a useEffect function with a cleanUp function useEffect(() => return () => {})

