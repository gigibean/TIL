import React from 'react';
import './App.css';
import api from './api'
import PostView from './Components/PostView'
import Container from '@material-ui/core/Container';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      results: [],
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  async getPosts() {
    const _results = await api.getAllPosts()
    // _results.data 아무것도 없음 비동기 때문 -> 동기화
    this.setState({ results: _results.data })
    console.log(_results);
  }

  handlingChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handlingSubmit = async (event) => { //동기
    event.preventDefault() //event의 기능 -> 막는다
    let result = await api.createPost({ title: this.state.title, content: this.state.content })
    console.log("done!" + result);
    this.setState({ title: '', content: '' }) //submit 후 초기화
    this.getPosts() // submit 후 getPosts
  }

  handlingDelete = async (event) => {
    await api.deletePost(event.target.value)
    this.getPosts()
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <div className="PostingSection">
            <h2>대나무 숲 글 작성하기</h2>
            <form onSubmit={this.handlingSubmit}>
              <input
                name="title"
                value={this.state.title}
                onChange={this.handlingChange}
              />
              <br /><br />
              <textarea
                name="content"
                value={this.state.content}
                onChange={this.handlingChange}
              />
              <br />
              <button type="submit">submit</button>
            </form>
          </div>
          <div className="ViewSection">
            {
              this.state.results.map((post) =>
                <>
                  {/* div 로 대체 가능 */}
                  <PostView id={post.id} title={post.title} content={post.content} key={post.id} />
                  <button value={post.id} onClick={this.handlingDelete}>삭제</button>
                </>
              )
            }
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
