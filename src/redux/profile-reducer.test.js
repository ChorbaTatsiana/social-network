import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
    posts: [
        { id: "1", message: "Hi", likesCount: 11 },
        { id: "2", message: "are", likesCount: 11 }
    ]
};

it('length new post should be incremented', ()=> {
    let action = addPostActionCreator("it-react");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it(' post should be deleted', ()=> {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});
