function Button({ children, primary }) {
  return (
    <button className={`btn btn-outline ${primary && 'btn-primary'}`}>{children}</button>
  )
}

export default Button