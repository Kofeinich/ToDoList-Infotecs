import React, {useState, useEffect, useRef} from "react";



const Worker = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form className='formik' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit}>
                        Update
                    </button>
                </>
            ) : (
                <>
                    <button className='button' onClick={handleSubmit} >
                        Add task
                    </button>
                    <input
                        placeholder='Task description...'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                    />
                </>
            )}
        </form>
    )
}
export default Worker;