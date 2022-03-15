import react, { useState } from 'react';

const Form = (props) => {
    const [newColor, setNewColor] = useState("");
    const [newSize, setNewSize] = useState("");

    const submitColor = (e) => {
        e.preventDefault();
        props.AddBox({color: newColor, size: newSize});
        //two methods
        setNewColor("")
        setNewSize("")
        // e.target.color.value = "";
    };

    return (
        <fieldset>
            <legend>Color Form</legend>
            <form onSubmit={submitColor}>
                <label htmlFor="color">Color</label>
                <input onChange={(e => setNewColor(e.target.value))}type="text" name="color" id="color" value={newColor} />
                <label htmlFor="size">Size</label>
                <input onChange={(e => setNewSize(e.target.value))}type="text" name="size" id="size" value={newSize} />
                <button type="submit">Submit</button>
            </form>
        </fieldset>
    );
}

export default Form;