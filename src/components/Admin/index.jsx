import React, {createRef, useEffect, useState} from 'react';
import {Main} from './Admin.styled'
import axios from "axios";
import {baseApiUrl} from "../../config/api";

const Index = () => {

        const [worksConfig, setConfig] = useState()
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            async function fetchUsers() {
                axios.get(baseApiUrl).then((response) => {
                    console.log(response)
                    setConfig(response.data);
                    setIsLoading(false);
                }).catch(e => {
                    console.error(e)
                    setError(e);
                    setIsLoading(false)
                })
            }

            fetchUsers();
        }, []);

        const [name, setName] = useState('')
        const [preview, setPreview] = useState('')
        const [video, setVideo] = useState('')
        const [tags, setTags] = useState([])
        const [postType, setPostType] = useState('512')
        const [postTitle, setPostTitle] = useState('')
        const handleTags = (tag) => {
            if (tags.includes(tag)) {
                return setTags(tags.filter(item => item !== tag))
            }
            setTags([...tags, tag])
        }
        const wrapper = createRef()

        function add() {
            const currentConfig = worksConfig;
            const workTemplate = {
                title: name,
                types: tags,
                img: preview,
                width: postType,
                video: video
            }
            currentConfig.projects.push(workTemplate);
            console.log(JSON.stringify(currentConfig))
            axios.post(`${baseApiUrl}newPost`, currentConfig)
                .then(response => {
                    setName('');
                    setPreview('');
                    setTags([]);
                    alert('Новый проект добавлен')
                })
                .catch(error => console.log(error))

        }
        function deletePost() {
            axios.post(baseApiUrl + 'deletePost', {postTitle})
                .then(response => {
                    alert('Проект удален.')
                    setPostTitle('')
                })
                .catch((error) => console.error(error))
        }

        const handleAdd = () => {
            const vsego = worksConfig?.projects.length
            if (postType === '1056') {

                const cards = [];
                for (let i = 0; i < vsego; i++) {
                    const element = worksConfig?.projects[i];
                    console.log(element)
                    element.width === '512' ? cards.push(1) : cards.push(2);
                }
                const result = [];
                let tempArr = [];

                for (let i = 0; i < cards.length; i++) {
                    if (cards[i] === 2 && cards[i + 1] === 1 || cards[i] === 1 && cards[i + 1] === 2) {
                        tempArr.push(cards[i], cards[i + 1]);
                        result.push(tempArr);
                        tempArr = [];
                        i++;
                    } else if (cards[i] === 1 && cards[i + 1] === 1 && cards[i + 2] === 1) {
                        tempArr.push(cards[i], cards[i + 1], cards[i + 2]);
                        result.push(tempArr);
                        tempArr = [];
                        i += 2;
                    } else if (cards[i] === 1 && cards[i + 1] === 1) {
                        tempArr.push(cards[i], cards[i + 1]);
                        result.push(tempArr);
                        tempArr = [];
                        i++;
                    } else {
                        tempArr.push(cards[i]);
                    }
                }

                if (tempArr.length > 0) {
                    result.push(tempArr);
                }
                console.log(result)
                if(result.at(-1)[0] === 1 && result.at(-1)[1] === 1 &&  result.at(-1)[2] === 1){
                    result.push([...result, [2]]);
                    return add();
                }
                if(result.at(-1)[0] === 2){
                    if(result.at(-1)[1] && result.at(-1)[1] === 1){
                        result.push([...result, [2]]);
                        return add();
                    }
                    return alert('Невозможно добавить этот тип работы.')
                }else if(result.at(-1)[0] === 1 && result.at(-1)[1] === 1){
                    return alert('Невозможно добавить этот тип работы.')
                }

                return add();

            }
            // для 512
            else {
                add();
            }
        }
        return (
            <Main>
                <div className="global-wrapper" ref={wrapper}>
                    <h2>Добавить проект</h2>
                    <div className="form">
                        <input type="text"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               placeholder='Название проекта'
                        />
                        <div className="bullets">
                            {
                                worksConfig?.workTypes.map((type, key) => (
                                    <span className={tags.includes(type.title) ? 'active' : ''}
                                          onClick={() => handleTags(type.title)} key={key}> {type.title} </span>
                                ))
                            }
                        </div>
                        <div className="size">
                    <span className={postType === '1056' ? 'active' : ''}
                          onClick={() => setPostType('1056')}>Широкий пост</span>
                            <span className={postType === '512' ? 'active' : ''}
                                  onClick={() => setPostType('512')}>Малый пост</span>
                        </div>
                        <input type="text"
                               value={preview}
                               onChange={(e) => setPreview(e.target.value)}
                               placeholder='Ссылка на превью'
                        />
                        <input type="text"
                               value={video}
                               onChange={(e) => setVideo(e.target.value)}
                               placeholder='Ссылка на видео'
                        />
                    </div>
                    <button onClick={handleAdd}>Добавить</button>
                </div>
                <div className="global-wrapper">
                    <h2>Удалить проект</h2>
                    <div className="form">
                        <input type="text"
                               value={postTitle}
                               onChange={(e) => setPostTitle(e.target.value)}
                               placeholder='Название удаляемого проекта'
                        />
                    </div>
                    <button onClick={deletePost}>Добавить</button>
                </div>
            </Main>
        );
    }
;

export default Index;