import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript 1', body: 'Description'},
        {id:2, title: 'Javascript 2', body: 'Description'},
        {id:3, title: 'Javascript 3', body: 'Description'},
    ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const addNewPost = (e) => {
        console.log(body)
        e.preventDefault()

        if (!title || !body){
            alert('Title and body cant be empty')
        } else {
            const newPost = {
                id: Date.now(),
                title,
                body,
            }
            setPosts([...posts, newPost])
            setTitle('')
            setBody('')
        }
    }

    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder={'Name of post'}
                />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder={'Description of post'}
                />
                <MyButton onClick={addNewPost}>Create Post</MyButton>
            </form>
            <PostList posts={posts} title={'Posts list JS'}/>
        </div>
    );
}

export default App;
