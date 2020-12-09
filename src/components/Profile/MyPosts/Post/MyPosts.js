import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostRedux onSubmit={onAddPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});
const maxlength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field component={Textarea}
        name='newPostText' 
        validate={[required, maxlength10]}
        placeholder={'post message'}
        />
      <button>add post</button>
    </form>
  )
};

const AddNewPostRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
export default MyPosts;
