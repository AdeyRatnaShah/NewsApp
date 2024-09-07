business
entertainment
general
health
science
sports
technology

useRef => doesn't re render the component when a var is changed
    const a = useRef(0)
    a.current

    access dom elements
    u can also give elements  a ref 
    btnRef = useRef()
    <button ref={btnRef}>
    btnRef.current.style.color = "red"
    