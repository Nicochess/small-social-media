const ReactIf = ({ children, isTrue }) => {
  return isTrue ? children : null;
};

export default ReactIf;
