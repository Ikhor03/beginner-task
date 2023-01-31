import React from "react";

const StoryBox = (props) => {
    return (
        <form>
            <p>Ya, {props.value}! Bisa kamu ceritakan lebih rinci apa yang terjadi hari ini:</p>
            <textarea rows={10} cols={50}></textarea>
            <br></br>
            <br></br>
            <button type="submit" >Submit</button>
        </form>
    )
}

export default StoryBox;