import {makeAutoObservable} from "mobx";

export default class PostStore {

    constructor() {

        this._posts = [
            /* {id:1, title:"WORKING AT", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img:"https://res.cloudinary.com/practicaldev/image/fetch/s--ZmPcIbAW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dzone.com/storage/temp/12334613-971.jpg"} */
        ]
        
        makeAutoObservable(this)
    }

    setPosts(posts) {
        this._posts = posts
    }

    get posts() {
        return this._posts
    }
}