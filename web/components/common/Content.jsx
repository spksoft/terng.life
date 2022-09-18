function Content({ children, className }) {  
  return (
    <div className={`max-w-5xl ${className || ''}`} >{children}</div>
  )
}

export default Content